
import React from 'react';
import { Linkedin, Mail, BadgeCheck, Users, Trophy, TrendingUp } from 'lucide-react';
import img1 from '../Assets/FB_IMG_1771013343419~2.jpg';
import img2 from '../Assets/photo_6088886041197612730_y.jpg';
import img3 from '../Assets/IMG_20240318_222456_189.JPG';
import img4 from '../Assets/photo_6086918744312581903_y.jpg';
import advisorImg from '../Assets/DSC_8321.JPG';

const Team: React.FC = () => {
  const members = [
    { name: "Md. Naiem Mobasshir Monim", role: "CEO", bio: "Mechanical Engineer, Engineering a greener future through sustainable mycelium packaging", img: img1 },
    { name: "Shafia Tasnim Samonti", role: "CMO", bio: "Industrial and Production Engineer, Branding expert focused on sustainable industrial marketing and B2B partnerships.", img: img2 },
    { name: "Nahian Prapon Jaman", role: "CTO", bio: "Mechanical Engineer with expertise in sustainable manufacturing and biotech innovation.", img: img3 },
    { name: "Tamanna Sultana", role: "CFO", bio: "Strategic finance lead with experience in scaling high-impact biotech ventures in Dhaka.", img: img4 }
  ];

  const advisors = [
    { name: "Mohammad Firoj Jaman", role: "Professor", bio: "Department of Zoology, University of Dhaka.", img: advisorImg }
  ];

  return (
    <div className="pt-24">
      {/* Team Header */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-extrabold mb-6">Our Team</h1>
          <p className="text-xl text-emerald-100/80 max-w-2xl mx-auto font-light">
            A diverse group of scientists, engineers, and strategists united by a single goal: curing the world of plastic-foam addiction.
          </p>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {members.map((m, i) => (
              <div key={i} className="group">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6 shadow-lg border border-slate-100">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{m.name}</h3>
                <p className="text-emerald-700 font-semibold text-sm mb-4 uppercase tracking-wider">{m.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{m.bio}</p>
                <div className="flex space-x-3">
                  <a href="#" className="text-slate-400 hover:text-emerald-700"><Linkedin size={18} /></a>
                  <a href="#" className="text-slate-400 hover:text-emerald-700"><Mail size={18} /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold mb-4 uppercase">Mentorship</div>
            <h2 className="text-4xl font-extrabold text-slate-900">Advisors & Mentors</h2>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {advisors.map((a, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-4">
                  <img src={a.img} alt={a.name} className="w-16 h-16 rounded-full object-cover shrink-0" />
                  <div>
                    <h4 className="font-bold">{a.name}</h4>
                    <p className="text-xs text-slate-600 font-semibold mb-1">{a.role}</p>
                    <p className="text-xs text-slate-500">{a.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Why We'll Win Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900">Why We'll Win</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <TrendingUp size={24} />
              </div>
              <h4 className="font-bold mb-3">Execution</h4>
              <p className="text-sm text-slate-600">Iterative prototyping and direct manufacturer feedback loops.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Users size={24} />
              </div>
              <h4 className="font-bold mb-3">Local Supply</h4>
              <p className="text-sm text-slate-600">Abundant substrate availability via Bangladesh's agri-economy.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Trophy size={24} />
              </div>
              <h4 className="font-bold mb-3">Cost Advantage</h4>
              <p className="text-sm text-slate-600">Minimal raw material costs and reduced logistics overhead.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <BadgeCheck size={24} />
              </div>
              <h4 className="font-bold mb-3">SDG Alignment</h4>
              <p className="text-sm text-slate-600">Positioned perfectly for ESG-focused institutional capital.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
