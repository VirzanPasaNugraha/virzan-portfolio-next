import {
  ArrowUpRight,
  Code2,
  Smartphone,
  Cpu,
  FolderOpen,
  Globe,
} from "lucide-react";

import { projects } from "../data/projects";

function Projects() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Website":
        return <Globe size={17} />;

      case "Mobile Application":
        return <Smartphone size={17} />;

      case "Internet of Things":
        return <Cpu size={17} />;

      default:
        return <Code2 size={17} />;
    }
  };

  return (
    <section className="projects section" id="projects">
      <div className="section-container">
        <div className="section-heading project-heading">
          <span>PROYEK PILIHAN</span>

          <h2>
            Aplikasi dan solusi digital
            <br />
            yang telah saya kembangkan.
          </h2>

          <p>
            Eksplorasi proyek pengembangan perangkat lunak, aplikasi mobile,
            website, Internet of Things, dan implementasi teknologi yang telah
            saya kerjakan.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project-card" key={project.id}>
              <div className="project-card-header">
                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {project.featured && (
                  <span className="project-featured">
                    Proyek Unggulan
                  </span>
                )}
              </div>

              <div className="project-layout">
                <div className="project-main">
                  <div className="project-category">
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </div>

                  <h3>{project.title}</h3>

                  <h4>{project.subtitle}</h4>

                  <p>{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>

                <div className="project-information">
                  <div className="project-info-item">
                    <span>PERAN</span>

                    <strong>
                      <Code2 size={18} />
                      {project.role}
                    </strong>
                  </div>

                  {project.versions && project.versions.length > 0 && (
                    <div className="project-info-item">
                      <span>VERSI APLIKASI</span>

                      <div className="project-versions">
                        {project.versions.map((item) => (
                          <a
                            key={item.version}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-version-link"
                          >
                            <strong>{item.version}</strong>

                            <small>{item.label}</small>

                            <ArrowUpRight size={16} />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.image && (
                    <div className="project-info-item">
                      <span>
                        {project.interfaceUrl
                          ? "ANTARMUKA APLIKASI"
                          : "DOKUMENTASI PROYEK"}
                      </span>

                      <div className="project-screenshot">
                        <img
                          src={project.image}
                          alt={
                            project.interfaceUrl
                              ? `Antarmuka aplikasi ${project.title}`
                              : `Dokumentasi proyek ${project.title}`
                          }
                        />
                      </div>

                      {project.interfaceUrl && (
                        <a
                          href={project.interfaceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-interface-link"
                        >
                          {project.interfaceLabel ||
                            "Lihat Antarmuka Aplikasi"}
                          <ArrowUpRight size={18} />
                        </a>
                      )}
                    </div>
                  )}

                  {(project.liveUrl ||
                    project.demoUrl ||
                    project.documentationUrl) && (
                    <div className="project-actions">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-action-link"
                        >
                          Kunjungi Proyek
                          <ArrowUpRight size={18} />
                        </a>
                      )}

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-action-link"
                        >
                          Lihat Demo
                          <ArrowUpRight size={18} />
                        </a>
                      )}

                      {project.documentationUrl && (
                        <a
                          href={project.documentationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-action-link project-action-secondary"
                        >
                          Lihat Dokumentasi
                          <FolderOpen size={18} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;