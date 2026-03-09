import { ShieldCheck } from 'lucide-react';
import logo from '../../assets/logo-with-text-dark-background.svg';
import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6">
              {/* <img 
                src="https://storage.googleapis.com/lexis-ia.firebasestorage.app/users/8VTY3BU052bqicuiGMkr4reWZMV2/projects/c04e583c-5db5-4842-ad2f-35e80f9de5c7/logos/logo-primary.svg" 
                alt="SignMe Logo" 
                className="h-8 w-auto"
              /> */}
              <img 
                src={logo} 
                alt="SignMe Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-display font-extrabold gradient-text">SignMe</span>
            </a>
            <p className="text-midnight/60 max-w-xs mb-8">
              Leading the way in secure, digital authentication. Providing electronic equivalents to physical signatures with superior security.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              {[<Twitter size={20} />, <Linkedin size={20} />, <Github size={20} />, <Facebook size={20} />].map((element, index) => (
                    <div
                      key={index}
                      className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-midnight/40 hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                    >
                      {element}
                    </div>
            ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-midnight/60">
              <li><a href="#" className="hover:text-primary">Features</a></li>
              <li><a href="#" className="hover:text-primary">Security</a></li>
              <li><a href="#" className="hover:text-primary">Pricing</a></li>
              <li><a href="#" className="hover:text-primary">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-midnight/60">
              <li><a href="#" className="hover:text-primary">About Us</a></li>
              <li><a href="#" className="hover:text-primary">Careers</a></li>
              <li><a href="#" className="hover:text-primary">Blog</a></li>
              <li><a href="#" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-midnight/60">
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-primary">Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-midnight/40 text-sm">
            © {new Date().getFullYear()} SignMe Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6 opacity-40">
            <span className="text-xs font-bold uppercase tracking-widest">ISO 27001</span>
            <span className="text-xs font-bold uppercase tracking-widest">GDPR COMPLIANT</span>
            <span className="text-xs font-bold uppercase tracking-widest">SOC2 TYPE II</span>
          </div>
        </div>
      </div>
    </footer>
  );
};