export interface Question {
  id: number;
  question: string;
  options: string[]; // Liste de 4 chaînes de caractères
  correctAnswerIndex: number; // L'index de la bonne réponse dans le tableau options (0, 1, 2 ou 3)
  explanation: string; // Le texte "Le Saviez-vous ?"
  concept: string; // La catégorie du savoir
};

export const questions: Question[] = [
  {
    "id": 1,
    "question": "Que signifie NIRD ?",
    "options": [
      "Numérique Rapide",
      "Inclusif, Responsable, Durable",
      "Nettoyage Informatique",
      "Rien du tout"
    ],
    "correctAnswerIndex": 1,
    "explanation": "NIRD signifie Numérique Inclusif (pour tous), Responsable (éthique) et Durable (écologique).",
    "concept": "Définition"
  },
  {
    "id": 2,
    "question": "Quel événement menace les PC des écoles en 2025 ?",
    "options": [
      "Le bug de l'an 2038",
      "Fin support Windows 10",
      "Une pénurie de claviers",
      "La fin d'Internet"
    ],
    "correctAnswerIndex": 1,
    "explanation": "La fin du support de Windows 10 rend obsolète des milliers d'ordinateurs parfaitement fonctionnels.",
    "concept": "Obsolescence"
  },
  {
    "id": 3,
    "question": "Quel village inspire la résistance numérique ?",
    "options": [
      "Le village d'Astérix",
      "Konoha",
      "Schtroumpfland",
      "Kakariko"
    ],
    "correctAnswerIndex": 0,
    "explanation": "L'école peut devenir un village résistant face à l'Empire numérique (Goliath), comme Astérix face aux Romains.",
    "concept": "Culture"
  },
  {
    "id": 4,
    "question": "Si c'est gratuit...",
    "options": [
      "C'est super",
      "C'est toi le produit",
      "C'est louche",
      "C'est de qualité"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Dans le modèle gratuit propriétaire, vos données personnelles sont collectées et vendues pour la publicité.",
    "concept": "Données"
  },
  {
    "id": 5,
    "question": "Loi US donnant accès à vos données ?",
    "options": [
      "RGPD",
      "CLOUD Act",
      "Loi 1901",
      "Patriot Act"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Le CLOUD Act permet aux USA de saisir des données hébergées par des entreprises américaines, même en Europe.",
    "concept": "Loi"
  },
  {
    "id": 6,
    "question": "L'alternative NIRD à Windows ?",
    "options": [
      "macOS",
      "Linux",
      "Android",
      "DOS"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Linux est libre, gratuit et prolonge la vie des vieux ordinateurs.",
    "concept": "OS Libre"
  },
  {
    "id": 7,
    "question": "Où trouver des ressources éducatives libres ?",
    "options": [
      "Sur le Dark Web",
      "La Forge des Communs",
      "Amazon",
      "App Store"
    ],
    "correctAnswerIndex": 1,
    "explanation": "La Forge des communs numériques éducatifs mutualise les outils libres pour les enseignants.",
    "concept": "Ressources"
  },
  {
    "id": 8,
    "question": "L'étape la plus polluante d'un PC ?",
    "options": [
      "Sa fabrication",
      "Son transport",
      "Son utilisation",
      "Son recyclage"
    ],
    "correctAnswerIndex": 0,
    "explanation": "La fabrication représente 70 à 90% de l'impact carbone total d'un ordinateur.",
    "concept": "Écologie"
  },
  {
    "id": 9,
    "question": "Que risque l'école avec les GAFAM ?",
    "options": [
      "Rien",
      "Enfermement propriétaire",
      "Trop de vitesse",
      "Une amende"
    ],
    "correctAnswerIndex": 1,
    "explanation": "L'enfermement (Vendor Lock-in) rend très coûteux et difficile de changer de fournisseur.",
    "concept": "Dépendance"
  },
  {
    "id": 10,
    "question": "Où est né le projet NIRD ?",
    "options": [
      "Paris",
      "Lycée Carnot (Bruay)",
      "Silicon Valley",
      "Marseille"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Le projet est né au lycée Carnot de Bruay-la-Buissière (Hauts-de-France).",
    "concept": "Origine"
  },
  {
    "id": 11,
    "question": "Un logiciel 'propriétaire' c'est...",
    "options": [
      "Open Source",
      "Code fermé",
      "Un logiciel immo",
      "Un virus"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Le code source est secret et appartient à l'entreprise. Interdit de le modifier.",
    "concept": "Définition"
  },
  {
    "id": 12,
    "question": "Avantage économique de Linux ?",
    "options": [
      "Aucun",
      "0€ de licence",
      "Coûte cher",
      "Rapporte de l'argent"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Linux est gratuit et évite l'achat de nouvelles machines coûteuses.",
    "concept": "Économie"
  },
  {
    "id": 13,
    "question": "Le RGPD protège...",
    "options": [
      "Les entreprises",
      "Vos données personnelles",
      "Les ordinateurs",
      "Les USA"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Règlement Général sur la Protection des Données : la loi européenne pour votre vie privée.",
    "concept": "Loi"
  },
  {
    "id": 14,
    "question": "Mascotte de Linux ?",
    "options": [
      "Un renard",
      "Un manchot (Tux)",
      "Une pomme",
      "Un robot"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Tux le manchot est le symbole universel du noyau Linux.",
    "concept": "Culture"
  },
  {
    "id": 15,
    "question": "Obsolescence programmée signifie...",
    "options": [
      "Mise à jour utile",
      "Mort prématurée",
      "Réparation facile",
      "Recyclage"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Concevoir un produit pour qu'il ne dure pas ou devienne inutilisable rapidement.",
    "concept": "Obsolescence"
  },
  {
    "id": 16,
    "question": "Navigateur Web Libre ?",
    "options": [
      "Chrome",
      "Firefox",
      "Edge",
      "Safari"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Firefox est développé par une fondation à but non lucratif et respecte vos données.",
    "concept": "Outil"
  },
  {
    "id": 17,
    "question": "Licence de partage créatif ?",
    "options": [
      "Copyright",
      "Creative Commons",
      "Brevet",
      "Marque déposée"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Les licences CC permettent de partager des œuvres légalement et simplement.",
    "concept": "Droit"
  },
  {
    "id": 18,
    "question": "Streaming 4K ?",
    "options": [
      "Écolo",
      "Très polluant",
      "Neutre",
      "Indispensable"
    ],
    "correctAnswerIndex": 1,
    "explanation": "La vidéo haute définition consomme énormément de bande passante et d'énergie serveur.",
    "concept": "Sobriété"
  },
  {
    "id": 19,
    "question": "Open Source veut dire...",
    "options": [
      "Code ouvert",
      "Gratuit",
      "Sans code",
      "Fermé"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Le code de fabrication est public et vérifiable par tout le monde.",
    "concept": "Définition"
  },
  {
    "id": 20,
    "question": "Remplaçant de Microsoft Office ?",
    "options": [
      "Notepad",
      "LibreOffice",
      "WordPad",
      "Adobe"
    ],
    "correctAnswerIndex": 1,
    "explanation": "LibreOffice est une suite complète, libre et gratuite.",
    "concept": "Alternative"
  },
  {
    "id": 21,
    "question": "GAFAM ?",
    "options": [
      "Un gâteau",
      "Géants du Web US",
      "Un syndicat",
      "Une loi"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Google, Apple, Facebook, Amazon, Microsoft : les 5 géants qui dominent le marché.",
    "concept": "Big Tech"
  },
  {
    "id": 22,
    "question": "Données scolaires chez GAFAM ?",
    "options": [
      "Sécurisé",
      "Risque souveraineté",
      "Recommandé",
      "Obligatoire"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Les données stockées hors UE échappent aux lois de protection européennes.",
    "concept": "Données"
  },
  {
    "id": 23,
    "question": "Vie d'un PC sous Linux ?",
    "options": [
      "2 ans",
      "10 ans +",
      "6 mois",
      "Infinie"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Linux est léger et permet de garder des PC de plus de 10 ans fluides.",
    "concept": "Durabilité"
  },
  {
    "id": 24,
    "question": "Auto-hébergement ?",
    "options": [
      "Serveur à la maison",
      "Dormir au bureau",
      "Google Drive",
      "Cloud Amazon"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Héberger ses propres services pour une indépendance totale.",
    "concept": "Autonomie"
  },
  {
    "id": 25,
    "question": "Format .docx (Word) ?",
    "options": [
      "Ouvert",
      "Propriétaire",
      "Universel",
      "Libre"
    ],
    "correctAnswerIndex": 1,
    "explanation": "C'est un format contrôlé par Microsoft. Le standard ouvert est .odt.",
    "concept": "Format"
  },
  {
    "id": 26,
    "question": "But d'une Big Tech ?",
    "options": [
      "Éduquer",
      "Faire du profit",
      "Sauver la planète",
      "Aider les gens"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Ce sont des entreprises privées dont le but premier est la rentabilité, pas l'intérêt général.",
    "concept": "Économie"
  },
  {
    "id": 27,
    "question": "Commun Numérique ?",
    "options": [
      "Ressource partagée",
      "Un virus",
      "Un PC public",
      "Rien"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Une ressource gérée par une communauté (ex: Wikipédia, Linux).",
    "concept": "Commun"
  },
  {
    "id": 28,
    "question": "Réduire son empreinte ?",
    "options": [
      "Changer de téléphone",
      "Garder son matériel",
      "Tout imprimer",
      "La 5G"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Garder son smartphone ou PC le plus longtemps possible est le geste écolo le plus fort.",
    "concept": "Écologie"
  },
  {
    "id": 29,
    "question": "Le D de NIRD ?",
    "options": [
      "Digital",
      "Durable",
      "Dangereux",
      "Direct"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Durable : pour un numérique qui respecte l'environnement.",
    "concept": "NIRD"
  },
  {
    "id": 30,
    "question": "Qui est David ?",
    "options": [
      "Google",
      "L'École",
      "Le gouvernement",
      "Le pirate"
    ],
    "correctAnswerIndex": 1,
    "explanation": "L'École (David) résiste contre les Big Tech (Goliath).",
    "concept": "Scénario"
  },
  {
    "id": 31,
    "question": "Souveraineté Numérique ?",
    "options": [
      "Être roi",
      "Indépendance technique",
      "Tout bloquer",
      "Avoir .fr"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Ne dépendre d'aucune puissance étrangère pour ses choix informatiques.",
    "concept": "Politique"
  },
  {
    "id": 32,
    "question": "Framasoft c'est...",
    "options": [
      "Du fromage",
      "Asso du Libre",
      "Microsoft",
      "Un virus"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Association française majeure qui propose des alternatives libres aux GAFAM.",
    "concept": "Acteur"
  },
  {
    "id": 33,
    "question": "Sécurité Linux vs Windows ?",
    "options": [
      "Pareil",
      "Linux est plus sûr",
      "Windows est plus sûr",
      "Aucune idée"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Le code ouvert permet de corriger les failles très vite, pas de virus classiques sur Linux.",
    "concept": "Sécurité"
  },
  {
    "id": 34,
    "question": "Les DEEE ?",
    "options": [
      "Des animaux",
      "Déchets électroniques",
      "Des fichiers",
      "Une taxe"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Déchets d'Équipements Électriques et Électroniques : très polluants.",
    "concept": "Pollution"
  },
  {
    "id": 35,
    "question": "Ubuntu est...",
    "options": [
      "Une danse",
      "Un Linux facile",
      "Payant",
      "Un réseau social"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Distribution Linux très populaire et accessible aux débutants.",
    "concept": "Outil"
  },
  {
    "id": 36,
    "question": "Modifier un logiciel libre ?",
    "options": [
      "Interdit",
      "Autorisé",
      "Impossible",
      "Payant"
    ],
    "correctAnswerIndex": 1,
    "explanation": "C'est une liberté fondamentale : adapter l'outil à ses besoins.",
    "concept": "Liberté"
  },
  {
    "id": 37,
    "question": "Ressource rare des batteries ?",
    "options": [
      "Bois",
      "Terres rares",
      "Plastique",
      "Sable"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Lithium, Cobalt... leur extraction est un désastre écologique.",
    "concept": "Ressources"
  },
  {
    "id": 38,
    "question": "Neutralité du net ?",
    "options": [
      "Internet suisse",
      "Égalité du trafic",
      "Internet lent",
      "Censure"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Tout le trafic doit être traité à la même vitesse, sans discrimination commerciale.",
    "concept": "Éthique"
  },
  {
    "id": 39,
    "question": "Extension fichier LibreOffice ?",
    "options": [
      ".doc",
      ".odt",
      ".pages",
      ".txt"
    ],
    "correctAnswerIndex": 1,
    "explanation": "OpenDocument Text (.odt) est le format standard ouvert.",
    "concept": "Format"
  },
  {
    "id": 40,
    "question": "Alternative à Google Maps ?",
    "options": [
      "Waze",
      "OpenStreetMap",
      "Bing",
      "Apple Maps"
    ],
    "correctAnswerIndex": 1,
    "explanation": "La carte collaborative mondiale, libre et gratuite.",
    "concept": "Alternative"
  },
  {
    "id": 41,
    "question": "Apprendre le code permet de...",
    "options": [
      "Hacker",
      "Comprendre le monde",
      "Réparer le wifi",
      "Rien"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Ne plus subir le numérique mais le maîtriser.",
    "concept": "Éducation"
  },
  {
    "id": 42,
    "question": "Écosystème fermé (Apple) ?",
    "options": [
      "Jardin",
      "Prison dorée",
      "Liberté",
      "Gratuit"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Tout marche bien tant qu'on achète tout chez eux, impossible d'en sortir (Walled Garden).",
    "concept": "Enfermement"
  },
  {
    "id": 43,
    "question": "Gérer ses mots de passe ?",
    "options": [
      "Post-it",
      "123456",
      "Keepass",
      "Mémoire"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Keepass est un coffre-fort numérique libre et sécurisé.",
    "concept": "Sécurité"
  },
  {
    "id": 44,
    "question": "Fondateur du Libre ?",
    "options": [
      "Bill Gates",
      "Richard Stallman",
      "Steve Jobs",
      "Elon Musk"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Il a lancé le projet GNU pour rendre la liberté aux utilisateurs.",
    "concept": "Histoire"
  },
  {
    "id": 45,
    "question": "Dark Mode sur OLED ?",
    "options": [
      "Inutile",
      "Économise batterie",
      "Abîme les yeux",
      "Pollue plus"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Les pixels noirs sont éteints, consommant moins d'énergie.",
    "concept": "Sobriété"
  },
  {
    "id": 46,
    "question": "Indice de réparabilité ?",
    "options": [
      "Note facilité réparation",
      "Prix réparation",
      "Temps réparation",
      "Adresse réparateur"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Aide à choisir des produits durables plutôt que jetables.",
    "concept": "Loi"
  },
  {
    "id": 47,
    "question": "VLC sert à...",
    "options": [
      "Dessiner",
      "Lire des vidéos",
      "Naviguer",
      "Écrire"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Le célèbre plot orange lit toutes les vidéos du monde. Français et Libre !",
    "concept": "Outil"
  },
  {
    "id": 48,
    "question": "Moteur respectueux vie privée ?",
    "options": [
      "Google",
      "Qwant / DuckDuckGo",
      "Bing",
      "Yahoo"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Ils ne tracent pas vos recherches et ne vendent pas votre historique.",
    "concept": "Vie privée"
  },
  {
    "id": 49,
    "question": "Devise NIRD ?",
    "options": [
      "Veni Vidi Vici",
      "Inclusif, Responsable, Durable",
      "Liberté Égalité",
      "Just do it"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Les trois piliers de la démarche.",
    "concept": "NIRD"
  },
  {
    "id": 50,
    "question": "Backdoor (Porte dérobée) ?",
    "options": [
      "Sortie de secours",
      "Accès espion secret",
      "Port USB",
      "Jardin"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Accès caché dans un logiciel pour espionner, fréquent dans le propriétaire.",
    "concept": "Sécurité"
  },
  {
    "id": 51,
    "question": "Frein à Linux ?",
    "options": [
      "Prix",
      "Habitudes à changer",
      "Qualité",
      "Légalité"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Le plus dur n'est pas la technique, mais de changer les habitudes humaines.",
    "concept": "Changement"
  },
  {
    "id": 52,
    "question": "Mes données sur ChatGPT ?",
    "options": [
      "Privées",
      "Exploitées aux USA",
      "Effacées",
      "Chiffrées"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Tout ce que vous dites peut être utilisé pour entraîner l'IA.",
    "concept": "IA"
  },
  {
    "id": 53,
    "question": "Alternative à Photoshop ?",
    "options": [
      "Paint",
      "GIMP",
      "Word",
      "Excel"
    ],
    "correctAnswerIndex": 1,
    "explanation": "GIMP est un puissant éditeur d'images gratuit et libre.",
    "concept": "Alternative"
  },
  {
    "id": 54,
    "question": "Temps pour apprendre Linux ?",
    "options": [
      "10 ans",
      "Très rapide",
      "Impossible",
      "Bac+5"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Les interfaces modernes ressemblent à Windows, la transition est facile.",
    "concept": "Usage"
  },
  {
    "id": 55,
    "question": "Greenwashing ?",
    "options": [
      "Laver vert",
      "Écologie mensongère",
      "Peinture bio",
      "Recyclage"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Se dire écolo tout en poussant à la surconsommation (ex: Apple).",
    "concept": "Marketing"
  },
  {
    "id": 56,
    "question": "Autonomie des écoles ?",
    "options": [
      "Argent",
      "Indépendance pédagogique",
      "Faire joli",
      "Aucune"
    ],
    "correctAnswerIndex": 1,
    "explanation": "L'école ne doit pas être soumise aux choix commerciaux de Microsoft ou Google.",
    "concept": "Valeurs"
  },
  {
    "id": 57,
    "question": "Booster un vieux PC ?",
    "options": [
      "Mettre un sticker",
      "Ajouter un SSD",
      "Le peindre",
      "Changer l'écran"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Remplacer le disque dur par un SSD coûte 20€ et accélère tout.",
    "concept": "Réparation"
  },
  {
    "id": 58,
    "question": "Alternative YouTube ?",
    "options": [
      "Colle",
      "PeerTube",
      "Télé",
      "Dailymotion"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Plateforme vidéo décentralisée sans pub ni pistage, utilisée par l'Éducation Nationale.",
    "concept": "Alternative"
  },
  {
    "id": 59,
    "question": "Le Cloud c'est...",
    "options": [
      "Magique",
      "L'ordi d'un autre",
      "De la vapeur",
      "Du vide"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Ce sont juste des serveurs physiques appartenant à quelqu'un d'autre.",
    "concept": "Technique"
  },
  {
    "id": 60,
    "question": "Services libres de l'État ?",
    "options": [
      "Apps.education.fr",
      "Google Class",
      "Teams",
      "Discord"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Plateforme officielle proposant des outils libres et souverains aux profs.",
    "concept": "Institution"
  },
  {
    "id": 61,
    "question": "Clé USB trouvée par terre ?",
    "options": [
      "Je la branche",
      "Danger virus !",
      "Je la garde",
      "Cadeau"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Ne jamais brancher une clé inconnue, c'est un piège classique.",
    "concept": "Sécurité"
  },
  {
    "id": 62,
    "question": "Accessibilité numérique ?",
    "options": [
      "Avoir la fibre",
      "Inclusion handicap",
      "PC pas cher",
      "Wifi partout"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Rendre les sites utilisables par tous (aveugles, malentendants...). Le I de NIRD.",
    "concept": "Inclusion"
  },
  {
    "id": 63,
    "question": "Mise à jour Linux ?",
    "options": [
      "Compliqué",
      "1 clic pour tout",
      "Payant",
      "Impossible"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Une seule commande met à jour le système ET tous les logiciels d'un coup.",
    "concept": "Technique"
  },
  {
    "id": 64,
    "question": "Dual Boot ?",
    "options": [
      "Deux chaussures",
      "Windows + Linux",
      "Deux écrans",
      "Deux claviers"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Avoir les deux systèmes sur le même PC et choisir au démarrage.",
    "concept": "Technique"
  },
  {
    "id": 65,
    "question": "Format fermé = danger ?",
    "options": [
      "Non",
      "Perte d'accès future",
      "Oui pour les virus",
      "Non c'est mieux"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Si l'éditeur disparaît, on ne peut plus lire ses vieux fichiers.",
    "concept": "Pérennité"
  },
  {
    "id": 66,
    "question": "Qui finance Firefox ?",
    "options": [
      "Dons",
      "Google (Deal)",
      "L'État",
      "Personne"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Google paie pour être le moteur par défaut, une relation complexe.",
    "concept": "Économie"
  },
  {
    "id": 67,
    "question": "Raspberry Pi ?",
    "options": [
      "Un fruit",
      "Nano-ordi pas cher",
      "Un gâteau",
      "Un jouet"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Petit ordinateur à 50€ idéal pour apprendre l'informatique à l'école.",
    "concept": "Matériel"
  },
  {
    "id": 68,
    "question": "Moodle ?",
    "options": [
      "Des nouilles",
      "Plateforme cours libre",
      "Un jeu",
      "Un réseau"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Le logiciel libre le plus utilisé au monde pour les cours en ligne.",
    "concept": "Outil"
  },
  {
    "id": 69,
    "question": "Linux sur supercalculateurs ?",
    "options": [
      "1%",
      "100%",
      "50%",
      "0%"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Les 500 ordinateurs les plus puissants du monde tournent TOUS sous Linux.",
    "concept": "Puissance"
  },
  {
    "id": 70,
    "question": "Messagerie sûre ?",
    "options": [
      "Signal / Olvid",
      "WhatsApp",
      "Messenger",
      "Snapchat"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Recommandées par l'UE pour leur sécurité et respect de la vie privée.",
    "concept": "Outil"
  },
  {
    "id": 71,
    "question": "Code Source ?",
    "options": [
      "Mot de passe",
      "Recette du logiciel",
      "Code barre",
      "Numéro série"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Le texte écrit par le programmeur. Public dans le Logiciel Libre.",
    "concept": "Définition"
  },
  {
    "id": 72,
    "question": "Ville passée sous Linux ?",
    "options": [
      "Paris",
      "Munich",
      "Rome",
      "Londres"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Munich a été pionnière avec le projet LiMux.",
    "concept": "Exemple"
  },
  {
    "id": 73,
    "question": "Sobriété Numérique ?",
    "options": [
      "Pas d'ordi",
      "Usage raisonné",
      "Boire de l'eau",
      "Écrans noirs"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Limiter le gaspillage et l'inutile pour réduire l'impact.",
    "concept": "Écologie"
  },
  {
    "id": 74,
    "question": "FOSS signifie ?",
    "options": [
      "Free Open Source Software",
      "Fast Service",
      "Fake Software",
      "Full System"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Acronyme anglais pour Logiciels Libres et Open Source.",
    "concept": "Vocabulaire"
  },
  {
    "id": 75,
    "question": "Vieux téléphone non mis à jour ?",
    "options": [
      "Pas grave",
      "Faille sécurité",
      "Plus rapide",
      "Rien"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Sans mises à jour, il devient une passoire pour les pirates.",
    "concept": "Sécurité"
  },
  {
    "id": 76,
    "question": "Big Brother ?",
    "options": [
      "Une émission",
      "Surveillance de masse",
      "Mon frère",
      "Une caméra"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Symbole de la surveillance totale (Orwell 1984), aujourd'hui réalisée par la Tech.",
    "concept": "Culture"
  },
  {
    "id": 77,
    "question": "Aide pour installer Linux ?",
    "options": [
      "La police",
      "Les GULL",
      "Microsoft",
      "Personne"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Groupes d'Utilisateurs de Logiciels Libres : des bénévoles qui aident partout.",
    "concept": "Communauté"
  },
  {
    "id": 78,
    "question": "Blender ?",
    "options": [
      "Mixeur",
      "3D Libre Pro",
      "Jeu vidéo",
      "Réseau"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Outil de 3D pro gratuit, utilisé par Hollywood.",
    "concept": "Outil"
  },
  {
    "id": 79,
    "question": "Wifi ou Câble (Ethernet) ?",
    "options": [
      "Wifi",
      "Câble (Ethernet)",
      "Pareil",
      "4G"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Le câble est plus stable, rapide et consomme moins d'énergie.",
    "concept": "Bonne pratique"
  },
  {
    "id": 80,
    "question": "Décentralisé ?",
    "options": [
      "Central",
      "Sans chef unique",
      "Illégal",
      "En ville"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Internet a été conçu pour être un réseau sans point de contrôle central.",
    "concept": "Web"
  },
  {
    "id": 81,
    "question": "Alternative WhatsApp ?",
    "options": [
      "Signal",
      "Messenger",
      "TikTok",
      "Insta"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Signal protège vos métadonnées, contrairement à Meta.",
    "concept": "Alternative"
  },
  {
    "id": 82,
    "question": "Copyleft ?",
    "options": [
      "Main gauche",
      "Partage obligatoire",
      "Interdit",
      "Vol"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Licence qui autorise la modification mais oblige à partager le résultat.",
    "concept": "Droit"
  },
  {
    "id": 83,
    "question": "Mail à 10 personnes ?",
    "options": [
      "Gratuit",
      "Pollution x10",
      "Léger",
      "Rien"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Chaque destinataire multiplie l'impact carbone du stockage et transfert.",
    "concept": "Écologie"
  },
  {
    "id": 84,
    "question": "Pourquoi le PDF ?",
    "options": [
      "Modifiable",
      "Mise en page fixe",
      "Lourd",
      "Joli"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Format standard pour que le document s'affiche pareil partout.",
    "concept": "Format"
  },
  {
    "id": 85,
    "question": "Distribution Linux ?",
    "options": [
      "Livraison",
      "Système complet",
      "Virus",
      "Magasin"
    ],
    "correctAnswerIndex": 1,
    "explanation": "C'est le pack prêt à l'emploi (ex: Ubuntu, Mint, Debian).",
    "concept": "Définition"
  },
  {
    "id": 86,
    "question": "Lien Astérix / NIRD ?",
    "options": [
      "Potion",
      "Résistance locale",
      "Casques",
      "Aucun"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Le petit village résistant à l'Empire romain/numérique.",
    "concept": "Image"
  },
  {
    "id": 87,
    "question": "SaaS (Abonnement) ?",
    "options": [
      "Location éternelle",
      "Achat unique",
      "Gratuit",
      "Sûr"
    ],
    "correctAnswerIndex": 0,
    "explanation": "On ne possède plus le logiciel, on paie un loyer à vie. Coûteux.",
    "concept": "Économie"
  },
  {
    "id": 88,
    "question": "Logiciel Libre et l'État ?",
    "options": [
      "Encouragé",
      "Interdit",
      "Ignoré",
      "Taxé"
    ],
    "correctAnswerIndex": 0,
    "explanation": "La loi recommande le Libre pour la souveraineté et l'économie publique.",
    "concept": "Loi"
  },
  {
    "id": 89,
    "question": "Pollution du Numérique ?",
    "options": [
      "1%",
      "4% (Plus qu'avion)",
      "20%",
      "0%"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Internet pollue plus que l'aviation civile mondiale.",
    "concept": "Pollution"
  },
  {
    "id": 90,
    "question": "Citation Stallman ?",
    "options": [
      "Think different",
      "Liberté pas prix",
      "Just do it",
      "I am your father"
    ],
    "correctAnswerIndex": 1,
    "explanation": "'Think Free Speech, not Free Beer'. C'est une question de liberté.",
    "concept": "Philosophie"
  },
  {
    "id": 91,
    "question": "Danger IoT (objets connectés) ?",
    "options": [
      "Espionnage",
      "Piles",
      "Bruit",
      "Inutile"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Souvent mal sécurisés, ils sont faciles à pirater.",
    "concept": "Sécurité"
  },
  {
    "id": 92,
    "question": "PrimTux ?",
    "options": [
      "Vêtement",
      "Linux pour écoliers",
      "Jeu",
      "Tux cousin"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Système éducatif spécial pour les écoles primaires, tourne sur vieux PC.",
    "concept": "Éducation"
  },
  {
    "id": 93,
    "question": "Matériel reconditionné ?",
    "options": [
      "Vieux",
      "Écolo et Moins cher",
      "Lent",
      "Cassé"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Prolonge la vie des appareils et évite la fabrication.",
    "concept": "Écologie"
  },
  {
    "id": 94,
    "question": "Vendor Lock-in ?",
    "options": [
      "Fermé",
      "Piège commercial",
      "Serrure",
      "Vente"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Stratégie pour rendre le client captif et l'empêcher de partir.",
    "concept": "Commerce"
  },
  {
    "id": 95,
    "question": "Code source Windows ?",
    "options": [
      "Public",
      "Secret commercial",
      "Inexistant",
      "Perdu"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Microsoft cache sa recette pour empêcher la concurrence.",
    "concept": "Propriété"
  },
  {
    "id": 96,
    "question": "Éco-Délégué ?",
    "options": [
      "Élève ambassadeur",
      "Jardinier",
      "Prof",
      "Robot"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Élèves élus pour porter les projets écologiques au lycée.",
    "concept": "Engagement"
  },
  {
    "id": 97,
    "question": "Poids pièce jointe ?",
    "options": [
      "Léger",
      "Très lourd",
      "Nul",
      "Inconnu"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Mieux vaut envoyer un lien de téléchargement (Lien) qu'un fichier lourd.",
    "concept": "Bonne pratique"
  },
  {
    "id": 98,
    "question": "Conclusion NIRD ?",
    "options": [
      "Dépenser plus",
      "Reprendre le pouvoir",
      "Jeter les PC",
      "Subir"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Redonner du pouvoir d'agir aux équipes éducatives.",
    "concept": "Conclusion"
  },
  {
    "id": 99,
    "question": "Obsolescence Windows 10 ?",
    "options": [
      "Octobre 2025",
      "Jamais",
      "2030",
      "Hier"
    ],
    "correctAnswerIndex": 0,
    "explanation": "La fin du support est prévue pour octobre 2025, créant une urgence.",
    "concept": "Date clé"
  },
  {
    "id": 100,
    "question": "Licence libre = ?",
    "options": [
      "Anarchie",
      "Contrat juridique",
      "Pas de règles",
      "Vol"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Ce n'est pas le chaos, c'est un contrat qui garantit vos droits et devoirs.",
    "concept": "Droit"
  },
  {
    "id": 101,
    "question": "Qui a inventé le Web au CERN ?",
    "options": [
      "Steve Jobs",
      "Tim Berners-Lee",
      "Bill Gates",
      "Elon Musk"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Tim Berners-Lee a créé le Web en 1989 et l'a offert au domaine public sans le breveter.",
    "concept": "Histoire"
  },
  {
    "id": 102,
    "question": "Alternative libre à Zoom ?",
    "options": [
      "Skype",
      "Jitsi Meet",
      "FaceTime",
      "WhatsApp"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Jitsi est une solution de visioconférence libre, chiffrée et ne nécessitant pas d'inscription.",
    "concept": "Outil"
  },
  {
    "id": 103,
    "question": "Que sont les 'métadonnées' ?",
    "options": [
      "Données sur les données",
      "Gros fichiers",
      "Virus",
      "Météo du net"
    ],
    "correctAnswerIndex": 0,
    "explanation": "C'est ce qui entoure le message (qui, quand, où). Souvent plus révélatrices que le contenu lui-même.",
    "concept": "Vie Privée"
  },
  {
    "id": 104,
    "question": "Alternative libre à Doodle ?",
    "options": [
      "Framadate",
      "Google Agenda",
      "Excel",
      "Outlook"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Framadate permet de planifier des réunions sans que vos horaires soient exploités commercialement.",
    "concept": "Outil"
  },
  {
    "id": 105,
    "question": "Qu'est-ce qu'un 'Dark Pattern' ?",
    "options": [
      "Mode sombre",
      "Design manipulateur",
      "Fond d'écran noir",
      "Code secret"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Une interface conçue pour vous piéger (ex: un bouton de désinscription caché ou impossible à trouver).",
    "concept": "Éthique"
  },
  {
    "id": 106,
    "question": "Smartphone réparable et éthique ?",
    "options": [
      "iPhone",
      "Fairphone",
      "Galaxy S",
      "Nokia 3310"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Fairphone conçoit des téléphones modulaires (pièces changeables) et sourcés éthiquement.",
    "concept": "Matériel"
  },
  {
    "id": 107,
    "question": "OS mobile dé-googlisé ?",
    "options": [
      "iOS",
      "/e/OS",
      "Windows Phone",
      "Blackberry"
    ],
    "correctAnswerIndex": 1,
    "explanation": "/e/OS est une version d'Android nettoyée de tous les mouchards Google.",
    "concept": "Alternative"
  },
  {
    "id": 108,
    "question": "Qu'est-ce que le 'Fediverse' ?",
    "options": [
      "Un jeu vidéo",
      "Réseaux sociaux fédérés",
      "Une banque",
      "Un virus"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Un réseau de serveurs interconnectés (Mastodon, PeerTube) qui ne dépend pas d'une seule entreprise.",
    "concept": "Web décentralisé"
  },
  {
    "id": 109,
    "question": "Alternative libre à Outlook ?",
    "options": [
      "Thunderbird",
      "Gmail",
      "Yahoo",
      "Mail"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Thunderbird est le client mail libre de référence, géré par une filiale de Mozilla.",
    "concept": "Outil"
  },
  {
    "id": 110,
    "question": "Que protège le droit d'auteur ?",
    "options": [
      "Les idées",
      "Les œuvres fixées",
      "Les machines",
      "Rien"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Le droit d'auteur protège la forme (livre, code, image), pas l'idée générale.",
    "concept": "Droit"
  },
  {
    "id": 111,
    "question": "Qu'est-ce que l'Interopérabilité ?",
    "options": [
      "Opérer un patient",
      "Systèmes communiquant ensemble",
      "Internet lent",
      "Interdit"
    ],
    "correctAnswerIndex": 1,
    "explanation": "La capacité de différents logiciels à échanger des données (grâce aux formats ouverts).",
    "concept": "Technique"
  },
  {
    "id": 112,
    "question": "Qui est Ada Lovelace ?",
    "options": [
      "Une actrice",
      "Première programmeuse",
      "Une marque",
      "Une reine"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Au 19ème siècle, elle a écrit le premier algorithme destiné à être exécuté par une machine.",
    "concept": "Histoire"
  },
  {
    "id": 113,
    "question": "Alternative libre à Google Drive ?",
    "options": [
      "Dropbox",
      "Nextcloud",
      "iCloud",
      "Box"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Nextcloud permet de stocker et partager ses fichiers en gardant le contrôle total (auto-hébergement possible).",
    "concept": "Outil"
  },
  {
    "id": 114,
    "question": "Que signifie DRM ?",
    "options": [
      "Droit de Réponse",
      "Verrou numérique (Menottes)",
      "Docteur en Médecine",
      "Donnée Rare"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Digital Rights Management : technologie qui restreint l'utilisation d'un fichier (ex: empêcher la copie).",
    "concept": "Restriction"
  },
  {
    "id": 115,
    "question": "Qu'est-ce que le 'Phishing' ?",
    "options": [
      "La pêche",
      "Hameçonnage (Arnaque mail)",
      "Un sport",
      "Un virus"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Technique frauduleuse pour obtenir vos mots de passe en se faisant passer pour un tiers de confiance.",
    "concept": "Sécurité"
  },
  {
    "id": 116,
    "question": "Alternative à Adobe Illustrator ?",
    "options": [
      "Inkscape",
      "Paint",
      "Canva",
      "Word"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Inkscape est un logiciel de dessin vectoriel professionnel, libre et gratuit.",
    "concept": "Alternative"
  },
  {
    "id": 117,
    "question": "Danger du 'Single Sign-On' (Connect avec Google) ?",
    "options": [
      "Aucun",
      "Si Google ferme, tout ferme",
      "C'est trop rapide",
      "C'est payant"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Centraliser toutes ses connexions chez un seul géant crée un point de défaillance unique critique.",
    "concept": "Sécurité"
  },
  {
    "id": 118,
    "question": "Qu'est-ce qu'un 'Fork' ?",
    "options": [
      "Une fourchette",
      "Nouvelle version dérivée",
      "Une erreur",
      "Un virus"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Dans le libre, on peut copier un projet pour en créer une version modifiée (ex: LibreOffice est un fork d'OpenOffice).",
    "concept": "Vocabulaire"
  },
  {
    "id": 119,
    "question": "Mastodon remplace...",
    "options": [
      "Twitter / X",
      "Facebook",
      "Instagram",
      "TikTok"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Mastodon est un réseau de micro-blogging décentralisé, sans algorithme opaque.",
    "concept": "Alternative"
  },
  {
    "id": 120,
    "question": "Que fait la commande 'sudo' ?",
    "options": [
      "Joue au Sudoku",
      "Donne les droits admin",
      "Éteint le PC",
      "Supprime tout"
    ],
    "correctAnswerIndex": 1,
    "explanation": "SuperUser DO : permet d'exécuter une commande avec les privilèges d'administrateur sous Linux.",
    "concept": "Technique"
  },
  {
    "id": 121,
    "question": "Qu'est-ce que l'Économie de l'Attention ?",
    "options": [
      "Payer pour voir",
      "Capturer votre temps de cerveau",
      "Économiser l'argent",
      "Être attentif en classe"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Les applis sont conçues pour être addictives car votre temps d'écran est revendu aux publicitaires.",
    "concept": "Société"
  },
  {
    "id": 122,
    "question": "Un 'VPN' sert à...",
    "options": [
      "Aller plus vite",
      "Chiffrer sa connexion",
      "Pirater",
      "Rien"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Il crée un tunnel sécurisé, masquant votre IP réelle (mais attention au choix du fournisseur VPN).",
    "concept": "Sécurité"
  },
  {
    "id": 123,
    "question": "Obsolescence 'culturelle' ?",
    "options": [
      "Vieux livres",
      "L'envie du nouveau modèle",
      "Musée",
      "Panne technique"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Le marketing (pub, mode) nous pousse à jeter un appareil qui fonctionne encore pour avoir le dernier sorti.",
    "concept": "Psychologie"
  },
  {
    "id": 124,
    "question": "Navigateur 'Tor' ?",
    "options": [
      "Pour le Dark Web et l'anonymat",
      "Pour aller vite",
      "Pour les enfants",
      "Pour jouer"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Tor fait rebondir la connexion sur plusieurs serveurs pour rendre l'utilisateur difficilement traçable.",
    "concept": "Vie Privée"
  },
  {
    "id": 125,
    "question": "Qu'est-ce que 'Audacity' ?",
    "options": [
      "Du courage",
      "Éditeur audio libre",
      "Un jeu",
      "Un réseau social"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Logiciel très populaire pour enregistrer et monter du son gratuitement.",
    "concept": "Outil"
  },
  {
    "id": 126,
    "question": "Wiki signifie en hawaïen...",
    "options": [
      "Savoir",
      "Vite",
      "Plage",
      "Partage"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Ward Cunningham a choisi ce nom pour son 'WikiWikiWeb' car c'était rapide à éditer.",
    "concept": "Culture"
  },
  {
    "id": 127,
    "question": "Qu'est-ce que la 2FA ?",
    "options": [
      "Deux Fois Avant",
      "Double authentification",
      "2e France",
      "Un format"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Ajoute une sécurité (code SMS/Appli) en plus du mot de passe pour se connecter.",
    "concept": "Sécurité"
  },
  {
    "id": 128,
    "question": "Impact écologique du Bitcoin ?",
    "options": [
      "Nul",
      "Énorme (énergivore)",
      "Positif",
      "Faible"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Le 'minage' de cryptomonnaies consomme autant d'électricité que des pays entiers.",
    "concept": "Écologie"
  },
  {
    "id": 129,
    "question": "Logiciel de Tableau Blanc Interactif (TBI) libre ?",
    "options": [
      "OpenBoard",
      "SmartNotebook",
      "Paint",
      "PowerPoint"
    ],
    "correctAnswerIndex": 0,
    "explanation": "OpenBoard est la référence libre pour les écoles, compatible avec tous les projecteurs.",
    "concept": "Outil Éducatif"
  },
  {
    "id": 130,
    "question": "Qu'est-ce qu'un 'Cookie' web ?",
    "options": [
      "Un gâteau",
      "Un petit fichier traceur",
      "Un virus",
      "Un bouton"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Fichier déposé sur votre ordi pour stocker vos préférences ou vous pister de site en site.",
    "concept": "Web"
  },
  {
    "id": 131,
    "question": "Pourquoi éviter le Wifi en maternelle ?",
    "options": [
      "Ça coûte cher",
      "Principe de précaution (Ondes)",
      "Ça marche pas",
      "C'est laid"
    ],
    "correctAnswerIndex": 1,
    "explanation": "La loi Abeille limite l'exposition des jeunes enfants aux ondes électromagnétiques.",
    "concept": "Santé"
  },
  {
    "id": 132,
    "question": "Le Domaines Public c'est...",
    "options": [
      "Un parc",
      "Œuvres sans droits d'auteur",
      "Internet",
      "L'État"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Après un certain temps (70 ans après mort auteur), l'œuvre appartient à tous.",
    "concept": "Droit"
  },
  {
    "id": 133,
    "question": "Format d'image vectoriel libre ?",
    "options": [
      ".jpg",
      ".svg",
      ".png",
      ".gif"
    ],
    "correctAnswerIndex": 1,
    "explanation": "SVG (Scalable Vector Graphics) : on peut agrandir l'image à l'infini sans perte de qualité.",
    "concept": "Format"
  },
  {
    "id": 134,
    "question": "Qui a créé le noyau Linux ?",
    "options": [
      "Linus Torvalds",
      "Bill Gates",
      "Steve Jobs",
      "Mark Zuckerberg"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Étudiant finlandais, il a partagé son projet en 1991.",
    "concept": "Histoire"
  },
  {
    "id": 135,
    "question": "Ransomware (Rançongiciel) ?",
    "options": [
      "Logiciel gratuit",
      "Virus qui chiffre vos données contre rançon",
      "Antivirus",
      "Jeu"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Une attaque dévastatrice pour les écoles et hôpitaux. La seule défense : les sauvegardes.",
    "concept": "Sécurité"
  },
  {
    "id": 136,
    "question": "Loi de Moore ?",
    "options": [
      "Tout est possible",
      "Doublement puissance puces tous les 2 ans",
      "Le moins cher gagne",
      "Loi physique"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Cette course à la puissance a guidé l'industrie, mais atteint aujourd'hui ses limites physiques et écologiques.",
    "concept": "Histoire"
  },
  {
    "id": 137,
    "question": "Alternative à Premiere Pro ?",
    "options": [
      "Kdenlive / Shotcut",
      "Windows Movie Maker",
      "iMovie",
      "VLC"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Des logiciels de montage vidéo libres et performants.",
    "concept": "Alternative"
  },
  {
    "id": 138,
    "question": "Qu'est-ce que 'Git' ?",
    "options": [
      "Une insulte",
      "Système de versionnage de code",
      "Un langage",
      "Un jeu"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Outil essentiel pour les développeurs pour gérer l'historique et la collaboration sur le code.",
    "concept": "Dev"
  },
  {
    "id": 139,
    "question": "GitHub appartient à...",
    "options": [
      "Personne",
      "Microsoft",
      "Google",
      "Apple"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Le rachat de la plus grosse forge de code par Microsoft en 2018 a inquiété la communauté libre.",
    "concept": "Économie"
  },
  {
    "id": 140,
    "question": "Qu'est-ce que le chiffrement de bout en bout ?",
    "options": [
      "Coder en entier",
      "Seuls émetteur et receveur peuvent lire",
      "Chiffrer la fin",
      "Rien"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Même le fournisseur du service (ex: Signal) ne peut pas déchiffrer vos messages.",
    "concept": "Sécurité"
  },
  {
    "id": 141,
    "question": "Wikipédia est...",
    "options": [
      "À Google",
      "Une asso à but non lucratif",
      "Payant",
      "Un réseau social"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Gérée par la fondation Wikimedia, sans pub et financée par les dons.",
    "concept": "Commun"
  },
  {
    "id": 142,
    "question": "Qu'est-ce que 'PIX' ?",
    "options": [
      "Un personnage",
      "Service public d'évaluation compétences numériques",
      "Un virus",
      "Une option"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Certification des compétences numériques obligatoire pour les élèves français.",
    "concept": "Éducation"
  },
  {
    "id": 143,
    "question": "Consommation 'Veille' des appareils ?",
    "options": [
      "0 Watt",
      "10% de la facture élec",
      "Négligeable",
      "Ça recharge"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Les appareils branchés mais éteints (vampire power) consomment inutilement.",
    "concept": "Sobriété"
  },
  {
    "id": 144,
    "question": "Logiciel de streaming/enregistrement libre ?",
    "options": [
      "OBS Studio",
      "Twitch",
      "Zoom",
      "Skype"
    ],
    "correctAnswerIndex": 0,
    "explanation": "OBS est le standard mondial pour le streaming, utilisé par tous les youtubers.",
    "concept": "Outil"
  },
  {
    "id": 145,
    "question": "Qu'est-ce qu'un 'Bug Bounty' ?",
    "options": [
      "Chasse à la prime (trouver des failles)",
      "Un insecte",
      "Un chocolat",
      "Un piratage"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Les entreprises paient des hackers éthiques pour trouver des failles avant les criminels.",
    "concept": "Sécurité"
  },
  {
    "id": 146,
    "question": "Alternative à InDesign ?",
    "options": [
      "Scribus",
      "Word",
      "Paint",
      "Notepad"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Scribus permet de faire de la PAO (mise en page pro) librement.",
    "concept": "Alternative"
  },
  {
    "id": 147,
    "question": "Qu'est-ce que 'Tails' ?",
    "options": [
      "Une queue",
      "OS portable ultra-sécurisé (Clé USB)",
      "Un jeu",
      "Un animal"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Système utilisé par Edward Snowden, il ne laisse aucune trace sur l'ordinateur utilisé.",
    "concept": "Sécurité"
  },
  {
    "id": 148,
    "question": "Câbles sous-marins ?",
    "options": [
      "Mythe",
      "99% du trafic internet mondial",
      "Dangereux",
      "Pour les poissons"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Internet n'est pas dans le ciel (satellite), il passe par des câbles au fond des océans.",
    "concept": "Infra"
  },
  {
    "id": 149,
    "question": "Qu'est-ce qu'une 'Ferme de clics' ?",
    "options": [
      "Jeu Facebook",
      "Fraude (faux likes/vues)",
      "Agriculture 2.0",
      "Un virus"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Des travailleurs mal payés cliquent toute la journée pour gonfler artificiellement des statistiques.",
    "concept": "Fraude"
  },
  {
    "id": 150,
    "question": "Capacité de réparation ?",
    "options": [
      "Impossible sur tablette",
      "Droit à la réparation",
      "Illégal",
      "Inutile"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Mouvement législatif pour obliger les fabricants à fournir pièces et manuels.",
    "concept": "Droit"
  },
  {
    "id": 151,
    "question": "Licence GPL (General Public License) ?",
    "options": [
      "Domaine public",
      "Libre + Viral (Oblige à rester libre)",
      "Propriétaire",
      "Payante"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Si vous modifiez un logiciel GPL, vous DEVEZ partager vos modifications sous la même licence.",
    "concept": "Licence"
  },
  {
    "id": 152,
    "question": "Qu'est-ce qu'un 'Data Center' ?",
    "options": [
      "Centre commercial",
      "Usine à données (Serveurs)",
      "Une école",
      "Un bureau"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Bâtiment regroupant des milliers de serveurs, très gourmand en climatisation.",
    "concept": "Infra"
  },
  {
    "id": 153,
    "question": "Logiciel de modélisation 3D (CAD) libre ?",
    "options": [
      "FreeCAD",
      "AutoCAD",
      "SketchUp",
      "Paint"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Utilisé pour l'impression 3D et l'ingénierie.",
    "concept": "Outil"
  },
  {
    "id": 154,
    "question": "Qu'est-ce que 'Debian' ?",
    "options": [
      "Une distribution Linux communautaire",
      "Un prénom",
      "Un virus",
      "Une marque"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Debian est la base de nombreuses autres distributions (comme Ubuntu) et est connue pour sa stabilité.",
    "concept": "OS"
  },
  {
    "id": 155,
    "question": "Danger du Bluetooth allumé en permanence ?",
    "options": [
      "Aucun",
      "Traçage et failles de sécurité",
      "Batterie infinie",
      "Meilleur son"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Il permet de vous pister dans les magasins et offre une porte d'entrée aux pirates.",
    "concept": "Sécurité"
  },
  {
    "id": 156,
    "question": "Qu'est-ce que l'Hacktivisme ?",
    "options": [
      "Sport extrême",
      "Militantisme numérique (Anonymous)",
      "Jardinage",
      "Cuisine"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Utiliser des techniques de hacking pour défendre une cause politique ou sociale.",
    "concept": "Culture"
  },
  {
    "id": 157,
    "question": "Alternative à TeamViewer (Prise en main distance) ?",
    "options": [
      "RustDesk",
      "Skype",
      "Discord",
      "Zoom"
    ],
    "correctAnswerIndex": 0,
    "explanation": "RustDesk est une solution open source pour aider quelqu'un à distance sur son PC.",
    "concept": "Outil"
  },
  {
    "id": 158,
    "question": "Qu'est-ce que le 'Reconditionné' ?",
    "options": [
      "Neuf",
      "Occasion vérifiée et réparée",
      "Cassé",
      "Contrefaçon"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Plus fiable que l'occasion simple, et bien plus écolo que le neuf.",
    "concept": "Écologie"
  },
  {
    "id": 159,
    "question": "Une 'Back up' c'est...",
    "options": [
      "Reculer",
      "Une sauvegarde de données",
      "Un soutien",
      "Un virus"
    ],
    "correctAnswerIndex": 1,
    "explanation": "La règle 3-2-1 : 3 copies, 2 supports différents, 1 hors site.",
    "concept": "Sécurité"
  },
  {
    "id": 160,
    "question": "Chaleur fatale des serveurs ?",
    "options": [
      "Perdue",
      "Peut chauffer des piscines/immeubles",
      "Dangereuse",
      "Inexistante"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Récupérer la chaleur émise par les datacenters est un enjeu écologique majeur.",
    "concept": "Écologie"
  },
  {
    "id": 161,
    "question": "Qu'est-ce que 'Arduino' ?",
    "options": [
      "Un robot",
      "Carte électronique open-hardware",
      "Un logiciel",
      "Une ville"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Permet aux élèves de créer des objets interactifs et d'apprendre l'électronique.",
    "concept": "Matériel"
  },
  {
    "id": 162,
    "question": "Navigateur 'Brave' ?",
    "options": [
      "Lent",
      "Bloque les pubs et traceurs par défaut",
      "Payant",
      "Dangereux"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Une alternative basée sur Chrome mais axée sur la vie privée.",
    "concept": "Outil"
  },
  {
    "id": 163,
    "question": "Un mot de passe fort ?",
    "options": [
      "1234",
      "Date naissance",
      "Long + Caractères variés",
      "Prénom"
    ],
    "correctAnswerIndex": 2,
    "explanation": "La longueur est le facteur le plus important. Mieux : une phrase de passe.",
    "concept": "Sécurité"
  },
  {
    "id": 164,
    "question": "Qu'est-ce qu'un 'Tracker' ?",
    "options": [
      "Un chasseur",
      "Script espion sur les sites web",
      "Un GPS",
      "Un chien"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Ils analysent votre comportement pour créer un profil publicitaire.",
    "concept": "Vie Privée"
  },
  {
    "id": 165,
    "question": "Android est basé sur...",
    "options": [
      "Windows",
      "Linux",
      "iOS",
      "Rien"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Le cœur d'Android est un noyau Linux, bien que le reste soit très modifié par Google.",
    "concept": "OS"
  },
  {
    "id": 166,
    "question": "Qu'est-ce que l'obfuscation ?",
    "options": [
      "Rendre le code illisible",
      "Réparer",
      "Eclairer",
      "Supprimer"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Technique pour cacher le fonctionnement d'un programme (souvent malveillant ou propriétaire).",
    "concept": "Dev"
  },
  {
    "id": 167,
    "question": "Alternative à Google Fonts ?",
    "options": [
      "Font Squirrel / Bunny Fonts",
      "Comic Sans",
      "Adobe Fonts",
      "Rien"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Utiliser Google Fonts permet à Google de tracer les visiteurs de votre site.",
    "concept": "Web"
  },
  {
    "id": 168,
    "question": "Obsolescence logicielle par 'Bloatware' ?",
    "options": [
      "Logiciels préinstallés inutiles qui ralentissent",
      "Virus",
      "Mise à jour",
      "Nettoyage"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Les fabricants bourrent les PC/téléphones d'applis inutiles impossibles à désinstaller.",
    "concept": "Obsolescence"
  },
  {
    "id": 169,
    "question": "Qu'est-ce que 'LineageOS' ?",
    "options": [
      "Un jeu",
      "Système Android libre communautaire",
      "Un iPhone",
      "Une marque"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Permet d'installer une version récente d'Android sur des vieux téléphones abandonnés par les fabricants.",
    "concept": "Durabilité"
  },
  {
    "id": 170,
    "question": "Format audio libre ?",
    "options": [
      ".mp3",
      ".flac / .ogg",
      ".wma",
      ".aac"
    ],
    "correctAnswerIndex": 1,
    "explanation": "FLAC (sans perte) et OGG Vorbis sont des formats ouverts, contrairement au MP3 (qui l'était moins avant).",
    "concept": "Format"
  },
  {
    "id": 171,
    "question": "Danger de l'IA générative (ChatGPT) ?",
    "options": [
      "Aucun",
      "Hallucinations (Fausse info) & Biais",
      "Trop intelligent",
      "Rien"
    ],
    "correctAnswerIndex": 1,
    "explanation": "L'IA invente parfois des faits de manière très convaincante.",
    "concept": "IA"
  },
  {
    "id": 172,
    "question": "Qu'est-ce qu'un 'Pixel Espion' (Tracking pixel) ?",
    "options": [
      "Image invisible 1x1 dans un mail",
      "Un film",
      "Un écran cassé",
      "Un ami"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Permet de savoir si vous avez ouvert le mail, à quelle heure et où.",
    "concept": "Vie Privée"
  },
  {
    "id": 173,
    "question": "Loi 'R2R' ?",
    "options": [
      "Ready to Run",
      "Right to Repair (Droit à la réparation)",
      "Road to Rome",
      "Rien"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Mouvement mondial pour pouvoir réparer soi-même ses objets.",
    "concept": "Droit"
  },
  {
    "id": 174,
    "question": "Qu'est-ce que 'Arch Linux' ?",
    "options": [
      "Une arche",
      "Distribution Linux 'Do It Yourself'",
      "Un pont",
      "Un jeu"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Populaire chez les experts car on installe uniquement ce dont on a besoin.",
    "concept": "OS"
  },
  {
    "id": 175,
    "question": "Alternative à Trello ?",
    "options": [
      "Kanboard / Taiga",
      "Notion",
      "Monday",
      "Jira"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Outils de gestion de projet (Kanban) libres.",
    "concept": "Outil"
  },
  {
    "id": 176,
    "question": "Qu'est-ce qu'un 'livre blanc' ?",
    "options": [
      "Livre vide",
      "Guide pratique sur un sujet",
      "Roman",
      "Livre peint"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Souvent utilisé par les experts cybersécurité pour expliquer une menace.",
    "concept": "Info"
  },
  {
    "id": 177,
    "question": "Qu'est-ce que le 'BIOS / UEFI' ?",
    "options": [
      "Un yaourt",
      "Programme de démarrage de la carte mère",
      "Un virus",
      "Un jeu"
    ],
    "correctAnswerIndex": 1,
    "explanation": "C'est le premier programme qui se lance pour initialiser le matériel avant Windows/Linux.",
    "concept": "Technique"
  },
  {
    "id": 178,
    "question": "Etherpad c'est...",
    "options": [
      "Un bloc-notes collaboratif en temps réel",
      "Un médicament",
      "Une tablette",
      "Un jeu"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Permet d'écrire à plusieurs sur le même document, alternative légère à Google Docs.",
    "concept": "Outil"
  },
  {
    "id": 179,
    "question": "Numérique et eau ?",
    "options": [
      "Aucun lien",
      "Grosse conso pour refroidir serveurs",
      "L'eau crée internet",
      "Faible impact"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Les datacenters consomment des millions de m3 d'eau potable pour la climatisation.",
    "concept": "Écologie"
  },
  {
    "id": 180,
    "question": "Qu'est-ce que 'Kali Linux' ?",
    "options": [
      "Une déesse",
      "Distribution pour le test de sécurité (Hacking)",
      "Un virus",
      "Un jeu"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Contient tous les outils pour tester les failles d'un réseau.",
    "concept": "Sécurité"
  },
  {
    "id": 181,
    "question": "Différence HTTP vs HTTPS ?",
    "options": [
      "Le S est pour Sécurisé (Chiffré)",
      "C'est pareil",
      "S pour Super",
      "S pour Slow"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Le cadenas vert signifie que la connexion entre vous et le site est chiffrée.",
    "concept": "Web"
  },
  {
    "id": 182,
    "question": "Moteur de Wikipédia ?",
    "options": [
      "MediaWiki",
      "WordPress",
      "Joomla",
      "Drupal"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Logiciel libre qui fait tourner Wikipédia et permet la contribution facile.",
    "concept": "Technique"
  },
  {
    "id": 183,
    "question": "Qu'est-ce que 'F-Droid' ?",
    "options": [
      "Un robot",
      "Magasin d'applis Android libres",
      "Un virus",
      "Un téléphone"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Alternative au Play Store ne proposant que des logiciels libres et respectueux.",
    "concept": "App Store"
  },
  {
    "id": 184,
    "question": "Obsolescence 'esthétique' ?",
    "options": [
      "C'est moche",
      "Le produit a l'air vieux (design)",
      "C'est cassé",
      "C'est lent"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Changer la forme ou la couleur pour démoder l'ancien modèle fonctionnel.",
    "concept": "Design"
  },
  {
    "id": 185,
    "question": "ProtonMail est connu pour...",
    "options": [
      "Sa lenteur",
      "Sa sécurité et vie privée (Suisse)",
      "Être Google",
      "Rien"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Service de mail chiffré basé en Suisse, hors de portée des lois US.",
    "concept": "Vie Privée"
  },
  {
    "id": 186,
    "question": "Qu'est-ce qu'un 'Terminal' ?",
    "options": [
      "Un aéroport",
      "Interface ligne de commande (Écran noir)",
      "Une fin",
      "Un bug"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Permet de contrôler l'ordinateur en tapant du texte, très puissant.",
    "concept": "Technique"
  },
  {
    "id": 187,
    "question": "Danger des assistants vocaux (Alexa/Siri) ?",
    "options": [
      "Ils parlent trop",
      "Écoute potentielle permanente",
      "Aucun",
      "Ils sont bêtes"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Des enregistrements sont parfois écoutés par des humains pour 'améliorer' le service.",
    "concept": "Vie Privée"
  },
  {
    "id": 188,
    "question": "Alternative à WeTransfer ?",
    "options": [
      "Swisstransfer / Lufi",
      "Google Drive",
      "Mail",
      "USB"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Permet d'envoyer de gros fichiers sans traçage et sans pub.",
    "concept": "Outil"
  },
  {
    "id": 189,
    "question": "Low-Tech numérique ?",
    "options": [
      "Technologie nulle",
      "Technologie utile, durable et accessible",
      "High Tech",
      "Rien"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Faire mieux avec moins de complexité technique.",
    "concept": "Philosophie"
  },
  {
    "id": 190,
    "question": "Qu'est-ce que 'GPG' ?",
    "options": [
      "Un format image",
      "Outil de chiffrement de mails/fichiers",
      "Un jeu",
      "Un groupe"
    ],
    "correctAnswerIndex": 1,
    "explanation": "GNU Privacy Guard : standard pour sécuriser ses communications.",
    "concept": "Sécurité"
  },
  {
    "id": 191,
    "question": "Un 'Driver' (Pilote) ?",
    "options": [
      "Chauffeur",
      "Logiciel qui fait parler l'OS et le matériel",
      "Un avion",
      "Un outil"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Sans pilote libre, le matériel peut devenir inutilisable si le fabricant arrête le support.",
    "concept": "Technique"
  },
  {
    "id": 192,
    "question": "Qu'est-ce que le 'Zero Waste' numérique ?",
    "options": [
      "0 déchet",
      "Supprimer mails et fichiers inutiles",
      "Jeter l'ordi",
      "Rien"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Nettoyer ses données réduit l'espace serveur nécessaire et donc la pollution.",
    "concept": "Écologie"
  },
  {
    "id": 193,
    "question": "VPN gratuit ?",
    "options": [
      "Super affaire",
      "Revend vos données de navigation",
      "Sûr",
      "Recommandé"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Maintenir des serveurs coûte cher. Si c'est gratuit, ils se paient avec vos données.",
    "concept": "Sécurité"
  },
  {
    "id": 194,
    "question": "Licence MIT ?",
    "options": [
      "Université",
      "Licence libre très permissive",
      "Interdit",
      "Marque"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Permet de faire presque tout avec le code, même le fermer (contrairement à la GPL).",
    "concept": "Licence"
  },
  {
    "id": 195,
    "question": "Qu'est-ce qu'une 'Distro' ?",
    "options": [
      "Un magasin",
      "Une distribution Linux",
      "Un plat",
      "Une musique"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Diminutif pour désigner une version spécifique de Linux (Ubuntu, Fedora...).",
    "concept": "Vocabulaire"
  },
  {
    "id": 196,
    "question": "Obsolescence 'Irreversible' ?",
    "options": [
      "Batterie collée impossible à changer",
      "Vieux look",
      "Lent",
      "Cassé"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Quand le design empêche physiquement la réparation (colle forte, vis propriétaires).",
    "concept": "Réparation"
  },
  {
    "id": 197,
    "question": "Qu'est-ce que 'ReactOS' ?",
    "options": [
      "Un réacteur",
      "OS libre compatible Windows",
      "Un virus",
      "Un site"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Tentative de recréer Windows en open source pour faire tourner ses logiciels.",
    "concept": "OS"
  },
  {
    "id": 198,
    "question": "Les 'Terres Rares' sont...",
    "options": [
      "De la terre",
      "Métaux stratégiques (écrans/batteries)",
      "Des planètes",
      "Des îles"
    ],
    "correctAnswerIndex": 1,
    "explanation": "L'Europe en dépend totalement, la Chine en contrôle la majorité.",
    "concept": "Ressources"
  },
  {
    "id": 199,
    "question": "Qu'est-ce que 'Krita' ?",
    "options": [
      "Une île",
      "Logiciel de peinture numérique libre",
      "Un jeu",
      "Un chat"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Alternative puissante pour les artistes (concept art, illustration).",
    "concept": "Outil"
  },
  {
    "id": 200,
    "question": "Message final NIRD ?",
    "options": [
      "Tout casser",
      "Construire un avenir numérique choisi, pas subi",
      "Acheter Apple",
      "Éteindre internet"
    ],
    "correctAnswerIndex": 1,
    "explanation": "L'éducation doit former des citoyens éclairés capables de maîtriser leurs outils.",
    "concept": "Philosophie"
  }
]