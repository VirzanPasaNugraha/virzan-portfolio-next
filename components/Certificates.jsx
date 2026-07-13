import {
  ArrowUpRight,
  Award,
  BookOpenCheck,
  CalendarCheck,
  FileText,
  Users,
} from "lucide-react";

import {
  certificateCategories,
  certificateDocument,
} from "../data/certificates";

function Certificates() {
  const icons = {
    Prestasi: <Award size={30} />,
    Kompetensi: <BookOpenCheck size={30} />,
    Kegiatan: <CalendarCheck size={30} />,
    Organisasi: <Users size={30} />,
  };

  return (
    <section className="certificates section" id="certificates">
      <div className="section-container">
        <div className="certificate-header">
          <div className="section-heading certificate-heading">
            <span>SERTIFIKAT & AKTIVITAS</span>

            <h2>
              Pencapaian dan perjalanan
              <br />
              pengembangan kompetensi.
            </h2>

            <p>
              Dokumentasi prestasi, pengembangan kompetensi, kegiatan akademik,
              organisasi, teknologi, dan pengabdian kepada masyarakat yang telah
              saya ikuti.
            </p>
          </div>

          <a
            href={certificateDocument}
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-document-button"
          >
            <FileText size={19} />
            Lihat Semua Dokumen
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="certificate-grid">
          {certificateCategories.map((item, index) => (
            <article className="certificate-card" key={item.id}>
              <div className="certificate-card-top">
                <div className="certificate-icon">
                  {icons[item.category]}
                </div>

                <span className="certificate-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="certificate-card-content">
                <span className="certificate-category">
                  {item.category}
                </span>

                <h3>{item.title}</h3>

                <strong>{item.total}</strong>

                <p>{item.description}</p>
              </div>

              <div className="certificate-actions">
                {item.document && (
                  <a
                    href={item.document}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    {item.buttonText}
                    <ArrowUpRight size={18} />
                  </a>
                )}

                {item.documentationUrl && (
                  <a
                    href={item.documentationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link certificate-documentation-link"
                  >
                    
                    <ArrowUpRight size={18} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;