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

          <h2>Software Developer, Data Analyst & Peneliti Teknologi</h2>

          <p>
            Saya berfokus pada pengembangan aplikasi mobile dan website,
            analitik data serta business intelligence (Power BI & SQL),
            hingga administrasi perkantoran digital dengan Microsoft 365 &
            Power Platform. Saya juga aktif mengeksplorasi Internet of Things
            (IoT), machine learning, serta penelitian di bidang usability,
            Human-Computer Interaction (HCI), dan keamanan siber.
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