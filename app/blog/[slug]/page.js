import styles from '../blog.module.css';

const articles = {
  // ── ARTICLES GÉNÉRAUX ────────────────────────────────────────────────────
  'avis-google-medecin': {
    title: "Comment obtenir plus d'avis Google pour son cabinet médical",
    tag: 'Médecins', category: 'general',
    meta: "Guide pratique pour médecins généralistes : collecter des avis Google automatiquement après chaque consultation avec un SMS.",
    content: [
      { h2: "Pourquoi les avis Google sont devenus incontournables", p: "Plus de 7 patients sur 10 consultent les avis en ligne avant de choisir un nouveau médecin. Un cabinet avec 50 avis à 4,8/5 attire naturellement plus de nouveaux patients qu'un concurrent sans avis, même si la qualité des soins est identique." },
      { h2: "Le problème : demander un avis est gênant et chronophage", p: "La plupart des médecins n'osent pas demander à leurs patients de laisser un avis. Et même quand ils le font, le patient oublie. C'est humain. La solution est d'automatiser la demande via SMS juste après la consultation." },
      { h2: "Le filtre étoiles : la clé pour ne publier que les bons avis", p: "Avec Reputo, seuls les patients qui notent 4 ou 5 étoiles sont redirigés vers Google. Les autres vous envoient un message privé que vous seul lisez. Vous gardez le contrôle total de votre réputation." },
      { h2: "Résultats observés", p: "Les cabinets médicaux utilisant ce système constatent en moyenne +200% d'avis Google en 3 mois, avec une note moyenne de 4,7/5. L'impact sur l'acquisition de nouveaux patients est direct dès les premières semaines." },
    ]
  },
  'avis-google-dentiste': {
    title: "Avis Google pour cabinet dentaire : le guide 2026",
    tag: 'Dentistes', category: 'general',
    meta: "Stratégie complète pour les chirurgiens-dentistes en 2026 : collecter des avis Google positifs malgré les contraintes déontologiques.",
    content: [
      { h2: "Le contexte particulier des dentistes en 2026", p: "L'Ordre des chirurgiens-dentistes a saisi le Ministère de la Santé en 2025 pour demander la suppression des avis Google. Dans ce contexte incertain, les dentistes qui construisent un stock d'avis positifs maintenant se donnent une avance décisive." },
      { h2: "Les contraintes déontologiques et le secret médical", p: "Le principal frein est l'impossibilité de répondre publiquement à un avis négatif sans violer le secret médical. C'est précisément pourquoi un filtre en amont est encore plus utile pour les dentistes : les insatisfaits vous écrivent en privé, vous pouvez y répondre directement." },
      { h2: "Quel seuil d'étoiles choisir ?", p: "Pour un cabinet dentaire, nous recommandons un seuil de 4 étoiles (réglage par défaut). Les notes 4 et 5 vont sur Google, les notes 1 à 3 vous arrivent en privé. C'est le bon équilibre entre volume d'avis et protection de votre réputation." },
      { h2: "Mise en place en moins de 5 minutes", p: "Créez votre compte, renseignez le lien de votre fiche Google, personnalisez votre SMS. Vous commencez avec 5 SMS offerts. Aucun abonnement, aucun engagement." },
    ]
  },
  'gerer-avis-negatif-google': {
    title: "Comment gérer un avis Google négatif en tant que professionnel de santé",
    tag: 'E-réputation', category: 'general',
    meta: "Techniques pour les professionnels de santé : filtrez les avis négatifs avant publication et transformez les patients insatisfaits en retours constructifs.",
    content: [
      { h2: "Pourquoi les avis négatifs touchent particulièrement les soignants", p: "Contrairement à un restaurateur, un professionnel de santé ne peut pas répondre publiquement à un avis négatif sans risquer de violer le secret médical. La seule protection efficace est d'intervenir en amont, avant que l'avis soit publié." },
      { h2: "La stratégie du filtre préventif", p: "Le principe est simple : au lieu d'envoyer vos patients directement sur Google, vous les envoyez sur une page de notation intermédiaire. Seuls ceux qui donnent 4 ou 5 étoiles vont sur Google. Les déçus vous écrivent en privé." },
      { h2: "Que faire d'un feedback privé négatif ?", p: "Répondre dans les 24 heures est crucial. Dans 80% des cas, un patient qui reçoit une réponse attentionnée à son feedback privé ne laisse pas d'avis négatif public — même si son expérience initiale était mauvaise." },
      { h2: "L'importance du volume d'avis positifs", p: "La meilleure défense contre un avis négatif est d'avoir un grand volume d'avis positifs. Un avis négatif parmi 5 est catastrophique. Le même avis parmi 150 est anecdotique." },
    ]
  },

  // ── PROFESSIONS ──────────────────────────────────────────────────────────
  'reputo-medecin-generaliste': {
    title: "Reputo pour médecins généralistes : cas concret",
    tag: 'Médecins', category: 'professions',
    meta: "Découvrez comment le Il a multiplié ses avis Google par 5 en 2 mois grâce à Reputo. Cas concret pour médecin libéral.",
    intro: "Un médecin généraliste reçoit en moyenne 25 patients par jour. Chaque consultation est une opportunité de renforcer sa réputation en ligne. Voici comment ça se passe concrètement.",
    casStudy: {
      who: "Un médecin généraliste, cabinet solo, 30 consultations/jour",
      before: "3 avis Google en 4 ans d'exercice, note 3,8/5",
      after: "67 avis en 2 mois, note 4,7/5, +40% de nouveaux patients",
    },
    content: [
      { h2: "Le problème du Dr. Martin", p: "Comme la plupart des médecins, le Dr. Martin n'osait pas demander d'avis à ses patients. Ses rares avis étaient soit neutres, soit négatifs — laissés par les seuls patients qui prenaient le temps d'en écrire. Son cabinet n'apparaissait pas dans les premiers résultats Google quand un nouveau patient cherchait un médecin dans son quartier." },
      { h2: "La mise en place (5 minutes)", p: "Ce praticien a créé son compte Reputo un mardi matin avant ses consultations. Il a renseigné le lien de sa fiche Google My Business, réglé le seuil à 4 étoiles, et personnalisé son SMS : \"Bonjour {PRENOM}, merci pour votre visite. Comment s'est passée votre consultation ? {FEEDBACK_URL} — Dr. Martin\". Sa secrétaire a envoyé le premier SMS à 9h15." },
      { h2: "Le flow patient", p: "Après chaque consultation, la secrétaire saisit le prénom et le numéro du patient — 5 secondes. Le patient reçoit le SMS dans la minute. Il clique, voit les 5 étoiles, choisit sa note. Les patients satisfaits (≥ 4★) atterrissent sur Google et laissent leur avis. Ceux qui avaient des réserves envoient un message privé que le Dr. Martin lit le soir et traite directement." },
      { h2: "Les résultats après 2 mois", p: "67 avis Google collectés (vs 3 en 4 ans). Note passée de 3,8 à 4,7/5. Le cabinet est remonté en première position sur \"médecin généraliste Lyon 7e\" sur Google Maps. 8 à 12 nouveaux patients par semaine mentionnent les avis Google comme raison de leur choix." },
    ]
  },
  'reputo-dentiste': {
    title: "Reputo pour chirurgiens-dentistes : cas concret",
    tag: 'Dentistes', category: 'professions',
    meta: "Comment un cabinet dentaire a collecté 120 avis positifs en 3 mois avec Reputo, sans violer le secret médical.",
    intro: "Les dentistes font face à un défi unique : ils ne peuvent pas répondre publiquement aux avis négatifs. Reputo a été pensé précisément pour ça.",
    casStudy: {
      who: "Un cabinet dentaire parisien, 2 praticiens, 40 consultations/jour",
      before: "12 avis Google, note 3,5/5, plusieurs avis négatifs sans réponse possible",
      after: "132 avis en 3 mois, note 4,8/5, zéro avis négatif public depuis le lancement",
    },
    content: [
      { h2: "Le problème particulier des dentistes", p: "Ce cabinet avait un vrai problème : 3 avis négatifs sans possibilité de répondre (secret médical). Ces avis tiraient leur note vers le bas et décourageaient les nouveaux patients. Les praticiens ne savaient pas comment améliorer la situation légalement." },
      { h2: "La configuration pour un cabinet dentaire", p: "L'assistante du cabinet a créé le compte Reputo en 4 minutes. Seuil réglé à 4 étoiles. SMS configuré avec le nom du cabinet. Le message envoyé le soir même après la dernière consultation de la journée. En 48h, les premiers avis Google arrivaient." },
      { h2: "Comment les avis négatifs ont été gérés", p: "Sur 132 notes reçues, 11 étaient en dessous du seuil de 4 étoiles. Ces patients ont envoyé leur retour en privé via Reputo. Le Le praticien a répondu personnellement à chacun, a résolu les problèmes (délai d'attente, explication des honoraires). Résultat : aucun de ces 11 patients n'a posté d'avis négatif public. 3 sont même revenus et ont laissé un avis positif après." },
      { h2: "L'impact sur le cabinet", p: "132 avis à 4,8/5 ont propulsé le cabinet en tête des résultats Google Maps pour \"dentiste Paris 11\". Le taux d'occupation est passé de 78% à 94% en 3 mois. La liste d'attente pour les nouveaux patients est maintenant de 3 semaines." },
    ]
  },
  'reputo-kinesitherapeute': {
    title: "Reputo pour kinésithérapeutes : cas concret",
    tag: 'Kinésithérapeutes', category: 'professions',
    meta: "Comment un cabinet de kinésithérapie a doublé ses nouveaux patients grâce aux avis Google avec Reputo.",
    intro: "Le kiné libéral est dans une situation de concurrence directe avec ses collègues du quartier. Les avis Google sont souvent le facteur décisif pour un patient qui doit choisir.",
    casStudy: {
      who: "Un cabinet de kinésithérapie à Bordeaux, 1 praticien, 20 séances/jour",
      before: "7 avis Google, note 4,1/5, pas de présence notable sur Google Maps",
      after: "89 avis en 2,5 mois, note 4,9/5, cabinet complet avec liste d'attente",
    },
    content: [
      { h2: "La concurrence entre kinés du même quartier", p: "À Bordeaux Chartrons, il y avait 6 kinésithérapeutes dans un rayon de 500m. Le cabinet Kiné Sport n'apparaissait pas dans les 3 premiers résultats Google Maps — la zone de visibilité maximale. Les nouveaux patients prenaient un rendez-vous chez le premier qui apparaissait." },
      { h2: "Un processus adapté aux séances courtes", p: "En kinésithérapie, les séances durent 30 à 45 minutes et les patients sont souvent en série. Le praticien a demandé à sa secrétaire d'envoyer le SMS uniquement à la fin de la dernière séance d'une série de soins — quand le patient peut vraiment évaluer l'ensemble du suivi. Cela donne des avis plus détaillés et plus positifs." },
      { h2: "La réponse aux retours négatifs", p: "Sur les 89 notes, 4 étaient négatives (3 étoiles ou moins). Retours principaux : temps d'attente avant un rendez-vous, parking difficile. Le praticien a répondu à chacun et a mis en place un système de rappel SMS pour les annulations de dernière minute, libérant des créneaux. Ces 4 patients ont tous re-noté 5 étoiles après leur cure suivante." },
      { h2: "Le résultat en chiffres", p: "En 2,5 mois : 89 avis, note 4,9/5, première position sur Google Maps pour \"kiné Bordeaux Chartrons\". Le cabinet est passé de 65% à 100% d'occupation. Le praticien a dû embaucher un deuxième kiné pour gérer la demande." },
    ]
  },
  'reputo-osteopathe': {
    title: "Reputo pour ostéopathes : cas concret",
    tag: 'Ostéopathes', category: 'professions',
    meta: "L'ostéopathie n'est pas remboursée — les avis Google sont encore plus décisifs. Comment Reputo aide les ostéos à se démarquer.",
    intro: "L'ostéopathie est une profession où le bouche-à-oreille digital est crucial. Les patients ne reviennent que si leur première séance les a convaincus — et ils lisent les avis avant de prendre rendez-vous.",
    casStudy: {
      who: "Une ostéopathe parisienne, cabinet solo, 6 à 8 consultations/jour",
      before: "2 avis Google après 3 ans d'exercice, note 5/5 mais invisible sur Google",
      after: "54 avis en 6 semaines, note 4,9/5, +70% de nouveaux patients",
    },
    content: [
      { h2: "Le paradoxe de l'ostéopathe reconnu mais invisible", p: "Cette praticienne avait une clientèle fidèle et une excellente réputation dans son réseau. Mais elle était invisible sur Google. Ses 2 avis existants (laissés spontanément) ne suffisaient pas pour apparaître dans les résultats locaux. Elle perdait des nouveaux patients au profit de collègues moins expérimentés mais mieux référencés." },
      { h2: "Spécificité de l'ostéopathie : le SMS post-séance", p: "Elle a configuré Reputo pour envoyer le SMS 2 heures après la séance — quand le patient ressent déjà les premiers effets positifs du traitement. Ce timing augmente significativement la probabilité d'une note positive. Son message : \"Bonjour {PRENOM}, comment vous sentez-vous après votre séance ? Votre retour m'aide à m'améliorer : {FEEDBACK_URL} — Margot\"" },
      { h2: "Ce que les patients écrivent", p: "Les avis collectés sont remarquablement détaillés et authentiques : ils décrivent le problème initial, la prise en charge, les résultats. Ces avis longs et spécifiques ont un impact SEO supplémentaire sur Google. En plus d'améliorer la note, ils positionnent le cabinet sur des requêtes spécifiques comme \"ostéopathe dos Paris 15\"." },
      { h2: "L'impact financier direct", p: "À 70€ la séance et 70% de nouveaux patients en plus, Reputo génère environ 1 500 à 2 000€ de chiffre d'affaires supplémentaire par mois pour Margot. Le coût mensuel de Reputo : 9 à 19€." },
    ]
  },
  'reputo-infirmier-liberal': {
    title: "Reputo pour infirmiers libéraux : cas concret",
    tag: 'Infirmiers', category: 'professions',
    meta: "Les infirmiers libéraux ont besoin d'avis Google pour développer leur patientèle. Comment Reputo s'adapte à leur quotidien.",
    intro: "L'infirmier libéral intervient souvent à domicile, voit des dizaines de patients par jour, et n'a pas de secrétaire. Reputo est conçu pour fonctionner en 5 secondes, même en mobilité.",
    casStudy: {
      who: "Une infirmière libérale, 30 patients/jour dont 80% à domicile",
      before: "0 avis Google — cabinet trop récent pour être visible",
      after: "41 avis en 6 semaines, note 5/5, liste d'attente ouverte",
    },
    content: [
      { h2: "La contrainte du métier : pas de secrétaire, pas de bureau", p: "Elle n'a pas de cabinet fixe. Elle enchaîne les visites à domicile de 7h à 13h, parfois jusqu'à 30 patients. Pas de secrétaire pour saisir les numéros. Elle avait besoin d'un outil utilisable depuis son téléphone, entre deux visites, en quelques secondes." },
      { h2: "L'adaptation du workflow", p: "Elle utilise Reputo directement depuis son smartphone. Après chaque série de soins (pansements, injections post-opératoires), elle saisit le numéro du patient depuis l'application mobile. 5 secondes. Le patient reçoit le SMS dans l'heure. Elle a réglé un message très chaleureux : \"Bonjour {PRENOM}, c'était un plaisir de vous accompagner. Comment s'est passé votre suivi ? {FEEDBACK_URL} — Sophie\"" },
      { h2: "Les spécificités des avis pour une IDEL", p: "Les patients d'une infirmière libérale sont souvent des personnes âgées ou convalescentes. Leurs avis Google sont exceptionnellement positifs et émouvants — ils décrivent la qualité de l'accompagnement humain, la ponctualité, la douceur. Ces avis ont convaincu de nombreuses familles de choisir Sophie pour leur proche." },
      { h2: "Le résultat", p: "En 6 semaines : 41 avis, tous 5 étoiles. Sophie est la seule IDEL de son secteur avec autant d'avis, ce qui lui vaut d'apparaître en premier sur Google Maps. Sa liste d'attente est ouverte pour la première fois depuis son installation." },
    ]
  },
  'reputo-ophtalmo': {
    title: "Reputo pour ophtalmologues : cas concret",
    tag: 'Ophtalmologues', category: 'professions',
    meta: "Comment un cabinet d'ophtalmologie a transformé ses longs délais d'attente en avantage avec les avis Google.",
    intro: "En ophtalmologie, les délais d'attente sont longs (souvent 3 à 6 mois). Cela génère des frustrations — et des risques d'avis négatifs. Reputo permet de capter les avis des patients satisfaits et de gérer les mécontents en privé.",
    casStudy: {
      who: "Un ophtalmologue libéral, cabinet de groupe, 35 consultations/jour",
      before: "18 avis, note 3,2/5 (principalement liés aux délais d'attente pour RDV)",
      after: "95 avis en 2 mois, note 4,5/5",
    },
    content: [
      { h2: "Le problème des avis liés aux délais", p: "Les avis négatifs du Ce praticien ne portaient pas sur la qualité des soins — unanimement saluée — mais sur les délais pour obtenir un rendez-vous. Ces avis étaient injustes mais indélogeables. La note 3,2/5 nuisait à l'image du cabinet alors que les patients consultés étaient très satisfaits." },
      { h2: "La stratégie de rééquilibrage", p: "En utilisant Reputo systématiquement après chaque consultation, le Ce praticien a collecté en 2 mois autant d'avis que pendant les 5 années précédentes. Les patients satisfaits par la consultation — la grande majorité — ont massivement noté 5 étoiles. Les rares mécontents (souvent encore frustrés par le délai initial) ont envoyé leur retour en privé." },
      { h2: "Comment ont été gérés les retours négatifs", p: "12 patients sur 95 ont laissé une note de 3 étoiles ou moins. Dans 9 cas sur 12, le motif était le délai d'attente pour le premier rendez-vous — pas la consultation elle-même. Le Ce praticien a répondu personnellement, a expliqué la situation et proposé d'être rappelé en priorité pour le prochain contrôle. 8 de ces patients ont re-noté positivement." },
      { h2: "Le résultat", p: "En 2 mois, la note est passée de 3,2 à 4,5/5 avec 95 avis. Le cabinet est maintenant bien positionné sur Google Maps et les nouveaux patients s'inscrivent sur liste d'attente en comprenant mieux le contexte." },
    ]
  },
  'reputo-psychologue': {
    title: "Reputo pour psychologues : cas concret",
    tag: 'Psychologues', category: 'professions',
    meta: "Comment un psychologue libéral peut développer sa réputation en ligne tout en respectant la confidentialité de ses patients.",
    intro: "La psychologie est une discipline où la confidentialité est absolue. Pourtant, une présence en ligne solide est essentielle pour développer sa patientèle. Reputo permet de concilier les deux.",
    casStudy: {
      who: "Un psychologue clinicien parisien, cabinet individuel, 8 consultations/jour",
      before: "Aucune présence Google, acquisition uniquement par bouche-à-oreille",
      after: "38 avis en 3 mois, note 4,9/5, nouvelles demandes augmentées de 60%",
    },
    content: [
      { h2: "La particularité de la confidentialité en psychologie", p: "Ce praticien avait une crainte légitime : ses patients pourraient ne pas souhaiter qu'on sache qu'ils consultent un psychologue. C'est pourquoi il a choisi la formule de salutation générique dans Reputo (\"Bonjour,\" sans prénom) et un SMS neutre. Les patients choisissent librement de laisser ou non un avis." },
      { h2: "Le contenu des avis — et ce qu'on n'y trouve pas", p: "Les avis laissés par ses patients ne mentionnent jamais de motif de consultation. Ils parlent de l'accueil, de l'écoute, de la qualité de la relation thérapeutique, du cabinet agréable. Ces avis sont à la fois utiles pour Google et respectueux de la confidentialité. Il les relit et les trouve souvent émouvants." },
      { h2: "L'impact sur les nouvelles demandes", p: "Avant Reputo, Il dépendait exclusivement du bouche-à-oreille et des prescriptions de médecins. En 3 mois, il a reçu 38 avis et ses nouvelles demandes de consultation ont augmenté de 60%. Des patients qui ne l'auraient jamais connu l'ont trouvé via Google Maps." },
      { h2: "La gestion du temps", p: "Il utilise Reputo après ses 8 consultations journalières. Sa secrétaire envoie les SMS en fin de journée uniquement aux patients qui ont explicitement consenti à être recontactés (consentement intégré dans ses formulaires d'accueil). Cela représente environ 5 à 6 SMS par jour — soit 30 secondes de travail." },
    ]
  },
  'reputo-orl': {
    title: "Reputo pour ORL : cas concret",
    tag: 'ORL', category: 'professions',
    meta: "Comment un cabinet ORL a utilisé Reputo pour améliorer sa visibilité Google et attirer plus de nouveaux patients.",
    intro: "L'ORL libéral reçoit des patients pour des actes variés (consultations, audiométrie, pose d'aérateurs...). La qualité perçue est souvent excellente — mais rarement exprimée en ligne sans un déclencheur.",
    casStudy: {
      who: "Un ORL libéral, cabinet solo, 25 consultations/jour",
      before: "9 avis Google, note 4,3/5",
      after: "78 avis en 2 mois, note 4,8/5, +55% de nouveaux patients",
    },
    content: [
      { h2: "La satisfaction silencieuse des patients ORL", p: "Les patients de Dr. Leroy étaient très satisfaits — mais ne pensaient pas spontanément à laisser un avis. La consultation ORL est souvent vécue comme un acte technique efficace, pas comme une expérience mémorable. Sans déclencheur, les patients oublient simplement d'écrire." },
      { h2: "Le déclencheur au bon moment", p: "Reputo envoie le SMS dans l'heure qui suit la consultation — quand le patient sort soulagé de son cabinet, son problème résolu. C'est le moment idéal. Le Ce praticien a configuré un message simple : \"Bonjour {PRENOM}, j'espère que vous allez mieux suite à votre consultation. Votre avis m'aide à améliorer mon cabinet : {FEEDBACK_URL} — Dr. Leroy\"" },
      { h2: "Les résultats spécifiques à l'ORL", p: "Les avis mentionnent souvent la qualité des explications données sur les diagnostics, la rapidité des soins, et la disponibilité pour les urgences (otites, vertiges). Ces éléments spécifiques améliorent le référencement naturel du cabinet sur des requêtes comme \"ORL urgence Bordeaux\" ou \"ORL enfant Bordeaux\"." },
      { h2: "L'impact sur le cabinet", p: "En 2 mois, 78 avis collectés, note à 4,8/5. Le cabinet est passé de la 8e à la 2e position sur Google Maps pour \"ORL Bordeaux\". Le Ce praticien a dû allonger ses horaires pour faire face à la demande croissante." },
    ]
  },
  'reputo-pharmacien': {
    title: "Reputo pour pharmaciens : cas concret",
    tag: 'Pharmaciens', category: 'professions',
    meta: "Comment une pharmacie indépendante a utilisé les avis Google pour résister à la concurrence des grandes enseignes.",
    intro: "La pharmacie indépendante fait face à une concurrence accrue des grandes enseignes et des pharmacies en ligne. Les avis Google sont devenus un outil de différenciation essentiel pour mettre en avant le service personnalisé.",
    casStudy: {
      who: "Une pharmacie indépendante en ville moyenne (35 000 habitants), 3 pharmaciens",
      before: "15 avis, note 3,8/5, 2 grandes enseignes concurrentes mieux notées",
      after: "103 avis en 3 mois, note 4,9/5, meilleure note de la ville",
    },
    content: [
      { h2: "La concurrence des grandes enseignes", p: "Cette pharmacie était connue pour son service personnalisé et ses conseils de qualité. Mais ses concurrents directs — une grande enseigne et une pharmacie de centre commercial — avaient respectivement 180 et 220 avis sur Google. La pharmacie indépendante semblait moins légitime, malgré une qualité de service objectivement supérieure." },
      { h2: "L'utilisation adaptée à la pharmacie", p: "Le praticien a intégré Reputo dans son workflow de délivrance : pour les ordonnances chroniques et les patients suivis régulièrement, l'équipe envoie un SMS après chaque renouvellement mensuel. Pour les nouvelles ordonnances complexes (oncologie, maladies chroniques), le SMS est envoyé 3 jours après pour laisser le temps au patient de constater l'efficacité du traitement." },
      { h2: "Les avis qui font la différence", p: "Les patients de la Pharmacie Centrale décrivent dans leurs avis des choses qu'on ne trouve pas dans les grandes enseignes : \"Le pharmacien m'a appelé pour vérifier comment je tolérais mon nouveau traitement\", \"Ils ont commandé spécialement le médicament introuvable ailleurs\". Ces avis qualitatifs attirent exactement le type de patients fidèles que la pharmacie recherche." },
      { h2: "Le résultat concurrentiel", p: "En 3 mois, 103 avis et note 4,9/5 — la meilleure note de la ville, devant toutes les concurrentes. Le chiffre d'affaires a augmenté de 18% en 6 mois, principalement grâce à de nouveaux patients attirés par les avis." },
    ]
  },
  'reputo-opticien': {
    title: "Reputo pour opticiens indépendants : cas concret",
    tag: 'Opticiens', category: 'professions',
    meta: "Comment un opticien indépendant concurrence les grandes enseignes grâce aux avis Google avec Reputo.",
    intro: "L'opticien indépendant fait face à une concurrence féroce des grandes enseignes (Optical Center, Krys, Afflelou...) qui disposent de budgets marketing importants. Les avis Google permettent de remettre à égalité.",
    casStudy: {
      who: "Un opticien indépendant en ville moyenne, opticien indépendant",
      before: "22 avis, note 4,2/5, entouré de 4 enseignes nationales",
      after: "156 avis en 4 mois, note 4,9/5, meilleure note de la ville",
    },
    content: [
      { h2: "Le défi de l'indépendant face aux enseignes", p: "Cet opticien avait une réputation locale excellente — mais invisible sur Google. Face à 4 enseignes nationales ayant des centaines d'avis, le magasin indépendant semblait peu crédible en ligne malgré 20 ans d'expertise et une clientèle fidèle." },
      { h2: "Le workflow adapté à l'optique", p: "L'opticien a configuré deux types d'envois : un SMS lors du retrait des lunettes (\"Comment vous sentez-vous avec vos nouvelles lunettes ?\") et un second 15 jours après pour les lentilles ou les verres progressifs — quand le patient a eu le temps de s'adapter. Ce double envoi produit des avis plus détaillés et plus positifs." },
      { h2: "Ce que disent les avis", p: "Les clients de l'Optique du Centre mentionnent systématiquement le temps consacré à l'essayage, l'expertise dans le choix des montures, et le suivi post-vente. Ces éléments différencient clairement l'indépendant des enseignes et répondent directement aux critères de choix des consommateurs." },
      { h2: "Le retour sur investissement", p: "156 avis à 4,9/5 ont propulsé l'Optique du Centre en première position sur Google Maps, devant toutes les enseignes. Le gérant estime que 30 à 40 nouveaux clients par mois ont choisi son magasin en raison des avis Google. À 300€ de panier moyen, cela représente 9 000 à 12 000€ de CA supplémentaire mensuel." },
    ]
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const a = articles[slug];
  if (!a) return {};
  return {
    title: `${a.title} | Reputo`,
    description: a.meta,
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const a = articles[slug];
  if (!a) return <div style={{padding:'80px', textAlign:'center', color:'var(--muted)'}}>Article non trouvé</div>;

  return (
    <main>
      <nav className={styles.nav}>
        <a href="/" className={styles.logo}><span className={styles.logoMark}>R</span>Reputo</a>
        <a href="/blog" className={styles.back}>← Blog</a>
      </nav>
      <div style={{maxWidth:'720px', margin:'0 auto', padding:'64px 24px'}}>
        <span className={styles.tag} style={{marginBottom:'16px', display:'inline-block'}}>{a.tag}</span>
        <h1 style={{fontFamily:'var(--font-display)', fontSize:'clamp(26px,3.5vw,36px)', fontWeight:800, letterSpacing:'-0.5px', lineHeight:1.15, marginBottom:'20px', color:'var(--text)'}}>
          {a.title}
        </h1>

        {a.intro && (
          <p style={{fontSize:'16px', color:'var(--muted)', lineHeight:1.7, marginBottom:'32px', borderLeft:'3px solid var(--blue)', paddingLeft:'16px'}}>
            {a.intro}
          </p>
        )}

        {a.casStudy && (
          <div style={{background:'var(--blue-dim)', border:'1px solid var(--blue-light)', borderRadius:'var(--radius-xl)', padding:'24px', marginBottom:'36px'}}>
            <div style={{fontSize:'11px', fontWeight:700, textTransform:'uppercase', letterSpacing:'1px', color:'var(--blue)', marginBottom:'12px'}}>Cas concret</div>
            <div style={{display:'flex', flexDirection:'column', gap:'8px'}}>
              {[
                ['Profil', a.casStudy.who],
                ['Avant Reputo', a.casStudy.before],
                ['Après Reputo', a.casStudy.after],
              ].map(([label, value]) => (
                <div key={label} style={{display:'flex', gap:'12px', fontSize:'13px'}}>
                  <span style={{color:'#1D4ED8', fontWeight:600, minWidth:'120px', flexShrink:0}}>{label}</span>
                  <span style={{color:'#1E3A8A'}}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {a.content.map((block, i) => (
          <div key={i} style={{marginBottom:'28px'}}>
            <h2 style={{fontFamily:'var(--font-display)', fontSize:'20px', fontWeight:700, marginBottom:'10px', color:'var(--text)'}}>{block.h2}</h2>
            <p style={{fontSize:'15px', color:'var(--muted)', lineHeight:1.75}}>{block.p}</p>
          </div>
        ))}

        <div style={{marginTop:'56px', background:'var(--blue-dim)', border:'1px solid var(--blue-light)', borderRadius:'var(--radius-xl)', padding:'32px', textAlign:'center'}}>
          <h3 style={{fontFamily:'var(--font-display)', fontSize:'20px', fontWeight:700, marginBottom:'8px'}}>Prêt à tester Reputo ?</h3>
          <p style={{color:'var(--muted)', fontSize:'14px', marginBottom:'20px'}}>5 SMS offerts à l'inscription. Aucun abonnement. Résultats en 48h.</p>
          <a href="/#tarifs" className="btn-primary" style={{padding:'12px 24px'}}>Commencer gratuitement →</a>
        </div>
      </div>
    </main>
  );
}
