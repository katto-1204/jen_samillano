import { motion } from "framer-motion";
import { useState } from "react";
import { X, Expand } from "lucide-react";

// Day 1 images
import d1_1 from "../assets/day1/d1.1.png";
import d1_2 from "../assets/day1/d1.2.png";
import d1_3 from "../assets/day1/d1.3.png";
import d1_4 from "../assets/day1/d1.4.png";

// Day 2 images
import d2_1 from "../assets/day2/image.png";
import d2_2 from "../assets/day2/image copy.png";
import d2_3 from "../assets/day2/image copy 2.png";
import d2_4 from "../assets/day2/image copy 3.png";
import d2_5 from "../assets/day2/image copy 4.png";
import d2_6 from "../assets/day2/image copy 5.png";

// Day 3 images
import d3_1 from "../assets/day3/image.png";
import d3_2 from "../assets/day3/image copy.png";
import d3_3 from "../assets/day3/image copy 2.png";
import d3_4 from "../assets/day3/image copy 3.png";

// Day 4 images
import d4_1 from "../assets/day4/image.png";
import d4_2 from "../assets/day4/image copy.png";
import d4_3 from "../assets/day4/image copy 2.png";
import d4_4 from "../assets/day4/image copy 3.png";
import d4_5 from "../assets/day4/image copy 4.png";

const archiveData = [
  {
    day: 1,
    title: "First Day",
    description: "Orientation and Introduction",
    images: [d1_1, d1_2, d1_3, d1_4],
  },
  {
    day: 2,
    title: "Second Day",
    description: "Hands-on Training",
    images: [d2_1, d2_2, d2_3, d2_4, d2_5, d2_6],
  },
  {
    day: 3,
    title: "Third Day",
    description: "Project Collaboration",
    images: [d3_1, d3_2, d3_3, d3_4],
  },
  {
    day: 4,
    title: "Fourth Day",
    description: "Skills Development",
    images: [d4_1, d4_2, d4_3, d4_4, d4_5],
  },
];

const Archive = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="page-container pt-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-32"
        >
          <div className="flex items-end gap-8 mb-6">
            <span className="font-serif text-8xl md:text-9xl text-primary/20 leading-none">
              01
            </span>
            <div>
              <h1 className="section-title">Visual Archive</h1>
            </div>
          </div>
          <div className="ml-0 md:ml-32">
            <div className="w-16 h-px bg-accent mb-6" />
            <p className="section-subtitle max-w-lg">
              A curated collection of moments from my internship experience,
              capturing the journey of professional growth and learning.
            </p>
          </div>
        </motion.header>

        {/* Archive Grid */}
        <div className="space-y-32 md:space-y-48">
          {archiveData.map((item, index) => (
            <motion.article
              key={item.day}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.1 }}
            >
              {/* Day Header */}
              <div className="flex items-baseline gap-6 mb-10">
                <span className="font-serif text-7xl md:text-8xl text-foreground/10">
                  {String(item.day).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-1">
                    {item.title}
                  </h2>
                  <p className="text-sm text-muted-foreground tracking-wide">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {item.images.map((image, imgIndex) => (
                  <motion.div
                    key={imgIndex}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.6 }}
                    className="archive-card aspect-[4/3] cursor-pointer group"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image}
                      alt={`Day ${item.day} - Image ${imgIndex + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="archive-overlay">
                      <div className="flex items-center gap-3 text-tan-light">
                        <Expand size={18} />
                        <span className="text-sm tracking-wide">View Full</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-coffee flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-8 text-tan hover:text-tan-light transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={28} />
          </button>
          <motion.img
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            src={selectedImage}
            alt="Full view"
            className="max-w-full max-h-[85vh] object-contain"
          />
        </motion.div>
      )}
    </div>
  );
};

export default Archive;
