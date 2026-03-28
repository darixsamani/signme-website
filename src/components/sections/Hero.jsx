import { motion } from 'framer-motion';
import { FileCheck, Shield, PenTool, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden lg:px-20">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6 max-w-full overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left w-full"
          >
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-primary/10 text-primary font-semibold text-xs sm:text-sm mb-5">
              <Shield size={14} />
              <span>Legally Binding & Secure</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-extrabold leading-tight mb-5 break-words">
              The Future of{' '}
              <span className="gradient-text">Authentication</span>{' '}
              is Digital.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-midnight/70 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed px-1 sm:px-0">
              SignMe provides an electronic, encrypted stamp of authentication
              for your most important documents. Faster than ink, safer than paper.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-center lg:justify-start w-full">
              <Button size="lg" className="w-full sm:w-auto gap-2 justify-center">
                Start Signing Free <ArrowRight size={18} />
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto justify-center">
                Watch Demo
              </Button>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 opacity-60 grayscale">
              <span className="font-display font-bold text-sm tracking-tighter">TRUSTED BY</span>
              <div className="flex gap-4">
                <div className="w-20 h-7 bg-midnight/20 rounded-md" />
                <div className="w-20 h-7 bg-midnight/20 rounded-md" />
                <div className="w-20 h-7 bg-midnight/20 rounded-md" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="relative z-10 glass-card rounded-3xl p-3 sm:p-4 lg:p-8">
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-inner border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <FileCheck className="text-primary" size={18} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-xs sm:text-sm truncate">Employment_Contract.pdf</h4>
                      <p className="text-xs text-gray-400">2.4 MB • Waiting for you</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full shrink-0 ml-2">
                    PENDING
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="h-3 w-3/4 bg-gray-100 rounded" />
                  <div className="h-3 w-full bg-gray-100 rounded" />
                  <div className="h-3 w-5/6 bg-gray-100 rounded" />
                </div>

                <div className="border-2 border-dashed border-primary/30 rounded-xl p-8 sm:p-12 flex flex-col items-center justify-center bg-primary/5 cursor-pointer hover:bg-primary/10 transition-colors">
                  <PenTool className="text-primary mb-2" size={28} />
                  <p className="text-primary font-bold text-sm">Sign Here</p>
                  <p className="text-xs text-primary/60">Click to add signature</p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-2 sm:-top-6 sm:-right-6 bg-accent p-3 sm:p-4 rounded-2xl shadow-xl text-white z-20"
            >
              <Shield size={20} />
            </motion.div>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-white p-3 sm:p-4 rounded-2xl shadow-xl text-primary z-20"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold">Encrypted & Verified</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};