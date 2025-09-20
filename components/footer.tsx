import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer id="contatti" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">I</span>
              </div>
              <span className="text-2xl font-bold">Ideacolor</span>
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
                  <p>Via Roma 123</p>
                  <p>33100 Udine (UD)</p>
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
                <span>8:30 - 12:30</span>
              </div>
              <div className="flex justify-between">
                <span></span>
                <span>14:30 - 19:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sabato</span>
                <span>8:30 - 12:30</span>
              </div>
              <div className="flex justify-between">
                <span>Domenica</span>
                <span>Chiuso</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">© 2025 Ideacolor. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
}
