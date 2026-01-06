import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Contact us today to discuss your project or request a free quote.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          <a
            href="tel:+44 7401 146608"
            className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-300"
          >
            <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
            <p className="text-blue-600 font-semibold text-lg">+44 7401 146608</p>
            <p className="text-sm text-gray-600 mt-1">Click to call now</p>
          </a>

          <a
            href="https://wa.me/447401146608"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-300"
          >
            <div className="bg-green-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-green-600 font-semibold text-lg">Chat on WhatsApp</p>
            <p className="text-sm text-gray-600 mt-1">Instant messaging</p>
          </a>

          <a
            href="mailto:Mo.trades.uk@gmail.com"
            className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-300"
          >
            <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-blue-600 font-semibold break-all">Mo.trades.uk@gmail.com</p>
            <p className="text-sm text-gray-600 mt-1">Send us a message</p>
          </a>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
            <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Service Area</h3>
            <p className="text-gray-700 font-medium">All London Boroughs</p>
            <p className="text-sm text-gray-600 mt-1">Covering Greater London</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
            <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Hours</h3>
            <p className="text-gray-700 font-medium">24/7 Emergency</p>
            <p className="text-sm text-gray-600 mt-1">Always here when you need us</p>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Service Areas Across London
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              'Central London', 'North London', 'South London', 'East London',
              'West London', 'Westminster', 'Camden', 'Islington',
              'Hackney', 'Tower Hamlets', 'Greenwich', 'Lambeth',
              'Wandsworth', 'Hammersmith', 'Kensington', 'Chelsea'
            ].map((area, index) => (
              <div key={index} className="bg-white rounded-lg px-4 py-3 text-gray-700 font-medium text-sm">
                {area}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6">
            And many more areas across Greater London
          </p>
        </div>
      </div>
    </section>
  );
}
