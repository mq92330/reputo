import styles from '../blog.module.css';

const articles = {
  // ── ARTICLES GÉNÉRAUX ────────────────────────────────────────────────────
  'avis-google-sante': {
    title: "Avis Google et professionnels de santé : ce que disent les chiffres 2025",
    tag: 'E-réputation', category: 'general',
    meta: "81 % des patients utilisent Google pour trouver un professionnel de santé. Découvrez l'impact réel des avis en ligne sur la patientèle des libéraux en France.",
    content: [
      { h2: "La révolution silencieuse du patient-consommateur", p: "Il y a dix ans, un patient choisissait son médecin sur recommandation de son entourage. Aujourd'hui, il ouvre Google. 81 % des patients utilisent un moteur de recherche pour trouver un professionnel de santé, et 72 % lisent les avis avant de prendre rendez-vous. Ce chiffre, issu des données 2024, marque un tournant structurel que le secteur médical ne peut plus ignorer." },
      { h2: "Le coût réel d'une mauvaise note", p: "Les données sont sans appel : une perte d'une seule étoile sur une fiche Google entraîne une baisse de 10 % à 20 % de la patientèle potentielle. Plus grave encore, 48 % des patients refusent systématiquement de consulter un professionnel dont la note est inférieure à 4 étoiles. Pour un cabinet dont le chiffre d'affaires dépend de l'afflux constant de nouveaux patients, c'est un risque financier concret." },
      { h2: "La majorité silencieuse : le vrai problème", p: "Les patients satisfaits ne laissent pas spontanément d'avis. Les insatisfaits, eux, le font. C'est la loi implacable de la réputation en ligne : sans stratégie active de collecte, une fiche Google reflète uniquement les 2 % d'insatisfaits. La solution n'est pas de supprimer les mauvais avis — les tribunaux français condamnent rarement Google à le faire — mais d'inonder la fiche de témoignages positifs collectés auprès de la majorité silencieuse." },
      { h2: "Le secret médical : un frein spécifique à la santé", p: "Contrairement à un restaurateur, un professionnel de santé ne peut pas répondre publiquement à un avis négatif sans risquer de violer le secret médical. Il ne peut pas dire 'Monsieur X, votre douleur est due à...'. Cette contrainte déontologique rend la prévention encore plus cruciale : il faut intercepter les insatisfactions avant qu'elles atteignent Google, pas après." },
      { h2: "Ce que change Reputo", p: "Reputo fonctionne comme un filtre intelligent : après chaque consultation, un SMS est envoyé au patient avec un lien de notation. Ceux qui donnent 4 ou 5 étoiles sont redirigés vers Google Reviews. Ceux qui sont en dessous du seuil envoient un message privé, visible uniquement par le praticien, qui peut traiter le problème directement. La fiche Google ne reçoit que le positif." },
    ]
  },
  'comment-collecter-avis-google-cabinet': {
    title: "Comment collecter des avis Google pour votre cabinet : le guide complet 2025",
    tag: 'Guide pratique', category: 'general',
    meta: "Guide étape par étape pour collecter des avis Google en tant que professionnel de santé libéral, sans violer le secret médical ni la déontologie.",
    content: [
      { h2: "Pourquoi la demande directe ne fonctionne pas", p: "Demander oralement à un patient de laisser un avis en consultation ne fonctionne pas. Le patient acquiesce, sort du cabinet, et oublie dans les deux minutes. Les études montrent que le taux de conversion d'une demande orale est inférieur à 3 %. Le SMS envoyé dans l'heure qui suit la consultation atteint, lui, un taux de clic de 35 % à 45 %." },
      { h2: "Étape 1 : Trouver votre lien Google Reviews", p: "Rendez-vous sur Google Maps, cherchez votre cabinet, cliquez sur votre fiche, puis sur 'Demander des avis'. Google génère un lien unique. Copiez-le. C'est ce lien que Reputo utilisera pour rediriger vos patients satisfaits directement vers votre fiche. Si vous n'avez pas accès à votre compte Google, cherchez votre cabinet sur Google et cliquez sur 'Rédiger un avis' : l'URL de cette page contient l'identifiant de votre fiche." },
      { h2: "Étape 2 : Configurer votre message SMS", p: "Le message doit être court, personnalisé, et non commercial. Quelque chose comme : 'Bonjour Marie, merci pour votre visite. Comment s'est passee votre consultation ? [lien]'. Évitez les accents dans les SMS : ils font passer l'encodage en UTF-8 et divisent la limite de caractères par deux (70 au lieu de 160), ce qui augmente le nombre de SMS facturés." },
      { h2: "Étape 3 : Le timing d'envoi optimal", p: "Le meilleur moment pour envoyer le SMS est dans les 2 heures qui suivent la consultation. Passé ce délai, le taux de clic chute significativement. Si votre secrétaire envoie le SMS avant de passer au patient suivant, c'est parfait. Pour les cabinets sans secrétaire, il est possible d'envoyer en fin de journée." },
      { h2: "Étape 4 : Le filtre étoiles pour protéger votre réputation", p: "Ne renvoyez pas tous les patients vers Google. Configurez un seuil (4 étoiles par défaut) : seuls les patients qui notent au-dessus de ce seuil atterrissent sur Google. Les autres vous envoient leurs remarques en privé. Vous pouvez y répondre directement, sans contrainte de secret médical, et souvent transformer un patient déçu en patient fidèle." },
    ]
  },
  'secret-medical-avis-google': {
    title: "Secret médical et avis Google : comment les professionnels de santé peuvent se protéger légalement",
    tag: 'Déontologie', category: 'general',
    meta: "Les professionnels de santé ne peuvent pas répondre publiquement aux avis Google sans violer le secret médical. Voici la stratégie légale pour protéger votre réputation.",
    content: [
      { h2: "Le paradoxe juridique du praticien face aux avis Google", p: "Un médecin reçoit un avis 1 étoile : 'Ce praticien m'a refusé mes antibiotiques sans explication'. Il sait exactement pourquoi il a refusé. Mais il ne peut pas l'écrire publiquement — ce serait divulguer des informations médicales couvertes par le secret. Il est condamné au silence, pendant que l'avis damage son image. C'est le paradoxe auquel font face 237 200 médecins et des centaines de milliers d'auxiliaires médicaux en France." },
      { h2: "Ce que dit la loi : le secret médical prime", p: "L'article L.1110-4 du Code de la santé publique protège le secret médical. Les conseils ordinaux (Ordre des Médecins, ONCD, etc.) rappellent régulièrement que répondre à un avis en mentionnant un diagnostic, un traitement ou une situation clinique constitue une violation passible de sanctions disciplinaires. La seule réponse légale est générique : 'Merci pour votre retour, n'hésitez pas à nous contacter directement'." },
      { h2: "La stratégie de protection : agir en amont, pas en aval", p: "Puisque les praticiens ne peuvent pas se défendre après publication, la seule stratégie efficace est d'intercepter les insatisfactions avant qu'elles atteignent Google. Un système de feedback en deux étapes — notation privée d'abord, redirection Google uniquement pour les satisfaits — permet de traiter les problèmes dans un espace confidentiel où le praticien peut s'exprimer librement." },
      { h2: "L'inondation par le positif : la vraie défense", p: "Le Conseil d'État et les tribunaux condamnent rarement Google à supprimer une fiche d'un professionnel de santé. La jurisprudence est rare et les procédures longues. La défense la plus efficace reste mathématique : un avis négatif parmi 200 avis positifs est statistiquement négligeable. Un praticien avec 150 avis à 4,8/5 est imperméable aux attaques isolées." },
    ]
  },

  // ── PROFESSIONS ──────────────────────────────────────────────────────────
  'reputo-medecin-generaliste': {
    title: "Avis Google pour médecin généraliste : comment récupérer le contrôle de sa réputation en 2025",
    tag: 'Médecins', category: 'professions',
    meta: "94 000 médecins généralistes en France, une note Google moyenne de 4,2/5. Découvrez comment les libéraux actifs font la différence grâce à leur réputation numérique.",
    intro: "Il est 14h37. Le Dr. Durand vient de terminer sa 22e consultation de la journée. Dans la salle d'attente, 4 patients patientent. Sur son téléphone, une notification : un avis Google 1 étoile, posté il y a 20 minutes par un patient qu'il ne peut pas identifier. 'Très mauvaise expérience, refus de prescription sans explication.' Il ne peut pas répondre. Il ne peut rien faire. Sauf prévenir que ça arrive.",
    casStudy: {
      who: "Cabinet de médecine générale, 25 consultations/jour, zone urbaine",
      before: "6 avis Google en 3 ans, note 3,9/5, invisible sur Google Maps",
      after: "94 avis en 2 mois, note 4,7/5, premier résultat local",
    },
    content: [
      { h2: "Le chiffre qui change tout : 94 000 généralistes, 42 % en libéral", p: "Au 1er janvier 2025, la France compte 94 000 médecins généralistes. Mais seuls 42 % exercent encore en libéral exclusif — contre 51 % en 2012. Cette érosion n'est pas qu'économique : la charge mentale croissante, dont la gestion de l'image publique fait désormais partie, pousse des praticiens à rejoindre les structures salariées. Pourtant, 81 % des patients utilisent Google pour trouver un nouveau médecin, et 72 % lisent les avis avant de prendre rendez-vous." },
      { h2: "Les 3 avis qui détruisent une réputation construite en 15 ans", p: "La note Google moyenne d'un médecin généraliste est de 4,2/5 en 2025. Mais cette moyenne cache des écarts considérables. Les avis négatifs les plus fréquents ne portent pas sur la qualité des soins — ils ciblent l'attente ('1h30 pour voir le médecin 7 minutes'), l'accueil au secrétariat, ou le refus de prescriptions. Des situations souvent inexplicables publiquement sans violer le secret médical. 48 % des patients refusent de consulter un praticien en dessous de 4 étoiles : trois mauvais avis peuvent représenter la perte définitive de centaines de patients potentiels." },
      { h2: "La mise en situation : ce qui se passe quand on automatise", p: "Marie, secrétaire médicale dans un cabinet de groupe à Lyon, passe 5 secondes entre deux patients : elle saisit le prénom et le numéro dans Reputo. Le SMS part automatiquement. Le soir même, 7 nouveaux avis Google sont apparus. 6 à 5 étoiles. 1 à 2 étoiles — qui est arrivé en message privé, pas sur Google. Le médecin y répond le lendemain matin, résout le malentendu sur l'ordonnance refusée. Le patient rappelle pour s'excuser." },
      { h2: "Pourquoi le temps manque : 102 362 € de résultat mais 0 minute pour Google", p: "Le résultat d'exploitation moyen d'un cabinet de médecine générale s'établit à 102 362 € en 2024. Derrière ce chiffre : 25 à 30 consultations par jour, des tâches administratives en expansion, et un temps médical précieux. Consacrer 15 minutes par semaine à gérer des avis Google n'est pas une priorité — jusqu'au jour où la note descend en dessous de 4 et que les nouveaux patients se tournent vers le cabinet d'à côté." },
      { h2: "La solution : automatiser pour exister sur Google sans y penser", p: "Reputo envoie le SMS automatiquement après chaque consultation. Aucune intervention du médecin. Seuls les patients satisfaits (≥ 4 étoiles) sont redirigés vers Google Reviews — les autres envoient un message privé lisible uniquement par le praticien. En deux mois, un cabinet de 25 consultations/jour peut collecter 80 à 100 avis, faire remonter sa note et s'imposer dans le Pack Local de Google Maps." },
    ]
  },
  'reputo-dentiste': {
    title: "Avis Google pour cabinet dentaire : gérer la peur, les devis et la réputation en 2025",
    tag: 'Dentistes', category: 'professions',
    meta: "47 636 dentistes en France, une perte de 60 % de rendez-vous si la note passe sous 4 étoiles. Découvrez la stratégie qui protège et développe la réputation des cabinets dentaires.",
    intro: "Sophie hésite depuis 3 semaines. Elle a besoin d'une couronne. Elle a tapé 'dentiste Paris 15' sur Google. Elle a éliminé les cabinets en dessous de 4 étoiles. Elle en a regardé 6. Elle a lu les avis. Le cabinet du Dr. Moreau avait une note de 3,5 avec des commentaires sur 'les devis abusifs' et 'le manque de douceur'. Pourtant, le Dr. Moreau est excellent. Il n'a jamais demandé d'avis à personne. Sophie a pris rendez-vous ailleurs.",
    casStudy: {
      who: "Cabinet dentaire de 2 praticiens, Paris, 35 consultations/jour",
      before: "15 avis, note 3,5/5, 3 avis négatifs sans possibilité de réponse",
      after: "143 avis, note 4,8/5, liste d'attente de 3 semaines pour les nouveaux patients",
    },
    content: [
      { h2: "47 636 dentistes et une profession sous pression numérique", p: "La profession dentaire est sans doute la plus exposée aux aléas des avis en ligne. Avec 47 636 praticiens en 2025, un chiffre d'affaires annuel moyen de 354 410 € par cabinet, mais des charges représentant 50 à 60 % du CA, les marges sont serrées. Et la menace numérique est réelle : une note sous 4 étoiles entraîne une fuite de 60 % des rendez-vous potentiels. Ce n'est plus une statistique abstraite — c'est du chiffre d'affaires qui disparaît." },
      { h2: "La stomatophobie : quand la peur crée les mauvais avis", p: "Un patient sur dix souffre de stomatophobie — la peur pathologique du dentiste. Ces patients arrivent tendus, repartent soulagés mais avec les nerfs encore à vif. Beaucoup laissent un avis négatif non pas parce que le soin était mauvais, mais parce que l'expérience émotionnelle était difficile. Le Dr. Moreau ne peut pas répondre 'Monsieur X souffre d'anxiété dentaire' — c'est une violation du secret médical. Il peut, en revanche, intercepter ce retour avant qu'il arrive sur Google." },
      { h2: "L'Ordre des chirurgiens-dentistes et Google : un combat perdu d'avance", p: "L'ONCD milite pour la suppression des avis Google sur les praticiens de santé. Leur argument est juste : comment se défendre sans violer le secret médical ? Mais juridiquement, la bataille est perdue. Les tribunaux français condamnent rarement Google à supprimer une fiche. La seule stratégie viable documentée est la collecte systématique d'avis positifs auprès de la majorité silencieuse satisfaite." },
      { h2: "Le flow concret : comment 143 avis en 3 mois changent un cabinet", p: "L'assistante du cabinet envoie le SMS après chaque soin. Sur 143 notes reçues en 3 mois, 11 étaient sous le seuil de 4 étoiles — 5 concernaient l'attente, 4 les honoraires, 2 étaient incompréhensibles. Ces 11 patients ont envoyé leur retour en privé via Reputo. Le praticien a répondu à chacun, a expliqué ses honoraires, proposé un devis détaillé. Résultat : aucun des 11 n'a posté d'avis négatif. Deux sont devenus des patients réguliers." },
      { h2: "Battre les centres low-cost sur le terrain de l'humain", p: "Les grands centres dentaires ont les prix et la visibilité. Les cabinets indépendants ont quelque chose que les centres ne peuvent pas répliquer : la relation humaine, la continuité des soins, la confiance. 80 % des patients font plus confiance aux avis en ligne qu'à la publicité traditionnelle. 143 avis authentiques qui parlent de 'douceur', 'd'explications claires', de 'mise en confiance' — c'est l'argument commercial le plus puissant contre n'importe quel centre low-cost." },
    ]
  },
  'reputo-kinesitherapeute': {
    title: "Avis Google pour kinésithérapeute libéral : dominer votre secteur quand vous êtes toujours complet",
    tag: 'Kinésithérapeutes', category: 'professions',
    meta: "104 231 kinésithérapeutes en France, marché en croissance de 3,6 %. Comment les cabinets les plus demandés utilisent leur réputation Google pour attirer les bons patients.",
    intro: "Lucas vient de se blesser au genou en jouant au foot du dimanche. Son médecin lui a prescrit 20 séances de kiné. Il ouvre Google Maps, tape 'kinésithérapeute' et voit 14 résultats dans un rayon de 500 mètres. Il filtre par note. Il regarde les avis. Dans une ville où tous les kinés sont 'toujours complets', celui qui a 87 avis à 4,9 est celui qui décroche le téléphone en premier. Toujours.",
    casStudy: {
      who: "Cabinet de kinésithérapie, Marseille, 1 praticien, 18 patients/jour",
      before: "8 avis Google, note 4,1/5, 3e position sur Google Maps du quartier",
      after: "97 avis, note 4,8/5, 1re position, délai d'attente réduit car meilleure sélection des patients",
    },
    content: [
      { h2: "104 231 kinés et une guerre de visibilité locale", p: "La kinésithérapie est la première force paramédicale de rééducation en France, avec 104 231 professionnels et une croissance de 3,6 % en un an. Plus de 80 % exercent en libéral. Mais cette croissance se fait de manière inégale : en région PACA et Occitanie, la densité est telle que la visibilité sur Google Maps est devenue le principal levier d'acquisition. Dans certains arrondissements de Paris ou de Lyon, jusqu'à 20 kinés se disputent la même patientèle de quartier." },
      { h2: "Le paradoxe du kiné 'toujours complet'", p: "Les kinésithérapeutes sont victimes d'une idée reçue qui leur nuit : 'le kiné est toujours complet'. Les patients satisfaits évitent parfois de laisser un avis positif, pensant que ça va 'encore attirer du monde'. Résultat : les seuls avis qui s'accumulent sont ceux des patients mécontents du temps d'attente pour un premier rendez-vous ou de la prise en charge à la chaîne. Le kiné excellent mais invisible sur Google perd des patients au profit du kiné moyen mais bien noté." },
      { h2: "Le revenu moyen et l'enjeu de la sélection des patients", p: "Un kinésithérapeute titulaire gagne en moyenne 3 157 € nets par mois, avec un chiffre d'affaires annuel de 78 350 €. Mais tous les patients ne se valent pas en termes de rentabilité. Un planning optimisé avec des patients réguliers (postopératoire, sport, rhumatologie) est infiniment plus stable qu'un afflux de patients passagers. Une bonne réputation Google permet d'attirer des patients spécifiques via les mots-clés des avis : 'kiné du sport', 'kiné pédiatrie', 'traitement des douleurs chroniques'." },
      { h2: "La mise en situation : le SMS après la séance", p: "Chloé finit sa séance de rééducation post-ligamentaire. En quittant le cabinet, elle reçoit un SMS : 'Bonjour Chloe, merci pour votre seance. Comment s est passee votre reeducation ? [lien]'. Elle clique, donne 5 étoiles, écrit deux lignes sur son genou qui va mieux. Elle est redirigée vers Google, laisse l'avis. Ça lui a pris 45 secondes. Le kiné a un nouvel avis ce soir. Il ne l'a pas demandé oralement. Il n'a pas reçu de critique publique pour le retard de 10 minutes du matin." },
      { h2: "56 % en cabinet de groupe : attention à la fiche partagée", p: "56 % des kinésithérapeutes exercent en cabinet de groupe. La réputation de la fiche Google est partagée entre plusieurs praticiens — mais les avis peuvent cibler un praticien spécifiquement. Reputo permet à chaque associé de configurer son propre profil avec son propre lien Google, pour que les avis collectés reflètent précisément son travail, pas celui du cabinet en général." },
    ]
  },
  'reputo-osteopathe': {
    title: "Avis Google pour ostéopathe : survivre dans un marché saturé grâce à votre réputation numérique",
    tag: 'Ostéopathes', category: 'professions',
    meta: "1 ostéopathe pour 2 177 habitants en France, revenu médian de 17 500 €/an. Pourquoi les avis Google sont une question de survie économique pour les ostéopathes libéraux.",
    intro: "Thomas a ouvert son cabinet d'ostéopathie il y a 8 mois. Sa ville de 45 000 habitants compte déjà 22 ostéopathes. Il n'est pas remboursé par la Sécu. Son loyer commercial coûte 900 € par mois. Ce mois, il a eu 47 consultations à 60 € — soit 2 820 € brut. Après charges, il reste sous le SMIC. Il n'a que 4 avis Google. Ses confrères en ont 60. La différence ne s'explique pas par la qualité des soins — Thomas est excellent. Elle s'explique par la visibilité.",
    casStudy: {
      who: "Ostéopathe exclusif, ville de 45 000 habitants, 18 mois d'exercice",
      before: "4 avis Google, note 4,5/5, 45 consultations/mois",
      after: "71 avis, note 4,9/5, 95 consultations/mois, agenda complet à 3 semaines",
    },
    content: [
      { h2: "Le chiffre qui fait peur : 17 500 € de revenu médian", p: "La réalité économique de l'ostéopathie en France est brutale. Avec 30 000 à 40 000 ostéopathes exclusifs en activité et un revenu médian de 17 500 € par an — soit moins que le SMIC — pour 50 % de la profession, la survie économique dépend entièrement de la capacité à se différencier. Et contrairement aux professions conventionnées, il n'y a aucun flux de patients garanti par la Sécurité Sociale. Chaque nouveau patient est le résultat d'un choix actif, souvent basé sur Google." },
      { h2: "1 pour 2 177 habitants : la saturation qui tue les cabinets", p: "La densité moyenne est d'un ostéopathe pour 2 177 habitants en 2024. Dans les grandes villes, ce ratio peut descendre à 1 pour 800 habitants. Dans ce contexte de saturation, la visibilité dans le 'Pack Local' de Google Maps — les 3 résultats qui apparaissent en premier sur une recherche locale — est vitale. Les études montrent que les 3 premiers résultats captent 75 % des clics. Le 4e résultat est statistiquement invisible." },
      { h2: "Le scepticisme comme obstacle : les avis qui convertissent", p: "L'ostéopathie souffre encore d'un déficit de crédibilité scientifique dans l'esprit d'une partie du public. Un patient qui hésite entre un kiné remboursé et un ostéopathe à 60 € à sa charge va chercher des preuves. Les avis Google sont ces preuves : 'M'a soulagé en une séance après 3 mois de douleurs', 'Explications très claires sur le traitement'. Ce témoignage vaut plus que n'importe quel diplôme affiché sur le mur." },
      { h2: "62,5 % sur Doctolib, mais Google reste le premier contact", p: "62,5 % des ostéopathes utilisent une plateforme de prise de rendez-vous en ligne. Doctolib a sa propre logique de classement. Mais avant de cliquer sur Doctolib, le patient passe par Google Maps. Une fiche avec 71 avis à 4,9 capte l'attention avant même que le patient clique sur 'prendre rendez-vous'. C'est sur Google que se joue la première impression." },
      { h2: "Le SMS qui transforme les sceptiques en ambassadeurs", p: "Un patient qui paie 60 € de sa poche et repart soulagé est potentiellement votre meilleur ambassadeur. Il ne laissera pas d'avis spontanément — les patients satisfaits le font rarement. Mais si vous lui envoyez un SMS personnalisé 2 heures après la consultation, il y a 38 % de chances qu'il laisse un avis Google. Multipliez ce taux par 100 consultations par mois : c'est 38 nouveaux avis en un mois." },
    ]
  },
  'reputo-infirmier-liberal': {
    title: "Avis Google pour infirmier libéral : valoriser un dévouement que personne ne voit",
    tag: 'Infirmiers', category: 'professions',
    meta: "83,7 % des IDEL subissent des incivilités. Les avis Google sont un outil de protection professionnelle autant qu'un levier de développement pour les infirmiers libéraux.",
    intro: "Isabelle se lève à 5h45 chaque matin. Sa tournée commence à 6h30 et se termine à 13h, parfois 14h. Elle repasse l'après-midi pour les pansements. Le soir, elle est de garde. En 8 ans, elle a soigné des centaines de patients. Sa fiche Google a 3 avis. Un patient en colère en a laissé un à 2 étoiles parce qu'elle avait 20 minutes de retard un mardi de novembre — elle revenait d'une urgence chez une personne âgée. Elle n'a pas pu répondre. Elle ne savait pas comment.",
    casStudy: {
      who: "IDEL titulaire, zone semi-rurale, tournée de 25 patients/jour",
      before: "3 avis Google dont 1 négatif injustifié, note 3,7/5",
      after: "58 avis, note 4,9/5, liste d'attente pour intégrer la tournée",
    },
    content: [
      { h2: "600 000 infirmiers, une profession sous pression", p: "Les infirmiers représentent le contingent le plus important des professionnels de santé en France. La part libérale est en forte croissance pour répondre au vieillissement de la population. Un IDEL titulaire gagne en moyenne 48 151 € nets par an, avec des revenus allant de 34 638 € pour les remplaçants à plus de 60 000 € pour les titulaires en zone dense. Mais derrière ces chiffres : plus de 50 heures hebdomadaires pour 8 IDEL sur 10." },
      { h2: "83,7 % subissent des incivilités : l'e-réputation comme bouclier", p: "Selon une enquête de l'URPS Infirmiers Hauts-de-France, 83,7 % des infirmiers libéraux subissent des incivilités dans l'exercice de leur métier. Les avis négatifs sur Google sont l'extension numérique de ces incivilités. La ponctualité est la première cible : un patient frustré parce que l'infirmière est arrivée en retard ne comprend pas toujours qu'une urgence a décalé toute la tournée. Ce patient peut laisser un avis 1 étoile public en 30 secondes. L'IDEL, elle, ne peut pas répondre avec les détails médicaux qui expliqueraient le retard." },
      { h2: "L'intimité du soin à domicile : un potentiel d'avis unique", p: "L'IDEL travaille dans le salon, la chambre, parfois à 6h du matin avec des patients âgés qui attendent sa visite comme un moment de vie sociale. Cette proximité crée une relation unique que les autres professions n'ont pas. Un patient âgé soigné depuis 3 ans ne pense pas spontanément à laisser un avis Google — mais si sa fille reçoit un SMS de remerciement et de satisfaction après une intervention délicate, elle le laissera avec plaisir." },
      { h2: "La tournée comme marché : attirer les bons patients", p: "La constitution d'une tournée rentable est le principal enjeu économique d'un IDEL. Une tournée bien géographiquement groupée, avec des patients stables, est infiniment plus productive qu'une tournée dispersée avec des situations complexes. Une bonne réputation Google attire les nouveaux patients mais aussi — et c'est moins connu — les remplaçants et collaborateurs de qualité. Un cabinet avec 58 avis à 4,9 reçoit des candidatures spontanées." },
      { h2: "Protéger son travail avec un retour privé sur la ponctualité", p: "Reputo permet à l'IDEL de recevoir les retours négatifs en privé. Un patient mécontent du retard envoie son message directement à l'infirmière, qui peut expliquer : 'Madame X, j'avais une urgence chez un patient en détresse ce matin, je m'en excuse.' Dans 90 % des cas, cette réponse privée désarme la frustration. Le patient comprend. L'avis négatif n'est jamais posté." },
    ]
  },
  'reputo-ophtalmo': {
    title: "Avis Google pour ophtalmologue : gérer l'attente et protéger une réputation d'excellence",
    tag: 'Ophtalmologues', category: 'professions',
    meta: "4 201 ophtalmologues pour 67 millions de Français. Comment les spécialistes les plus sollicités gèrent leur réputation Google malgré les délais d'attente.",
    intro: "Marc attend depuis 4 mois son rendez-vous chez l'ophtalmologue. Quand il arrive enfin, il patiente 1h45 en salle d'attente. Il voit le médecin pendant 8 minutes. La consultation est excellente, le diagnostic précis, le traitement adapté. Mais ce soir, rentré chez lui, il ouvre Google et laisse 2 étoiles : 'Attente interminable, expédié en 8 minutes.' L'ophtalmologue ne peut pas répondre. Elle a reçu ce message 100 fois. Elle ne sait plus quoi faire.",
    casStudy: {
      who: "Cabinet d'ophtalmologie, ville de 200 000 habitants, 1 praticien + 1 orthoptiste",
      before: "22 avis, note 3,8/5, majorité d'avis négatifs sur l'attente",
      after: "116 avis, note 4,5/5, les avis sur l'attente noyés dans les témoignages d'excellence clinique",
    },
    content: [
      { h2: "4 201 ophtalmologues pour 67 millions de Français", p: "L'ophtalmologie est la spécialité médicale par excellence où la demande excède massivement l'offre. Avec 4 201 praticiens libéraux et un revenu net moyen de 200 958 € en 2023 — l'une des spécialités les plus lucratives — les ophtalmologues sont dans une position paradoxale : débordés, rentables, mais exposés à une réputation numérique désastreuse à cause de délais sur lesquels ils n'ont aucun contrôle." },
      { h2: "Le piège de l'attente : quand la demande crée les mauvais avis", p: "Les délais de rendez-vous en ophtalmologie atteignent parfois 6 à 12 mois en zone sous-dotée. En salle d'attente, le retard peut dépasser 2 heures les jours chargés. Le patient qui arrive frustré après 4 mois d'attente et repart après une consultation de 8 minutes — techniquement parfaite — vit une expérience globale négative. Il laisse un avis 1 étoile. Le praticien ne peut pas expliquer publiquement pourquoi la consultation a duré 8 minutes sans divulguer des informations cliniques." },
      { h2: "La stratégie du volume : noyer les avis d'attente dans l'excellence clinique", p: "La solution n'est pas de supprimer les avis sur l'attente — c'est impossible. Elle est de les rendre statistiquement négligeables. Un cabinet qui collecte 10 avis par semaine via Reputo accumule 40 avis par mois. Les patients qui ont bénéficié d'un diagnostic précis, d'une chirurgie réussie, d'une prescription qui a changé leur vie — ils existent, ils sont nombreux. Ils ne laissent jamais d'avis spontanément. Un SMS suffit à les activer." },
      { h2: "Le filtre post-opératoire : protéger la réputation chirurgicale", p: "Les actes chirurgicaux en ophtalmologie (chirurgie réfractive, cataracte, etc.) nécessitent une période de récupération. Un patient qui évalue son expérience à J+2 d'une chirurgie — quand sa vision est encore floue — peut laisser un avis catastrophique qui ne reflète pas le résultat final à J+30. Reputo permet de paramétrer l'envoi du SMS à J+15 pour les actes chirurgicaux, capturant l'avis au moment où le résultat est visible." },
      { h2: "Rentabiliser un investissement matériel de 300 000 €", p: "Un ophtalmologue qui investit dans un laser ou un OCT de dernière génération le fait pour ses patients. Mais comment le communiquer sans publicité commerciale contraire à la déontologie ? Les avis Google sont la réponse : 'Équipement impressionnant', 'Diagnostic très précis grâce à l'imagerie', 'Médecin à la pointe de la technologie'. Ces témoignages authentiques sont le meilleur retour sur investissement d'un équipement à 300 000 €." },
    ]
  },
  'reputo-psychologue': {
    title: "Avis Google pour psychologue libéral : construire la confiance avant le premier rendez-vous",
    tag: 'Psychologues', category: 'professions',
    meta: "77 000 psychologues en France. Le choix d'un psy est l'un des plus intimes qui soit — et il se fait de plus en plus sur Google. Voici comment protéger et développer votre réputation.",
    intro: "Emma cherche un psychologue depuis 3 semaines. Elle n'en a jamais vu. Elle a peur. Elle tape 'psychologue TCC Paris' sur Google. Elle lit chaque avis avec attention. Elle cherche des signes : quelqu'un qui écoute vraiment, qui ne juge pas, qui est accessible. Elle trouve un cabinet avec 43 avis. L'un d'eux dit : 'Première séance difficile mais je me suis senti écouté sans jugement.' Elle prend rendez-vous. Ce praticien ne savait pas qu'un SMS envoyé il y a 3 mois venait de lui faire gagner une nouvelle patiente.",
    casStudy: {
      who: "Psychologue libéral spécialisé TCC, cabinet individuel",
      before: "7 avis, note 4,3/5, patientèle stable mais peu de nouveaux patients",
      after: "52 avis, note 4,8/5, liste d'attente de 6 semaines",
    },
    content: [
      { h2: "77 000 psychologues et une demande qui explose depuis 2020", p: "La crise sanitaire a fait exploser la demande en santé mentale. On compte 77 000 psychologues en France en 2024, mais leur répartition inégale et les délais de prise en charge restent problématiques. Le principal frein à la consultation reste le coût — les psychologues ne sont remboursés que partiellement et sous conditions — et la méconnaissance du métier. Dans ce contexte, la réputation numérique est le premier filtre que le patient applique." },
      { h2: "Le phénomène du transfert et les avis injustes", p: "La psychologie a une spécificité unique dans la réputation numérique : le transfert. Ce mécanisme psychologique fait qu'un patient peut, en plein processus thérapeutique, projeter une frustration ou une colère sur son thérapeute. Une séance particulièrement difficile peut provoquer un avis négatif injuste ('manque d'empathie', 'technique froide') qui fait pourtant partie du processus de guérison. Le psychologue ne peut ni répondre avec des éléments cliniques, ni ignorer cet avis. La seule protection est d'avoir un volume d'avis positifs suffisant pour relativiser l'impact des avis en crise." },
      { h2: "Le choix intime : ce que les patients cherchent dans les avis", p: "Les patients qui cherchent un psychologue lisent les avis différemment des patients qui cherchent un dentiste. Ils ne cherchent pas l'efficacité technique — ils cherchent la chaleur humaine, la sécurité émotionnelle, le non-jugement. Les avis les plus convertissants sont ceux qui parlent de l'ambiance ('cabinet apaisant'), de l'écoute ('se sent vraiment compris'), de la progression ('a changé ma façon de voir les choses'). Ces témoignages sont impossibles à fabriquer — ils viennent uniquement de vrais patients." },
      { h2: "La spécialisation comme différenciation : TCC, EMDR, enfants, couples", p: "La concurrence entre psychologues libéraux est forte. Se spécialiser — TCC, EMDR, thérapie familiale, psychologie de l'enfant — est la meilleure stratégie de différenciation. Et les avis Google reflètent cette spécialisation : quand les patients mentionnent 'EMDR pour traumatismes' ou 'thérapie de couple très utile', ces mots-clés améliorent le référencement local sur ces requêtes spécifiques." },
      { h2: "Envoyer le SMS au bon moment : après une séance de soutien, pas après une séance de crise", p: "La temporalité est cruciale en psychologie. Reputo permet de choisir manuellement d'envoyer ou non le SMS après chaque consultation. Une séance de crise, un moment émotionnellement intense, ne sont pas les bons moments pour demander un avis. Un suivi de longue durée qui arrive à son terme, une séance particulièrement positive — voilà les moments idéaux pour activer la collecte." },
    ]
  },
  'reputo-pharmacien': {
    title: "Avis Google pour pharmacien : transformer les ruptures de stock en preuves de service",
    tag: 'Pharmaciens', category: 'professions',
    meta: "74 600 pharmaciens, 6,9 procédures collectives pour 1 000 officines en 2024. Comment les pharmacies indépendantes survivent grâce à leur réputation numérique face aux géants du secteur.",
    intro: "Sandrine entre dans sa pharmacie habituelle pour récupérer son traitement mensuel. Le médicament est en rupture. Le pharmacien ne peut rien y faire — c'est une pénurie nationale qui touche 1 450 références. Sandrine est frustrée. Elle rentre chez elle. Elle ouvre Google. Elle laisse un avis 2 étoiles : 'N'ont jamais rien en stock.' La pharmacie a perdu un client potentiel supplémentaire à cause d'une situation sur laquelle elle n'avait aucun contrôle.",
    casStudy: {
      who: "Pharmacie de quartier indépendante, ville moyenne, 2 pharmaciens",
      before: "19 avis, note 3,9/5, plusieurs avis sur les ruptures de stock",
      after: "104 avis, note 4,7/5, les avis ruptures noyés dans les témoignages de service",
    },
    content: [
      { h2: "74 600 pharmaciens et un modèle économique sous pression", p: "La pharmacie d'officine traverse une mutation profonde. 74 600 pharmaciens sont en activité en 2025, mais le réseau fragilise : 6,9 procédures collectives pour 1 000 officines en 2024, contre 4,8 en 2023. La rentabilité baisse (-1 point de marge brute en 2023), contraignant les pharmaciens à multiplier les services à valeur ajoutée : vaccination, tests TROD, entretiens pharmaceutiques, téléconsultation (22 % des pharmacies). Dans ce contexte, l'image est devenue un actif stratégique." },
      { h2: "Les ruptures de stock : 1 450 références et des avis injustes", p: "Fin 2023, 1 450 références médicamenteuses étaient en rupture de stock en France. Ces pénuries — liées à des problèmes de production mondiale — génèrent des avis négatifs que les pharmaciens ne méritent pas. 'N'ont jamais rien en stock', 'Incompétents'. Le pharmacien ne peut pas répondre en expliquant la nature systémique de la pénurie sans paraître se défausser. La seule réponse efficace est de noyer ces avis injustes dans un volume massif d'avis positifs sur la qualité du service." },
      { h2: "Le pharmacien-soignant : une révolution de 2 ans que le public ne connaît pas encore", p: "Le rôle du pharmacien a été profondément transformé. Vaccination, dépistage, suivi des malades chroniques, accompagnement des femmes enceintes : la pharmacie est devenue un vrai centre de santé de proximité. Mais le grand public ne le sait pas encore. Les avis Google sont le meilleur canal pour communiquer cette transformation : 'M'a vacciné contre la grippe sans RDV en 5 minutes', 'Conseil très complet sur mon traitement chronique'." },
      { h2: "Battre les parapharmacies en ligne sur la confiance", p: "Les sites de vente en ligne de parapharmacie ont les prix. Les grandes officines de centre-ville ont le volume. La pharmacie de quartier indépendante a quelque chose qu'ils ne peuvent pas répliquer : la relation de confiance, le conseil personnalisé, la continuité du suivi. 72 % des patients lisent les avis avant de choisir. Un pharmacien avec 104 avis qui parlent de 'conseil personnalisé', 'd'écoute', de 'professionnel compétent' a un avantage concurrentiel que le meilleur prix du monde ne peut pas acheter." },
      { h2: "Le moment parfait pour le SMS : après la délivrance d'un conseil", p: "Le pharmacien interagit avec ses clients quotidiennement. Mais tous les contacts ne sont pas propices à la collecte d'avis. Un client qui récupère rapidement son ordonnance habituelle est moins susceptible de laisser un avis qu'un client qui a reçu un conseil approfondi sur une interaction médicamenteuse ou qui a bénéficié d'une consultation de suivi. Reputo permet de cibler les contacts à fort potentiel d'avis." },
    ]
  },
  'reputo-opticien': {
    title: "Avis Google pour opticien indépendant : atteindre le 5/5 dans un marché dominé par les grandes enseignes",
    tag: 'Opticiens', category: 'professions',
    meta: "8,12 milliards d'euros, 44 238 opticiens, notes Google à 4,8/5 pour Krys et Atol. Comment les opticiens indépendants peuvent gagner la guerre de la réputation numérique.",
    intro: "Nicolas doit renouveler ses lunettes. Il ouvre Google Maps, tape 'opticien'. Il voit Krys (4,8/5 - 312 avis), Atol (4,9/5 - 267 avis), et Lunettes Michaud, indépendant (4,2/5 - 14 avis). Pourtant, M. Michaud a 22 ans d'expérience, les meilleurs verres progressifs de la ville, et connaît chaque client par son nom. Mais personne ne le sait. Ses 14 avis ne parlent pas de ça.",
    casStudy: {
      who: "Opticien indépendant, zone commerciale, 1 optométriste + 1 vendeur",
      before: "14 avis, note 4,2/5, invisible face aux grandes enseignes",
      after: "189 avis, note 4,9/5, 1re position locale, CA parapharmacie +35 %",
    },
    content: [
      { h2: "8 milliards d'euros et une guerre de notes Google", p: "Le marché de l'optique représente 8,12 milliards d'euros en France, dominé à 75 % par les grandes enseignes (Optic 2000, Krys, Atol, Afflelou). Ces enseignes ont des budgets marketing, des logiciels de collecte d'avis intégrés, et des systèmes automatisés. Le résultat : elles affichent des notes de 4,8 à 4,9/5 avec des centaines d'avis. Les indépendants, avec 14 avis en moyenne, sont écrasés — pas parce qu'ils sont moins bons, mais parce qu'ils ne collectent pas." },
      { h2: "Le cycle de 2,5 ans : le client fantôme", p: "La fréquence de renouvellement des lunettes est de 2,5 ans en moyenne. Un client satisfait de ses lunettes ne pense pas à son opticien entre deux achats. Il ne laisse pas d'avis spontanément. Mais quand il retourne sur Google pour chercher un nouveau modèle ou recommander quelqu'un, il ne retrouve pas facilement 'son' opticien si la fiche n'est pas mise à jour. Un SMS envoyé 3 semaines après la délivrance des lunettes — quand le client est en pleine lune de miel avec ses nouvelles montures — crée un avis authentique et un lien émotionnel positif avec la boutique." },
      { h2: "100 % Santé et la perception de choix limité", p: "La réforme 100 % Santé a complexifié la relation client. Certains patients se sentent 'orientés vers le bas de gamme' dans l'offre sans reste à charge. Ces frustrations peuvent générer des avis négatifs qui ont peu à voir avec la qualité du service. La réponse est de collecter massivement des avis sur l'expertise optométrique, la qualité des conseils et la durabilité des équipements — des valeurs qui transcendent la question du prix." },
      { h2: "Le SAV comme machine à avis 5 étoiles", p: "Une monture cassée réparée gratuitement, des verres mal adaptés replacés sans discussion, un client qui repart avec la même satisfaction qu'à l'achat — voilà les moments qui génèrent les avis les plus enthousiastes. 'M'a réparé ma monture en 10 minutes sans frais', 'A refait les verres parce que l'adaptation n'était pas parfaite'. Ces avis valent de l'or. Reputo permet de les capturer systématiquement après chaque interaction SAV." },
      { h2: "Les verres premium : votre expertise mérite d'être connue", p: "Le marché se déplace vers les verres haut de gamme (progressifs premium, anti-lumière bleue, photochromiques). La marge sur ces produits est significativement supérieure. Les clients qui investissent 600 ou 800 € dans des verres premium sont aussi les plus susceptibles de laisser des avis détaillés sur l'expertise de l'optométriste, la qualité de la mesure réfractive, le confort visuel. Ces avis attirent d'autres clients du même profil. C'est un cercle vertueux que seule la collecte systématique peut activer." },
    ]
  },
};

