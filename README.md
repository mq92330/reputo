# Reputo

Collecte automatique d'avis Google pour professionnels de santé libéraux.
SMS → filtre étoiles → Google ou feedback privé.

---

## Stack

- **Next.js 14** (App Router, SSG pour le blog)
- **Supabase** (auth + base de données)
- **smsmode** (envoi SMS — API access token)
- **Lemon Squeezy** (vente de crédits SMS)
- **Vercel** (déploiement)

---

## Déploiement en 6 étapes

### 1. Supabase

1. Créer un projet sur [supabase.com](https://supabase.com)
2. **SQL Editor** → coller le contenu de `schema.sql` → Exécuter
3. **Settings > API** → copier :
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon key` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role key` → `SUPABASE_SERVICE_ROLE_KEY`

### 2. smsmode

1. Créer un compte sur [smsmode.com](https://smsmode.com)
2. **Mon compte > API** → générer un Access Token
3. → `SMSMODE_ACCESS_TOKEN`

> smsmode offre 20 SMS de test à l'inscription.

### 3. Lemon Squeezy

1. Créer un compte sur [lemonsqueezy.com](https://lemonsqueezy.com)
2. Créer **4 produits** (type : One-time purchase) :
   - Starter — 9€ — nom contient "starter"
   - Pro — 19€ — nom contient "pro"
   - Clinic — 49€ — nom contient "clinic"
   - Cabinet+ — 99€ — nom contient "cabinet_plus"
3. Copier les liens de checkout dans `app/page.js` (CHECKOUT_STARTER, CHECKOUT_PRO)
4. **Settings > Webhooks** → ajouter :
   - URL : `https://votre-domaine.vercel.app/api/webhooks/lemonsqueezy`
   - Events : `order_created`
   - Copier le secret → `LEMONSQUEEZY_WEBHOOK_SECRET`

### 4. Variables d'environnement

```bash
cp .env.local.example .env.local
# Remplir toutes les valeurs
```

### 5. Variables sur Vercel

Dans Vercel > Settings > Environment Variables, ajouter toutes les variables de `.env.local.example`.

### 6. Déploiement

```bash
npm install
npm run dev        # Test local → localhost:3000

# Puis :
# 1. git init && git add . && git commit -m "init"
# 2. Créer repo GitHub, pousser
# 3. Vercel > New Project > importer le repo
# 4. Deploy !
```

---

## Architecture des données

```
profiles         → 1 par utilisateur (crédits, seuil étoiles, template SMS)
sms_logs         → historique de tous les SMS envoyés
feedback_tokens  → tokens temporaires (7j) pour les pages de notation patient
patient_feedbacks → feedbacks privés reçus des patients insatisfaits
credit_purchases → log des achats de crédits
```

## Flow complet

```
Client achète pack sur Lemon Squeezy
  → Webhook → feedback_tokens crédite le compte
  → Client envoie SMS depuis dashboard
    → API /send-sms → smsmode → SMS avec lien /feedback/[token]
    → Patient clique → choisit 1-5 étoiles
    → Si ≥ seuil (ex: 4★) → redirect vers Google Reviews
    → Si < seuil → formulaire feedback privé → sauvé en DB → visible dans dashboard
```

## Personnalisation du SMS

Variables disponibles dans le template :
- `{PATIENT}` → prénom (avec espace avant, ex: " Marie")
- `{CABINET}` → nom du cabinet
- `{FEEDBACK_URL}` → lien de notation (obligatoire)
