"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, MapPin, User, Mail, Phone, MessageSquare, Check } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Workshop di pittura",
    date: "2025-01-15",
    time: "14:00",
    location: "Negozio Ideacolor",
    description:
      "Impara le tecniche base della pittura decorativa con i nostri esperti. Workshop gratuito per principianti.",
    spots: 12,
  },
  {
    id: 2,
    title: "Mostra atelier internazionale della manualità creativa!",
    date: "2025-02-08",
    time: "09:00",
    location: "Negozio Ideacolor",
    description: "Vieni con noi ad ABILMENTE mostra atelier internazionale della manualità creativa!",
    spots: 25,
  },
  {
    id: 3,
    title: "Corso avanzato decorazioni",
    date: "2025-02-22",
    time: "15:30",
    location: "Negozio Ideacolor",
    description: "Corso avanzato per imparare tecniche professionali di decorazione e finitura.",
    spots: 8,
  },
]

export function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[0] | null>(null)
  const [bookingEvent, setBookingEvent] = useState<(typeof events)[0] | null>(null)
  const [showBookingDialog, setShowBookingDialog] = useState(false)
  const [showDetailsDialog, setShowDetailsDialog] = useState(false)
  const [bookingSuccess, setBookingSuccess] = useState(false)
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    note: ''
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("it-IT", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Qui potresti inviare i dati al server
    console.log('Prenotazione per:', bookingEvent?.title)
    console.log('Dati utente:', formData)
    
    // Simula invio dati
    setBookingSuccess(true)
    setTimeout(() => {
      setShowBookingDialog(false)
      setBookingSuccess(false)
      setFormData({
        nome: '',
        cognome: '',
        email: '',
        telefono: '',
        note: ''
      })
    }, 2000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const openBookingDialog = (event: typeof events[0]) => {
    setBookingEvent(event)
    setShowDetailsDialog(false)
    setShowBookingDialog(true)
  }

  const openDetailsDialog = (event: typeof events[0]) => {
    setSelectedEvent(event)
    setShowDetailsDialog(true)
  }

  return (
    <section id="eventi" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">Eventi e corsi</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Partecipa ai nostri eventi per imparare nuove tecniche e incontrare altri appassionati
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-all duration-300 bg-card">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="font-semibold text-xl text-card-foreground mb-2">{event.title}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 line-clamp-2">{event.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{event.spots} posti disponibili</span>
                  <Button
                    size="sm"
                    className="rounded-full bg-indigo-500 text-white hover:bg-white hover:text-indigo-500 border border-indigo-500 transition-colors duration-300"
                    onClick={() => openDetailsDialog(event)}
                  >
                    Dettagli
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dialog Dettagli Evento */}
        <Dialog open={showDetailsDialog} onOpenChange={setShowDetailsDialog}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold">{selectedEvent?.title}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedEvent && formatDate(selectedEvent.date)}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{selectedEvent?.time}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{selectedEvent?.location}</span>
                </div>
              </div>
              <p className="text-foreground">{selectedEvent?.description}</p>
              <div className="flex items-center justify-between pt-4 border-t">
                <span className="text-sm text-muted-foreground">{selectedEvent?.spots} posti disponibili</span>
                <Button
                  className="rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors duration-300"
                  onClick={() => selectedEvent && openBookingDialog(selectedEvent)}
                >
                  Prenota un posto
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Dialog Prenotazione */}
        <Dialog open={showBookingDialog} onOpenChange={setShowBookingDialog}>
          <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold">
                Prenota: {bookingEvent?.title}
              </DialogTitle>
            </DialogHeader>
            
            {bookingSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-green-600 mb-2">Prenotazione confermata!</h3>
                <p className="text-muted-foreground">Riceverai una email di conferma a breve.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-medium mb-2">{bookingEvent?.title}</h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>{bookingEvent && formatDate(bookingEvent.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      <span>{bookingEvent?.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      <span>{bookingEvent?.location}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome" className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Nome *
                    </Label>
                    <Input
                      id="nome"
                      type="text"
                      placeholder="Il tuo nome"
                      value={formData.nome}
                      onChange={(e) => handleInputChange('nome', e.target.value)}
                      required
                      className="rounded-lg"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cognome">Cognome *</Label>
                    <Input
                      id="cognome"
                      type="text"
                      placeholder="Il tuo cognome"
                      value={formData.cognome}
                      onChange={(e) => handleInputChange('cognome', e.target.value)}
                      required
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="la.tua@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefono" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Telefono
                  </Label>
                  <Input
                    id="telefono"
                    type="tel"
                    placeholder="+39 123 456 7890"
                    value={formData.telefono}
                    onChange={(e) => handleInputChange('telefono', e.target.value)}
                    className="rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="note" className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Note aggiuntive
                  </Label>
                  <Textarea
                    id="note"
                    placeholder="Eventuali richieste speciali o informazioni aggiuntive..."
                    value={formData.note}
                    onChange={(e) => handleInputChange('note', e.target.value)}
                    className="rounded-lg resize-none h-20"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 rounded-full"
                    onClick={() => setShowBookingDialog(false)}
                  >
                    Annulla
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors duration-300"
                    disabled={!formData.nome || !formData.cognome || !formData.email}
                  >
                    Conferma prenotazione
                  </Button>
                </div>
                </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}