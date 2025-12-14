import { motion } from "framer-motion";
import { useState } from "react";
import { X, BookOpen } from "lucide-react";

// Journal images
import journal1 from "../assets/journal/1.png";
import journal2 from "../assets/journal/2.jpg";
import journal3 from "../assets/journal/3.jpg";
import journal4 from "../assets/journal/4.jpg";
import journal5 from "../assets/journal/5.jpg";
import journal6 from "../assets/journal/6.png";

const journalPages = [
  {
    id: 1,
    day: "Nov 19-22, 2025",
    title: "Learning Journal",
    preview: journal1,
    fullImage: journal1,
  },
  {
    id: 2,
    day: "Nov 19, 2025",
    title: "Worldtech Information Solutions",
    preview: journal2,
    fullImage: journal2,
  },
  {
    id: 3,
    day: "Nov 20, 2025",
    title: "Rivan IT Cebu",
    preview: journal3,
    fullImage: journal3,
  },
  {
    id: 4,
    day: "Nov 20, 2025",
    title: "CodeChum",
    preview: journal4,
    fullImage: journal4,
  },
  {
    id: 5,
    day: "Nov 21, 2025",
    title: "Mata Technologies Inc",
    preview: journal5,
    fullImage: journal5,
  },
  {
    id: 6,
    day: "Nov 22, 2025",
    title: "T.A.R.S.I.E.R. 117",
    preview: journal6,
    fullImage: journal6,
  },
];

const Journal = () => {
  const [selectedPage, setSelectedPage] = useState<typeof journalPages[0] | null>(null);

  return (
    <div className="page-container pt-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-32"
        >
          <div className="flex items-end gap-8 mb-6">
            <span className="font-serif text-8xl md:text-9xl text-primary/20 leading-none">
              04
            </span>
            <div>
              <h1 className="section-title">Journal</h1>
            </div>
          </div>
          <div className="ml-0 md:ml-32">
            <div className="w-16 h-px bg-accent mb-6" />
            <p className="section-subtitle max-w-lg">
              A personal record of daily experiences, learnings, and reflections
              throughout my internship journey.
            </p>
          </div>
        </motion.header>

        {/* Journal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {journalPages.map((page, index) => (
            <motion.article
              key={page.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              onClick={() => setSelectedPage(page)}
              className="group cursor-pointer"
            >
              <div className="relative border border-border bg-card hover:border-accent transition-all duration-700 overflow-hidden">
                {/* Preview Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={page.preview}
                    alt={page.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs tracking-[0.2em] uppercase text-primary mb-2 block">
                        {page.day}
                      </span>
                      <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">
                        {page.title}
                      </h3>
                    </div>
                    <BookOpen 
                      size={20} 
                      className="text-muted-foreground group-hover:text-primary transition-colors" 
                    />
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-12 h-12 border-l border-b border-border bg-background flex items-center justify-center">
                  <span className="font-serif text-sm text-foreground/30">
                    {String(page.id).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground tracking-wide">
            Click any entry to view the full journal page
          </p>
        </motion.div>
      </div>

      {/* Journal Viewer Modal */}
      {selectedPage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-coffee flex items-center justify-center p-6 overflow-y-auto"
          onClick={() => setSelectedPage(null)}
        >
          <button
            className="absolute top-8 right-8 text-tan hover:text-tan-light transition-colors z-10"
            onClick={() => setSelectedPage(null)}
          >
            <X size={28} />
          </button>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl w-full my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-8">
              <span className="text-xs tracking-[0.2em] uppercase text-steel-light">
                {selectedPage.day}
              </span>
              <h3 className="font-serif text-3xl text-tan mt-2">
                {selectedPage.title}
              </h3>
            </div>
            <img
              src={selectedPage.fullImage}
              alt={selectedPage.title}
              className="w-full shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Journal;
