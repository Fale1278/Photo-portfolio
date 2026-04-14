"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4", category: "Nature", title: "Golden Hour Whisps" },
  { id: 2, src: "https://images.unsplash.com/photo-1554080353-a576cf803bda", category: "Portrait", title: "Stillness In Motion" },
  { id: 3, src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34", category: "Architecture", title: "Parisian Dreams" },
  { id: 4, src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e", category: "Landscape", title: "Mountain Majesty" },
  { id: 5, src: "https://images.unsplash.com/photo-1511367461989-f85a21fda167", category: "Portrait", title: "The Soul's Reflection" },
  { id: 6, src: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e", category: "Urban", title: "Neon Pulse" },
  { id: 7, src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e", category: "Portrait", title: "The Storyteller" },
  { id: 8, src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", category: "Landscape", title: "Arctic Silence" },
  { id: 9, src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b", category: "Architecture", title: "Linear Perspective" },
]

export function Gallery() {
  const [filter, setFilter] = React.useState("All")
  const categories = ["All", ...Array.from(new Set(images.map(img => img.category)))]

  const filteredImages = filter === "All" ? images : images.filter(img => img.category === filter)

  return (
    <section id="gallery" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-4">The Portfolio</h2>
          <p className="text-muted-foreground max-w-md">Capturing moments that tell stories, from urban landscapes to the depths of human emotion.</p>
        </div>
        
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-6 py-2 rounded-full border transition-all text-sm font-medium",
                filter === cat 
                  ? "bg-primary text-primary-foreground border-primary" 
                  : "bg-transparent border-border hover:border-primary/50"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="photo-grid"
      >
        {filteredImages.map((img) => (
          <motion.div
            layout
            key={img.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer"
          >
            <Image
              src={`${img.src}?auto=format&fit=crop&q=80&w=800`}
              alt={img.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-white/60 text-xs font-medium uppercase tracking-widest mb-1">{img.category}</span>
              <h3 className="text-white font-outfit text-xl font-semibold">{img.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
