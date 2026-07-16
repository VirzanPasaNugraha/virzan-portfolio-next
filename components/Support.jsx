import {
  Coffee,
  Heart,
  ArrowUpRight,
  Rocket,
  BookOpen,
  Code2,
} from "lucide-react";

function Support() {
  return (
    <section className="support section" id="support">
      <div className="section-container">
        <div className="section-heading">
          <span>DUKUNG PENGEMBANGAN</span>

          <h2>
            Bersama membangun
            <br />
            teknologi yang bermanfaat.
          </h2>

          <p>
            Saya percaya bahwa teknologi akan memberikan dampak yang lebih
            besar ketika dibagikan kepada banyak orang. Dukungan Anda akan
            membantu saya terus mengembangkan aplikasi, website, penelitian,
            serta proyek open-source yang dapat diakses secara publik.
          </p>
        </div>

        <div className="support-card">
          <div className="support-icon">
            <Coffee size={56} />
          </div>

          <h3>Traktir Saya Secangkir Kopi ☕</h3>

          <p>
            Setiap dukungan membantu saya mengembangkan proyek seperti
            <strong> PilihAI</strong>, aplikasi mobile, website, penelitian,
            serta berbagai solusi digital lainnya.
          </p>

          <div className="support-highlights">
            <div className="support-item">
              <Rocket size={20} />
              <span>10+ Proyek Publik</span>
            </div>

            <div className="support-item">
              <BookOpen size={20} />
              <span>Penelitian & Publikasi</span>
            </div>

            <div className="support-item">
              <Code2 size={20} />
              <span>Open Source & Edukasi</span>
            </div>
          </div>

          <a
            href="https://saweria.co/virzan30"
            target="_blank"
            rel="noopener noreferrer"
            className="support-button"
          >
            Dukung melalui Saweria
            <ArrowUpRight size={18} />
          </a>

          <div className="support-note">
            <Heart size={16} />

            <span>
              Terima kasih telah mendukung perjalanan saya dalam membangun
              teknologi yang bermanfaat.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Support;