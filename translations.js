const translations = {
  fr: {
    // Header & Navigation
    nav: {
      parcours: "Parcours",
      projets: "Projets",
      competences: "Compétences",
      contact: "Contact"
    },
    
    // Hero Section
    hero: {
      badge: "Étudiante en double diplôme Ingénieure-Manager • Promotion 2027",
      name: "Clara Fadda",
      title: "Creative Technologist • Innovation • Produit",
      description: "Ingénieure en Creative Technology, à la croisée entre développement logiciel, produit et innovation. Je mène des projets techniques de bout en bout, de la recherche à l'implémentation logicielle et matérielle.",
      internship:"Je suis à la recherche d’un stage de 22 à 26 semaines à partir du 1er février 2027, en gestion de projet et développement de produits numériques, à l’interface entre technologie, design et usages.",
      cta1: "Voir mes projets",
      cta2: "Me contacter"
    },
    
    // Parcours Section
    parcours: {
      title: "Parcours",
      items: [
        {
          period: "2022 — 2027",
          title: "Master Creative Technology",
          institution: "ESILV — École d'Ingénieurs",
          description: [
            "Innovation digitale, IA, UX/UI et prototypage technologique.",
            "Recherche au sein de l'IFT (pôle de recherche et d'innovation).",
            "Spécialisation en IA/ML, Computer Graphics et prototypage hardware."
          ]
        },
        {
          period: "2022 — 2027",
          title: "Master Marketing & Management",
          institution: "EMLV — École de Management",
          description: [
            "Formation complémentaire en marketing stratégique, gestion de projet et management pour une vision produit complète."
          ]
        },
        {
          period: "Avr. 2026 - Juil. 2026",
          title: "Stage Recherche et Développement IA",
          institution: "AEROW - Groupe Kimeia",
          description: [
            "Conception et développement d'un pipeline deep learning (CNN, segmentation, Transformer, VLM) pour la détection de falsifications sur documents."
          ]
        },
        {
          period: "Sept. 2024 — Jan. 2025",
          title: "Semestre d'échange international",
          institution: "UVic — Université de Vic, Espagne",
          description: [
            "Cours en anglais d'ingénierie généraliste."
          ]
        },
        {
          period: "Juin — Juillet 2024",
          title: "Stage en entreprise",
          institution: "V.I.I ORIGIN Group",
          description: [
            "Restructuration du projet Bulma, programmation d'assistance vocale, initiation au Machine Learning, recherches en NLP/NER et cartographie d'API."
          ]
        },
        {
          period: "2023 — 2025",
          title: "Trésorière puis Vice-trésorière",
          institution: "Association Slide Session",
          description: [
            "Gestion budgétaire, recherche de sponsors pour les championnats du monde universitaires de ski. Organisation d'un voyage pour 170 étudiants."
          ]
        },
        {
          period: "Nov. 2023 — Janv. 2024",
          title: "Mission sociale et solidaire",
          institution: "Avenir APEI",
          description: [
            "Bénévolat au sein d'un foyer d'hébergement pour personnes atteintes d'handicap mental."
          ]
        }
      ]
    },
    
    // Projets Section
    projets: {
      title: "Projets Réalisés",
      featuredTitle: "Projets majeurs",
      secondaryTitle: "Autres projets",
      filters: {
        all: "Tous",
        ai: "IA & Creative Tech",
        product: "Product & Hardware",
        data: "Data & Software"
      },
      items: {
        LAF: {
          title: "Lutte Anti-fraude",
          desc: "Outil IA de <strong>détection de fraude documentaire</strong>",
          fullDesc: "<strong>Pilotage autonome d'un projet R&D</strong> : cadrage, planification des itérations et suivi des livrables. <strong>Conception et développement</strong> d'un pipeline deep learning (CNN, segmentation, Transformer, VLM) pour la détection de falsifications documentaires. <strong>Déploiement</strong> d'une démonstration web full-stack (FastAPI) en local et export ONNX. <strong>Prise de décision technique argumentée</strong>, appuyée sur des expérimentations comparatives.",
          tags: "CNN,Autoencoder,Transformers,VLM,UI/UX"
        },
        llm: {
          title: "Rédacteur Multi-Agents LLM",
          desc: "Assistant de recherche IA <strong>entièrement basé sur navigateur</strong> pour la rédaction d'états de l'art.",
          fullDesc: "<strong>Conception et développement</strong> d'une architecture multi-agents (LLM) pour automatiser l'analyse de la littérature scientifique et des documents. Mise en œuvre d'un système de <strong>génération augmentée par récupération (RAG)</strong> afin de produire des réponses fondées exclusivement sur les documents PDF fournis. <strong>Conception d'un assistant de recherche</strong> accessible directement depuis le navigateur.",
          tags: "NLP,LLM,WebLLM,Transformers.js,UI/UX"
        },
        classifier: {
          title: "Classification de chiffres — DL",
          desc: "Reconnaissance de chiffres manuscrits <strong>en temps réel</strong> par deep learning et déploiement avec WebGPU.",
          fullDesc: "<strong>Développement d'une application web</strong> de reconnaissance de chiffres manuscrits en temps réel avec TinyGrad et WebGPU. Entraînement et comparaison de réseaux de neurones <strong>MLP et CNN</strong> sur le jeu de données MNIST. Réalisation d'une <strong>étude comparative des hyperparamètres</strong> pour identifier les configurations les plus performantes.",
          tags: "Deep Learning,MLP,CNN,Python,Tinygrad,WebGPU"
        },
        raymarching: {
          title: "Éditeur de Scènes 3D",
          desc: "Éditeur de scène 3D <strong>interactif</strong> par ray marching, avec une interface de configuration des objets.",
          fullDesc: "<strong>Conception d'un éditeur de scènes 3D interactif</strong> basé sur WebGPU. Implémentation du <strong>ray marching</strong> et de fonctions de distance signée (SDF) pour le rendu procédural en temps réel. Développement d'une interface permettant de créer des scènes à partir de primitives 3D et de modifier simultanément le code shader WGSL.",
          tags: "Computer Graphics,WGSL,Shaders,WebGPU,UI/UX"
        },
        kickstarter: {
          title: "ORIKA — Campagne Kickstarter",
          desc: "<strong>Gestion de projet de bout en bout</strong> pour le lancement d'un portefeuille origami en cuir français.",
          fullDesc: "<strong>Pilotage du lancement d'un produit</strong>, de la conception d'un portefeuille minimaliste en cuir plié (origami) à la campagne de financement participatif sur Kickstarter. <strong>Coordination des étapes de conception, de communication et de lancement</strong>. Campagne lancée en avril 2026 : <strong>351 % de l'objectif de financement atteint</strong>. Suivi de la <strong>production et de la logistique d'expédition</strong> aux contributeurs.",
          tags: "Crowdfunding,Design Produit,Marketing,Logistique"
        },
        airbnb: {
          title: "Prediction des prix Airbnb",
          desc: "Modèle prédictif entraîné sur une base de données pour <strong>estimer les prix de location</strong>.",
          fullDesc: "<strong>Conduite d'un projet de Data Science</strong> à partir d'un jeu de données Airbnb : nettoyage, traitement et analyse exploratoire. Identification des corrélations et entraînement de modèles de Machine Learning (<strong>Random Forest et XGBoost</strong>). Exploitation des résultats pour <strong>estimer le prix optimal d'une nuit</strong> selon les caractéristiques du logement.",
          tags: "Data,Python,Pandas,Seaborn,Matplotlib,Scikit-Learn"
        },
        transconnect: {
          title: "Logistique TransConnect",
          desc: "Logiciel d'<strong>optimisation logistique</strong> des trajets de livraison grâce à la théorie des graphes.",
          fullDesc: "<strong>Conception et développement d'une application desktop</strong> en C# pour une entreprise de logistique fictive. Modélisation des itinéraires avec la théorie des graphes et les algorithmes de <strong>Dijkstra et Floyd-Warshall</strong> afin d'optimiser les trajets et l'affectation des ressources. Création d'une <strong>base de données SQL</strong> pour centraliser les clients, commandes et livraisons.",
          tags: "C#,SQL,POO,Algorithmes,Graphes"
        },
        velo: {
          title: "Gestion BDD - Magasin Vélo",
          desc: "Architecture SQL et application C# pour la <strong>gestion commerciale</strong> d'un magasin fictif.",
          fullDesc: "<strong>Conception du schéma relationnel</strong> d'une base de données pour un magasin de sport. Développement d'une interface manager en C# pour la <strong>gestion des stocks</strong>, le <strong>suivi des commandes clients</strong> et l'analyse du chiffre d'affaires à l'aide de requêtes SQL.",
          tags: "SQL,C#,Base de données"
        },
        hardware: {
          title: "Design & Conception",
          desc: "Série de projets de <strong>conception et prototypage hardware</strong> : Gameboy, VGAX et impression 3D.",
          fullDesc: "Réalisation d'une série de <strong>prototypes fonctionnels</strong> dans le cadre du cours « How to Make Almost Anything » : conception d'une montre connectée pour coureurs, assemblage et soudure d'une console Gameboy, conception et impression 3D d'une flûte de pan, et modification électronique d'un signal vidéo (VGAX).",
          tags: "Design,Électronique,Hardware,Arduino,3D"
        }
      },
      modal: {
        demo: "Démo",
        documentation: "Documentation"
      }
    },
    
    // Compétences Section
    competences: {
      title: "Compétences & Outils",
      categories: {
        ai: {
          title: "IA & Développement",
          subcategories: {
            programming: "Langages & Programmation",
            ml: "Data/IA & Machine Learning",
            graphics: "Computer Graphics"
          }
        },
        design: {
          title: "Design & Hardware",
          subcategories: {
            ux: "Design & UX/UI",
            cad: "CAO & Modélisation",
            electronics: "Électronique"
          }
        },
        project: {
          title: "Gestion de Projet",
          subcategories: {
            management: "Pilotage de projet & produit",
            organization: "Management & organisation",
            tools: "Outils collaboratifs & techniques"
          }
        },
        languages: {
          title: "Langues",
          native: "Natif",
          levels: {
            french: "Français",
            english: "Anglais",
            spanish: "Espagnol"
          }
        }
      },
      skills: {
        // Langages
        "Python": "Python",
        "C#": "C#",
        "SQL": "SQL",
        "JavaScript": "JavaScript",
        "Tailwind": "Tailwind",
        "HTML": "HTML",
        // ML/AI
        "LLM Multi-agents": "LLM Multi-agents",
        "NLP": "NLP",
        "CNN": "CNN",
        "MLP": "MLP",
        "Tinygrad": "Tinygrad",
        "Scikit-learn": "Scikit-learn",
        "NumPy": "NumPy",
        "Pandas": "Pandas",
        "Matplotlib": "Matplotlib",
        "Seaborn": "Seaborn",
        // Graphics
        "WebGPU": "WebGPU",
        "WGSL": "WGSL",
        "Ray Marching": "Ray Marching",
        // Design
        "Figma": "Figma",
        "Design Thinking": "Design Thinking",
        "Prototypage": "Prototypage",
        "Responsive design": "Responsive design",
        // CAD
        "SolidWorks": "SolidWorks",
        "Fusion 360": "Fusion 360",
        "Impression 3D": "Impression 3D",
        // Electronics
        "KiCad": "KiCad",
        "Arduino": "Arduino",
        "Soudure": "Soudure",
        // Management
        "Budget & Trésorerie": "Budget & Trésorerie",
        "Gestion d'équipe.": "Gestion d'équipe.",
        "Gestion d'évènements": "Gestion d'évènements",
        "Sponsoring": "Sponsoring",
        "Cadrage de projet": "Cadrage de projet",
        "Planification & suivi": "Planification & suivi",
        "Coordination": "Coordination",
        "Analyse des besoins": "Analyse des besoins",
        "Prototypage & itération": "Prototypage & itération",
        "Suivi des livrables": "Suivi des livrables",
        // Tools
        "Git / GitHub / GitHub pages": "Git / GitHub / GitHub pages",
        "VS Code": "VS Code",
        "Pycharm": "Pycharm",
        "Office 365": "Office 365"
      },
      doubleProfile: {
        title: "Double Profil Ingénieur-Manager",
        description: "Expertise technique d'ingénieur en Creative Technology combinée à une vision stratégique et managériale pour piloter des projets innovants de bout en bout."
      }
    },
    
    // Contact Section
    contact: {
      title: "Contact",
      description1: "N'hésitez pas à me contacter si vous avez une demande ou une question,",
      description2: "je me ferai un plaisir de vous répondre rapidement.",
      cta: "M'envoyer un email",
      downloadCV: "Télécharger mon CV",
      cvLink: "assets/CV Clara FADDA.pdf"
    },
    
    // Footer
    footer: "© 2026 — Clara Fadda"
  },
  
  en: {
    // Header & Navigation
    nav: {
      parcours: "Journey",
      projets: "Projects",
      competences: "Skills",
      contact: "Contact"
    },
    
    // Hero Section
    hero: {
      badge: "Engineering–Management Dual Degree Student • Class of 2027",
      name: "Clara Fadda",
      title: "Creative Technologist • Innovation • Product",
      description: "Engineer in Creative Technology, at the crossroads of software development, product, and innovation. I lead technical projects from start to finish, from research to software and hardware implementation.",
      internship:"I'm seeking a 22 to 26 weeks internship starting February 1st, focused on project management and digital product development, at the intersection of technology, design, and user needs.",
      cta1: "View my projects",
      cta2: "Contact me"
    },
    
    // Parcours Section
    parcours: {
      title: "Journey",
      items: [
        {
          period: "2022 — 2027",
          title: "Master's in Creative Technology",
          institution: "ESILV — Engineering School",
          description: [
            "Digital innovation, AI, UX/UI, and technological prototyping.",
            "Research within IFT (research and innovation center).",
            "Specialization in AI/ML, Computer Graphics, and hardware prototyping."
          ]
        },
        {
          period: "2022 — 2027",
          title: "Master's in Marketing & Management",
          institution: "EMLV — Business School",
          description: [
            "Complementary training in strategic marketing, project management, and leadership for a complete product vision."
          ]
        },
        {
          period: "Apr. 2026 - Jul. 2026",
          title: "AI Research and Development Internship",
          institution: "AEROW - Kimeia Group",
          description: [
            "Design and development of a deep learning pipeline (CNN, segmentation, Transformer, VLM) for document forgery detection."
          ]
        },
        {
          period: "Sept. 2024 — Jan. 2025",
          title: "International Exchange Semester",
          institution: "UVic — University of Vic, Spain",
          description: [
            "General engineering courses in English."
          ]
        },
        {
          period: "June — July 2024",
          title: "Corporate Internship",
          institution: "V.I.I ORIGIN Group",
          description: [
            "Restructuring of the Bulma project, voice assistance programming, Machine Learning initiation, NLP/NER research, and API mapping."
          ]
        },
        {
          period: "2023 — 2025",
          title: "Treasurer then Vice-Treasurer",
          institution: "Slide Session Association",
          description: [
            "Budget management, sponsor search for university ski world championships. Organization of a trip for 170 students."
          ]
        },
        {
          period: "Nov. 2023 — Jan. 2024",
          title: "Social and Solidarity Mission",
          institution: "Avenir APEI",
          description: [
            "Volunteering in a residential facility for people with mental disabilities."
          ]
        }
      ]
    },
    
    // Projets Section
    projets: {
      title: "Completed Projects",
      featuredTitle: "Featured Projects",
      secondaryTitle: "Other Projects",
      filters: {
        all: "All",
        ai: "AI & Creative Tech",
        product: "Product & Hardware",
        data: "Data & Software"
      },
      items: {
        LAF: {
          title: "Anti-fraud Project",
          desc: "AI tool for <strong>document fraud detection</strong>",
          fullDesc: "<strong>Autonomous leadership of an R&D project</strong>: scoping, iteration planning and deliverable tracking. <strong>Design and development</strong> of a deep learning pipeline (CNN, segmentation, Transformer, VLM) for document forgery detection. <strong>Deployment</strong> of a full-stack web demo (FastAPI) locally, with ONNX export. <strong>Evidence-based technical decisions</strong> supported by comparative experiments.",
          tags: "CNN,Autoencoder,Transformers,VLM,UI/UX"
        },
        llm: {
          title: "Multi-Agent LLM Writer",
          desc: "Browser-based AI research assistant for writing state-of-the-art reviews.",
          fullDesc: "<strong>Design and development</strong> of a multi-agent LLM architecture to automate scientific literature and document analysis. Implementation of <strong>Retrieval-Augmented Generation (RAG)</strong> to generate answers grounded exclusively in the supplied PDF documents. <strong>Design of a browser-based research assistant</strong>.",
          tags: "NLP,LLM,WebLLM,Transformers.js,UI/UX"
        },
        classifier: {
          title: "Digit Classification — DL",
          desc: "Real-time handwritten digit recognition through deep learning and WebGPU deployment.",
          fullDesc: "<strong>Development of a web application</strong> for real-time handwritten digit recognition using TinyGrad and WebGPU. Training and comparison of <strong>MLP and CNN neural networks</strong> on the MNIST dataset. A <strong>comparative hyperparameter study</strong> identified the best-performing configurations.",
          tags: "Deep Learning,MLP,CNN,Python,Tinygrad,WebGPU"
        },
        raymarching: {
          title: "3D Scene Editor",
          desc: "Interactive 3D scene editor using ray marching, with object configuration interface.",
          fullDesc: "<strong>Design of an interactive 3D scene editor</strong> based on WebGPU. Implementation of <strong>ray marching</strong> and signed distance functions (SDF) for real-time procedural rendering. Development of an interface to create scenes from 3D primitives while editing WGSL shader code.",
          tags: "Computer Graphics,WGSL,Shaders,WebGPU,UI/UX"
        },
        kickstarter: {
          title: "ORIKA — Kickstarter Campaign",
          desc: "<strong>End-to-end project management</strong> for the launch of a French leather origami wallet.",
          fullDesc: "<strong>Product launch coordination</strong>, from designing a minimalist folded leather wallet (origami) to the Kickstarter crowdfunding campaign. <strong>Coordination of design, communication and launch activities</strong>. Campaign launched in April 2026: <strong>351% of the funding goal reached</strong>. Follow-up of <strong>production and shipping logistics</strong> to backers.",
          tags: "Crowdfunding,Product Design,Marketing,Logistics"
        },
        airbnb: {
          title: "Airbnb Price Prediction",
          desc: "Predictive model trained on a database for rental price estimation.",
          fullDesc: "<strong>Delivery of a Data Science project</strong> using an Airbnb dataset: data cleaning, processing and exploratory analysis. Identification of correlations and training of Machine Learning models (<strong>Random Forest and XGBoost</strong>). Use of the results to <strong>estimate the optimal nightly price</strong> based on property features.",
          tags: "Data,Python,Pandas,Seaborn,Matplotlib,Scikit-Learn"
        },
        transconnect: {
          title: "TransConnect Logistics",
          desc: "Delivery logistics optimization software. Using graphs for route optimization.",
          fullDesc: "<strong>Design and development of a C# desktop application</strong> for a fictional logistics company. Route modelling using graph theory and <strong>Dijkstra and Floyd-Warshall algorithms</strong> to optimize routes and resource allocation. Creation of an <strong>SQL database</strong> to centralize customers, orders and deliveries.",
          tags: "C#,SQL,OOP,Algorithms,Graphs"
        },
        velo: {
          title: "Database Management - Bike Shop",
          desc: "SQL architecture and C# business management application for a fictional store.",
          fullDesc: "<strong>Design of a relational database schema</strong> for a sports store. Development of a C# manager interface for <strong>real-time inventory management</strong>, <strong>customer order tracking</strong> and revenue analysis using SQL queries.",
          tags: "SQL,C#,Database"
        },
        hardware: {
          title: "Design & Prototyping",
          desc: "Series of hardware projects: Gameboy, VGAX, Design & 3D Printing.",
          fullDesc: "Creation of a series of <strong>functional prototypes</strong> as part of the 'How to Make Almost Anything' course: a smartwatch for runners, assembly and soldering of a Gameboy console, design and 3D printing of a pan flute, and electronic modification of a video signal (VGAX).",
          tags: "Design,Electronics,Hardware,Arduino,3D"
        }
      },
      modal: {
        demo: "Live Demo",
        documentation: "Documentation"
      }
    },
    
    // Compétences Section
    competences: {
      title: "Skills & Tools",
      categories: {
        ai: {
          title: "AI & Development",
          subcategories: {
            programming: "Languages & Programming",
            ml: "Data/AI & Machine Learning",
            graphics: "Computer Graphics"
          }
        },
        design: {
          title: "Design & Hardware",
          subcategories: {
            ux: "Design & UX/UI",
            cad: "CAD & Modeling",
            electronics: "Electronics"
          }
        },
        project: {
          title: "Project Management",
          subcategories: {
            management: "Project & Product Delivery",
            organization: "Management & Organization",
            tools: "Collaborative & Technical Tools"
          }
        },
        languages: {
          title: "Languages",
          native: "Native",
          levels: {
            french: "French",
            english: "English",
            spanish: "Spanish"
          }
        }
      },
      skills: {
        // Langages
        "Python": "Python",
        "C#": "C#",
        "SQL": "SQL",
        "JavaScript": "JavaScript",
        "Tailwind": "Tailwind",
        "HTML": "HTML",
        // ML/AI
        "LLM Multi-agents": "Multi-agent LLM",
        "NLP": "NLP",
        "CNN": "CNN",
        "MLP": "MLP",
        "Tinygrad": "Tinygrad",
        "Scikit-learn": "Scikit-learn",
        "NumPy": "NumPy",
        "Pandas": "Pandas",
        "Matplotlib": "Matplotlib",
        "Seaborn": "Seaborn",
        // Graphics
        "WebGPU": "WebGPU",
        "WGSL": "WGSL",
        "Ray Marching": "Ray Marching",
        // Design
        "Figma": "Figma",
        "Design Thinking": "Design Thinking",
        "Prototypage": "Prototyping",
        "Responsive design": "Responsive design",
        // CAD
        "SolidWorks": "SolidWorks",
        "Fusion 360": "Fusion 360",
        "Impression 3D": "3D Printing",
        // Electronics
        "KiCad": "KiCad",
        "Arduino": "Arduino",
        "Soudure": "Soldering",
        // Management
        "Budget & Trésorerie": "Budget & Treasury",
        "Gestion d'équipe.": "Team Management",
        "Gestion d'évènements": "Event Management",
        "Sponsoring": "Sponsoring",
        "Cadrage de projet": "Project scoping",
        "Planification & suivi": "Planning & monitoring",
        "Coordination": "Coordination",
        "Analyse des besoins": "Needs analysis",
        "Prototypage & itération": "Prototyping & iteration",
        "Suivi des livrables": "Deliverable tracking",
        // Tools
        "Git / GitHub / GitHub pages": "Git / GitHub / GitHub pages",
        "VS Code": "VS Code",
        "Pycharm": "Pycharm",
        "Office 365": "Office 365"
      },
      doubleProfile: {
        title: "Dual Engineer-Manager Profile",
        description: "Technical expertise as a Creative Technology engineer combined with strategic and managerial vision to lead innovative projects from start to finish."
      }
    },
    
    // Contact Section
    contact: {
      title: "Contact",
      description1: "Feel free to contact me if you have any request or question,",
      description2: "I'll be happy to respond quickly.",
      cta: "Send me an email",
      downloadCV: "Download my resume",
      cvLink: "assets/Resume Clara FADDA.pdf"
    },
    
    // Footer
    footer: "© 2026 — Clara Fadda"
  }
};

