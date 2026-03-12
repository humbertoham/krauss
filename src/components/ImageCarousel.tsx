'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  '/images/anexo/1.jpg',
  '/images/anexo/2.jpg',
  '/images/anexo/3.jpg',
  '/images/anexo/4.jpg',
  '/images/anexo/5.jpg',
  '/images/anexo/6.jpg',
  '/images/anexo/7.jpg',
  '/images/anexo/8.jpg',
  '/images/anexo/9.jpg',
]

export default function ImageCarousel() {

  const { t } = useTranslation('carousel')

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start'
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const items = t('items', { returnObjects: true }) as { title: string }[]

  return (
    <section className="py-20 bg-[var(--km-white)]">

      <div className="container-km">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">

          <h2 className="title-secondary">
            {t('title')}
          </h2>

          {/* BOTONES */}
          <div className="flex gap-3">

            <button
              onClick={scrollPrev}
              className="
              w-10 h-10
              flex items-center justify-center
              border border-[var(--km-gray-dark)]
              text-[var(--km-gray-dark)]
              transition
              hover:bg-[var(--km-red)]
              hover:text-white
              "
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={scrollNext}
              className="
              w-10 h-10
              flex items-center justify-center
              border border-[var(--km-gray-dark)]
              text-[var(--km-gray-dark)]
              transition
              hover:bg-[var(--km-red)]
              hover:text-white
              "
            >
              <ChevronRight size={20} />
            </button>

          </div>

        </div>

        {/* CAROUSEL */}
        <div className="overflow-hidden" ref={emblaRef}>

          <div className="flex">

            {items.map((item, index) => (
              <div
                key={index}
                className="
                flex-[0_0_80%]
                sm:flex-[0_0_50%]
                lg:flex-[0_0_25%]
                px-4
                "
              >

                <div className="flex flex-col items-center text-center">

                  {/* IMAGEN */}
                  <div className="relative w-full aspect-square overflow-hidden">

                    <Image
                      src={images[index]}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />

                  </div>

                  {/* TITULO */}
                  <h3 className="mt-4 font-semibold text-[var(--km-gray-dark)]">
                    {item.title}
                  </h3>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  )
}