import { ArrowUpRight, BookOpen, GraduationCap } from "lucide-react";
import {
  publications,
   scholarProfile,
} from "../data/publications";

function Publications() {
  return (
    <section className="publications section" id="publications">
      <div className="section-container">
        <div className="publication-header">
          <div className="section-heading publication-heading">
            <span>KARYA ILMIAH & PUBLIKASI</span>

            <h2>
              Penelitian dan kontribusi
              <br />
              ilmiah.
            </h2>

            <p>
              Kumpulan karya ilmiah yang mencerminkan ketertarikan saya pada
              machine learning, analisis data, keamanan siber, dan pengembangan
              sistem informasi.
            </p>
          </div>

      <a
  href={scholarProfile}
  target="_blank"
  rel="noopener noreferrer"
  className="publication-archive-button"
>
  <GraduationCap size={19} />
  Lihat Profil Google Scholar
  <ArrowUpRight size={17} />
</a>
        </div>

        <div className="publication-list">
          {publications.map((item, index) => (
            <article className="publication-item" key={item.id}>
              <div className="publication-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="publication-content">
                <span className="publication-field">{item.field}</span>

                <h3>{item.title}</h3>

                <div className="publication-meta">
                  <span>{item.publisher}</span>
                  <span className="publication-dot"></span>
                  <span>{item.status}</span>
                </div>

                <p>{item.description}</p>
              </div>

              <div className="publication-icon">
                <BookOpen size={24} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Publications;