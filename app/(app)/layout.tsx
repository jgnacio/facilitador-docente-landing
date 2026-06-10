import type { Metadata } from "next";
import { Fraunces, DM_Sans, Playfair_Display } from "next/font/google";
import CookieBanner from "@/components/CookieBanner";
import "../globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://facilitadordocente.com"),
  title: "Planificaciones ANEP en minutos con IA | Facilitador Docente EBI Uruguay",
  description:
    "Planificá en minutos, no en horas. Facilitador Docente lee el currículo oficial de ANEP (EBI) y crea planificaciones con Competencias Específicas y Criterios de Logro para Tramo 3 y 4.",
  keywords: [
    "planificación docente Uruguay",
    "EBI Uruguay",
    "ANEP currículo",
    "competencias específicas EBI",
    "criterios de logro primaria",
    "agente IA educación",
    "maestras Uruguay planificación",
    "Educación Básica Integrada",
    "planificación automática ANEP",
    "herramienta docente Uruguay",
  ],
  authors: [{ name: "Facilitador Docente", url: "https://facilitadordocente.com" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://facilitadordocente.com",
  },
  openGraph: {
    title: "Planificá con el currículo de verdad | Facilitador Docente",
    description: "La IA que conoce el programa oficial de ANEP. Planificá con Competencias Específicas y Criterios de Logro para EBI.",
    url: "https://facilitadordocente.com",
    siteName: "Facilitador Docente",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Facilitador Docente — Planificación docente con el currículo oficial de ANEP para EBI Uruguay",
      },
    ],
    locale: "es_UY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Planificá con el currículo de verdad | Facilitador Docente",
    description: "La IA que conoce el programa oficial de ANEP y tu grupo de alumnos.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${fraunces.variable} ${dmSans.variable} ${playfair.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Facilitador Docente",
              applicationCategory: "EducationalApplication",
              operatingSystem: "Web",
              description:
                "IA que lee el currículo oficial de ANEP (EBI) y crea planificaciones con Competencias Específicas y Criterios de Logro para Tramo 3 y 4 de Educación Básica Integrada en Uruguay.",
              url: "https://facilitadordocente.com",
              offers: { "@type": "Offer", price: "400", priceCurrency: "UYU" },
              inLanguage: "es-UY",
              audience: { "@type": "EducationalAudience", educationalRole: "teacher" },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                  name: "¿Funciona para 3° a 6° grado EBI?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, está diseñado específicamente para maestras del Tramo 3 y Tramo 4 de Educación Básica Integrada (3° a 6° grado de primaria).",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué son las Competencias Específicas y cómo las usa el agente?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Son los aprendizajes que el currículo espera desarrollar en cada espacio. El agente las identifica automáticamente a partir de tu intención pedagógica y las integra en el diseño de la clase.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-light-bg text-stone-900 font-body antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
