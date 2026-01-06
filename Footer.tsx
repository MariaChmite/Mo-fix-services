import { Wrench, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Wrench className="w-8 h-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-bold">Mo fix services</h3>
                <p className="text-xs text-gray-400">Your Trusted Property Experts</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Professional property services across London. From emergency repairs to full renovations, we're here to help 24/7.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition">Our Services</a></li>
              <li><a href="#why-us" className="text-gray-400 hover:text-white transition">Why Choose Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
              <li><a href="tel:02012345678" className="text-gray-400 hover:text-white transition">Emergency Call-Out</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Plumbing & Heating</li>
              <li>Electrical Services</li>
              <li>Building & Renovations</li>
              <li>Roofing & Guttering</li>
              <li>Kitchen & Bathroom</li>
              <li>24/7 Emergency Services</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <a href="tel:+44 7401 146608" className="text-gray-300 hover:text-white transition block font-semibold">
                    +44 7401 146608
                  </a>
                  <span className="text-sm text-gray-500">24/7 Available</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-1" />
                <a href="mailto:Mo.trades.uk@gmail.com" className="text-gray-300 hover:text-white transition break-all">
                  Mo.trades.uk@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  Serving All London Boroughs
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Mo fix Services. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