// Fonction pour changer la langue
function setLanguage(lang) {
  const t = translations[lang];
  
  // Navigation
  const navLinks = {
    parcours: document.querySelectorAll('a[href="#parcours"]'),
    projets: document.querySelectorAll('a[href="#projets"]'),
    competences: document.querySelectorAll('a[href="#competences"]'),
    contact: document.querySelectorAll('a[href="#contact"]')
  };
  
  navLinks.parcours.forEach(el => el.textContent = t.nav.parcours);
  navLinks.projets.forEach(el => el.textContent = t.nav.projets);
  navLinks.competences.forEach(el => el.textContent = t.nav.competences);
  navLinks.contact.forEach(el => el.textContent = t.nav.contact);
  
  // Hero
  const heroBadge = document.querySelector('#accueil .inline-block');
  if (heroBadge) heroBadge.textContent = t.hero.badge;
  
  const heroTitle = document.querySelector('#accueil h1');
  if (heroTitle) heroTitle.textContent = t.hero.name;
  
  const heroSubtitle = document.querySelector('#accueil h1 + p');
  if (heroSubtitle) heroSubtitle.textContent = t.hero.title;
  
  const heroDesc = document.querySelector('#accueil p.text-gray-700.mb-8');
  if (heroDesc) heroDesc.textContent = t.hero.description;

  const heroIntern = document.querySelector('#accueil p.text-gray-700.mb-10');
  if (heroIntern) heroIntern.textContent = t.hero.internship;
  
  const heroCtas = document.querySelectorAll('#accueil a.px-6');
  if (heroCtas[0]) heroCtas[0].textContent = t.hero.cta1;
  if (heroCtas[1]) heroCtas[1].textContent = t.hero.cta2;
  
  // Parcours
  const parcoursTitle = document.querySelector('#parcours h2');
  if (parcoursTitle) parcoursTitle.textContent = t.parcours.title;
  
  const parcoursItems = document.querySelectorAll('#parcours .space-y-16 > div');
  parcoursItems.forEach((item, index) => {
    if (t.parcours.items[index]) {
      const period = item.querySelector('.text-xs.font-semibold');
      const title = item.querySelector('.text-xl.font-bold');
      const institution = item.querySelector('.text-sm.text-marine.font-medium');
      const descriptions = item.querySelectorAll('p.text-gray-600');
      
      if (period) period.textContent = t.parcours.items[index].period;
      if (title) title.textContent = t.parcours.items[index].title;
      if (institution) institution.textContent = t.parcours.items[index].institution;
      
      descriptions.forEach((desc, descIndex) => {
        if (t.parcours.items[index].description[descIndex]) {
          desc.textContent = t.parcours.items[index].description[descIndex];
        }
      });
    }
  });
  
  // Projets
  const projetsTitle = document.querySelector('#projets h2');
  if (projetsTitle) projetsTitle.textContent = t.projets.title;
    const featuredTitle = document.querySelector('[data-project-section-title="featured"]');
  const secondaryTitle = document.querySelector('[data-project-section-title="secondary"]');
  if (featuredTitle) featuredTitle.textContent = t.projets.featuredTitle;
  if (secondaryTitle) secondaryTitle.textContent = t.projets.secondaryTitle;
  
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (filterBtns[0]) filterBtns[0].textContent = t.projets.filters.all;
  if (filterBtns[1]) filterBtns[1].textContent = t.projets.filters.ai;
  if (filterBtns[2]) filterBtns[2].textContent = t.projets.filters.product;
  if (filterBtns[3]) filterBtns[3].textContent = t.projets.filters.data;
  
  const projectCards = document.querySelectorAll('.project-card');
  const projectKeys = ['LAF', 'llm', 'raymarching', 'kickstarter', 'classifier', 'airbnb', 'transconnect', 'velo', 'hardware'];
  
  projectCards.forEach((card, index) => {
    const key = projectKeys[index];
    if (t.projets.items[key]) {
      const cardTitle = card.querySelector('h3');
      const cardDesc = card.querySelector('p.line-clamp-2');
      
      if (cardTitle) cardTitle.textContent = t.projets.items[key].title;
      if (cardDesc) cardDesc.innerHTML = t.projets.items[key].desc;
      
      // Update attributes for modal
      card.setAttribute('data-title', t.projets.items[key].title);
      card.setAttribute('data-desc', t.projets.items[key].desc);
      card.setAttribute('data-full-desc', t.projets.items[key].fullDesc);
      card.setAttribute('data-tags', t.projets.items[key].tags);
      
      // Translate visible tags
      const tagContainer = card.querySelector('.flex.flex-wrap.gap-2');
      if (tagContainer && t.projets.items[key].tags) {
        const tags = t.projets.items[key].tags.split(',');
        const tagElements = tagContainer.querySelectorAll('span');
        tagElements.forEach((tagEl, tagIndex) => {
          if (tags[tagIndex]) {
            tagEl.textContent = tags[tagIndex].trim();
          }
        });
      }
    }
  });
  
  // Compétences - Titres
  const competencesTitle = document.querySelector('#competences h2');
  if (competencesTitle) competencesTitle.textContent = t.competences.title;
  
  const skillCategories = document.querySelectorAll('#competences h3');
  if (skillCategories[0]) skillCategories[0].textContent = t.competences.categories.ai.title;
  if (skillCategories[1]) skillCategories[1].textContent = t.competences.categories.design.title;
  if (skillCategories[2]) skillCategories[2].textContent = t.competences.categories.project.title;
  if (skillCategories[3]) skillCategories[3].textContent = t.competences.categories.languages.title;
  
  const subcatTitles = document.querySelectorAll('#competences .font-bold.text-marine.mb-2.text-xs');
  if (subcatTitles[0]) subcatTitles[0].textContent = t.competences.categories.ai.subcategories.programming;
  if (subcatTitles[1]) subcatTitles[1].textContent = t.competences.categories.ai.subcategories.ml;
  if (subcatTitles[2]) subcatTitles[2].textContent = t.competences.categories.ai.subcategories.graphics;
  if (subcatTitles[3]) subcatTitles[3].textContent = t.competences.categories.design.subcategories.ux;
  if (subcatTitles[4]) subcatTitles[4].textContent = t.competences.categories.design.subcategories.cad;
  if (subcatTitles[5]) subcatTitles[5].textContent = t.competences.categories.design.subcategories.electronics;
  if (subcatTitles[6]) subcatTitles[6].textContent = t.competences.categories.project.subcategories.management;
  if (subcatTitles[7]) subcatTitles[7].textContent = t.competences.categories.project.subcategories.organization;
  if (subcatTitles[8]) subcatTitles[8].textContent = t.competences.categories.project.subcategories.tools;
  
  // --- NOUVELLE LOGIQUE POUR LES VIGNETTES COMPÉTENCES ---
  document.querySelectorAll('#competences span.px-3.py-1').forEach(skillEl => {
    // 1. Sauvegarde du texte original (Français) lors du premier passage
    if (!skillEl.hasAttribute('data-original-text')) {
      skillEl.setAttribute('data-original-text', skillEl.textContent.trim());
    }
    
    // 2. On récupère la clé (le texte original en français)
    const originalText = skillEl.getAttribute('data-original-text');
    
    // 3. On cherche la traduction en utilisant cette clé stable
    if (t.competences.skills[originalText]) {
      skillEl.textContent = t.competences.skills[originalText];
    }
  });
  
  // Langues
  const langLabels = document.querySelectorAll('#competences .flex.justify-between span:first-child');
  if (langLabels[0]) langLabels[0].textContent = t.competences.categories.languages.levels.french;
  if (langLabels[1]) langLabels[1].textContent = t.competences.categories.languages.levels.english;
  if (langLabels[2]) langLabels[2].textContent = t.competences.categories.languages.levels.spanish;
  
  const nativeLabel = document.querySelector('#competences .flex.justify-between span.text-xs.font-bold');
  if (nativeLabel) {
    nativeLabel.textContent = t.competences.categories.languages.native;
  }
  
  // Double profil
  const doubleProfileSection = document.querySelector('#competences .bg-gradient-to-r');
  if (doubleProfileSection) {
    const doubleProfileTitle = doubleProfileSection.querySelector('h3');
    if (doubleProfileTitle) doubleProfileTitle.textContent = t.competences.doubleProfile.title;
    
    const doubleProfileDesc = doubleProfileSection.querySelector('p.text-sm');
    if (doubleProfileDesc) doubleProfileDesc.textContent = t.competences.doubleProfile.description;
  }
  
  // Contact
  const contactTitle = document.querySelector('#contact h2');
  if (contactTitle) contactTitle.textContent = t.contact.title;
  
  const contactDescs = document.querySelectorAll('#contact p.text-gray-600');
  if (contactDescs[0]) contactDescs[0].textContent = t.contact.description1;
  if (contactDescs[1]) contactDescs[1].textContent = t.contact.description2;
  
  const emailBtn = document.querySelector('#contact a[href^="mailto"]');
  if (emailBtn) emailBtn.textContent = t.contact.cta;
  
  // Bouton CV (Intègre votre correctif précédent)
  const cvBtn = document.getElementById('cv-download-btn');
  if (cvBtn) {
    cvBtn.textContent = t.contact.downloadCV;
    cvBtn.href = t.contact.cvLink;
  }
  
  // Footer
  const footer = document.querySelector('footer');
  if (footer) footer.textContent = t.footer;
  
  // Sauvegarder la préférence
  localStorage.setItem('preferredLanguage', lang);
  document.documentElement.lang = lang;
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLanguage') || 'fr';
  setLanguage(savedLang);
  
  const langBtns = document.querySelectorAll('a[href="english.html"], #lang-toggle');
  
  langBtns.forEach(langBtn => {
    if (langBtn) {
      const currentLang = savedLang || 'fr';
      langBtn.textContent = currentLang === 'fr' ? 'EN' : 'FR';
      
      langBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const currentLang = document.documentElement.lang || 'fr';
        const newLang = currentLang === 'fr' ? 'en' : 'fr';
        setLanguage(newLang);
        
        langBtns.forEach(btn => {
          btn.textContent = newLang === 'fr' ? 'EN' : 'FR';
        });
      });
    }
  });
});