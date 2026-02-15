
import React from 'react';
import { Link } from 'react-router-dom';
// Added ShieldCheck to the imports from lucide-react
import { Check, X, Thermometer, Droplets, Weight, Box, Zap, Settings, Sun, Wind, ShieldCheck } from 'lucide-react';

const EcoStyrene: React.FC = () => {
  const steps = [
    { name: "Waste Substrate", desc: "Local agricultural waste (hemp, corn husks, straw) is gathered and cleaned." },
    { name: "Inoculation", desc: "The substrate is mixed with mushroom mycelium (the root structure)." },
    { name: "Molding", desc: "The mixture is packed into custom molds of your desired packaging shape." },
    { name: "Incubation", desc: "For 5-7 days, the mycelium grows, binding the substrate into a solid piece." },
    { name: "Drying", desc: "Heat is applied to stop growth and ensure a lightweight, durable finish." }
  ];

  return (
    <div className="pt-24">
      {/* Header section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-extrabold text-slate-900 mb-6">EcoStyrene</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Our flagship mycelium-based material. It looks like polystyrene, performs like polystyrene, but feeds the earth instead of polluting it. 
              Designed for the circular economy, EcoStyrene is the definitive answer to plastic-free protective packaging.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />, title: "High Shock Absorption", desc: "Natural cellular structure absorbs kinetic energy, protecting heavy and delicate items alike." },
              { icon: <Weight className="w-8 h-8 text-emerald-600" />, title: "Ultra Lightweight", desc: "High strength-to-weight ratio ensures shipping costs remain low without sacrificing safety." },
              { icon: <Settings className="w-8 h-8 text-emerald-600" />, title: "Custom Moldable", desc: "Easily shaped into complex geometries to fit specific electronics, gadgets, or industrial parts." },
              { icon: <Droplets className="w-8 h-8 text-emerald-600" />, title: "Moisture Resistant", desc: "Available with organic coatings to provide high water resistance for damp environments." },
              { icon: <Zap className="w-8 h-8 text-emerald-600" />, title: "Low Import Dependency", desc: "Grown in Bangladesh using local resources, ensuring price stability and local resilience." },
              { icon: <Sun className="w-8 h-8 text-emerald-600" />, title: "Heat Resilient", desc: "Naturally fire-resistant and thermal insulating properties superior to petrochemical foams." }
            ].map((feature, i) => (
              <div key={i} className="flex gap-6">
                <div className="shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">The Growth Process</h2>
            <p className="text-emerald-100 opacity-80">We don't manufacture packaging; we grow it.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative group">
                <div className="mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-lg relative z-10 group-hover:scale-110 transition-transform">
                    {i + 1}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute left-10 w-full h-px bg-white/20 z-0"></div>
                  )}
                </div>
                <h3 className="text-lg font-bold mb-3">{step.name}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">EcoStyrene vs. EPS</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xl">
            <table className="w-full text-left table-fixed min-w-[720px]">
              <colgroup>
                <col style={{ width: '30%', minWidth: '160px' }} />
                <col style={{ width: '35%', minWidth: '240px' }} />
                <col style={{ width: '35%', minWidth: '240px' }} />
              </colgroup>
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-6 font-bold text-slate-900 w-1/3">Feature</th>
                  <th className="p-6 font-bold text-emerald-800 bg-emerald-50 w-1/3">EcoStyrene (MycoMatters)</th>
                  <th className="p-6 font-bold text-slate-500 w-1/3">Traditional EPS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-6 text-sm font-medium">Biodegradability</td>
                  <td className="p-6 text-sm text-emerald-700 bg-emerald-50/50 flex items-center whitespace-nowrap">
                    <Check className="mr-3 w-4 h-4 flex-none" /> 100% Home Compostable
                  </td>
                  <td className="p-6 text-sm text-red-600 flex items-center whitespace-nowrap">
                    <X className="mr-3 w-4 h-4 flex-none" /> 500+ years to degrade
                  </td>
                </tr>
                <tr>
                  <td className="p-6 text-sm font-medium">Material Sourcing</td>
                  <td className="p-6 text-sm text-slate-700 bg-emerald-50/50">Local Agri-Waste</td>
                  <td className="p-6 text-sm text-slate-500">Petroleum / Chemicals</td>
                </tr>
                <tr>
                  <td className="p-6 text-sm font-medium">Supply Risk</td>
                  <td className="p-6 text-sm text-emerald-700 bg-emerald-50/50">Low (Domestic Production)</td>
                  <td className="p-6 text-sm text-red-600">High (Import Dependency)</td>
                </tr>
                <tr>
                  <td className="p-6 text-sm font-medium">End-of-Life</td>
                  <td className="p-6 text-sm text-emerald-700 bg-emerald-50/50">Nutrients for Soil</td>
                  <td className="p-6 text-sm text-slate-500">Landfill / Ocean Waste</td>
                </tr>
                <tr>
                  <td className="p-6 text-sm font-medium">Customer Sentiment</td>
                  <td className="p-6 text-sm text-emerald-700 bg-emerald-50/50">Premium / Eco-conscious</td>
                  <td className="p-6 text-sm text-slate-500">Legacy / Plastic-guilt</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-emerald-900 mb-6">Switch to the future of packaging</h2>
          <p className="text-emerald-800 opacity-80 mb-10 text-lg">
            Our team works with your engineers to design custom molds for any product.
          </p>
          <Link to="/contact" className="bg-emerald-800 text-white px-10 py-5 rounded-lg font-bold text-lg inline-block hover:bg-emerald-900 transition-all shadow-xl">
            Request Samples & Pricing
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EcoStyrene;