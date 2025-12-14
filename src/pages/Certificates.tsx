import { motion } from "framer-motion";
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer bg-background"
            >
              <div className="flex items-center gap-6 md:gap-10 p-6 md:p-8 hover:bg-tan-light/30 transition-all duration-500">
                {/* Number */}
                <span className="font-serif text-2xl text-foreground/20 group-hover:text-primary transition-colors w-12">
                  {String(cert.id).padStart(2, "0")}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-lg md:text-xl text-foreground group-hover:text-primary transition-colors mb-1 truncate">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer} <span className="text-border mx-2">|</span> {cert.year}
                  </p>
                </div>

                {/* Icon */}
                <ExternalLink 
                  size={18} 
                  className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" 
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      {selectedCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-coffee flex items-center justify-center p-6"
          onClick={() => setSelectedCert(null)}
        >
          <button
            className="absolute top-8 right-8 text-tan hover:text-tan-light transition-colors"
            onClick={() => setSelectedCert(null)}
          >
            <X size={28} />
          </button>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full shadow-2xl"
            />
            <div className="mt-8 text-center">
              <h3 className="font-serif text-2xl text-tan mb-2">
                {selectedCert.title}
              </h3>
              <p className="text-tan/60 text-sm">
                {selectedCert.issuer} • {selectedCert.year}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Certificates;
