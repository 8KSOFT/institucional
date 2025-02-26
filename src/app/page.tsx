import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Services from './components/ServicesComponent/Services';
import Development from './components/Development/Development';
import DataServices from './components/DataServices/DataServices';
import Infrastructure from './components/Infrastructure/Infrastructure';
import ClientsComponent from './components/ClientsComponent/ClientsComponent';

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      
      <main>
        <Hero />
        <ClientsComponent />
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
