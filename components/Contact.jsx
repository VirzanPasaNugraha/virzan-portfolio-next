import {
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
   FaResearchgate,
   FaYoutube,
    FaInstagram,
} from "react-icons/fa";

import {
  SiOrcid,
} from "react-icons/si";


function Contact() {

  const contacts = [
    {
      icon: <Mail size={22} />,
      title: "Email",
      value: "virzanpasanugraha@gmail.com",
      link: "mailto:virzanpasanugraha@gmail.com",
    },
    {
      icon: <FaGithub size={22} />,
      title: "GitHub",
      value: "GitHub Profile",
      link: "https://github.com/VirzanPasaNugraha",
    },
    {
     icon: <FaLinkedin size={22} />,
      title: "LinkedIn",
      value: "LinkedIn Profile",
      link: "https://www.linkedin.com/in/virzan-pasa-nugraha-349940332",
    },
     {
    icon: <SiOrcid size={22} />,
    title: "ORCID",
    value: "0009-0003-1089-1927",
    link:
      "https://orcid.org/0009-0003-1089-1927",
  },
 {
    icon: <FaResearchgate size={22} />,
    title: "ResearchGate",
    value: "Profil ResearchGate",
    link:
      "https://www.researchgate.net/profile/Virzan-Pasa-Nugraha?ev=hdr_xprf",
  },
  {
  icon: <FaYoutube size={22} />,
  title: "YouTube",
  value: "Kanal YouTube",
  link:
    "https://www.youtube.com/channel/UCQTKXfiSUcRkAIw1nWIl6ZA",
},
{
  icon: <FaInstagram size={22} />,
  title: "Instagram",
  value: "Profil Instagram",
  link:
    "https://www.instagram.com/vpn_23th/",
},
  ];


  return (
    <section 
      className="contact section" 
      id="contact"
    >

      <div className="section-container">

        <div className="contact-wrapper">


          <div className="contact-heading">

            <span>KONTAK</span>

            <h2>
              Mari terhubung dan
              <br />
              berdiskusi.
            </h2>

            <p>
              Saya terbuka untuk kolaborasi,
              diskusi proyek, pengembangan aplikasi,
              maupun kesempatan di bidang teknologi.
            </p>

          </div>



          <div className="contact-content">

            {contacts.map((item) => (

              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >

                <div className="contact-icon">
                  {item.icon}
                </div>


                <div>

                  <span>
                    {item.title}
                  </span>

                  <strong>
                    {item.value}
                  </strong>

                </div>


                <ArrowUpRight size={18}/>

              </a>

            ))}


            <div className="contact-card">

              <div className="contact-icon">
                <MapPin size={22}/>
              </div>

              <div>

                <span>
                  Lokasi
                </span>

                <strong>
                  Indonesia
                </strong>

              </div>

            </div>


          </div>


        </div>

      </div>

    </section>
  );
}


export default Contact;