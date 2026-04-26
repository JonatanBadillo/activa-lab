import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Ticket, Gift, MapPin, Zap, Lightbulb, ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

const servicesList = [
  {
    id: "01",
    title: "Activaciones de marca",
    desc: "Creamos impacto inmediato donde está tu audiencia.",
    icon: <Sparkles className="w-10 h-10" />,
    colSpan: "lg:col-span-2",
    accent: "bg-accent/20"
  },
  {
    id: "02",
    title: "Eventos",
    desc: "Experiencias inmersivas memorables.",
    icon: <Ticket className="w-10 h-10" />,
    colSpan: "lg:col-span-1",
    accent: "bg-white/5"
  },
  {
    id: "03",
    title: "Creatividad",
    desc: "Sampling que rompe esquemas.",
    icon: <Gift className="w-10 h-10" />,
    colSpan: "lg:col-span-1",
    accent: "bg-white/5"
  },
  {
    id: "04",
    title: "Street Marketing",
    desc: "Dominamos la calle con ingenio.",
    icon: <MapPin className="w-10 h-10" />,
    colSpan: "lg:col-span-1",
    accent: "bg-white/5"
  },
  {
    id: "05",
    title: "Dinámicas",
    desc: "Interacción real y divertida.",
    icon: <Zap className="w-10 h-10" />,
    colSpan: "lg:col-span-1",
    accent: "bg-accent/10"
  },
  {
    id: "06",
    title: "Ejecución BTL",
    desc: "Concepto y producción de punta a punta.",
    icon: <Lightbulb className="w-10 h-10" />,
    colSpan: "lg:col-span-2",
    accent: "bg-white/5"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } 
  }
};

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yTitle = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

  return (
    <section id="servicios" ref={containerRef} className="relative py-32 md:py-56 bg-[#030303] overflow-hidden">
      
      {/* 1. FONDO ANIMADO CINÉTICO */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-accent rounded-full blur-[150px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px]" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Cabecera con Revelado de Texto */}
          <div className="mb-24 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.div style={{ y: yTitle }} className="max-w-3xl">
              <div className="flex items-center gap-4 mb-8">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  className="h-1 bg-accent" 
                />
                <span className="text-accent font-black tracking-[0.5em] uppercase text-sm">Arsenal Creativo</span>
              </div>

              <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter uppercase italic">
                CÓMO <br /> 
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-accent drop-shadow-[0_0_20px_rgba(255,85,0,0.4)]"
                >
                  ACTIVAMOS.
                </motion.span>
              </h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-500 font-medium max-w-sm mb-4 leading-tight italic"
            >
              Convertimos conceptos en realidades táctiles que nadie puede ignorar.
            </motion.p>
          </div>

          {/* Grid Bento Animado */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[340px]"
          >
            {servicesList.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className={`relative group p-10 bg-white/[0.02] border border-white/5 rounded-[3rem] overflow-hidden flex flex-col justify-between transition-all duration-500 hover:bg-white/[0.04] hover:border-accent/30 ${service.colSpan}`}
              >
                {/* Resplandor de fondo dinámico */}
                <div className={`absolute top-0 right-0 w-40 h-40 ${service.accent} blur-[80px] translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700`} />
                
                <div className="flex justify-between items-start">
                  <motion.div 
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="p-5 bg-dark border border-white/10 rounded-2xl text-accent shadow-2xl relative z-10"
                  >
                    {service.icon}
                  </motion.div>
                  <motion.div 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                    className="text-white/5 font-black text-7xl italic group-hover:text-accent/10 transition-colors pointer-events-none"
                  >
                    {service.id}
                  </motion.div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-black text-white mb-4 group-hover:text-accent transition-colors tracking-tight uppercase italic">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-500 group-hover:text-gray-300 transition-colors leading-tight font-medium max-w-[85%]">
                    {service.desc}
                  </p>
                </div>

                <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-8 transition-all duration-500">
                  <ArrowUpRight className="w-10 h-10 text-accent" />
                </div>
                
                <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-accent group-hover:w-full transition-all duration-700 ease-out" />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Services;
