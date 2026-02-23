import Hero from '@/app/components/Hero/Hero';
import About from '@/app/components/About/About';
import Footer from '@/app/components/Footer/Footer';
import Contact from '@/app/components/Contact/Contact';
import Services from '@/app/components/ServicesComponent/Services';
import Development from '@/app/components/Development/Development';
import DataServices from '@/app/components/DataServices/DataServices';
import Infrastructure from '@/app/components/Infrastructure/Infrastructure';
import ClientsComponent from '@/app/components/ClientsComponent/ClientsComponent';

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
