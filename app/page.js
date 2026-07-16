import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Publications from "@/components/Publications";
import Support from "@/components/Support"; // ✅ Tambahkan
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Projects />

        <Certificates />

        <Publications />

        <Support /> {/* ✅ Tambahkan */}

        <Contact />
      </main>
    </>
  );
}