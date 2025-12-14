import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ExternalLink } from "lucide-react";
import certificateImage from "../assets/cert_jennelyn.png";

const certificates = [
  {
    id: 1,
    title: "Certificate of Completion",
    issuer: "World of Adventures Travel and Tours",
    year: "2025",
    image: certificateImage,
  },
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  return (
    <div className="page-container pt-32">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-32"
        >
          <div className="flex items-end gap-8 mb-6">
            <span className="font-serif text-8xl md:text-9xl text-primary/20 leading-none">
              03
            </span>
            <div>
              <h1 className="section-title">Certificates</h1>
            </div>
          </div>
          <div className="ml-0 md:ml-32">
            <div className="w-16 h-px bg-accent mb-6" />
            <p className="section-subtitle max-w-lg">
              A collection of achievements and credentials earned throughout my
              academic and professional journey.
            </p>
          </div>
        </motion.header>

        {/* Certificates List */}
        <div className="space-y-px bg-border">
          {certificates.map((cert, index) => (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, x: -30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ x: 5, scale: 1.01 }}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer bg-background"
            >
              <motion.div 
                className="flex items-center gap-6 md:gap-10 p-6 md:p-8 hover:bg-tan-light/30 transition-all duration-500"
                whileHover={{ paddingLeft: "2rem" }}
                transition={{ duration: 0.3 }}
              >
                {/* Number */}
                <motion.span 
                  className="font-serif text-2xl text-foreground/20 group-hover:text-primary transition-colors w-12"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {String(cert.id).padStart(2, "0")}
                </motion.span>

                {/* Content */}
                <motion.div 
                  className="flex-1 min-w-0"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.08 + 0.2 }}
                >
                  <h3 className="font-serif text-lg md:text-xl text-foreground group-hover:text-primary transition-colors mb-1 truncate">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer} <span className="text-border mx-2">|</span> {cert.year}
                  </p>
                </motion.div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 45, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ExternalLink 
                    size={18} 
                    className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" 
                  />
                </motion.div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-coffee/95 backdrop-blur-sm flex items-center justify-center p-6 overflow-y-auto"
          onClick={() => setSelectedCert(null)}
        >
          <motion.button
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-8 right-8 text-tan hover:text-tan-light z-10 bg-coffee/50 rounded-full p-2 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <X size={28} />
          </motion.button>
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 30, rotateY: -15 }}
            animate={{ scale: 1, opacity: 1, y: 0, rotateY: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 30 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full shadow-2xl rounded-lg"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            />
            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <h3 className="font-serif text-2xl text-tan mb-2">
                {selectedCert.title}
              </h3>
              <p className="text-tan/60 text-sm">
                {selectedCert.issuer} • {selectedCert.year}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certificates;
