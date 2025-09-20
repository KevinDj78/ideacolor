import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer id="contatti" className="bg-gray-500 text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo-ideacolor.png" alt="ideacolor Logo" className="w-auto h-20 rounded-lg" />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Il tuo partner di fiducia per trasformare ogni spazio con il colore. Qualità, esperienza e passione al
              servizio dei tuoi progetti.
            </p>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contatti</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-primary-foreground/70" />
                <div className="text-primary-foreground/80">
                  <p>Via Marinelli 1 int. 5</p>
                  <p>33033 Codroipo (Ud)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-foreground/70" />
                <a
                  href="tel:0432900587"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  0432 900587
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-foreground/70" />
                <a
                  href="mailto:info@ideacolor.eu"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  info@ideacolor.eu
                </a>
              </div>
            </div>
          </div>
          
          {/* Opening Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Orari di apertura</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <div className="flex justify-between">
                <span>Lun - Ven</span>
                <span>08:00 - 12:30</span>
              </div>
              <div className="flex justify-between">
                <span></span>
                <span>14:30 - 19:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sabato</span>
                <span>08:00 - 12:30</span>
              </div>
              <div className="flex justify-between">
                <span>Domenica</span>
                <span>Chiuso</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Company Details */}
            <div className="text-sm text-primary-foreground/60 space-y-2">
              <p><strong>Comisso s.r.l.</strong></p>
              <p>Cod. Fisc. e P.IVA: 02793590304</p>
              <p>Cap. Soc. € 10.000,00 i.v.</p>
              <p>Reg. Imp. Udine n. 02793590304</p>
              <p>REA Ud 288600</p>
            </div>
            
            {/* Privacy Policy Link */}
            <div className="text-sm text-primary-foreground/60 md:text-right">
              <a href="#privacy" className="hover:text-primary-foreground transition-colors underline">
                Privacy Policy
              </a>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-primary-foreground/60">© 2025 Comisso s.r.l. Tutti i diritti riservati.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}