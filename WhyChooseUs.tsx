import { Shield, Clock, Award, ThumbsUp, Users, BadgeCheck } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Fully Insured & Certified',
    description: 'All our tradespeople are fully qualified, insured, and certified to the highest industry standards.'
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency call-outs available for urgent repairs and issues.'
  },
  {
    icon: Award,
    title: '10+ Years Experience',
    description: 'Over a decade of providing exceptional property services across London.'
  },
  {
    icon: ThumbsUp,
    title: 'Quality Guaranteed',
    description: 'We stand behind our work with a comprehensive satisfaction guarantee on all services.'
  },
  {
    icon: Users,
    title: 'Trusted Professionals',
    description: 'Our team consists of experienced, background-checked professionals you can trust in your home.'
  },
  {
    icon: BadgeCheck,
    title: 'Transparent Pricing',
    description: 'Clear, upfront quotes with no hidden fees. You know exactly what you\'re paying for.'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Mo Fix Services?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to delivering exceptional service and craftsmanship on every project, no matter the size.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation quote on your project. Our friendly team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+44 7401 146608"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold text-lg shadow-lg"
            >
              Call:+44 7401 146608
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition font-semibold text-lg border-2 border-white"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
