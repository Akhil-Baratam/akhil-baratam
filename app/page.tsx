import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Toolchain from "@/components/Toolchain";
import Work from "@/components/Work";
import Capabilities from "@/components/Capabilities";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Toolchain />
        <Work />
        <Capabilities />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
