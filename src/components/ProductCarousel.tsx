'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

type Props = {
  images: string[]
  name: string
}

export default function ProductCarousel({ images, name }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  )

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <div className="w-full">
      {/* Main */}
      <div className="overflow-hidden border border-black/10 bg-white" ref={emblaRef}>
        <div className="flex">
          {images.map((src, idx) => (
            <div key={src} className="relative min-w-full h-80 lg:h-[460px]">
              <Image
                src={src}
                alt={`${name} ${idx + 1}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Thumbs */}
      <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
        {images.map((src, idx) => (
          <button
            key={`${src}-thumb`}
            onClick={() => scrollTo(idx)}
            className={`relative h-16 w-24 shrink-0 border ${
              selectedIndex === idx ? 'border-[var(--km-red)]' : 'border-black/10'
            }`}
            aria-label={`Ver imagen ${idx + 1}`}
          >
            <Image src={src} alt="" fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
