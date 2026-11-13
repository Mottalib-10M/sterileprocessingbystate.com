/** Configuration centrale du site (générée par new-site.py). */
export const SITE_URL = "https://sterileprocessingbystate.com";
export const SITE_NAMES: Record<string, string> = {"en": "Sterile Processing By State"};
// Partie du nom affichée en couleur dans l'en-tête (RECETTE §10.3), « » pour aucune.
export const BRAND_ACCENT = "By State";
export const LANG_TAGS: Record<string, string> = {"en": "en-US"};
export const OG_LOCALES: Record<string, string> = {"en": "en_US"};
export const LOCALE_TAG = 'en-US';
export const CURRENCY = 'USD';
export const YEAR = 2026;
/** Année de création du site — signal d'ancienneté (RECETTE §8.0). */
export const SITE_FOUNDED = '2026';
export const LAST_UPDATED = '2026-11-13';
export const AUTHOR_NAME = 'Radif Partners';
export const AUTHOR_ROLE: Record<string, string> = {"en": "Independent publisher of state-by-state rules, cost calculators and practice questions for sterile processing technicians, written from the statutes and the two certification bodies' own documents"};
export const AUTHOR_DESC: Record<string, string> = {"en": "Radif Partners reads the state laws on central service technicians (New York, New Jersey, Connecticut, Pennsylvania, Tennessee, Delaware, Minnesota) on the legislature or health department sites, with their effective dates, and the published documents of the two certification bodies: the HSPA Certification Handbook, the CRCST content outline and pass statistics, the CBSPD technician page, candidate bulletin and statistics. Every fee, deadline and rule links to the page it was read on, with the date. Practice questions are written by Radif Partners. Radif Partners is not HSPA, the CBSPD, a school, an employer or a state agency, and it sells nothing."};
/** Sujets sur lesquels l'editeur est competent (schema.org knowsAbout). Ce sont les
 *  themes reellement traites par le site, pas une liste de mots-cles : un sujet
 *  declare ici sans page qui le couvre est une declaration fausse. */
export const KNOWS_ABOUT: Record<string, string[]> = {"en": ["State certification laws for central service (sterile processing) technicians: NY, NJ, CT, PA, TN, DE, MN", "CRCST certification of the Healthcare Sterile Processing Association: exam, 400 hands-on hours, renewal", "CSPDT certification of the Certification Board for Sterile Processing and Distribution: eligibility, exam windows, recertification", "Sterile processing workflow: decontamination, preparation and packaging, sterilization, sterile storage and distribution"]};
export const CONTACT_EMAIL = "contact@sterileprocessingbystate.com";
export const THEME_COLOR = '#1F5F74';
export const LOGO_SYMBOL = 'SPD';
export const BING_VERIFY_CODE = '';
export const GOOGLE_VERIFY_CODE = '';
/** Régime : 'none' pour tous les sites (RECETTE §15.6, décision de l'éditeur du 2026-10-06) :
 *  aucun bandeau ; Clarity chargé en mode sans cookie (consentv2 denied) ; GA4 avec cookies si GA4_ID.
 *  'opt-in' / 'notice' ne servent plus qu'aux sites anciens qui les portent encore. */
export const CONSENT_MODE: 'opt-in' | 'notice' | 'none' = 'none';
/** Propriété Google Analytics 4 (décision de l'éditeur du 2026-10-17, RECETTE §15.6) : GA4 normal,
 *  avec cookies _ga / _ga_<ID> (390 jours), sans bandeau, publicité refusée. Créée par
 *  `seo-platform/scripts/create-ga4.ts accounts/372759688` (RECETTE §15.3, étape 15), puis
 *  pages légales régénérées : `python3 scripts/gen-legal-pages.py .`. Vide = pas de GA4. */
export const GA4_ID = '';
/** Projet Microsoft Clarity (compte amradif), chargé sans cookie. Vide = aucune mesure. */
export const CLARITY_ID = '';
export const INDEXNOW_KEY = '74eb9125d632c1588bbf5a74ab460fef';

/* ------------------------------------------------------------------------- *
 * IDENTITÉ LÉGALE — À COMPLÉTER AVANT LA MISE EN LIGNE
 * Ces champs alimentent la mention légale du pays, la politique de confidentialité,
 * la page contact et le schema Organization. Un champ vide s'affiche en jaune
 * sur le site. Contrôle : `npm run check:legal`.
 * ------------------------------------------------------------------------- */
export interface LegalHosting { name: string; address: string; phone: string; url: string }
export interface LegalIdentity {
  entityName: string; legalForm: string; street: string; postalCode: string; city: string;
  country: string; phone: string; registerLabel: string; registerNumber: string;
  vatLabel: string; vatNumber: string; jurisdiction: string;
  supervisoryAuthority: string; supervisoryAuthorityUrl: string; hosting: LegalHosting;
}
export const LEGAL: LegalIdentity = {
  entityName: "Radif Partners",  // raison sociale (portefeuille : Radif Partners)
  legalForm: '',             // ex. entreprise individuelle, SASU, GmbH, eenmanszaak
  street: "49 rue du Ressort",
  postalCode: "63000",
  city: "Clermont-Ferrand",
  country: "France",
  phone: '',                 // ligne de contact publiée
  registerLabel: "SIREN",
  registerNumber: '',
  vatLabel: "VAT",
  vatNumber: '',             // laisser vide si non assujetti
  jurisdiction: "France",
  supervisoryAuthority: "Commission nationale de l'informatique et des libertés (CNIL)",
  supervisoryAuthorityUrl: "https://www.cnil.fr",
  hosting: { name: 'GitHub, Inc. (GitHub Pages)', address: '88 Colin P Kelly Jr Street, San Francisco, CA 94107, United States', phone: '', url: 'https://pages.github.com' },
};

/** Champs sans lesquels le site ne doit pas être mis en ligne. */
export const LEGAL_REQUIRED: Array<keyof LegalIdentity> = ['entityName', 'street', 'postalCode', 'city']; // legalForm vide à dessein, convention du portefeuille (2026-11-13)

/** Profils publics de l'auteur (schema.org sameAs). Laisser vide si aucun. */
export const AUTHOR_SAME_AS: string[] = [];

/** Rythme de revue éditoriale annoncé sur le site, en mois. */
export const REVIEW_CYCLE_MONTHS = 12;
