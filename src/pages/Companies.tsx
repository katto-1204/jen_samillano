import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const companies = [
  {
    name: "Worldtech Information Solutions",
    location: "Cebu",
    description: "Innovative IT solutions and software development services.",
  },
  {
    name: "Rivan IT Cebu",
    location: "Cebu",
    description: "Technology consulting and digital transformation.",
  },
  {
    name: "CodeChum",
    location: "Cebu",
    description: "Educational technology platform for aspiring developers.",
  },
  {
    name: "Mata Technologies Inc",
    location: "Cebu",
    description: "Cutting-edge tech solutions and innovation hub.",
  },
  {
    name: "T.A.R.S.I.E.R. 117",
    location: "Bohol",
    description: "Regional technology initiative and research center.",
  },
];

const cebuCompanies = companies.filter((c) => c.location === "Cebu");
const boholCompanies = companies.filter((c) => c.location === "Bohol");

const Companies = () => {
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
              02
            </span>
            <div>
              <h1 className="section-title">Companies</h1>
            </div>
          </div>
          <div className="ml-0 md:ml-32">
            <div className="w-16 h-px bg-accent mb-6" />
            <p className="section-subtitle max-w-lg">
              Professional affiliations that have shaped my growth and development
              throughout this journey.
            </p>
          </div>
        </motion.header>

        {/* Location Sections */}
        <div className="space-y-24">
          {/* Cebu */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <MapPin className="text-primary" size={18} />
              <h2 className="font-serif text-2xl text-foreground">Cebu</h2>
              <div className="flex-1 h-px bg-border ml-4" />
            </div>

            <div className="space-y-4">
              {cebuCompanies.map((company, index) => (
                <motion.article
                  key={company.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-6 p-6 md:p-8 border border-border bg-card hover:border-accent hover:bg-tan-light/30 transition-all duration-500">
                    <span className="font-serif text-3xl text-foreground/20 group-hover:text-primary/40 transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                        {company.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {company.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>

          {/* Bohol */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <MapPin className="text-primary" size={18} />
              <h2 className="font-serif text-2xl text-foreground">Bohol</h2>
              <div className="flex-1 h-px bg-border ml-4" />
            </div>

            <div className="space-y-4">
              {boholCompanies.map((company, index) => (
                <motion.article
                  key={company.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-6 p-6 md:p-8 border border-border bg-card hover:border-accent hover:bg-tan-light/30 transition-all duration-500">
                    <span className="font-serif text-3xl text-foreground/20 group-hover:text-primary/40 transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                        {company.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {company.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Companies;
