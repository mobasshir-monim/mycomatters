
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Leaf className="w-6 h-6 text-emerald-800" />
              <span className="text-xl font-bold text-emerald-900 tracking-tight">MYCOMATTERS</span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Engineering nature to replace plastic. EcoStyrene is Bangladesh's first sustainable alternative to EPS packaging.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-emerald-700 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-700 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="mailto:info@mycomatters.com" className="text-slate-400 hover:text-emerald-700 transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><Link to="/ecostyrene" className="hover:text-emerald-700">EcoStyrene</Link></li>
              <li><a href="#" className="hover:text-emerald-700">Molding Solutions</a></li>
              <li><a href="#" className="hover:text-emerald-700">Custom Design</a></li>
              <li><a href="#" className="hover:text-emerald-700">Technical Specs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><Link to="/about" className="hover:text-emerald-700">Our Story</Link></li>
              <li><Link to="/team" className="hover:text-emerald-700">The Team</Link></li>
              <li><a href="#" className="hover:text-emerald-700">Careers</a></li>
              <li><Link to="/contact" className="hover:text-emerald-700">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-emerald-700 mt-0.5 shrink-0" />
                <span> Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-emerald-700 shrink-0" />
                <span>+880 1775340641</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-emerald-700 shrink-0" />
                <span>hello@mycomatters.xyz</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} MycoMatters Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-emerald-700">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-700">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
