import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Upload, BarChart3, Leaf, ArrowRight, Check, Star, ShieldCheck, Zap, Globe } from 'lucide-react';
export default async function Home() {
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

  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Make Every Purchase<br />Count for the Planet
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of conscious consumers using EcoRate to make sustainable shopping decisions and reduce their environmental impact.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/Signup">
              <button
                type="button"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Get Started Free
              </button>
            </Link>
            <button 
              type="button"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold border-2 border-green-600 hover:bg-green-50 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20">
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

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
            <div className="relative h-[500px]">
              <Image
                src="/images/eco-friendly-pic.jpg"
                alt="Eco friendly Living"
                fill
                priority
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-green-500 to-teal-500 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join thousands of conscious consumers making sustainable choices every day.
            </p>
            <Link
              href="/Signup"
              className="inline-flex items-center px-8 py-3 bg-white text-green-700 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
