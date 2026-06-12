import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import ForWhom from "@/components/sections/ForWhom";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Facilitador Docente",
  url: "https://facilitadordocente.com",
  logo: "https://facilitadordocente.com/images/logo.png",
  description:
    "Herramienta de inteligencia artificial para planificación docente alineada al currículo oficial de ANEP para maestras de EBI Uruguay.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "UY",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Facilitador Docente",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  url: "https://app.facilitadordocente.com",
  description:
    "Agente IA que planifica con el currículo oficial de ANEP para maestras de Educación Básica Integrada (EBI) en Uruguay. Genera secuencias didácticas con Competencias Específicas y Criterios de Logro.",
  offers: [
    {
      "@type": "Offer",
      name: "Plus",
      price: "400",
      priceCurrency: "UYU",
      description: "Planificaciones ilimitadas, asistente IA, exportación PDF y adaptaciones curriculares.",
    },
    {
      "@type": "Offer",
      name: "Max",
      price: "800",
      priceCurrency: "UYU",
      description: "Todo lo de Plus más modelos de IA avanzados, acceso anticipado y soporte prioritario.",
    },
  ],
  inLanguage: "es-UY",
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "teacher",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿El agente conoce el programa oficial de ANEP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. El asistente tiene integrado el currículo oficial de ANEP vigente. Mapea directamente las Competencias Específicas y Criterios de Logro que corresponden a tu grado y espacio antes de sugerir actividades.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo planificar para mis alumnos específicos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutamente. Considera la realidad del grupo que cargaste, no un grupo genérico. Si tenés alumnos con necesidades específicas de apoyo, el agente genera diferenciaciones pedagógicas reales para ellos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo sé que la planificación está alineada al currículo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El agente te indica exactamente de qué parte del programa oficial proviene cada contenido sugerido. Las actividades propuestas se anclan directamente a las metas de aprendizaje y criterios de logro.",
      },
    },
    {
      "@type": "Question",
      name: "¿Funciona para toda la primaria uruguaya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, cubre toda la primaria uruguaya: de inicial (3 años) a 6to grado, abarcando los Tramos 1, 2, 3 y 4 de Educación Básica Integrada, respetando las competencias y criterios de logro de cada tramo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué son las Competencias Específicas y cómo las usa el agente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Son los aprendizajes que el currículo espera desarrollar en cada espacio. El agente no te pide que las busques o las ingreses de memoria; las identifica automáticamente a partir de tu intención pedagógica y las integra en el diseño de la clase.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <ForWhom />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
