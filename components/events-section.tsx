"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Calendar, Clock, MapPin } from "lucide-react"

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
    title: "Visita alla fiera Abilmente",
    date: "2025-02-08",
    time: "09:00",
    location: "Fiera di Vicenza",
    description: "Partecipa con noi alla più importante fiera italiana del fai-da-te e hobby creativi.",
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" className="rounded-full" onClick={() => setSelectedEvent(event)}>
                        Dettagli
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{event.title}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(event.date)}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <p className="text-foreground">{event.description}</p>
                        <div className="flex items-center justify-between pt-4">
                          <span className="text-sm text-muted-foreground">{event.spots} posti disponibili</span>
                          <Button>Prenota posto</Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
