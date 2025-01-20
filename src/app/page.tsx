import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Development from './components/Development/Development';
import Infrastructure from './components/Infrastructure/Infrastructure';
import DataServices from './components/DataServices/DataServices';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ScrollProgress />
      <Header />

      <main>
        <Hero />
        <Services />
        <Development />
        <Infrastructure />
        <DataServices />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
