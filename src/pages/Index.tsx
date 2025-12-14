import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import profileCard from "../assets/j_profilecard.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background texture */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-tan-light/50 via-background to-steel-light/20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
        <motion.div 
          className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-tan/10 to-transparent"
          animate={{
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <section className="flex-1 flex items-center px-6 md:px-12 lg:px-24 pt-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Text Content */}
            <div className="order-2 lg:order-1">
              {/* Small Label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8"
              >
                <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
                  Portfolio & Archive
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-foreground leading-[0.9] mb-6"
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Jennelyn
                </motion.span>
                <br />
                <motion.span 
                  className="text-outline"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Samillano
                </motion.span>
              </motion.h1>

              {/* Divider */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 1.2, delay: 0.6 }}
                className="h-px bg-accent mb-8"
              />

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-muted-foreground text-lg md:text-xl font-light max-w-md leading-relaxed mb-4"
              >
                Information Technology Student
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-muted-foreground/70 text-sm tracking-wide max-w-md mb-12"
              >
                Documenting growth through professional experiences, 
                academic achievements, and personal reflections.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                whileHover={{ x: 5 }}
              >
                <Link
                  to="/archive"
                  className="group inline-flex items-center gap-4 text-sm tracking-[0.15em] uppercase text-foreground font-medium hover:text-primary transition-colors duration-500"
                >
                  <motion.span
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Explore Archive
                  </motion.span>
                  <motion.span 
                    className="h-px bg-foreground"
                    initial={{ width: 48 }}
                    whileHover={{ width: 80, backgroundColor: "hsl(var(--primary))" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ArrowRight size={16} />
                  </motion.div>
                </Link>
              </motion.div>
            </div>

            {/* Right - Profile Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="aspect-[3/4] relative group">
                {/* Main frame */}
                <motion.div 
                  className="absolute inset-4 md:inset-8 border border-border bg-card/50 backdrop-blur-sm overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
                
                {/* Accent frame */}
                <motion.div 
                  className="absolute top-0 left-0 right-8 md:right-16 bottom-8 md:bottom-16 border border-accent/30"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
                
                {/* Profile Image */}
                <motion.div 
                  className="absolute inset-8 md:inset-16 overflow-hidden"
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                >
                  <motion.img
                    src={profileCard}
                    alt="Jennelyn Samillano"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </motion.div>

                {/* Decorative number */}
                <motion.div 
                  className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 font-serif text-8xl md:text-9xl text-primary/10 select-none"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  01
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="py-8 px-6 md:px-12 lg:px-24 border-t border-border/30"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4 text-xs tracking-[0.15em] uppercase text-muted-foreground">
          <span>Cebu & Bohol</span>
          <span className="hidden md:inline">•</span>
          <span>Educational Tour 2025</span>
          <span className="hidden md:inline">•</span>
          <span>5 Companies</span>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
