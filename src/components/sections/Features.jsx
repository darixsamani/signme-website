import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe, FileText, Lock, CheckCircle } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
  >
    <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-premium-gradient group-hover:text-white transition-colors">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-midnight/60 leading-relaxed">{description}</p>
  </motion.div>
);

export const Features = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Legally Binding",
      description: "Our digital signatures comply with global regulations including eIDAS and ESIGN Act, ensuring full legal validity."
    },
    {
      icon: Lock,
      title: "Military-Grade Encryption",
      description: "Each signature is secured with advanced cryptographic protocols, preventing any unauthorized alteration of documents."
    },
    {
      icon: Zap,
      title: "Instant Turnaround",
      description: "Reduce signing time from days to minutes. Send, track, and receive signed documents in real-time."
    },
    {
      icon: Globe,
      title: "Sign Anywhere",
      description: "Sign documents from any device, anywhere in the world. No app download required for signers."
    },
    {
      icon: FileText,
      title: "Audit Trails",
      description: "Get detailed logs of every action taken on your documents, including IP addresses and timestamps."
    },
    {
      icon: CheckCircle,
      title: "Physical Equivalent",
      description: "Considered as the electronic equivalent of a physical signature with ink on paper, but with digital advantages."
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-extrabold mb-6">
            Powerful Features for <span className="gradient-text">Modern Business</span>
          </h2>
          <p className="text-lg text-midnight/60">
            SignMe provides all the tools you need to transition your paper-based workflows into a secure, digital environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};