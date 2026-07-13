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
      title: "Pengembangan Perangkat Lunak",
      description:
        "Mengembangkan aplikasi mobile dan berbasis web untuk menghasilkan solusi digital yang dapat menyelesaikan permasalahan nyata.",
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
        "Memiliki ketertarikan pada evaluasi usability, Human-Computer Interaction (HCI), machine learning, serta penelitian di bidang teknologi informasi.",
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
      level: "Sekolah Menengah Kejuruan",
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
      title: "Petugas Pemilihan Umum (Pemilu)",
      organization: "Penyelenggara Pemilu",
      year: "2024",
      image: "/profile/pantarlih.jpeg",
      description:
        "Melaksanakan tugas pengisian dan pencatatan data secara tertulis dalam proses Pemilihan Umum 2024 yang mencakup berbagai jenis pemilihan, serta membantu memastikan data hasil pelaksanaan pemungutan suara tercatat secara teliti dan sesuai dengan dokumen yang digunakan.",
    },
    {
      id: 2,
      title: "Kuliah Kerja Nyata (KKN)",
      organization: "Universitas Sebelas April",
      year: "2026",
      image: "/profile/kkn.png",
      description:
        "Melaksanakan kegiatan Kuliah Kerja Nyata (KKN) di Desa Nagrak, Kecamatan Buahdua, Kabupaten Sumedang sebagai bagian dari pengabdian kepada masyarakat serta terlibat dalam berbagai kegiatan kemasyarakatan selama pelaksanaan KKN.",
      documentationUrl:
        "https://www.instagram.com/kkn_desanagrak26/",
    },
  ];

  return (
    <section className="about section" id="about">
      <div className="section-container">
        <div className="section-heading">
          <span>TENTANG SAYA</span>

          <h2>
            Pengembang, Mahasiswa,
            <br />
            dan Peneliti Teknologi.
          </h2>

        <p>
  Virzan Pasa Nugraha adalah mahasiswa S1 Informatika Universitas
  Sebelas April Sumedang yang memiliki fokus pada pengembangan
  perangkat lunak dan penelitian teknologi. Ia mengembangkan aplikasi
  mobile dan berbasis web, mengeksplorasi Internet of Things (IoT) dan
  machine learning, serta melakukan penelitian dalam bidang usability
  dan Human-Computer Interaction (HCI).
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