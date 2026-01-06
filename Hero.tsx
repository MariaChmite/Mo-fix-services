import { Phone, Clock, MapPin, ArrowRight, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-semibold">24/7 Emergency Call-Outs Available</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Professional Property Services Across <span className="text-blue-600">London</span>
          </h2>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            From plumbing and electrical work to full property renovations, we deliver exceptional craftsmanship and reliable service for homes and businesses throughout London.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+44 7401 146608"
              className="group inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold text-lg">Call Now:+44 7401 146608</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://wa.me/447401146608"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold text-lg">WhatsApp Chat</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition shadow-md"
            >
              <span className="font-semibold text-lg">View All Services</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 font-bold text-3xl mb-2">24/7</div>
              <div className="text-gray-700 font-medium">Emergency Service</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 font-bold text-3xl mb-2">10+</div>
              <div className="text-gray-700 font-medium">Years Experience</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 font-bold text-3xl mb-2">100%</div>
              <div className="text-gray-700 font-medium">Satisfaction Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
