import { Phone, Wrench, MessageCircle } from 'lucide-react';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Wrench className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Mo Fix Services</h1>
              <p className="text-xs text-gray-600">Your Trusted Property Experts</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
            <a href="#why-us" className="text-gray-700 hover:text-blue-600 transition">Why Choose Us</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            <a href="https://wa.me/447401146608" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
              <MessageCircle className="w-4 h-4" />
              <span className="font-semibold">WhatsApp</span>
            </a>
            <a href="tel:+44 7401 146608" className="flex items-center space-x-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">Call</span>
            </a>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <a href="https://wa.me/447401146608" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-green-600 text-white px-3 py-2 rounded-lg">
              <MessageCircle className="w-4 h-4" />
            </a>
            <a href="tel:+44 7401 146608" className="flex items-center space-x-2 bg-blue-600 text-white px-3 py-2 rounded-lg">
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      <main className="pt-20">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
