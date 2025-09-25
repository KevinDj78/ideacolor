"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, ChevronLeft, ChevronRight } from "lucide-react"

interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  maxParticipants: number
  currentParticipants: number
  category: "workshop" | "consulenza" | "dimostrazione"
}

const events: Event[] = [
  {
    id: "1",
    title: "Workshop: Tecniche di Pittura Decorativa",
    date: "2025-01-15",
    time: "14:00",
    location: "ideacolor Codroipo",
    description: "Impara le tecniche professionali per creare effetti decorativi unici con le nostre vernici premium.",
    maxParticipants: 12,
    currentParticipants: 8,
    category: "workshop",
  },
  {
    id: "2",
    title: "Consulenza Gratuita: Scelta Colori Casa",
    date: "2025-01-18",
    time: "10:00",
    location: "ideacolor Codroipo",
    description:
      "Consulenza personalizzata con i nostri esperti coloristi per scegliere i colori perfetti per la tua casa.",
    maxParticipants: 6,
    currentParticipants: 3,
    category: "consulenza",
  },
  {
    id: "3",
    title: "Dimostrazione: Vernici Eco-Friendly",
    date: "2025-01-22",
    time: "16:30",
    location: "ideacolor Codroipo",
    description: "Scopri i vantaggi delle nostre vernici eco-friendly e le loro applicazioni innovative.",
    maxParticipants: 20,
    currentParticipants: 15,
    category: "dimostrazione",
  },
  {
    id: "4",
    title: "Workshop: Restauro Mobili Antichi",
    date: "2025-01-25",
    time: "09:30",
    location: "ideacolor Codroipo",
    description: "Tecniche avanzate per il restauro e la protezione di mobili antichi con prodotti specializzati.",
    maxParticipants: 8,
    currentParticipants: 5,
    category: "workshop",
  },
  {
    id: "5",
    title: "Consulenza: Progetti Commerciali",
    date: "2025-01-28",
    time: "11:00",
    location: "ideacolor Codroipo",
    description: "Supporto specializzato per architetti e progettisti nella scelta di soluzioni per spazi commerciali.",
    maxParticipants: 4,
    currentParticipants: 2,
    category: "consulenza",
  },
]

export default function EventCalendar() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  })
  const [showAll, setShowAll] = useState(false)

  const getCategoryColor = (category: Event["category"]) => {
    switch (category) {
      case "workshop":
        return "bg-blue-500"
      case "consulenza":
        return "bg-green-500"
      case "dimostrazione":
        return "bg-orange-500"
      default:
        return "bg-gray-500"
    }
  }

  const getCategoryLabel = (category: Event["category"]) => {
    switch (category) {
      case "workshop":
        return "Workshop"
      case "consulenza":
        return "Consulenza"
      case "dimostrazione":
        return "Dimostrazione"
      default:
        return "Evento"
    }
  }

  const handleBooking = (event: Event) => {
    setSelectedEvent(event)
  }

  const submitBooking = () => {
    // Qui implementeresti la logica di prenotazione
    console.log("[v0] Booking submitted:", { event: selectedEvent, form: bookingForm })
    alert(`Prenotazione confermata per "${selectedEvent?.title}" presso ideacolor Codroipo! Ti contatteremo presto.`)
    setSelectedEvent(null)
    setBookingForm({ name: "", email: "", phone: "", notes: "" })
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("it-IT", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-purple-50 to-blue-50" id="eventi">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">EVENTI E WORKSHOP</h2>
          <p className="text-xl text-gray-600">Partecipa ai nostri eventi esclusivi e scopri il mondo dei colori</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Lista Eventi */}
          <div className="lg:col-span-2 space-y-6">
            {events.map((event) => (
              <Card key={event.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={`${getCategoryColor(event.category)} text-white`}>
                          {getCategoryLabel(event.category)}
                        </Badge>
                        <Badge variant="outline" className="text-gray-600">
                          {event.currentParticipants}/{event.maxParticipants} partecipanti
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-4">{event.description}</p>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {formatDate(event.date)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Users className="h-4 w-4" />
                      {event.maxParticipants - event.currentParticipants} posti disponibili
                    </div>
                    <Button
                      onClick={() => handleBooking(event)}
                      className="bg-orange-500 hover:bg-orange-600 text-white"
                      disabled={event.currentParticipants >= event.maxParticipants}
                    >
                      {event.currentParticipants >= event.maxParticipants ? "Sold Out" : "Prenota Ora"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Calendario Sidebar */}
          <div className="space-y-6">
            <Card className="bg-white shadow-lg py-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-orange-500" />
                  Calendario Eventi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Button variant="ghost" size="sm">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <h3 className="font-semibold">
                      {currentMonth.toLocaleDateString("it-IT", { month: "long", year: "numeric" })}
                    </h3>
                    <Button variant="ghost" size="sm">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-7 gap-1 text-center text-xs">
                    {["L", "M", "M", "G", "V", "S", "D"].map((day) => (
                      <div key={day} className="p-2 font-semibold text-gray-500">
                        {day}
                      </div>
                    ))}
                    {Array.from({ length: 31 }, (_, i) => (
                      <div
                        key={i + 1}
                        className={`p-2 rounded cursor-pointer hover:bg-orange-100 ${
                          [15, 18, 22, 25, 28].includes(i + 1)
                            ? "bg-orange-500 text-white font-semibold"
                            : "text-gray-700"
                        }`}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-100 to-red-100 border-0">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">Evento Speciale</h3>
                <p className="text-sm text-gray-700 mb-4">Fiera del Colore 2026 - Stand ideacolor</p>
                <Badge className="bg-red-500 text-white">30-31 Gennaio</Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Modal Prenotazione */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="bg-white max-w-md w-full max-h-[90vh] overflow-y-auto py-6">
              <CardHeader>
                <CardTitle className="text-xl">Prenota il tuo posto</CardTitle>
                <p className="text-gray-600">{selectedEvent.title}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <Calendar className="h-4 w-4" />
                    {formatDate(selectedEvent.date)} alle {selectedEvent.time}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    {selectedEvent.location}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo *</label>
                    <input
                      type="text"
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Il tuo nome completo"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      value={bookingForm.email}
                      onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="la-tua-email@esempio.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefono *</label>
                    <input
                      type="tel"
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="+39 123 456 7890"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Note (opzionale)</label>
                    <textarea
                      value={bookingForm.notes}
                      onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      rows={3}
                      placeholder="Eventuali richieste speciali o domande..."
                    />
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button variant="outline" onClick={() => setSelectedEvent(null)} className="flex-1">
                    Annulla
                  </Button>
                  <Button
                    onClick={submitBooking}
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
                    disabled={!bookingForm.name || !bookingForm.email || !bookingForm.phone}
                  >
                    Conferma Prenotazione
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}
