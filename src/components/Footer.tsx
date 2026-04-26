import { motion } from 'framer-motion';
import { ArrowUp, Mail, Send } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#030303] pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* 1. DECORACIÓN DE FONDO (MARCA MASIVA) */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-[0.02] select-none pointer-events-none">
        <span className="text-[20vw] font-black uppercase italic tracking-tighter text-white">
          ACTIVAMENTE LAB
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-24 items-center">
          
          {/* LADO IZQUIERDO: BRANDING */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic">
                Activamente<span className="text-accent">Lab.</span>
              </h3>
              <p className="text-xl text-gray-500 max-w-md font-medium leading-tight mb-8">
                No buscamos ser una agencia más. Buscamos ser el <span className="text-white border-b-2 border-accent/50">catalizador</span> que tu marca necesita.
              </p>
              <div className="flex items-center gap-2 text-gray-600 font-bold uppercase tracking-widest text-xs italic">
                <div className="w-8 h-px bg-white/10" />
                Guadalajara, México
              </div>
            </motion.div>
          </div>

          {/* LADO DERECHO: CONTACTO MONUMENTAL */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <a 
                href="mailto:hola@activamentelab.com"
                className="relative block overflow-hidden rounded-[3rem] p-10 md:p-16 bg-white/[0.02] border border-white/10 hover:border-accent/40 transition-all duration-700"
              >
                {/* Glow Effect */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10 flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,85,0,0.4)]">
                      <Mail className="w-6 h-6" />
                    </div>
                    <span className="text-accent font-black tracking-[0.4em] uppercase text-xs">Hablemos ahora</span>
                  </div>

                  <h4 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-none break-all group-hover:text-accent transition-colors duration-500">
                    hola@activamentelab.com
                  </h4>

                  <div className="flex items-center gap-4 text-white/40 group-hover:text-white transition-colors duration-500">
                    <span className="text-sm font-bold uppercase tracking-widest italic">Haz clic para enviar email</span>
                    <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </a>
            </motion.div>
          </div>
        </div>

        {/* BARRA INFERIOR: DETALLES TÉCNICOS */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6 text-[10px] font-mono tracking-[0.2em] text-gray-600 uppercase">
            <span>&copy; {new Date().getFullYear()} Activamente Lab</span>
            <div className="w-1 h-1 bg-accent rounded-full animate-pulse" />
            <span>Agencia de Impacto Real</span>
          </div>

          <motion.button 
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-white font-black text-xs tracking-[0.4em] uppercase"
          >
            VOLVER AL INICIO 
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-300 shadow-lg">
              <ArrowUp className="w-4 h-4" />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
