import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const images = [
  {
    src: '/talk/Ideathon ADS.jpg',
    alt: 'Ideathon ADS e Point Media',
  },
  {
    src: '/talk/Ideathon GTI(1).jpg',
    alt: 'Ideathon GTI e Point Media',
  },
  {
    src: '/talk/Ideathon GTI(2).jpg',
    alt: 'Vencedores do Prêmio do Ideathon',
  },
  {
    src: '/talk/Ideathon GTI.jpg',
    alt: 'Ideathon da Point Media',
  },
  {
    src: '/talk/MI e AI - Batalha de Robôs_(1).jpg',
    alt: 'Mesa redonda: Batalha de Robôs como Instrumento de Curricularização da Extensão',
  },
  {
    src: '/talk/MI e AI - Batalha de Robôs_(2).jpg',
    alt: 'Mesa redonda: Batalha de Robôs como Instrumento de Curricularização da Extensão',
  },
  {
    src: '/talk/MI e AI - Batalha de Robôs_.jpg',
    alt: 'Mesa redonda: Batalha de Robôs como Instrumento de Curricularização da Extensão',
  },
  // {
  //   src: '/talk/Palestra GE - NOITE(1).png',
  //   alt: 'Palestra GE - NOITE',
  // },
  // {
  //   src: '/talk/Palestra GE - NOITE.png',
  //   alt: 'Palestra de Gestão Empresarial - Professor Geraldo Cesar Almeida',
  // },
  {
    src: '/talk/Palestra GE - TARDE.jpg',
    alt: 'Palestra GE - TARDE',
  },
  {
    src: '/talk/PFO(1).jpg',
    alt: 'Produção Fonográfica - Bate Papo com Egresso',
  },
  {
    src: '/talk/PFO.jpg',
    alt: 'Produção Fonográfica - Bate Papo com Egresso',
  },
  {
    src: '/talk/PG - Protagonismo Feminino(1).jpg',
    alt: 'Processos Gerenciais - Protagonismo Feminino',
  },
  {
    src: '/talk/PG - Protagonismo Feminino(2).jpg',
    alt: 'Processos Gerenciais - Protagonismo Feminino',
  },
  {
    src: '/talk/PG - Protagonismo Feminino.jpg',
    alt: 'Processos Gerenciais - Protagonismo Feminino',
  },
]


export function GalleryCarousel() {
  return (
    <section className="flex flex-col items-center justify-center w-full mx-auto bg-gray-100 py-8 px-4 md:px-8">
      <Carousel opts={{ loop: true }} className="w-full max-w-3xl mx-auto">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="w-full">
              <div className="relative w-full overflow-hidden rounded-xl shadow-md aspect-video">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
                <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-sm sm:text-base md:text-lg lg:text-2xl p-2 break-words whitespace-normal">
                  {image.alt}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
