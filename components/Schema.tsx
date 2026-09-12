const SITE_URL = "https://schulz-stosse.de";
const ORG_ID = `${SITE_URL}/#organization`;
const LOCAL_ID = `${SITE_URL}/#localbusiness`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const PLACE_ID = `${SITE_URL}/#place`;
const FYNN_ID = `${SITE_URL}/#fynn-schulz`;
const JULIAN_ID = `${SITE_URL}/#julian-stosse`;
const TASKEY_ID = `${SITE_URL}/#taskey`;
const SERVICE_INDIVIDUAL_ID = `${SITE_URL}/leistungen/individualsoftware#service`;
const SERVICE_KI_ID = `${SITE_URL}/leistungen/ki-automatisierung#service`;
const SERVICE_SAAS_ID = `${SITE_URL}/leistungen/saas-entwicklung#service`;

const GEO_LAT = 49.2506;
const GEO_LNG = 6.8536;

const organization = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": ORG_ID,
      name: "Schulz & Stosse",
      alternateName: "Schulz & Stosse GbR",
      legalName: "Schulz & Stosse GbR",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo-dark.webp`,
        width: 600,
        height: 327,
        caption: "Schulz & Stosse",
      },
      image: `${SITE_URL}/og-image.png`,
      slogan: "Software, die sich Ihrem Unternehmen anpasst.",
      description:
        "Schulz & Stosse entwickelt individuelle Softwaresysteme, KI-gestützte Prozesse und digitale Produkte für Unternehmen mit Anforderungen, die Standardsoftware nicht abbilden kann.",
      email: "info@schulz-stosse.de",
      telephone: "+49-151-68488999",
      vatID: "DE458914838",
      foundingDate: "2025",
      foundingLocation: { "@id": PLACE_ID },
      priceRange: "€€€",
      currenciesAccepted: "EUR",
      paymentAccepted: ["Bank Transfer", "SEPA"],
      founder: [{ "@id": FYNN_ID }, { "@id": JULIAN_ID }],
      employee: [{ "@id": FYNN_ID }, { "@id": JULIAN_ID }],
      numberOfEmployees: { "@type": "QuantitativeValue", value: 2 },
      knowsAbout: [
        "Individuelle Softwareentwicklung",
        "Custom Software Development",
        "Künstliche Intelligenz",
        "KI-Integration",
        "Prozessautomatisierung",
        "SaaS-Entwicklung",
        "Digitale Produkte",
        "System-Architektur",
        "Business-Automatisierung",
        "Operations-Software",
        "Kundenportale",
        "Management-Dashboards",
        "Multi-Tenant SaaS",
        "LLM-Integration",
        "Dokumenten-KI",
      ],
      areaServed: [
        { "@type": "Country", name: "Deutschland" },
        { "@type": "Country", name: "Österreich" },
        { "@type": "Country", name: "Schweiz" },
        { "@type": "Place", name: "DACH" },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "In der Acht 44",
        postalCode: "66333",
        addressLocality: "Völklingen",
        addressRegion: "Saarland",
        addressCountry: "DE",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "info@schulz-stosse.de",
          telephone: "+49-151-68488999",
          areaServed: ["DE", "AT", "CH"],
          availableLanguage: ["de", "en"],
        },
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "info@schulz-stosse.de",
          telephone: "+49-151-68488999",
          areaServed: ["DE", "AT", "CH"],
          availableLanguage: ["de", "en"],
        },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      sameAs: [] as string[],
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": SERVICE_INDIVIDUAL_ID,
            name: "Individuelle Softwareentwicklung",
            url: `${SITE_URL}/leistungen/individualsoftware`,
            description:
              "Custom-Softwaresysteme für Betriebs-, Verwaltungs- und Prozessanforderungen, die Standardsoftware nicht abbilden kann.",
            provider: { "@id": ORG_ID },
            areaServed: "DACH",
            serviceType: "Custom Software Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": SERVICE_KI_ID,
            name: "KI-Integration und Automatisierung",
            url: `${SITE_URL}/leistungen/ki-automatisierung`,
            description:
              "Dokumenten-KI, Klassifikation und Routing, Agents mit Geschäftskontext, LLM-basierte Workflows und KI-native Automatisierung operativer Prozesse.",
            provider: { "@id": ORG_ID },
            areaServed: "DACH",
            serviceType: "AI Integration and Process Automation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": SERVICE_SAAS_ID,
            name: "SaaS- und Produktentwicklung",
            url: `${SITE_URL}/leistungen/saas-entwicklung`,
            description:
              "Von der Produkt-Discovery über MVP bis zur skalierbaren SaaS-Architektur. Multi-Tenant, Auth, Billing, Analytics.",
            provider: { "@id": ORG_ID },
            areaServed: "DACH",
            serviceType: "SaaS Product Development",
          },
        },
      ],
      location: { "@id": PLACE_ID },
      owns: [{ "@id": TASKEY_ID }],
    },
    {
      "@type": "Place",
      "@id": PLACE_ID,
      name: "Schulz & Stosse GbR",
      address: {
        "@type": "PostalAddress",
        streetAddress: "In der Acht 44",
        postalCode: "66333",
        addressLocality: "Völklingen",
        addressRegion: "Saarland",
        addressCountry: "DE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: GEO_LAT,
        longitude: GEO_LNG,
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": LOCAL_ID,
      name: "Schulz & Stosse",
      legalName: "Schulz & Stosse GbR",
      url: SITE_URL,
      logo: `${SITE_URL}/logo-dark.webp`,
      image: `${SITE_URL}/og-image.png`,
      description:
        "Softwareagentur in Völklingen (Saarland). Wir entwickeln individuelle Softwaresysteme, KI-Automatisierung und SaaS-Produkte für Unternehmen in DACH.",
      email: "info@schulz-stosse.de",
      telephone: "+49-151-68488999",
      priceRange: "€€€",
      address: {
        "@type": "PostalAddress",
        streetAddress: "In der Acht 44",
        postalCode: "66333",
        addressLocality: "Völklingen",
        addressRegion: "Saarland",
        addressCountry: "DE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: GEO_LAT,
        longitude: GEO_LNG,
      },
      areaServed: [
        { "@type": "Country", name: "Deutschland" },
        { "@type": "Country", name: "Österreich" },
        { "@type": "Country", name: "Schweiz" },
        { "@type": "State", name: "Saarland" },
        { "@type": "City", name: "Saarbrücken" },
        { "@type": "City", name: "Völklingen" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      parentOrganization: { "@id": ORG_ID },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: "Schulz & Stosse",
      alternateName: "Schulz und Stosse",
      description:
        "Softwareagentur für individuelle Softwaresysteme, KI-gestützte Prozesse und digitale Produkte.",
      publisher: { "@id": ORG_ID },
      inLanguage: "de-DE",
      copyrightHolder: { "@id": ORG_ID },
      copyrightYear: 2026,
      keywords:
        "Individuelle Softwareentwicklung, KI-Integration, SaaS-Entwicklung, Operations-Software, Dokumenten-KI, Kundenportal, Softwareagentur Saarland",
    },
    {
      "@type": "Person",
      "@id": FYNN_ID,
      name: "Fynn-Luca Schulz",
      givenName: "Fynn-Luca",
      familyName: "Schulz",
      url: `${SITE_URL}/team#fynn-schulz`,
      image: `${SITE_URL}/fynn.webp`,
      jobTitle: "Head of Product & Strategy",
      worksFor: { "@id": ORG_ID },
      knowsAbout: [
        "Produktstrategie",
        "Prozess-Design",
        "Business Modeling",
        "UX-Konzeption",
        "Digitalisierung",
        "Product Discovery",
      ],
      knowsLanguage: ["Deutsch", "Englisch"],
      sameAs: [] as string[],
    },
    {
      "@type": "Person",
      "@id": JULIAN_ID,
      name: "Julian Stosse",
      givenName: "Julian",
      familyName: "Stosse",
      url: `${SITE_URL}/team#julian-stosse`,
      image: `${SITE_URL}/julian.webp`,
      jobTitle: "Head of Engineering",
      worksFor: { "@id": ORG_ID },
      knowsAbout: [
        "Software-Architektur",
        "Backend-Entwicklung",
        "Frontend-Entwicklung",
        "KI-Integration",
        "Datenmodelle",
        "APIs",
        "Cloud-Infrastruktur",
      ],
      knowsLanguage: ["Deutsch", "Englisch"],
      sameAs: [] as string[],
    },
    {
      "@type": "SoftwareApplication",
      "@id": TASKEY_ID,
      name: "Taskey",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Operations Management",
      operatingSystem: "Web, iOS, Android",
      url: "https://taskeyapp.com",
      sameAs: ["https://taskeyapp.com"],
      creator: { "@id": ORG_ID },
      publisher: { "@id": ORG_ID },
      description:
        "Operations-Software für Dienstleistungsunternehmen (Reinigung, Facility Management, Handwerk). Aufträge, Mitarbeiter, Objekte, Dokumentation, Kommunikation und KI-Klassifikation in einem System.",
      featureList: [
        "Multi-Tenancy",
        "Rollen & Rechte",
        "Offline-fähig",
        "AI Klassifikation",
        "Reports",
        "Auftragsverwaltung",
        "Objektverwaltung",
        "Team-Management",
      ],
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "EUR",
          description: "Preise auf Anfrage",
        },
      },
    },
  ],
};

