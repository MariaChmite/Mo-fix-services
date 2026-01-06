import {
  Wrench, Zap, Droplet, Home, Hammer, Paintbrush,
  Construction, DoorOpen, Key, Thermometer, Trees,
  Trash2, Lock, AlertCircle, Volume2, Grid3x3
} from 'lucide-react';

const services = [
  { icon: Droplet, name: 'Plumbing & Heating', description: 'Expert installation, repairs and maintenance' },
  { icon: Thermometer, name: 'Gas Services & Boilers', description: 'Certified gas engineers and boiler installations' },
  { icon: Zap, name: 'Electrical Services', description: 'Complete electrical work and installations' },
  { icon: Home, name: 'Roofing Services', description: 'Repairs, installations and maintenance' },
  { icon: Construction, name: 'Building & Structural', description: 'Professional construction and structural work' },
  { icon: Home, name: 'Extensions & Conversions', description: 'Loft conversions and property extensions' },
  { icon: Droplet, name: 'Bathroom Refurbishments', description: 'Complete bathroom design and installation' },
  { icon: Home, name: 'Kitchen Refurbishments', description: 'Full kitchen renovations and fitting' },
  { icon: Grid3x3, name: 'Tiling & Flooring', description: 'Professional tiling and flooring services' },
  { icon: Paintbrush, name: 'Painting & Decorating', description: 'Interior and exterior decoration' },
  { icon: Home, name: 'Plastering & Rendering', description: 'Expert plastering and external rendering' },
  { icon: Hammer, name: 'Carpentry & Joinery', description: 'Skilled carpentry and bespoke joinery' },
  { icon: DoorOpen, name: 'Windows & Doors', description: 'Replacement windows and door installations' },
  { icon: Key, name: 'Locksmith Services', description: '24/7 emergency locksmith services' },
  { icon: AlertCircle, name: 'Leak Detection', description: 'Advanced leak detection and repairs' },
  { icon: Volume2, name: 'Insulation & Soundproofing', description: 'Thermal and acoustic insulation' },
  { icon: Trash2, name: 'Rubbish Removal', description: 'Waste clearance and disposal services' },
  { icon: Trees, name: 'Fencing & Decking', description: 'Garden fencing and decking installation' },
  { icon: Construction, name: 'Brickwork & Pointing', description: 'Masonry and repointing services' },
  { icon: Trees, name: 'Landscaping', description: 'Garden design and landscaping work' },
  { icon: Home, name: 'Guttering & Fascias', description: 'Gutter repairs and fascia installation' },
  { icon: Home, name: 'Property Renovations', description: 'Complete property refurbishment' },
  { icon: Wrench, name: 'Handyman Services', description: 'Small jobs and general repairs' },
  { icon: AlertCircle, name: '24/7 Emergency Call-Outs', description: 'Round-the-clock emergency service' },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a full range of property services across London, delivered by qualified professionals with years of experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="tel:+44 7401 146608"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition shadow-lg text-lg font-semibold"
          >
            <span>Get a Free Quote Today</span>
          </a>
        </div>
      </div>
    </section>
  );
}
