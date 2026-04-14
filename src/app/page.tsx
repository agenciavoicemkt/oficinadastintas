import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Palette, Wallet, MapPin, Clock } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511945793025";
const WHATSAPP_TEXT = "Falar com nosso consultor no WhatsApp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-sans selection:bg-brand-coral selection:text-white pb-20 md:pb-0">
      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-full border-2 border-brand-coral/20">
              <Image
                src="/logo.jpg"
                alt="Oficina das Tintas Logo"
                fill
                unoptimized
                className="object-cover"
                priority
              />
            </div>
            <div className="font-bold text-xl md:text-2xl text-slate-800 tracking-tight flex flex-col">
              <span className="text-brand-qualy leading-none">Oficina das</span>
              <span className="text-brand-coral leading-none">Tintas</span>
            </div>
          </div>
          
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-brand-whatsapp hover:bg-brand-whatsapp-hover text-white font-semibold py-2.5 px-5 rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Fale Conosco</span>
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-16 pb-20 md:pt-24 md:pb-32">
        {/* Decorator circles */}
        <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] rounded-full bg-brand-coral/5 blur-3xl -z-10" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-brand-qualy/5 blur-3xl -z-10" />
        
        <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Sua reforma com a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-coral to-amber-500">cor dos seus sonhos</span>.
            <br className="hidden md:block" />
            <span className="text-brand-qualy"> Fazemos sua cor personalizada na hora!</span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
            Linha completa <strong>Coral</strong> e <strong>Qualyvinil</strong> com o melhor preço e fácil localização em Interlagos.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-brand-coral hover:bg-brand-coral-hover text-white font-bold text-lg py-4 px-8 rounded-full shadow-[0_0_20px_rgba(229,83,0,0.3)] hover:shadow-[0_0_30px_rgba(229,83,0,0.5)] transition-all transform hover:-translate-y-1"
            >
              <MessageCircle className="w-6 h-6" />
              <span>{WHATSAPP_TEXT}</span>
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* These can be replaced with real partner logos if available */}
            <div className="text-2xl font-black tracking-widest text-slate-400">CORAL</div>
            <div className="text-2xl font-black tracking-widest text-slate-400">QUALYVINIL</div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Por que escolher a Oficina das Tintas?</h2>
             <div className="w-24 h-1.5 bg-brand-coral mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Feature 1 */}
            <div className="group bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:shadow-xl hover:border-brand-coral/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-brand-coral/10 text-brand-coral rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Palette className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Máquina Exclusiva Coral</h3>
              <p className="text-slate-600 leading-relaxed">
                Criamos sua cor personalizada em minutos. Alta tecnologia para garantir a tonalidade exata que você imaginou para o seu ambiente.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:shadow-xl hover:border-brand-qualy/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-brand-qualy/10 text-brand-qualy rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Wallet className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Preço Acessível</h3>
              <p className="text-slate-600 leading-relaxed">
                Trabalhamos com a linha Qualyvinil para quem busca economia inteligente, sem nunca abrir mão da qualidade e durabilidade.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:shadow-xl hover:border-brand-coral/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-brand-coral/10 text-brand-coral rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fácil Localização</h3>
              <p className="text-slate-600 leading-relaxed">
                Estamos junto à Comercial Teles em São Bernardo do Campo, facilitando a compra de todos os materiais para sua obra do início ao fim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Background image fade */}
        <div className="absolute inset-0 opacity-20 -z-10 mix-blend-overlay">
           <Image
            src="/unidade.webp"
            alt="Fachada Oficina das Tintas"
            fill
            unoptimized
            className="object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Venha nos visitar!</h2>
              <p className="text-slate-300 text-lg mb-8 max-w-lg">
                Temos o atendimento especializado que você precisa para escolher a tinta certa para o seu projeto. Venha tomar um café com a gente.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg text-brand-coral">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-white">Endereço</h4>
                    <p className="text-slate-400 mt-1">Av Nossa Sra da Sabará, 1621</p>
                    <p className="text-slate-400">Interlagos - São Paulo - SP</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg text-brand-qualy">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-white">Horário de Funcionamento</h4>
                    <p className="text-slate-400 mt-1">Segunda a Sexta: 08:00 às 18:00</p>
                    <p className="text-slate-400">Sábados: 08:00 às 13:00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                 <Link
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-brand-coral text-brand-coral hover:bg-brand-coral hover:text-white font-bold py-3 px-6 rounded-full transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Enviar Mensagem</span>
                </Link>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
               <div className="h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.437341517036!2d-46.68532152376269!3d-23.66030996525141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5037ef600001%3A0x8898f069411f11ed!2sAv.%20Nossa%20Sra.%20da%20Sabar%C3%A1%2C%201621%20-%20Vila%20Sofia%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004685-004!5e0!3m2!1spt-BR!2sbr!4v1713136000000!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full object-cover"
                  ></iframe>
               </div>
               <Link 
                  href="https://www.google.com/maps/search/?api=1&query=Av.+Nossa+Sra.+da+Sabará,+1621+-+Interlagos,+São+Paulo+-+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-3 px-6 rounded-xl transition-all border border-white/20"
               >
                  <MapPin className="w-5 h-5" />
                  <span>Ver no Google Maps</span>
               </Link>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-10 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 rounded-full overflow-hidden relative">
               <Image src="/logo.jpg" alt="Logo" fill unoptimized className="object-cover" />
             </div>
             <span className="font-semibold text-white">Oficina das Tintas</span>
          </div>
          
          <p className="text-sm text-center md:text-left">
            &copy; 2026 Oficina das Tintas. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-6 text-sm">
            <Link href="/" className="hover:text-white transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/" className="hover:text-white transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON (FOR MOBILE MOSTLY, BUT VISIBLE EVERYWHERE) */}
      <Link
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-brand-whatsapp text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.5)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.7)] hover:scale-110 transition-all duration-300 md:hidden flex items-center justify-center animate-bounce"
        aria-label="Falar conosco no WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </Link>
    </main>
  );
}