export type WebPageInput = {
  path: string;
  title: string;
  description: string;
  breadcrumbs: { label: string; href: string }[];
  datePublished?: string;
  dateModified?: string;
  about?: string[];
  mentions?: string[];
  primaryImage?: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "FAQPage" | "CollectionPage";
  speakableSelectors?: string[];
};

export function buildWebPageGraph({
  path,
  title,
  description,
  breadcrumbs,
  datePublished = "2026-09-06",
  dateModified = "2026-09-06",
  about = [],
  mentions = [],
  primaryImage = `${SITE_URL}/og-image.png`,
  type = "WebPage",
  speakableSelectors,
}: WebPageInput) {
  const absoluteUrl = `${SITE_URL}${path === "/" ? "" : path}`;
  const speakable =
    speakableSelectors && speakableSelectors.length > 0
      ? {
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: speakableSelectors,
          },
        }
      : {};
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": type,
        "@id": `${absoluteUrl}#webpage`,
        url: absoluteUrl,
        name: title,
        description,
        isPartOf: { "@id": WEBSITE_ID },
        primaryImageOfPage: { "@type": "ImageObject", url: primaryImage },
        datePublished,
        dateModified,
        inLanguage: "de-DE",
        publisher: { "@id": ORG_ID },
        about:
          about.length > 0
            ? about.map((id) => ({ "@id": id }))
            : [{ "@id": ORG_ID }],
        ...(mentions.length > 0 && {
          mentions: mentions.map((id) => ({ "@id": id })),
        }),
        ...speakable,
        breadcrumb: { "@id": `${absoluteUrl}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${absoluteUrl}#breadcrumb`,
        itemListElement: breadcrumbs.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.label,
          item: c.href.startsWith("http") ? c.href : `${SITE_URL}${c.href === "/" ? "" : c.href}`,
        })),
      },
    ],
  };
}

export default function Schema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
    />
  );
}

export {
  SITE_URL,
  ORG_ID,
  LOCAL_ID,
  WEBSITE_ID,
  PLACE_ID,
  FYNN_ID,
  JULIAN_ID,
  TASKEY_ID,
  SERVICE_INDIVIDUAL_ID,
  SERVICE_KI_ID,
  SERVICE_SAAS_ID,
};
