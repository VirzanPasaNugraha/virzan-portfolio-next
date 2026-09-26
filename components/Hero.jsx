import { ArrowRight, Heart } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-label">Halo, Saya</span>

          <h1>
            Virzan Pasa
            <br />
            Nugraha, S.Kom<span>.</span>
          </h1>

         <h2>Data Analyst & Business Intelligence Developer</h2>

        <p>
  Saya berfokus pada analisis data, pengolahan data, dan business
  intelligence menggunakan Power BI, SQL, serta ekosistem Microsoft 365 &
  Power Platform (termasuk Power Automate dan Copilot Studio) untuk
  mengubah data mentah menjadi dashboard dan insight yang mendukung
  pengambilan keputusan.
</p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              Lihat Karya Saya
              <ArrowRight size={18} />
            </a>

            <a
              href="https://saweria.co/virzan30"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Heart size={18} />
              Dukung Saya
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-profile-wrapper">
              <div className="hero-profile-orbit"></div>

              <img
                src="/profile/foto.jpeg"
                alt="Virzan Pasa Nugraha"
                className="hero-profile"
              />
            </div>

            <p>Teknologi & Penelitian</p>

            <span>
              Eksplorasi, pengembangan, dan inovasi
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;