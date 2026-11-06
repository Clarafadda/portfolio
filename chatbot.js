// Widget de chat pour le portfolio — JS pur, sans dépendance.
// Remplace WORKER_URL par l'adresse de ton Worker Cloudflare après déploiement.
(function () {
  const WORKER_URL = "https://portfolio-chatbot.cl-fadda.workers.dev/";
  const GREETING =
    "Bonjour, je réponds aux questions sur le parcours, les projets et les compétences de Clara. Que voulez-vous savoir ?";
  const SUGGESTIONS = [
    "Quels sont ses projets en IA ?",
    "Que cherche-t-elle comme stage ?",
    "Parle-moi de son stage chez Aerow",
  ];

  const history = [];
  let busy = false;

  const root = document.createElement("div");
  root.className = "cb-root";
  root.innerHTML = `
    <button class="cb-toggle" type="button" aria-expanded="false" aria-controls="cb-panel">
      Poser une question
    </button>
    <section class="cb-panel" id="cb-panel" role="dialog" aria-label="Assistant du portfolio" hidden>
      <header class="cb-head">
        <span>Assistant du portfolio</span>
        <button class="cb-close" type="button" aria-label="Fermer">×</button>
      </header>
      <div class="cb-log" aria-live="polite"></div>
      <div class="cb-suggest"></div>
      <form class="cb-form" autocomplete="off">
        <input class="cb-input" type="text" maxlength="500" placeholder="Votre question…" aria-label="Votre question" />
        <button class="cb-send" type="submit">Envoyer</button>
      </form>
    </section>`;
  document.body.appendChild(root);

  const toggle = root.querySelector(".cb-toggle");
  const panel = root.querySelector(".cb-panel");
  const closeBtn = root.querySelector(".cb-close");
  const log = root.querySelector(".cb-log");
  const suggest = root.querySelector(".cb-suggest");
  const form = root.querySelector(".cb-form");
  const input = root.querySelector(".cb-input");

  function addMessage(role, text) {
    const el = document.createElement("div");
    el.className = "cb-msg cb-" + role;
    el.textContent = text; // textContent : pas d'injection HTML possible
    log.appendChild(el);
    log.scrollTop = log.scrollHeight;
    return el;
  }

  function setOpen(open) {
    panel.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    if (open) {
      if (!log.children.length) {
        addMessage("bot", GREETING);
        SUGGESTIONS.forEach((s) => {
          const b = document.createElement("button");
          b.type = "button";
          b.className = "cb-chip";
          b.textContent = s;
          b.addEventListener("click", () => send(s));
          suggest.appendChild(b);
        });
      }
      input.focus();
    } else {
      toggle.focus();
    }
  }

  async function send(text) {
    text = text.trim();
    if (!text || busy) return;
    busy = true;
    suggest.hidden = true;
    addMessage("user", text);
    history.push({ role: "user", content: text });
    input.value = "";
    const pending = addMessage("bot", "…");
    pending.classList.add("cb-pending");

    try {
      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });
      const data = await res.json();
      if (!res.ok || !data.reply) throw new Error(data.error || "Erreur");
      pending.textContent = data.reply;
      history.push({ role: "assistant", content: data.reply });
    } catch (e) {
      pending.textContent =
        "Je n’arrive pas à répondre pour le moment. Vous pouvez écrire directement à Clara : cl.fadda@gmail.com.";
      history.pop(); // on retire la question restée sans réponse
    } finally {
      pending.classList.remove("cb-pending");
      busy = false;
      log.scrollTop = log.scrollHeight;
    }
  }

  toggle.addEventListener("click", () => setOpen(panel.hidden));
  closeBtn.addEventListener("click", () => setOpen(false));
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    send(input.value);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !panel.hidden) setOpen(false);
  });
})();
