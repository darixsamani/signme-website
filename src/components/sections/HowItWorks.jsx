import { motion } from 'framer-motion';

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Upload Document",
      description: "Upload any PDF, Word, or Image file. Our system automatically prepares it for signing."
    },
    {
      number: "02",
      title: "Add Signers",
      description: "Enter the email addresses of those who need to sign. You can set a specific signing order."
    },
    {
      number: "03",
      title: "Place Fields",
      description: "Drag and drop signature fields, dates, and text boxes exactly where you need them."
    },
    {
      number: "04",
      title: "Send & Secure",
      description: "Hit send. Signers get a secure link, and you get notified the moment they sign."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-display font-extrabold mb-8">
              Simple. Secure. <br /><span className="gradient-text">Seamless.</span>
            </h2>
            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-premium-gradient flex items-center justify-center text-white font-display font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-midnight/60">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-premium-gradient blur-[100px] opacity-20 rounded-full" />
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000" 
                alt="Digital Signature Process" 
                className="relative z-10 rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};