# EcoFlow
 building an eco-friendly SaaS application that allows users to input product images and receive environmental ratings. The design should have a clean, modern, and nature-inspired aesthetic with an emphasis on sustainability. The UI should be user-friendly and visually engaging, with clear call-to-action elements

import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Upload, 
  BarChart3, 
  Leaf, 
  ArrowRight, 
  Check, 
  Star,
  ShieldCheck,
  Zap,
  Globe,
} from 'lucide-react';

export default function Landing() {
  const features = [
    {
      icon: <Upload className="w-6 h-6 text-green-600" />,
      title: 'Easy Upload',
      description: 'Simply upload a photo of any product to get started.',
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-600" />,
      title: 'Instant Analysis',
      description: 'Get immediate environmental impact ratings and scores.',
    },
    {
      icon: <Leaf className="w-6 h-6 text-green-600" />,
      title: 'Eco Alternatives',
      description: 'Discover sustainable alternatives to your products.',
    },
  ];

  const testimonials = [
    {
      content: "EcoRate has completely changed how I shop. I'm now much more aware of my environmental impact.",
      author: "Sarah M.",
      role: "Environmental Activist",
      rating: 5,
    },
    {
      content: "The instant product analysis helps me make better choices for both my family and the planet.",
      author: "David L.",
      role: "Parent & Conscious Consumer",
      rating: 5,
    },
    {
      content: "As a retailer, EcoRate helps us stock more sustainable products that our customers love.",
      author: "Rachel K.",
      role: "Retail Store Owner",
      rating: 5,
    },
  ];

  const pricingTiers = [
    {
      name: 'Free',
      price: '0',
      description: 'Perfect for eco-conscious individuals',
      features: [
        '10 product scans per month',
        'Basic environmental impact analysis',
        'Product recommendations',
        'Community access',
      ],
    },
    {
      name: 'Pro',
      price: '9.99',
      description: 'For dedicated sustainable shoppers',
      features: [
        'Unlimited product scans',
        'Detailed impact analysis',
        'Premium recommendations',
        'Personal impact dashboard',
        'Priority support',
      ],
      highlighted: true,
    },
    {
      name: 'Business',
      price: '29.99',
      description: 'For businesses committed to sustainability',
      features: [
        'Everything in Pro',
        'API access',
        'Bulk scanning',
        'Custom reporting',
        'Dedicated account manager',
      ],
    },
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-emerald-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
              Make Every Purchase
              <br />
              Count for the Planet
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Join thousands of conscious consumers using EcoRate to make sustainable shopping decisions and reduce their environmental impact.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/signup"
                className="px-8 py-3 bg-white text-green-700 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="px-8 py-3 border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">How EcoRate Works</h2>
          <p className="mt-4 text-xl text-gray-600">Simple steps to make eco-conscious decisions</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">What Our Users Say</h2>
            <p className="mt-4 text-xl text-gray-600">Join thousands of satisfied users making a difference</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-xl text-gray-600">Choose the plan that's right for you</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-sm overflow-hidden ${
                tier.highlighted ? 'ring-2 ring-green-500 shadow-lg' : ''
              }`}
            >
              {tier.highlighted && (
                <div className="bg-green-500 text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                <p className="text-gray-600 mt-2">{tier.description}</p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">${tier.price}</span>
                  <span className="text-gray-600 ml-1">/month</span>
                </div>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full py-3 px-4 rounded-lg font-medium ${
                    tier.highlighted
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  } transition-colors`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose EcoRate?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
                    title: 'Trusted Analysis',
                    description: 'Our ratings are based on comprehensive environmental impact assessments.',
                  },
                  {
                    icon: <Zap className="w-6 h-6 text-green-600" />,
                    title: 'Instant Results',
                    description: 'Get immediate feedback on your product choices.',
                  },
                  {
                    icon: <Globe className="w-6 h-6 text-green-600" />,
                    title: 'Global Impact',
                    description: 'Join a community of users making a difference worldwide.',
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0">{benefit.icon}</div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Sustainable Living"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of conscious consumers making sustainable choices every day.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center px-8 py-3 bg-white text-green-700 rounded-lg font-semibold hover:bg-green-50 transition-colors"
          >
            Get Started Free
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
