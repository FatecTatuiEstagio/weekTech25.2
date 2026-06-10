import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  {
    src: "/talk/Ideathon ADS.jpg",
    alt: "Ideathon ADS e Point Media",
  },
  {
    src: "/talk/Ideathon GTI(1).jpg",
    alt: "Ideathon GTI e Point Media",
  },
  {
    src: "/talk/Ideathon GTI(2).jpg",
    alt: "Vencedores do Prêmio do Ideathon",
  },
  {
    src: "/talk/Ideathon GTI.jpg",
    alt: "Ideathon da Point Media",
  },
  {
    src: "/talk/MI e AI - Batalha de Robôs_(1).jpg",
    alt: "Mesa redonda: Batalha de Robôs como Instrumento de Curricularização da Extensão",
  },
  {
    src: "/talk/MI e AI - Batalha de Robôs_(2).jpg",
    alt: "Mesa redonda: Batalha de Robôs como Instrumento de Curricularização da Extensão",
  },
  {
    src: "/talk/MI e AI - Batalha de Robôs_.jpg",
    alt: "Mesa redonda: Batalha de Robôs como Instrumento de Curricularização da Extensão",
  },
  {
    src: "/talk/Palestra GE - TARDE.jpg",
    alt: "Palestra GE - TARDE",
  },
  {
    src: "/talk/PFO(1).jpg",
    alt: "Produção Fonográfica - Bate Papo com Egresso",
  },
  {
    src: "/talk/PFO.jpg",
    alt: "Produção Fonográfica - Bate Papo com Egresso",
  },
  {
    src: "/talk/PG - Protagonismo Feminino(1).jpg",
    alt: "Processos Gerenciais - Protagonismo Feminino",
  },
  {
    src: "/talk/PG - Protagonismo Feminino(2).jpg",
    alt: "Processos Gerenciais - Protagonismo Feminino",
  },
  {
    src: "/talk/PG - Protagonismo Feminino.jpg",
    alt: "Processos Gerenciais - Protagonismo Feminino",
  },
];

export function GalleryCarousel() {
  return (
    <section className="bg-neutral-50 py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-[#b20000]">
            Galeria
          </span>

          <h2 className="text-4xl font-extrabold text-neutral-900 md:text-5xl">
            Momentos da{" "}
            <span className="text-[#b20000]">Semana de Tecnologia</span>
          </h2>

          <p className="mt-4 text-lg text-neutral-600">
            Confira alguns registros das edições anteriores do evento.
          </p>
        </div>

        <Carousel opts={{ loop: true }} className="mx-auto w-full max-w-3xl">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-video overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-xl">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
                    <p className="text-sm font-medium text-white md:text-lg">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-3 border-none bg-white text-[#b20000] shadow-lg hover:bg-[#b20000] hover:text-white" />

          <CarouselNext className="right-3 border-none bg-white text-[#b20000] shadow-lg hover:bg-[#b20000] hover:text-white" />
        </Carousel>
      </div>
    </section>
  );
}