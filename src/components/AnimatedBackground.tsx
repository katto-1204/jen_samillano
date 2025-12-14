import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Generate random particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }));

  // Generate floating shapes
  const shapes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 200 + 100,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 30 + 20,
    delay: Math.random() * 10,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, hsl(var(--primary)/0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, hsl(var(--accent)/0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 20%, hsl(var(--primary)/0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, hsl(var(--primary)/0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/20 blur-sm"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [
              particle.y,
              particle.y + Math.random() * 30 - 15,
              particle.y - Math.random() * 30 + 15,
              particle.y,
            ],
            x: [
              particle.x,
              particle.x + Math.random() * 20 - 10,
              particle.x - Math.random() * 20 + 10,
              particle.x,
            ],
            opacity: [0.2, 0.5, 0.3, 0.2],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating geometric shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute border border-primary/5 rounded-full"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            y: [
              shape.y,
              shape.y + Math.random() * 50 - 25,
              shape.y - Math.random() * 50 + 25,
              shape.y,
            ],
            x: [
              shape.x,
              shape.x + Math.random() * 40 - 20,
              shape.x - Math.random() * 40 + 20,
              shape.x,
            ],
            rotate: [shape.rotation, shape.rotation + 360, shape.rotation + 720],
            opacity: [0.03, 0.08, 0.05, 0.03],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated grid pattern */}
      <motion.div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "50px 50px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Animated radial waves */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle, transparent 20%, hsl(var(--background)) 70%)",
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Moving light spots */}
      {[0, 1, 2].map((i) => {
        const positions = [
          { x: Math.random() * dimensions.width, y: Math.random() * dimensions.height },
          { x: Math.random() * dimensions.width, y: Math.random() * dimensions.height },
          { x: Math.random() * dimensions.width, y: Math.random() * dimensions.height },
        ];
        return (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              width: "300px",
              height: "300px",
              background: `radial-gradient(circle, hsl(var(--primary)/0.15) 0%, transparent 70%)`,
            }}
            animate={{
              x: positions.map((p) => p.x),
              y: positions.map((p) => p.y),
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              delay: i * 3,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

export default AnimatedBackground;

