// translations.js - À placer dans un fichier séparé ou dans votre HTML

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
        badge: "Étudiante Ingénieure • Promotion 2027",
        name: "Clara Fadda",
        title: "Creative Technologist • Innovation • Produit",
        description: "Ingénieure en Creative Technology, à la croisée entre développement logiciel, produit et innovation. Je mène des projets techniques de bout en bout, de la recherche à l'implémentation logicielle et matérielle.",
        cta1: "Voir mes projets",
        cta2: "Me contacter"
      },
      
      // Parcours Section
      parcours: {
        title: "Parcours",
        items: [
          {
            period: "2024 — 2027",
            title: "Master Creative Technology",
            institution: "ESILV — École d'Ingénieurs",
            description: [
              "Innovation digitale, IA, UX/UI et prototypage technologique.",
              "Recherche au sein de l'IFT (pôle de recherche et d'innovation).",
              "Spécialisation en IA/ML, Computer Graphics et prototypage hardware."
            ]
          },
          {
            period: "2024 — 2027",
            title: "Master Marketing & Management",
            institution: "EMLV — École de Management",
            description: [
              "Formation complémentaire en marketing stratégique, gestion de projet et management pour une vision produit complète."
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
          },
          {
            period: "2022 — 2024",
            title: "Cycle préparatoire ingénieur",
            institution: "ESILV — Pôle Léonard de Vinci",
            description: [
              "Formation scientifique pluridisciplinaire : mathématiques, informatique, physique et sciences de l'ingénieur."
            ]
          }
        ]
      },
      
      // Projets Section
      projets: {
        title: "Projets Réalisés",
        filters: {
          all: "Tous",
          ai: "IA & Creative Tech",
          product: "Product & Hardware",
          data: "Data & Software"
        },
        items: {
          llm: {
            title: "Rédacteur Multi-Agents LLM",
            desc: "Assistant de recherche IA entièrement basé sur navigateur pour la rédaction d'états de l'art.",
            fullDesc: "Développement d'une architecture complexe utilisant plusieurs agents autonomes (LLM) conçu pour l'analyse automatisée de la littérature et des documents. Cette application utilise la génération augmentée par la récupération (RAG) pour fournir des réponses basées exclusivement sur les documents PDF téléchargés."
          },
          classifier: {
            title: "Classification de chiffres — DL",
            desc: "Reconnaissance de chiffres manuscrits en temps réel par deep learning et déploiement avec WebGPU.",
            fullDesc: "Ce projet permet la reconnaissance en temps réel de chiffres manuscrits à l'aide de TinyGrad, un framework de deep learning (DL), et le déploie sous forme d'application web basée sur WebGPU. Tinygrad est entraîné avec un réseau de neurone MLP et CNN sur l'ensemble de données MNIST. Une étude des hyperparamètres a été réalisée pour déterminer les plus performants."
          },
          raymarching: {
            title: "Éditeur de Scènes 3D",
            desc: "Éditeur de scène 3D interactif par ray marching, avec une interface de configuration des objets.",
            fullDesc: "Ce projet est un éditeur de scène 3D interactif basé sur WebGPU, utilisant le ray marching et des fonctions de distance signée (SDF) pour le rendu procédural en temps réel. Il permet la création de scènes à partir de primitives 3D (comme des sphères, des boîtes, etc.) et la modification simultanée du code shader WGSL."
          },
          dreamlogue: {
            title: "DreamLogue",
            desc: "Expérience interactive d'interprétation des rêves via une IA générative.",
            fullDesc: "DreamLogue est une installation interactive permettant de transformer les rêves en un outil de compréhension de soi. À partir d'un récit manuscrit, une IA générative analyse et interprète le rêve pour créer une visualisation unique affichée sur un miroir. Je développe actuellement la reconnaissance de l'écriture manuscrite en temps réel."
          },
          kickstarter: {
            title: "Campagne Kickstarter",
            desc: "Gestion de projet complète pour le lancement d'un produit : un portefeuille origami en cuir français.",
            fullDesc: "Gestion de projet complète pour le lancement d'un produit : de la conception d'un portefeuille minimaliste en cuir plié (origami) à la campagne marketing sur Kickstarter. La campagne sera lancée en Avril 2026 et nous gérerons entièrement la production et la logistique d'expédition aux contributeurs."
          },
          airbnb: {
            title: "Prediction des prix Airbnb",
            desc: "Modèle prédictif entraîné sur une base de données pour l'estimation des prix de location.",
            fullDesc: "Projet complet de Data Science : nettoyage d'un jeu de données brut Airbnb, analyse exploratoire pour identifier les corrélations, traitement des données et entraînement de modèles de Machine Learning (Random Forest, XGBoost) pour prédire le prix optimal d'une nuit selon les caractéristiques du logement."
          },
          transconnect: {
            title: "Logistique TransConnect",
            desc: "Logiciel d'optimisation de logistique de livraison. Utilisation des graphes pour l'optimisation des trajets.",
            fullDesc: "Développement d'une application desktop en C# pour une entreprise de logistique fictive. Le cœur du projet réside dans l'utilisation de la théorie des graphes (Algorithmes de Dijkstra et Floyd-Warshall) pour calculer les itinéraires les plus courts et optimiser la flotte de camions et de chauffeurs. Utilisation de la POO pour répartir les chauffeur et les différents types de camions. Création d'une base de données pour référencer les clients, commandes et livraisons."
          },
          velo: {
            title: "Gestion BDD - Magasin Vélo",
            desc: "Architecture SQL et application C# de gestion commerciale pour un magasin fictif.",
            fullDesc: "Conception du schéma relationnel pour un magasin de sport fictif. Développement d'une interface manager en C# permettant la gestion des stocks en temps réel, le suivi des commandes clients et l'analyse du chiffre d'affaires via des requêtes SQL."
          },
          hardware: {
            title: "Design & Conception",
            desc: "Série de projets hardware : Gameboy, VGAX, Design & Impression 3D.",
            fullDesc: "Dans le cadre du cours 'How to Make Almost Anything', réalisation d'une série de prototypes fonctionnels : assemblage et soudure d'une console Gameboy, conception d'une flûte de pan designée et imprimée en 3D, et modification d'un signal vidéo (VGAX) via électronique."
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
              management: "Management",
              tools: "Outils"
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
        doubleProfile: {
          title: "Double Profil Ingénieur-Manager",
          description: "Expertise technique d'ingénieur en Creative Technology combinée à une vision stratégique et managériale pour piloter des projets innovants de bout en bout."
        }
      },
      
      // Contact Section
      contact: {
        title: "Contact",
        description1: "N'hésitez pas à me contacter si vous avez une demande ou une question,",
        description2: "je me ferais un plaisir de vous répondre rapidement.",
        cta: "M'envoyer un email",
        downloadCV: "Télécharger mon CV"
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
        badge: "Engineering Student • Class of 2027",
        name: "Clara Fadda",
        title: "Creative Technologist • Innovation • Product",
        description: "Engineer in Creative Technology, at the crossroads of software development, product, and innovation. I lead technical projects from start to finish, from research to software and hardware implementation.",
        cta1: "View my projects",
        cta2: "Contact me"
      },
      
      // Parcours Section
      parcours: {
        title: "Journey",
        items: [
          {
            period: "2024 — 2027",
            title: "Master's in Creative Technology",
            institution: "ESILV — Engineering School",
            description: [
              "Digital innovation, AI, UX/UI, and technological prototyping.",
              "Research within IFT (research and innovation center).",
              "Specialization in AI/ML, Computer Graphics, and hardware prototyping."
            ]
          },
          {
            period: "2024 — 2027",
            title: "Master's in Marketing & Management",
            institution: "EMLV — Business School",
            description: [
              "Complementary training in strategic marketing, project management, and leadership for a complete product vision."
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
          },
          {
            period: "2022 — 2024",
            title: "Engineering Preparatory Cycle",
            institution: "ESILV — Pôle Léonard de Vinci",
            description: [
              "Multidisciplinary scientific training: mathematics, computer science, physics, and engineering sciences."
            ]
          }
        ]
      },
      
      // Projets Section
      projets: {
        title: "Completed Projects",
        filters: {
          all: "All",
          ai: "AI & Creative Tech",
          product: "Product & Hardware",
          data: "Data & Software"
        },
        items: {
          llm: {
            title: "Multi-Agent LLM Writer",
            desc: "Browser-based AI research assistant for writing state-of-the-art reviews.",
            fullDesc: "Development of a complex architecture using multiple autonomous agents (LLM) designed for automated literature and document analysis. This application uses Retrieval-Augmented Generation (RAG) to provide responses based exclusively on uploaded PDF documents."
          },
          classifier: {
            title: "Digit Classification — DL",
            desc: "Real-time handwritten digit recognition through deep learning and WebGPU deployment.",
            fullDesc: "This project enables real-time recognition of handwritten digits using TinyGrad, a deep learning (DL) framework, and deploys it as a WebGPU-based web application. Tinygrad is trained with MLP and CNN neural networks on the MNIST dataset. A hyperparameter study was conducted to determine the most performant ones."
          },
          raymarching: {
            title: "3D Scene Editor",
            desc: "Interactive 3D scene editor using ray marching, with object configuration interface.",
            fullDesc: "This project is an interactive 3D scene editor based on WebGPU, using ray marching and signed distance functions (SDF) for real-time procedural rendering. It allows creation of scenes from 3D primitives (like spheres, boxes, etc.) and simultaneous modification of WGSL shader code."
          },
          dreamlogue: {
            title: "DreamLogue",
            desc: "Interactive dream interpretation experience via generative AI.",
            fullDesc: "DreamLogue is an interactive installation that transforms dreams into a self-understanding tool. From a handwritten narrative, a generative AI analyzes and interprets the dream to create a unique visualization displayed on a mirror. I am currently developing real-time handwriting recognition."
          },
          kickstarter: {
            title: "Kickstarter Campaign",
            desc: "Complete project management for product launch: a French leather origami wallet.",
            fullDesc: "Complete project management for product launch: from designing a minimalist folded leather wallet (origami) to the Kickstarter marketing campaign. The campaign will be launched in April 2026 and we will fully manage production and shipping logistics to backers."
          },
          airbnb: {
            title: "Airbnb Price Prediction",
            desc: "Predictive model trained on a database for rental price estimation.",
            fullDesc: "Complete Data Science project: cleaning raw Airbnb dataset, exploratory analysis to identify correlations, data processing, and training Machine Learning models (Random Forest, XGBoost) to predict optimal nightly price based on accommodation features."
          },
          transconnect: {
            title: "TransConnect Logistics",
            desc: "Delivery logistics optimization software. Using graphs for route optimization.",
            fullDesc: "Development of a C# desktop application for a fictional logistics company. The project's core lies in using graph theory (Dijkstra and Floyd-Warshall algorithms) to calculate shortest routes and optimize truck and driver fleet. Using OOP to allocate drivers and different truck types. Creating a database to reference customers, orders, and deliveries."
          },
          velo: {
            title: "Database Management - Bike Shop",
            desc: "SQL architecture and C# business management application for a fictional store.",
            fullDesc: "Designing the relational schema for a fictional sports store. Development of a C# manager interface enabling real-time inventory management, customer order tracking, and revenue analysis via SQL queries."
          },
          hardware: {
            title: "Design & Prototyping",
            desc: "Series of hardware projects: Gameboy, VGAX, Design & 3D Printing.",
            fullDesc: "As part of the 'How to Make Almost Anything' course, creation of a series of functional prototypes: assembly and soldering of a Gameboy console, design of a 3D-designed and printed pan flute, and modification of a video signal (VGAX) via electronics."
          }
        },
        modal: {
          demo: "Demo",
          documentation: "Documentation"
        }
      },

      fr: {
        demo: "Démo",
        documentation: "Documentation"
      },
      en: {
        demo: "Live Demo",
        documentation: "Documentation"
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
              management: "Management",
              tools: "Tools"
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
        downloadCV: "Download my resume"
      },
      
      // Footer
      footer: "© 2026 — Clara Fadda"
    }
  };
  
  // Fonction pour changer la langue
  function setLanguage(lang) {
    const t = translations[lang];
    
    // Navigation (desktop et mobile)
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
    
    const heroSubtitle = document.querySelector('#accueil p.text-xl');
    if (heroSubtitle) heroSubtitle.textContent = t.hero.title;
    
    const heroDesc = document.querySelector('#accueil p.text-gray-700.mb-8');
    if (heroDesc) heroDesc.textContent = t.hero.description;
    
    const heroCtas = document.querySelectorAll('#accueil a.px-6');
    if (heroCtas[0]) heroCtas[0].textContent = t.hero.cta1;
    if (heroCtas[1]) heroCtas[1].textContent = t.hero.cta2;
    
    // Parcours
    const parcoursTitle = document.querySelector('#parcours h2');
    if (parcoursTitle) parcoursTitle.textContent = t.parcours.title;
    
    // Mettre à jour chaque élément du parcours
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
    
    // Projets - Titre et filtres
    const projetsTitle = document.querySelector('#projets h2');
    if (projetsTitle) projetsTitle.textContent = t.projets.title;
    
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (filterBtns[0]) filterBtns[0].textContent = t.projets.filters.all;
    if (filterBtns[1]) filterBtns[1].textContent = t.projets.filters.ai;
    if (filterBtns[2]) filterBtns[2].textContent = t.projets.filters.product;
    if (filterBtns[3]) filterBtns[3].textContent = t.projets.filters.data;
    
    // Projets - Cartes individuelles
    const projectCards = document.querySelectorAll('.project-card');
    const projectKeys = ['llm', 'classifier', 'raymarching', 'dreamlogue', 'kickstarter', 'airbnb', 'transconnect', 'velo', 'hardware'];
    
    projectCards.forEach((card, index) => {
      const key = projectKeys[index];
      if (t.projets.items[key]) {
        const cardTitle = card.querySelector('h3');
        const cardDesc = card.querySelector('p.line-clamp-2');
        
        if (cardTitle) cardTitle.textContent = t.projets.items[key].title;
        if (cardDesc) cardDesc.textContent = t.projets.items[key].desc;
        
        // Mettre à jour les attributs data pour la modale
        card.setAttribute('data-title', t.projets.items[key].title);
        card.setAttribute('data-desc', t.projets.items[key].desc);
        card.setAttribute('data-full-desc', t.projets.items[key].fullDesc);
      }
    });
    
    // Compétences
    const competencesTitle = document.querySelector('#competences h2');
    if (competencesTitle) competencesTitle.textContent = t.competences.title;
    
    // Titres des catégories de compétences
    const skillCategories = document.querySelectorAll('#competences h3');
    if (skillCategories[0]) skillCategories[0].textContent = t.competences.categories.ai.title;
    if (skillCategories[1]) skillCategories[1].textContent = t.competences.categories.design.title;
    if (skillCategories[2]) skillCategories[2].textContent = t.competences.categories.project.title;
    if (skillCategories[3]) skillCategories[3].textContent = t.competences.categories.languages.title;
    
    // Sous-catégories de compétences
    const subcatTitles = document.querySelectorAll('#competences .font-bold.text-marine.mb-2.text-xs');
    if (subcatTitles[0]) subcatTitles[0].textContent = t.competences.categories.ai.subcategories.programming;
    if (subcatTitles[1]) subcatTitles[1].textContent = t.competences.categories.ai.subcategories.ml;
    if (subcatTitles[2]) subcatTitles[2].textContent = t.competences.categories.ai.subcategories.graphics;
    if (subcatTitles[3]) subcatTitles[3].textContent = t.competences.categories.design.subcategories.ux;
    if (subcatTitles[4]) subcatTitles[4].textContent = t.competences.categories.design.subcategories.cad;
    if (subcatTitles[5]) subcatTitles[5].textContent = t.competences.categories.design.subcategories.electronics;
    if (subcatTitles[6]) subcatTitles[6].textContent = t.competences.categories.project.subcategories.management;
    if (subcatTitles[7]) subcatTitles[7].textContent = t.competences.categories.project.subcategories.tools;
    
    // Langues
    const langLabels = document.querySelectorAll('#competences .flex.justify-between span:first-child');
    if (langLabels[0]) langLabels[0].textContent = t.competences.categories.languages.levels.french;
    if (langLabels[1]) langLabels[1].textContent = t.competences.categories.languages.levels.english;
    if (langLabels[2]) langLabels[2].textContent = t.competences.categories.languages.levels.spanish;
    
    const nativeLabel = document.querySelector('#competences .flex.justify-between span.text-xs.font-bold');
    if (nativeLabel && nativeLabel.textContent.includes('Natif')) {
      nativeLabel.textContent = t.competences.categories.languages.native;
    }
    
    // Double profil
    const doubleProfileTitle = document.querySelector('#competences h3:last-of-type');
    if (doubleProfileTitle) doubleProfileTitle.textContent = t.competences.doubleProfile.title;
    
    const doubleProfileDesc = document.querySelector('#competences p.text-sm.text-center');
    if (doubleProfileDesc) doubleProfileDesc.textContent = t.competences.doubleProfile.description;
    
    // Contact
    const contactTitle = document.querySelector('#contact h2');
    if (contactTitle) contactTitle.textContent = t.contact.title;
    
    const contactDescs = document.querySelectorAll('#contact p.text-gray-600');
    if (contactDescs[0]) contactDescs[0].textContent = t.contact.description1;
    if (contactDescs[1]) contactDescs[1].textContent = t.contact.description2;
    
    const emailBtn = document.querySelector('#contact a[href^="mailto"]');
    if (emailBtn) emailBtn.textContent = t.contact.cta;
    
    const cvBtn = document.querySelector('#contact a[download]');
    if (cvBtn) cvBtn.textContent = t.contact.downloadCV;
    
    // Footer
    const footer = document.querySelector('footer');
    if (footer) footer.textContent = t.footer;
    
    // Sauvegarder la préférence
    localStorage.setItem('preferredLanguage', lang);
    
    // Mettre à jour l'attribut lang de la page
    document.documentElement.lang = lang;
  }
  
  // Initialisation au chargement de la page
  document.addEventListener('DOMContentLoaded', () => {
    // Charger la langue sauvegardée ou utiliser le français par défaut
    const savedLang = localStorage.getItem('preferredLanguage') || 'fr';
    setLanguage(savedLang);
    
    // Gérer le clic sur le bouton de langue (desktop et mobile)
    const langBtns = document.querySelectorAll('a[href="english.html"], #lang-toggle');
    
    langBtns.forEach(langBtn => {
      if (langBtn) {
        // Mettre à jour le texte initial du bouton
        const currentLang = savedLang || 'fr';
        langBtn.textContent = currentLang === 'fr' ? 'EN' : 'FR';
        
        langBtn.addEventListener('click', (e) => {
          e.preventDefault();
          const currentLang = document.documentElement.lang || 'fr';
          const newLang = currentLang === 'fr' ? 'en' : 'fr';
          setLanguage(newLang);
          
          // Mettre à jour le texte de tous les boutons de langue
          langBtns.forEach(btn => {
            btn.textContent = newLang === 'fr' ? 'EN' : 'FR';
          });
        });
      }
    });
  });
  
  // Export pour utilisation dans d'autres fichiers
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, setLanguage };
  }