import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#020410",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Le Village Numérique Résistant | Nuit de l'Info 2025",
    template: "%s | Nuit de l'Info 2025",
  },
  
  description: "Face à l'hégémonie des GAFAM et l'obsolescence programmée, l'école devient un village résistant. Découvrez la démarche NIRD : Numérique Inclusif, Responsable et Durable.",
  
  keywords: [
    "Nuit de l'Info 2025",
    "NIRD",
    "Souveraineté Numérique",
    "Open Source",
    "Linux",
    "Obsolescence programmée",
    "Écologie numérique",
    "Hackathon",
    "Résistance numérique",
    "GAFAM"
  ],

  authors: [{ name: "Team Les Patates Asynchrones" }, { name: "Nuit de l'Info" }],
  creator: "Team Les Patates Asynchrones",

  metadataBase: new URL("https://numheroique.vercel.app"), 

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://numheroique.vercel.app",
    title: "Le Village Numérique Résistant 🛡️",
    description: "92% de nos données partent aux USA. Il est temps de résister. Rejoignez la démarche NIRD.",
    siteName: "Nuit de l'Info 2025",
    images: [
      {
        url: "/og-image.jpg", // Tu devras mettre une image dans /public
        width: 1200,
        height: 630,
        alt: "Le Village Numérique Résistant - Globe 3D",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Le Village Numérique Résistant | Nuit de l'Info",
    description: "L'école contre l'Empire GAFAM. Découvrez comment le logiciel libre sauve nos PC et nos données.",
    images: ["/og-image.jpg"],
    creator: "@LesPatatesAsynchrones",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png", // Pour iPhone
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased bg-[#020410] text-white selection:bg-blue-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
