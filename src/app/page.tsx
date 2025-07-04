import Header from "./Header";
import Hero from "./Hero";
import Marquee from "./Marquee";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import CoreValues from "./CoreValues";
import Pricing from "./Pricing";
import Faq from "./Faq";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Portfolio />
      <CoreValues />
      <Pricing />
      <Faq />
      <ContactForm />
      <Footer />
    </>
  );
}
