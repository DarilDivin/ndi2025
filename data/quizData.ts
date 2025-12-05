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
    "question": "Quel est le danger principal de l'offre 'gratuite' de Google ou Microsoft pour les écoles ?",
    "options": [
      "Les bugs informatiques fréquents",
      "La lenteur du réseau de l'école",
      "Le profilage commercial des élèves dès le plus jeune âge",
      "La publicité affichée en classe"
    ],
    "correctAnswerIndex": 2,
    "explanation": "C'est un piège marketing. En habituant les élèves à leurs outils dès l'école primaire, ces géants fidélisent de futurs clients (enfermement cognitif) et collectent des données comportementales pour construire des profils publicitaires et psychologiques exploitables à vie.",
    "concept": "Marketing scolaire"
  },
  {
    "id": 2,
    "question": "Pourquoi la fin du support de Windows 10 en 2025 est-elle un problème critique pour l'éducation ?",
    "options": [
      "Obsolescence forcée de millions de PC scolaires encore fonctionnels",
      "Il faudra changer toutes les souris",
      "Les élèves n'aimeront pas le design de Windows 11",
      "C'est un problème uniquement pour les jeux vidéo"
    ],
    "correctAnswerIndex": 0,
    "explanation": "C'est l'exemple parfait de la dépendance technologique. Une décision unilatérale de Microsoft rend obsolètes des parcs informatiques entiers qui fonctionnent pourtant matériellement, forçant les collectivités à dépenser des millions d'euros d'argent public inutilement.",
    "concept": "Obsolescence"
  },
  {
    "id": 3,
    "question": "Qu'est-ce que le 'Vendor Lock-in' (Enfermement propriétaire) dans un contexte scolaire ?",
    "options": [
      "Fermer l'école à clé le soir",
      "Un logiciel de sécurité pour les portes",
      "Une salle informatique sans fenêtres",
      "L'impossibilité technique et financière de changer de fournisseur"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Une fois que l'école a stocké tous ses cours et notes sur un format propriétaire (ex: Microsoft Teams), le coût et la difficulté technique pour en sortir deviennent si élevés que l'institution est piégée et doit accepter toutes les augmentations de tarifs futures.",
    "concept": "Dépendance"
  },
  {
    "id": 4,
    "question": "En quoi le 'CLOUD Act' américain menace-t-il la souveraineté des écoles françaises ?",
    "options": [
      "Il permet à la justice US de saisir les données hébergées par des entreprises américaines",
      "Il provoque des pannes de réseau en cas de mauvais temps",
      "Il ralentit la connexion internet en Europe",
      "Il interdit l'usage des tablettes en classe"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Cette loi extraterritoriale permet aux USA de saisir les données hébergées par des entreprises américaines (Microsoft, Google, AWS), même si les serveurs sont situés physiquement en France. Les données scolaires ne sont donc plus sous la protection exclusive de la loi française.",
    "concept": "Souveraineté"
  },
  {
    "id": 5,
    "question": "Pourquoi l'Éducation Nationale développe-t-elle la plateforme 'apps.education.fr' ?",
    "options": [
      "Pour copier exactement Google",
      "Pour garantir l'indépendance numérique des enseignants avec des outils libres",
      "Pour dépenser le budget excédentaire",
      "Pour faire de la concurrence à Amazon"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Pour ne plus dépendre du bon vouloir d'entreprises privées étrangères. Cette plateforme offre des outils (visio, cloud, blogs) basés sur des logiciels libres, hébergés par l'État, garantissant que les données pédagogiques restent la propriété de la communauté éducative.",
    "concept": "Alternative"
  },
  {
    "id": 6,
    "question": "Quel est l'impact pédagogique d'imposer des formats fermés (.docx, .ppt) aux élèves ?",
    "options": [
      "C'est plus facile à noter pour les profs",
      "Aucun, c'est le standard mondial",
      "Cela force indirectement les familles à acheter un logiciel spécifique",
      "C'est plus joli à l'impression"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Cela crée une discrimination. L'école publique gratuite ne devrait pas imposer l'achat de licences logicielles coûteuses aux familles pour que les élèves puissent faire leurs devoirs. Les formats ouverts (.odt) garantissent l'égalité d'accès.",
    "concept": "Égalité"
  },
  {
    "id": 7,
    "question": "Si une école stocke ses bulletins scolaires sur un Cloud GAFAM...",
    "options": [
      "Elle perd le contrôle sur la confidentialité et la souveraineté des données",
      "C'est la solution la plus sécurisée du monde",
      "C'est obligatoire selon le ministère",
      "Cela permet aux parents de les voir plus vite"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Elle confie des données sensibles (résultats, appréciations, vie scolaire) à un tiers dont le modèle économique est l'exploitation des données. En cas de fuite, de changement de conditions d'utilisation ou de conflit commercial, l'école est impuissante.",
    "concept": "Confidentialité"
  },
  {
    "id": 8,
    "question": "Pourquoi l'utilisation de YouTube en classe pose-t-elle un problème éthique ?",
    "options": [
      "Il y a trop de vidéos de chats",
      "La qualité vidéo est souvent mauvaise",
      "C'est interdit par le règlement intérieur",
      "Cela expose les élèves captifs à la publicité et au pistage Google"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Projeter YouTube en classe expose les élèves à de la publicité ciblée et nourrit l'algorithme de recommandation de Google. La plateforme éducative 'Pod' ou 'PeerTube' permet de diffuser du contenu pédagogique dans un environnement neutre.",
    "concept": "Éthique"
  },
  {
    "id": 9,
    "question": "Le projet NIRD propose de remplacer l'achat de licences Microsoft par...",
    "options": [
      "Des abonnements Apple",
      "De l'investissement humain (formation et maintenance locale)",
      "Rien du tout, on revient au papier",
      "L'achat de plus de matériel"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Plutôt que de payer des loyers à vie pour des licences logicielles (Windows/Office) à une multinationale, le budget est réorienté vers l'économie locale : former les techniciens et les enseignants à l'usage et à la maintenance de systèmes libres durables.",
    "concept": "Économie"
  },
  {
    "id": 10,
    "question": "Qu'est-ce que 'l'enfermement cognitif' des élèves ?",
    "options": [
      "Une punition scolaire",
      "L'interdiction de sortir de la classe",
      "Ne savoir utiliser QU'UN seul outil commercial (ex: Word) au lieu de comprendre le concept",
      "L'utilisation de casques de réalité virtuelle"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Si l'école n'enseigne que 'Word' et 'Excel' (des marques) au lieu du 'traitement de texte' et du 'tableur' (des concepts), elle forme des consommateurs dépendants d'une marque plutôt que des citoyens capables de s'adapter à n'importe quel outil numérique.",
    "concept": "Pédagogie"
  },
  {
    "id": 11,
    "question": "Pourquoi est-il risqué de baser toute la pédagogie sur des tablettes iPad ?",
    "options": [
      "Elles sont fragiles",
      "Les élèves jouent trop avec",
      "L'école devient totalement dépendante de l'App Store d'Apple (Walled Garden)",
      "C'est trop léger pour travailler"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Apple contrôle à 100% ce qui peut être installé ou non. Si Apple décide de retirer une application éducative ou de changer ses conditions tarifaires, l'école n'a aucune alternative technique car le matériel est verrouillé.",
    "concept": "Autonomie"
  },
  {
    "id": 12,
    "question": "Quel est l'avantage démocratique du code Open Source à l'école ?",
    "options": [
      "Transparence totale : on peut vérifier comment le logiciel fonctionne",
      "C'est moins cher à l'achat",
      "C'est plus moderne",
      "C'est fabriqué aux États-Unis"
    ],
    "correctAnswerIndex": 0,
    "explanation": "L'école doit enseigner ce qui est vérifiable. Un logiciel propriétaire est une 'boîte noire' secrète. Le logiciel libre permet d'expliquer comment la machine traite l'information, sans magie ni zone d'ombre.",
    "concept": "Transparence"
  },
  {
    "id": 13,
    "question": "La massification des outils numériques GAFAM à l'école a-t-elle réduit la fracture numérique ?",
    "options": [
      "Oui, totalement",
      "On ne sait pas",
      "C'est pareil qu'avant",
      "Non, elle a créé de nouvelles inégalités (usagers passifs vs créateurs)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Équiper massivement sans former au fonctionnement profond crée l'illusion de la compétence. Les élèves savent 'cliquer' sur des applis ergonomiques conçues pour consommer, mais savent de moins en moins comment fonctionne la machine ou comment créer (coder, réparer).",
    "concept": "Société"
  },
  {
    "id": 14,
    "question": "Pourquoi l'auto-hébergement (serveur au lycée) est-il un acte de résistance ?",
    "options": [
      "Pour jouer en réseau local",
      "Pour chauffer la salle serveur",
      "Pour reprendre le contrôle physique et politique des données",
      "Pour faire du bruit"
    ],
    "correctAnswerIndex": 2,
    "explanation": "C'est la preuve qu'on peut exister sur Internet sans passer par les 'seigneurs féodaux' du numérique. Cela permet aux élèves de comprendre que le 'Cloud' n'est pas magique : c'est juste un ordinateur qu'on administre soi-même.",
    "concept": "Souveraineté"
  },
  {
    "id": 15,
    "question": "En quoi l'utilisation de Chromebooks (Google) est-elle problématique ?",
    "options": [
      "Ils sont moches",
      "Ils sont trop rapides",
      "Ils n'ont pas de souris",
      "Compte Google obligatoire : chaque enfant est fiché dans l'écosystème commercial"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Ces ordinateurs peu chers sont des terminaux de collecte de données. Ils obligent chaque élève à posséder un compte Google, liant définitivement son identité scolaire à l'écosystème commercial de l'entreprise.",
    "concept": "Identité"
  },
  {
    "id": 16,
    "question": "Quelle est la différence entre un 'Citoyen numérique' et un 'Consommateur numérique' ?",
    "options": [
      "La capacité à choisir, maîtriser et comprendre ses outils",
      "Le prix de son ordinateur",
      "Son âge",
      "La vitesse de sa connexion fibre"
    ],
    "correctAnswerIndex": 0,
    "explanation": "L'école doit former des citoyens libres, capables de choisir leurs outils en fonction de critères éthiques et techniques, et non des consommateurs passifs qui subissent les mises à jour et les conditions d'utilisation imposées.",
    "concept": "Philosophie"
  },
  {
    "id": 17,
    "question": "Le RGPD est-il compatible avec l'usage massif des GAFAM à l'école ?",
    "options": [
      "Oui, totalement",
      "Le RGPD ne concerne pas l'école",
      "Non, le transfert de données hors UE met souvent les écoles dans l'illégalité",
      "Seulement le week-end"
    ],
    "correctAnswerIndex": 2,
    "explanation": "En théorie, le transfert de données hors UE est très encadré. En pratique, l'utilisation massive de solutions US par facilité met souvent les établissements scolaires en situation d'illégalité vis-à-vis de la protection des données des mineurs.",
    "concept": "Loi"
  },
  {
    "id": 18,
    "question": "Comment le Logiciel Libre favorise-t-il l'économie locale ?",
    "options": [
      "Il est vendu en supermarché",
      "Il est taxé par l'État",
      "Il est fabriqué en Chine",
      "Il crée des emplois de service de proximité (installation, formation, maintenance)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "L'argent qui ne part pas en Californie dans l'achat de licences (Microsoft/Adobe) peut être investi localement pour payer des prestataires informatiques locaux qui installent, maintiennent et forment aux outils libres.",
    "concept": "Économie"
  },
  {
    "id": 19,
    "question": "Quel risque pose la centralisation des outils (ex: Tout mettre sur Microsoft 365) ?",
    "options": [
      "C'est plus simple à gérer",
      "Point de défaillance unique : si Microsoft plante, l'école s'arrête",
      "Aucun risque",
      "C'est moins cher"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Si le fournisseur a une panne mondiale (comme en juillet 2024), toute l'école s'arrête : plus de mails, plus de fichiers, plus de visio. La décentralisation avec des outils diversifiés rend le système beaucoup plus résilient.",
    "concept": "Résilience"
  },
  {
    "id": 20,
    "question": "La 'Sobriété Numérique' est-elle compatible avec le modèle économique des GAFAM ?",
    "options": [
      "Oui, ils font des efforts",
      "Non, leur modèle repose sur le renouvellement constant et l'addiction",
      "Peut-être",
      "Avec des panneaux solaires, oui"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Le business model des géants de la tech repose sur l'obsolescence programmée (matérielle et logicielle) pour vendre toujours plus de nouveaux appareils et capturer plus d'attention. Une démarche écologique sincère nécessite de sortir de ce cycle.",
    "concept": "Écologie"
  },
  {
    "id": 21,
    "question": "Qu'est-ce que la 'manne financière' des données scolaires ?",
    "options": [
      "L'argent de la cantine",
      "Le budget informatique",
      "La valeur immense des données d'apprentissage pour entraîner les IA",
      "La paye des professeurs"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Les données d'apprentissage (erreurs types, temps de réaction, progression) valent de l'or pour entraîner les IA. En utilisant des plateformes propriétaires gratuites, l'école offre ce trésor gratuitement aux entreprises privées.",
    "concept": "Données"
  },
  {
    "id": 22,
    "question": "Pourquoi l'usage exclusif de WhatsApp pour la communication scolaire (parents/profs) est-il critique ?",
    "options": [
      "C'est très pratique",
      "C'est une application verte",
      "Il n'y a pas de risque",
      "Cela exclut ceux qui refusent de livrer leurs données à Meta (Facebook)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Cela force les parents et enseignants à accepter de livrer leurs métadonnées à Facebook/Meta pour accéder à des informations publiques essentielles. Le service public doit être accessible sans contrepartie commerciale.",
    "concept": "Inclusion"
  },
  {
    "id": 23,
    "question": "L'utilisation de 'Google Forms' pour des sondages internes...",
    "options": [
      "Envoie les réponses sur des serveurs US, posant un problème de confidentialité",
      "Est recommandée par le ministère",
      "Est totalement anonyme",
      "Est obligatoire"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Même pour un simple sondage cantine, les données transitent par les USA. 'Framaforms' ou les outils de l'ENT (Espace Numérique de Travail) sont des alternatives souveraines qui respectent la confidentialité.",
    "concept": "Confidentialité"
  },
  {
    "id": 24,
    "question": "Quel est le lien entre souveraineté numérique et démocratie ?",
    "options": [
      "Aucun lien",
      "Voter en ligne",
      "Ne pas dépendre d'une puissance étrangère pour le fonctionnement de ses services publics",
      "Avoir un président qui sait coder"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Un pays dont le système éducatif dépend entièrement d'outils contrôlés par une puissance étrangère (USA/Chine) perd sa capacité d'autodétermination. En cas de crise géopolitique, l'école pourrait être techniquement 'débranchée' ou espionnée.",
    "concept": "Politique"
  },
  {
    "id": 25,
    "question": "Pourquoi les alternatives Libres (Moodle, BigBlueButton) semblent-elles parfois 'moins jolies' ?",
    "options": [
      "Les développeurs sont incompétents",
      "C'est fait exprès pour être austère",
      "Elles sont trop vieilles",
      "Le budget va dans la fonctionnalité et la sécurité, pas dans le marketing et l'addiction"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Les GAFAM dépensent des milliards en 'Design de l'attention' pour rendre leurs outils addictifs et séduisants. Les logiciels libres concentrent leurs ressources limitées sur la fonctionnalité, la sécurité et la liberté de l'utilisateur.",
    "concept": "Design"
  },
  {
    "id": 26,
    "question": "L'IA générative (ChatGPT) dans l'éducation risque de...",
    "options": [
      "Créer une dépendance intellectuelle à un oracle privé opaque",
      "Remplacer les professeurs",
      "Rendre les élèves plus intelligents",
      "Ne rien changer du tout"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Si l'élève délègue sa réflexion à une IA propriétaire fermée, il perd sa capacité critique. Il devient dépendant d'un outil dont il ignore les biais et le fonctionnement, ce qui est le contraire de l'émancipation intellectuelle.",
    "concept": "IA"
  },
  {
    "id": 27,
    "question": "Le concept de 'Commun Numérique Éducatif' s'oppose à...",
    "options": [
      "La propriété privée du savoir financé par l'argent public",
      "L'école publique",
      "L'existence d'Internet",
      "L'électricité"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Les ressources pédagogiques financées par l'argent public devraient être des 'communs' accessibles à tous (comme Wikipédia), et non être enfermées derrière des barrières payantes ou des plateformes propriétaires.",
    "concept": "Commun"
  },
  {
    "id": 28,
    "question": "Pourquoi la maintenance d'un parc Linux coûte-t-elle souvent moins cher à long terme ?",
    "options": [
      "Les techniciens sont bénévoles",
      "On ne fait pas de maintenance",
      "C'est faux, c'est plus cher",
      "Stabilité, absence de virus classique, et automatisation facile"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Au-delà de la gratuité des licences, Linux est beaucoup plus stable et sécurisé. Une fois configuré, il demande beaucoup moins d'interventions de dépannage (virus, ralentissements) que Windows, libérant du temps technique.",
    "concept": "Technique"
  },
  {
    "id": 29,
    "question": "Que révèle l'expression 'Il faut s'adapter au marché' pour justifier Windows à l'école ?",
    "options": [
      "C'est du bon sens",
      "C'est une loi économique",
      "Une soumission de l'école aux besoins immédiats des entreprises privées",
      "C'est la seule vérité"
    ],
    "correctAnswerIndex": 2,
    "explanation": "L'école a pour mission de former des esprits libres et adaptables, pas de pré-formater de la main-d'œuvre pour un logiciel spécifique dominant à un instant T. La culture informatique dépasse la simple maîtrise d'un produit commercial.",
    "concept": "Philosophie"
  },
  {
    "id": 30,
    "question": "En résumé, le projet NIRD est une transition...",
    "options": [
      "Uniquement technique",
      "Purement financière",
      "Politique, Écologique et Pédagogique",
      "Esthétique avant tout"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Ce n'est pas juste changer de logiciel ou d'OS. C'est choisir un modèle de société : celui du partage, de la durabilité et de l'indépendance, contre celui de la rente, du gaspillage et de la surveillance de masse.",
    "concept": "Conclusion"
  }
]