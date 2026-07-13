import "./globals.css";


export const metadata = {
  title:
    "Virzan Pasa Nugraha | Software Developer & Peneliti Teknologi",

  description:
    "Portfolio resmi Virzan Pasa Nugraha, Software Developer dan peneliti teknologi. Menampilkan proyek aplikasi, Internet of Things, publikasi ilmiah, sertifikasi, dan pengalaman.",

  authors: [
    {
      name:
        "Virzan Pasa Nugraha",
    },
  ],

  keywords: [
    "Virzan Pasa Nugraha",
    "Software Developer",
    "Informatika",
    "Universitas Sebelas April",
    "Internet of Things",
    "Machine Learning",
    "Usability",
    "Human Computer Interaction",
  ],

  metadataBase:
    new URL(
      "https://virzanpasanugraha.vercel.app/"
    ),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Virzan Pasa Nugraha | Portfolio",

    description:
      "Software Developer dan peneliti teknologi.",

    url:
      "https://virzanpasanugraha.vercel.app",

    siteName:
      "Virzan Pasa Nugraha",

    type:
      "website",

    images: [
      {
        url:
          "/profile/favicon-virzan.png",

        width:
          512,

        height:
          512,

        alt:
          "Virzan Pasa Nugraha",
      },
    ],
  },

  icons: {
    icon:
      "/profile/favicon-virzan.png",

    apple:
      "/profile/favicon-virzan.png",
  },
};


export default function RootLayout({
  children,
}) {
  return (
    <html lang="id">
      <body>
        {children}
          <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context":
        "https://schema.org",

      "@type":
        "Person",

      "name":
        "Virzan Pasa Nugraha",

      "url":
        "https://virzanpasanugraha.vercel.app/",

      "image":
        "https://virzanpasanugraha.vercel.app/profile/favicon-virzan.png",

      "jobTitle":
        "Software Developer",

      "sameAs": [
        "https://github.com/VirzanPasaNugraha",

        "https://www.linkedin.com/in/virzan-pasa-nugraha-349940332",

        "https://orcid.org/0009-0003-1089-1927",

        "https://scholar.google.co.id/citations?user=7VkHsDQAAAAJ&hl=id",

        "https://www.researchgate.net/profile/Virzan-Pasa-Nugraha",

        "https://www.youtube.com/channel/UCQTKXfiSUcRkAIw1nWIl6ZA",

        "https://www.instagram.com/vpn_23th/"
      ]
    }),
  }}
/>
      </body>
    </html>
  );
}