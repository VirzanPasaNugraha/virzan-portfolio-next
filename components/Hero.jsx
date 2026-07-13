import { ArrowRight, Download } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-label">Halo, Saya</span>

          <h1>
            Virzan Pasa
            <br />
            Nugraha<span>.</span>
          </h1>

        <h2>
  Software Developer & Peneliti Teknologi
</h2>

<p>
  Saya berfokus pada pengembangan aplikasi mobile dan website,
  Internet of Things (IoT), eksplorasi machine learning, serta
  penelitian di bidang usability dan Human-Computer Interaction (HCI).
</p>


          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              Lihat Karya Saya
              <ArrowRight size={18} />
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