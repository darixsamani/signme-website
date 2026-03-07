import { Button } from '../common/Button';

export const CTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="bg-premium-gradient rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-display font-extrabold mb-8">
              Ready to leave the paper world behind?
            </h2>
            <p className="text-xl text-white/80 mb-12">
              Join thousands of businesses that trust SignMe for their digital authentication needs. Start your 14-day free trial today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
                Get Started for Free
              </Button>
              <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 border border-white/30 w-full sm:w-auto">
                Schedule a Demo
              </Button>
            </div>
            <p className="mt-8 text-sm text-white/60">
              No credit card required • Unlimited documents • 24/7 Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};