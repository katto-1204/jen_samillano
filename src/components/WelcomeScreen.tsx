import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WelcomeScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show content after a brief delay
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 300);

    // Hide welcome screen after animation
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[10000] bg-background flex items-center justify-center"
        >
          {/* Background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-tan-light/50 via-background to-steel-light/20"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Logo/Initials */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                stiffness: 200,
              }}
              className="mb-8"
            >
              <span className="font-serif text-6xl md:text-8xl tracking-tight text-foreground">
                J<span className="text-primary">.</span>S
              </span>
            </motion.div>

            {/* Name */}
            <AnimatePresence>
              {showContent && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <h1 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
                    Jennelyn Samillano
                  </h1>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 100 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="h-px bg-accent mx-auto mb-4"
                  />
                  <p className="text-muted-foreground text-sm md:text-base tracking-wide">
                    Educational Tour Archive
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Loading dots */}
            <AnimatePresence>
              {showContent && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 1 }}
                  className="flex items-center justify-center gap-2 mt-8"
                >
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 rounded-full bg-primary"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;

