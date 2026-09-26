import {
  ArrowUpRight,
  Code2,
  GraduationCap,
  Search,
  School,
} from "lucide-react";

function About() {
  const interests = [
    {
      icon: <Code2 size={26} />,
      title: "Analitik Data & Business Intelligence",
      description:
        "Membangun dashboard analitik dan business intelligence (Power BI & SQL), serta memiliki kompetensi administrasi perkantoran digital dengan Microsoft 365 & Power Platform (termasuk Power Automate & Copilot Studio) untuk menghasilkan solusi digital yang dapat menyelesaikan permasalahan nyata.",
    },
    {
      icon: <GraduationCap size={26} />,
      title: "Akademik & Pengembangan Diri",
      description:
        "Terus meningkatkan kompetensi melalui pembelajaran mandiri, kursus, sertifikasi, penelitian, dan berbagai kegiatan akademik.",
    },
    {
      icon: <Search size={26} />,
      title: "Penelitian Teknologi",
      description:
        "Memiliki ketertarikan pada evaluasi usability, Human-Computer Interaction (HCI), machine learning, keamanan siber, serta penelitian di bidang teknologi informasi.",
    },
  ];

  const educations = [
    {
      year: "2010 — 2016",
      school: "SDN Tenjonagara",
      level: "Sekolah Dasar",
    },
    {
      year: "2016 — 2019",
      school: "SMPN 4 Sumedang",
      level: "Sekolah Menengah Pertama",
    },
    {
      year: "2019 — 2022",
      school: "SMKN 1 Sumedang",
      level: "Rekayasa Perangkat Lunak",
    },
    {
      year: "2022 — 2026",
      school: "Universitas Sebelas April Sumedang",
      level: "S1 Informatika",
    },
  ];

  const experiences = [
    {
      id: 1,
      title: "Petugas Pantarlih & Anggota KPPS 3",
      organization: "Penyelenggara Pemilu",
      year: "2024",
      image: "/profile/pantarlih.jpeg",
      description:
        "Bertugas sebagai Petugas Pemutakhiran Data Pemilih (Pantarlih) dalam proses pencocokan dan penelitian data pemilih, serta sebagai Anggota KPPS 3 yang menangani administrasi dan pencatatan data secara tertulis pada pelaksanaan Pemilihan Umum 2024, guna memastikan data hasil pemungutan suara tercatat secara teliti dan sesuai dengan dokumen yang digunakan.",
    },
    {
      id: 2,
      title: "Publikasi & Dokumentasi (PDD) — KKN",
      organization: "Universitas Sebelas April",
      year: "2026",
      image: "/profile/kkn.png",
      description:
        "Berperan sebagai anggota Divisi Publikasi & Dokumentasi (PDD) dalam pelaksanaan Kuliah Kerja Nyata di Desa Nagrak, Kecamatan Buahdua, Kabupaten Sumedang — bertanggung jawab mengelola dokumentasi visual, konten publikasi digital, dan arsip kegiatan, dengan pendekatan yang rapi dan terstruktur dalam setiap dokumentasi proyek yang dikerjakan.",
      documentationUrl:
        "https://www.instagram.com/kkn_desanagrak26/",
    },
  ];

  return (
    <section className="about section" id="about">
      <div className="section-container">
        <div className="section-heading">
          <span>TENTANG SAYA</span>

          <h2>Data Analyst.</h2>

          <p>
            Virzan Pasa Nugraha, S.Kom. adalah lulusan S1 Informatika Universitas
            Sebelas April Sumedang yang memiliki fokus pada analisis data, business
            intelligence, dan pelaporan data-driven. Ia membangun dashboard
            analitik menggunakan Power BI & SQL, didukung ekosistem Microsoft 365 &
            Power Platform (Word, Excel, PowerPoint, Power Automate, Copilot
            Studio) untuk mengolah data menjadi solusi digital yang menyelesaikan
            permasalahan nyata. Ia juga memiliki ketertarikan pada machine
            learning, usability/HCI, serta keamanan siber sebagai bidang eksplorasi
            lanjutan.
          </p>
        </div>

        <div className="experience-wrapper">
          <div className="experience-heading">
            <span>PENGALAMAN</span>

            <h3>Pengalaman dan keterlibatan lapangan.</h3>

            <p>
              Pengalaman yang membentuk kemampuan dalam tanggung jawab,
              verifikasi data, komunikasi, dan pelaksanaan kegiatan lapangan.
            </p>
          </div>

          <div className="experience-list">
            {experiences.map((item) => (
              <article className="experience-card" key={item.id}>
                <div className="experience-image">
                  <img
                    src={item.image}
                    alt={`Dokumentasi ${item.title}`}
                  />
                </div>

                <div className="experience-content">
                  <span className="experience-year">
                    {item.year}
                  </span>

                  <h4>{item.title}</h4>

                  <strong>{item.organization}</strong>

                  <p>{item.description}</p>

                  {item.documentationUrl && (
                    <a
                      href={item.documentationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="experience-documentation-link"
                    >
                      Lihat Dokumentasi
                      <ArrowUpRight size={17} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="about-grid">
          {interests.map((item) => (
            <div className="about-card" key={item.title}>
              <div className="about-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="education-wrapper">
          <div className="education-heading">
            <span>RIWAYAT PENDIDIKAN</span>

            <h3>Perjalanan pendidikan formal.</h3>
          </div>

          <div className="education-timeline">
            {educations.map((item) => (
              <div className="education-item" key={item.school}>
                <div className="education-year">
                  <span>{item.year}</span>
                </div>

                <div className="education-line">
                  <div className="education-dot">
                    <School size={17} />
                  </div>
                </div>

                <div className="education-content">
                  <span>{item.level}</span>

                  <h4>{item.school}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;