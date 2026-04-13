'use client';
import styles from './page.module.css';

const CHECKOUT_STARTER = 'https://votre-store.lemonsqueezy.com/checkout/buy/STARTER_ID';
const CHECKOUT_PRO = 'https://votre-store.lemonsqueezy.com/checkout/buy/PRO_ID';

export default function LandingPage() {
  return (
    <main>

      {/* NAV */}
      <nav className={styles.nav}>
        <a href="/" className={styles.logo}>
          <span className={styles.logoMark}>R</span>
          Reputo
        </a>
        <div className={styles.navLinks}>
          <a href="#fonctionnement">Fonctionnement</a>
          <a href="#tarifs">Tarifs</a>
          <a href="/blog">Blog</a>
        </div>
        <div className={styles.navActions}>
          <a href="/login" className="btn-ghost" style={{padding:'8px 16px', fontSize:'13px'}}>Connexion</a>
          <a href={CHECKOUT_STARTER} className="btn-primary" style={{padding:'8px 16px', fontSize:'13px'}}>Essai gratuit</a>
        </div>
      </nav>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot}></span>
            Pour médecins, dentistes, kinés, infirmiers et tous les indépendants de santé
          </div>
          <h1 className={styles.heroTitle}>
            Transformez vos patients satisfaits<br/>
            en <span className={styles.heroAccent}>avis Google 5 étoiles</span>
          </h1>
          <p className={styles.heroSub}>
            Après chaque consultation, un SMS invite votre patient à noter son expérience.
            Vos patients satisfaits partagent leur expérience sur Google. Vous recevez aussi les retours privés pour améliorer votre cabinet.
            <br/>Vous contrôlez tout.
          </p>
          <div className={styles.heroCtas}>
            <a href={CHECKOUT_STARTER} className="btn-primary" style={{fontSize:'15px', padding:'13px 28px'}}>
              Commencer gratuitement →
            </a>
            <a href="#fonctionnement" className="btn-ghost" style={{fontSize:'15px', padding:'13px 24px'}}>
              Voir comment ça marche
            </a>
          </div>
          <p className={styles.heroNote}>Aucun abonnement · Payez uniquement les SMS envoyés · 5 SMS offerts</p>
        </div>

        {/* FLOW ILLUSTRATION */}
        <div className={styles.heroFlow}>
          <div className={styles.flowStep}>
            <div className={styles.flowIcon}>💬</div>
            <div className={styles.flowLabel}>SMS envoyé au patient</div>
          </div>
          <div className={styles.flowArrow}>→</div>
          <div className={styles.flowStep}>
            <div className={styles.flowStars}>
              {[1,2,3,4,5].map(s => (
                <span key={s} className={s <= 4 ? styles.starOn : styles.starOff}>★</span>
              ))}
            </div>
            <div className={styles.flowLabel}>Patient note son expérience</div>
          </div>
          <div className={styles.flowArrow}>→</div>
          <div className={styles.flowSplit}>
            <div className={styles.flowBranchGood}>
              <div className={styles.flowBranchIcon} style={{color:'#059669'}}>★★★★+</div>
              <div>Redirigé vers Google</div>
            </div>
            <div className={styles.flowBranchBad}>
              <div className={styles.flowBranchIcon} style={{color:'#D97706'}}>★★★−</div>
              <div>Feedback privé → vous</div>
            </div>
          </div>
        </div>

        <div className={styles.heroStats}>
          <div className={styles.stat}><strong>+200%</strong><span>d'avis Google en 3 mois</span></div>
          <div className={styles.statDiv}></div>
          <div className={styles.stat}><strong>72 %</strong><span>des patients lisent les avis avant RDV</span></div>
          <div className={styles.statDiv}></div>
          <div className={styles.stat}><strong>5 secondes</strong><span>par patient pour votre équipe</span></div>
          <div className={styles.statDiv}></div>
          <div className={styles.stat}><strong>443 000</strong><span>professionnels de santé libéraux</span></div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className={styles.section} id="fonctionnement" style={{background:'var(--surface)'}}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>Comment ça marche</div>
          <h2 className={styles.sectionTitle}>Simple pour votre équipe.<br/>Puissant pour votre réputation.</h2>
          <div className={styles.steps}>
            {[
              { n:'01', icon:'📱', title:"Votre assistante saisit le numéro", text:"Après la consultation, elle entre le numéro du patient dans Reputo. 5 secondes. Le SMS part automatiquement avec le nom de votre cabinet." },
              { n:'02', icon:'⭐', title:"Le patient choisit son nombre d'étoiles", text:"Il clique sur le lien, voit une page simple avec 1 à 5 étoiles. Vous définissez le seuil (par défaut 4 étoiles) qui déclenche la redirection Google." },
              { n:'03', icon:'🔀', title:"Reputo filtre intelligemment", text:"Après la notation, vos patients sont invités à partager leur expérience sur Google. Un formulaire privé permet aussi à chacun de vous envoyer un retour direct." },
            ].map(s => (
              <div key={s.n} className={styles.step}>
                <div className={styles.stepNum}>{s.n}</div>
                <div className={styles.stepIcon}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER FEATURE CALLOUT */}
      <section className={styles.filterSection}>
        <div className={styles.sectionInner}>
          <div className={styles.filterCard}>
            <div className={styles.filterLeft}>
              <div className={styles.sectionLabel}>La fonctionnalité clé</div>
              <h2 style={{fontFamily:'var(--font-display)', fontSize:'28px', fontWeight:700, lineHeight:1.2, marginBottom:'16px'}}>
                Votre seuil de filtre,<br/>100% personnalisable
              </h2>
              <p style={{color:'var(--muted)', fontSize:'15px', lineHeight:1.7, marginBottom:'20px'}}>
                Vous définissez votre seuil de satisfaction. Les patients au-dessus sont invités à partager sur Google. Tous peuvent aussi vous envoyer un retour privé directement.
              </p>
              <div className={styles.filterExamples}>
                <div className={styles.filterEx}>
                  <span className={styles.filterExBadge} style={{background:'#DCFCE7', color:'#166534'}}>≥ 4 étoiles</span>
                  <span>→ Page Google Reviews</span>
                </div>
                <div className={styles.filterEx}>
                  <span className={styles.filterExBadge} style={{background:'#FEF9C3', color:'#713F12'}}>1-3 étoiles</span>
                  <span>→ Feedback privé chez vous</span>
                </div>
              </div>
            </div>
            <div className={styles.filterRight}>
              <div className={styles.filterMockup}>
                <div className={styles.fmTitle}>Comment s'est passée votre visite ?</div>
                <div className={styles.fmCabinet}>Dr. Dupont</div>
                <div className={styles.fmStars}>
                  {[1,2,3,4,5].map(s => (
                    <span key={s} className={s <= 4 ? styles.fmStarOn : styles.fmStarOff}>★</span>
                  ))}
                </div>
                <div className={styles.fmNote}>4 étoiles sélectionnées</div>
                <div className={styles.fmBtn}>Valider →</div>
                <div className={styles.fmResult}>✓ Merci ! Souhaitez-vous partager sur Google ?</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOR WHO */}
      <section className={styles.section} style={{background:'var(--surface)'}}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>Pour qui</div>
          <h2 className={styles.sectionTitle}>Tous les professionnels de santé libéraux</h2>
          <div className={styles.professions}>
            {[
              { icon:'🦷', label:'Dentistes', href:'/blog/reputo-dentiste' },
              { icon:'👨‍⚕️', label:'Médecins généralistes', href:'/blog/reputo-medecin-generaliste' },
              { icon:'💪', label:'Kinésithérapeutes', href:'/blog/reputo-kinesitherapeute' },
              { icon:'🤲', label:'Ostéopathes', href:'/blog/reputo-osteopathe' },
              { icon:'💉', label:'Infirmiers libéraux', href:'/blog/reputo-infirmier-liberal' },
              { icon:'👁️', label:'Ophtalmologues', href:'/blog/reputo-ophtalmo' },
              { icon:'👂', label:'ORL', href:'/blog/reputo-orl' },
              { icon:'🧠', label:'Psychologues', href:'/blog/reputo-psychologue' },
              { icon:'🦴', label:'Chirurgiens', href:'/blog' },
              { icon:'💊', label:'Pharmaciens', href:'/blog/reputo-pharmacien' },
              { icon:'👓', label:'Opticiens', href:'/blog/reputo-opticien' },
              { icon:'✚', label:'Et tous les autres' },
            ].map(p => (
              <a key={p.label} href={p.href} className={styles.profession} style={{textDecoration:'none'}}>
                <span style={{fontSize:'24px'}}>{p.icon}</span>
                <span>{p.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>Fonctionnalités</div>
          <h2 className={styles.sectionTitle}>Tout ce qu'il vous faut,<br/>rien de superflu</h2>
          <div className={styles.features}>
            {[
              { icon:'🔀', title:'Satisfaction mesurée', text:'Votre seuil de satisfaction configurable. Les patients satisfaits partagent sur Google, les autres vous envoient un retour privé.' },
              { icon:'📊', title:'Tableau de bord temps réel', text:'Avis collectés, feedbacks reçus, SMS envoyés. Tout en un coup d\'oeil.' },
              { icon:'✏️', title:'SMS personnalisable', text:'Votre message, votre nom de cabinet, votre ton. Modifiable à tout moment.' },
              { icon:'🔒', title:'Conforme RGPD', text:'Aucune donnée médicale collectée. Numéro supprimé après envoi.' },
              { icon:'💰', title:'Sans abonnement', text:'Vous achetez des crédits SMS quand vous voulez. Aucun engagement, aucun frais fixe.' },
              { icon:'⚡', title:'5 secondes par patient', text:'Votre secrétaire saisit un numéro et c\'est tout. Pas de formation, pas de logiciel complexe.' },
            ].map(f => (
              <div key={f.title} className={styles.feature}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className={styles.section} id="tarifs" style={{background:'var(--surface)'}}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>Tarifs</div>
          <h2 className={styles.sectionTitle}>Payez uniquement ce que vous envoyez</h2>
          <p style={{color:'var(--muted)', textAlign:'center', marginBottom:'40px', fontSize:'15px'}}>
            Aucun abonnement. Aucun frais cachés. Vos crédits n'expirent jamais.
          </p>
          <div className={styles.pricing}>
            {/* STARTER */}
            <div className={styles.pricingCard}>
              <div className={styles.pricingName}>Starter</div>
              <div className={styles.pricingPrice}><span className={styles.pricingCur}>€</span>9<span className={styles.pricingPer}> HT</span></div>
              <div className={styles.pricingCredits}>50 crédits SMS</div>
              <div className={styles.pricingPerSms}>0,18 € / SMS</div>
              <a href={CHECKOUT_STARTER} className="btn-ghost" style={{width:'100%', textAlign:'center', marginTop:'20px', padding:'11px'}}>
                Commencer →
              </a>
              <div className={styles.pricingFeatures}>
                {['Tableau de bord complet','Filtre étoiles configurable','Feedback privé inclus','5 SMS de test offerts'].map(f => (
                  <div key={f} className={styles.pricingFeat}><span className={styles.pricingCheck}>✓</span>{f}</div>
                ))}
              </div>
            </div>

            {/* PRO — highlighted */}
            <div className={`${styles.pricingCard} ${styles.pricingCardFeatured}`}>
              <div className={styles.pricingBadge}>Le plus populaire</div>
              <div className={styles.pricingName}>Pro</div>
              <div className={styles.pricingPrice}><span className={styles.pricingCur}>€</span>19<span className={styles.pricingPer}> HT</span></div>
              <div className={styles.pricingCredits}>150 crédits SMS</div>
              <div className={styles.pricingPerSms}>0,127 € / SMS</div>
              <a href={CHECKOUT_PRO} className="btn-primary" style={{width:'100%', textAlign:'center', marginTop:'20px', padding:'11px'}}>
                Commencer →
              </a>
              <div className={styles.pricingFeatures}>
                {['Tout du Starter','SMS en lot (bientôt disponible)','Statistiques avancées','Support prioritaire email'].map(f => (
                  <div key={f} className={styles.pricingFeat}><span className={styles.pricingCheck}>✓</span>{f}</div>
                ))}
              </div>
            </div>
          </div>
          <p style={{textAlign:'center', color:'var(--muted)', fontSize:'13px', marginTop:'24px'}}>
            Besoin de plus de volume ? <a href="/contact" style={{color:'var(--blue)'}}>Contactez-nous</a> pour un tarif sur mesure.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <div className={styles.sectionInner} style={{maxWidth:'700px'}}>
          <div className={styles.sectionLabel}>FAQ</div>
          <h2 className={styles.sectionTitle}>Questions fréquentes</h2>
          <div className={styles.faqs}>
            {[
              { q:"Est-ce conforme au RGPD et au secret médical ?", a:"Oui. Reputo ne collecte aucune donnée médicale. Seul le numéro de téléphone est utilisé, et il est supprimé après envoi du SMS. Aucun contenu médical n'est traité ou stocké." },
              { q:"Mes patients ne vont-ils pas trouver ça intrusif ?", a:"Les SMS post-consultation ont un très bon taux d'acceptation dans le domaine médical. Le message est envoyé une seule fois, personnalisé avec votre nom, et le patient peut simplement ignorer." },
              { q:"Comment fonctionne le filtre d'étoiles exactement ?", a:"Vous définissez un seuil dans votre tableau de bord (par défaut 4 étoiles). Après la notation, tous les patients sont invités à partager leur expérience sur Google. Un formulaire privé permet aussi à chacun de vous envoyer un retour direct — idéal pour améliorer votre cabinet." },
              { q:"Mes crédits expirent-ils ?", a:"Non. Vos crédits SMS sont valables sans limite de durée. Vous achetez quand vous en avez besoin, sans abonnement ni engagement." },
              { q:"Combien de temps pour configurer Reputo ?", a:"Moins de 5 minutes. Vous créez votre compte, renseignez le lien Google de votre cabinet et personnalisez votre SMS. C'est prêt." },
            ].map(f => (
              <div key={f.q} className={styles.faq}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className={styles.ctaSection}>
        <div className={styles.sectionInner} style={{textAlign:'center'}}>
          <h2 style={{fontFamily:'var(--font-display)', fontSize:'clamp(28px, 3.5vw, 40px)', fontWeight:800, letterSpacing:'-0.5px', marginBottom:'16px'}}>
            Prêt à booster votre réputation Google ?
          </h2>
          <p style={{color:'var(--muted)', fontSize:'16px', marginBottom:'32px'}}>
            Rejoignez les professionnels de santé qui utilisent Reputo.<br/>
            5 SMS offerts à l'inscription, sans engagement.
          </p>
          <div style={{display:'flex', gap:'12px', justifyContent:'center', flexWrap:'wrap'}}>
            <a href={CHECKOUT_STARTER} className="btn-primary" style={{fontSize:'15px', padding:'13px 28px'}}>Commencer gratuitement →</a>
            <a href="/contact" className="btn-ghost" style={{fontSize:'15px', padding:'13px 24px'}}>Nous contacter</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div>
            <div className={styles.logo} style={{marginBottom:'8px'}}>
              <span className={styles.logoMark}>R</span>Reputo
            </div>
            <p style={{fontSize:'13px', color:'var(--muted)', maxWidth:'240px'}}>
              La solution SMS d'avis Google pour les professionnels de santé libéraux.
            </p>
          </div>
          <div className={styles.footerLinks}>
            <div>
              <div className={styles.footerLinkTitle}>Produit</div>
              <a href="#fonctionnement">Fonctionnement</a>
              <a href="#tarifs">Tarifs</a>
              <a href="/blog">Blog</a>
            </div>
            <div>
              <div className={styles.footerLinkTitle}>Entreprise</div>
              <a href="/contact">Contact</a>
              <a href="/mentions-legales">Mentions légales</a>
              <a href="/confidentialite">Confidentialité</a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span>© 2026 Reputo</span>
          <span>Conforme RGPD · ISO 27001</span>
        </div>
      </footer>

    </main>
  );
}
