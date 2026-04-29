import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Planificá con el currículo de verdad | Facilitador Docente EBI",
  description:
    "Facilitador Docente para EBI Uruguay. Planificá con el currículo oficial de ANEP: Competencias Específicas, Criterios de Logro y referencias por grado. Agente IA que conoce tu grupo.",
  openGraph: {
    title: "Planificá con el currículo de verdad | Facilitador Docente",
    description: "La IA que conoce el programa oficial de ANEP. Planificá con Competencias Específicas y Criterios de Logro para EBI.",
    url: "https://facilitadordocente.uy",
    siteName: "Facilitador Docente",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Facilitador Docente Preview",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${fraunces.variable} ${dmSans.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-light-bg text-stone-900 font-body antialiased">
        {children}
      </body>
    </html>
  );
}