const PROFESSIONS_ARTICLES = [
  'reputo-medecin-generaliste',
  'reputo-dentiste',
  'reputo-kinesitherapeute',
  'reputo-osteopathe',
  'reputo-infirmier-liberal',
  'reputo-ophtalmo',
  'reputo-psychologue',
  'reputo-pharmacien',
  'reputo-opticien',
];

export async function generateStaticParams() {
  return Object.keys(articles).map(slug => ({ slug }));
}

export function generateMetadata({ params }) {
  const a = articles[params.slug];
  if (!a) return { title: 'Article non trouvé' };
  return {
    title: a.title + ' | Blog Reputo',
    description: a.meta,
    openGraph: { title: a.title, description: a.meta },
  };
}

export default function ArticlePage({ params }) {
  const a = articles[params.slug];
  if (!a) return <div className={styles.notFound}><h1>Article non trouvé</h1><a href="/blog">← Retour au blog</a></div>;

  const isProfession = PROFESSIONS_ARTICLES.includes(params.slug);

  return (
    <div className={styles.articlePage}>
      <header className={styles.articleHeader}>
        <a href="/blog" className={styles.back}>← Blog</a>
        <span className={styles.articleTag}>{a.tag}</span>
        <h1 className={styles.articleTitle}>{a.title}</h1>
        <p className={styles.articleMeta}>{a.meta}</p>
      </header>

      <article className={styles.articleBody}>

        {isProfession && a.intro && (
          <div className={styles.intro}>
            <p>{a.intro}</p>
          </div>
        )}

        {isProfession && a.casStudy && (
          <div className={styles.casStudy}>
            <div className={styles.casStudyTitle}>Cas concret</div>
            <div className={styles.casStudyGrid}>
              <div><span className={styles.casLabel}>Cabinet</span><span>{a.casStudy.who}</span></div>
              <div><span className={styles.casLabel}>Avant Reputo</span><span className={styles.casBefore}>{a.casStudy.before}</span></div>
              <div><span className={styles.casLabel}>Après Reputo</span><span className={styles.casAfter}>{a.casStudy.after}</span></div>
            </div>
          </div>
        )}

        {a.content.map((block, i) => (
          <div key={i} className={styles.block}>
            {block.h2 && <h2 className={styles.blockTitle}>{block.h2}</h2>}
            {block.p && <p className={styles.blockText}>{block.p}</p>}
          </div>
        ))}

        <div className={styles.articleCta}>
          <h3>Commencez à collecter des avis Google automatiquement</h3>
          <p>5 SMS offerts à l'inscription. Aucun abonnement, aucun engagement.</p>
          <a href="/register" className="btn-primary">Essayer gratuitement →</a>
        </div>
      </article>
    </div>
  );
}
