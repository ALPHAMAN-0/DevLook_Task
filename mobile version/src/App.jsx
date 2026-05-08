import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Agency from "./components/Agency.jsx";
import Services from "./components/Services.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Agency />
        <Services />
      </main>
      <Footer />
    </>
  );
}
