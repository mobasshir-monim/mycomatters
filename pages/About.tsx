
import React from 'react';
import { Target, Eye, Globe2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero Collage Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&q=80&w=400" 
                  alt="Mycelium Close Up" 
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&q=80&w=400" 
                  alt="Laboratory Work" 
                  className="w-full h-64 object-cover rounded-2xl shadow-lg mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1557233519-7c90f1e4a937?auto=format&fit=crop&q=80&w=400" 
                  alt="Agriculture" 
                  className="w-full h-64 object-cover rounded-2xl shadow-lg -mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400" 
                  alt="Eco Packaging" 
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 hidden md:block">
                <p className="text-slate-900 font-bold">100% Bio-Engineered</p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h1 className="text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">About MycoMatters</h1>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Founded in Dhaka, MycoMatters is at the intersection of biotechnology and sustainable industrial design. We identified a critical gap in the Bangladeshi market: the heavy reliance on imported, non-biodegradable polystyrene (EPS) for protective packaging.
                </p>
                <p>
                  Our solution leverages the incredible binding power of mycelium—the underground root structure of fungi—to transform agricultural by-products into industrial-grade packaging. By engineering nature, we provide a circular alternative that reduces environmental impact and strengthens local industry.
                </p>
                <p className="text-emerald-800 font-extrabold italic text-2xl mt-12">
                  "Molded by nature, engineered for tomorrow."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-start">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center mb-8">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                To replace petrochemical-based foams in Bangladesh through scalable biotechnology, creating a waste-to-value ecosystem that empowers local farmers and manufacturers.
              </p>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-start">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center mb-8">
                <Eye size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                To become South Asia's leading sustainable biomaterials firm, establishing a future where every piece of packaging returned to the earth enriches the soil rather than harming it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Impact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe2 className="mx-auto text-emerald-700 mb-6 w-12 h-12" />
          <h2 className="text-3xl font-extrabold text-slate-900 mb-8">The Bangladesh Context</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-slate-600 leading-relaxed mb-12">
              As one of the world's fastest-growing economies, Bangladesh faces immense pressure from plastic waste. We turn this challenge into an opportunity by utilizing the vast amounts of agricultural residues available locally, reducing the nation's reliance on imported raw materials and building a resilient, sustainable manufacturing infrastructure.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
