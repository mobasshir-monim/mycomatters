import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Recycle, Zap, Globe, ArrowRight, BarChart3, Factory, Network } from 'lucide-react';

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    {
      title: "Electronics Inserts",
      desc: "High-precision molded packaging designed to protect delicate electronic products during shipping.",
      img: "/Assets/Gemini_Generated_Image_vtfa8ovtfa8ovtfa.png",
    },
    {
      title: "SME Fragile Packs",
      desc: "Bespoke packaging solutions for cosmetics, perfumes, and other premium fragile consumer goods.",
      img: "/Assets/Gemini_Generated_Image_b00he7b00he7b00h.png",
    },
    {
      title: "Phone Box Inserts",
      desc: "Sleek, shock-absorbent trays tailored for the mobile device industry, offering premium unboxing experiences.",
      img: "/Assets/Gemini_Generated_Image_j72jmlj72jmlj72j.png",
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-[#0a2e1f] to-[#1a4d33] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
                EcoStyrene
              </h1>
              <p className="text-xl lg:text-2xl text-emerald-100/90 mb-10 max-w-lg font-light leading-relaxed">
                Eco-friendly packaging made from mushroom mycelium. A superior, biodegradable alternative to polystyrene.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/ecostyrene" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-lg font-bold text-center transition-all shadow-lg hover:-translate-y-1">
                  Learn More
                </Link>
                <Link to="/contact" className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-bold text-center transition-all">
                  Get a Quote
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative group">
              {/* Glow Backdrop */}
              <div className="absolute -inset-10 bg-emerald-500/20 blur-[100px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Main Hero Image with Float and Hover Effects - Removed Rotation */}
              <div className="relative z-10 animate-float-slow hero-image-hover transition-all duration-700 ease-out transform group-hover:scale-110">
                <img 
                  src="/Assets/20250803_222341.jpg" 
                  alt="Mycelium Packaging Tray" 
                  className="w-full max-w-lg mx-auto rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group-hover:shadow-[0_20px_70px_rgba(16,185,129,0.3)] group-hover:brightness-110 transition-all duration-700"
                />
                
                {/* Floating "Biotech" Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:translate-x-4 group-hover:-translate-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-xs font-bold uppercase tracking-widest">Grown in Dhaka</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
      </section>

      {/* Traction Strip */}
      <div className="bg-slate-100 py-6 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold">10+</span>
              <span className="text-xs uppercase tracking-widest font-semibold">Prototypes Tested</span>
            </div>
            {/* <div className="flex items-center space-x-2">
              <span className="text-lg font-bold">3</span>
              <span className="text-xs uppercase tracking-widest font-semibold">Pilot Partners</span>
            </div> */}
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold">100%</span>
              <span className="text-xs uppercase tracking-widest font-semibold">Biodegradable</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold">SDG 9</span>
              <span className="text-xs uppercase tracking-widest font-semibold">Aligned</span>
            </div>
          </div>
        </div>
      </div>

      {/* Our Products Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Our Products</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-16 text-lg">
            High-performance, eco-conscious protective solutions tailored for modern industries in Bangladesh.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                <div className="h-56 overflow-hidden">
                  <img 
                    src={product.img} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 text-left">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{product.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    {product.desc}
                  </p>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center text-emerald-700 font-bold hover:text-emerald-800 transition-colors"
                  >
                    Shop Now <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why MycoMatters Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-8 leading-tight">Why MycoMatters?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center">
                    <Recycle size={24} />
                  </div>
                  <h4 className="font-bold text-lg">Biodegradable</h4>
                  <p className="text-slate-600 text-sm">Naturally compostable within weeks. No microplastics, no ocean waste.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center">
                    <Zap size={24} />
                  </div>
                  <h4 className="font-bold text-lg">Waste-to-Value</h4>
                  <p className="text-slate-600 text-sm">Using local agricultural waste as a substrate for a truly circular economy.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center">
                    <ShieldCheck size={24} />
                  </div>
                  <h4 className="font-bold text-lg">Shock Absorption</h4>
                  <p className="text-slate-600 text-sm">Industrial-grade cushioning outperforms traditional EPS for fragile goods.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center">
                    <Globe size={24} />
                  </div>
                  <h4 className="font-bold text-lg">Built for Bangladesh</h4>
                  <p className="text-slate-600 text-sm">Reducing import dependency with a resilient local supply chain.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000" 
                  alt="Environmental Focus" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-emerald-900 text-white p-8 rounded-2xl shadow-xl max-w-xs">
                <p className="text-2xl font-bold mb-2">90%</p>
                <p className="text-sm opacity-80 leading-relaxed">Lower carbon footprint compared to standard polystyrene production.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDG 9 Alignment Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-emerald-50 text-emerald-800 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            Sustainable Development Goals
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">SDG 9 Alignment</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-16 text-lg">
            Our mission directly supports Industry, Innovation, and Infrastructure globally and locally.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-100 shadow-sm bg-slate-50 text-left">
              <BarChart3 className="text-emerald-700 mb-6 w-10 h-10" />
              <h3 className="text-xl font-bold mb-3">Industry Innovation</h3>
              <p className="text-slate-600 text-sm">Introducing cutting-edge mycelium biotechnology to Bangladesh's manufacturing sector.</p>
            </div>
            <div className="p-8 rounded-2xl border border-slate-100 shadow-sm bg-slate-50 text-left">
              <Factory className="text-emerald-700 mb-6 w-10 h-10" />
              <h3 className="text-xl font-bold mb-3">Sustainable Manufacturing</h3>
              <p className="text-slate-600 text-sm">Decoupling economic growth from environmental degradation through circular materials.</p>
            </div>
            <div className="p-8 rounded-2xl border border-slate-100 shadow-sm bg-slate-50 text-left">
              <Network className="text-emerald-700 mb-6 w-10 h-10" />
              <h3 className="text-xl font-bold mb-3">Resilient Supply Chains</h3>
              <p className="text-slate-600 text-sm">Leveraging local agricultural by-products to secure production against global shocks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">Ready to revolutionize your packaging?</h2>
          <p className="text-emerald-100/80 mb-12 text-lg">
            Join the sustainability leaders already piloting EcoStyrene. Let's build a greener future together.
          </p>
          <Link to="/contact" className="bg-white text-emerald-900 hover:bg-emerald-50 px-10 py-5 rounded-lg font-bold text-lg inline-block transition-all shadow-xl hover:-translate-y-1">
            Request Samples
          </Link>
        </div>
      </section>

      {/* Modal Placeholder */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-10 max-w-md w-full shadow-2xl relative text-center">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Coming Soon</h3>
            <p className="text-slate-600 mb-8">
              We are currently scaling our production. Retail ordering will be available shortly. In the meantime, please contact us for pilot partnerships.
            </p>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors"
            >
              Back to site
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;