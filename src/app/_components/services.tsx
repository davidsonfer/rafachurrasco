"use client";

import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  ChefHat,
  Beef,
  CookingPot,
  Clock,
} from "lucide-react";

import { WhatsappLogo } from "@phosphor-icons/react"; 

const services = [
  {
    title: "Churrasco",
    description:
      "Serviço de churrasco completo, com preparo das carnes no local e atendimento personalizado para o seu evento. Ideal para reunir família e amigos com qualidade e sabor.",
    duration: "5h",
    price: "$80",
    icon: <ChefHat />,
    link: "https://wa.me/553184753764?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20or%C3%A7amento%20de%20churrasco.",
    linkText: "Solicitar orçamento",
  },
  {
    title: "Churrasco + Garçom",
    description:
      "Além do preparo das carnes, este serviço inclui o apoio de um garçom para auxiliar no atendimento, garantindo mais conforto, praticidade e organização para você e seus convidados.",
    duration: "5h",
    price: "$120",
    icon: <Beef />,
    link: "https://wa.me/553184753764?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20or%C3%A7amento%20de%20churrasco%20com%20gar%C3%A7om.",
    linkText: "Solicitar orçamento",
  },
  {
    title: "Churrasco + Acompanhamentos",
    description:
      "O churrasco é servido com acompanhamentos selecionados, preparados para harmonizar com as carnes e oferecer uma experiência gastronômica completa em seu almoço ou jantar.",
    duration: "5h",
    price: "$150",
    icon: <CookingPot />,
    link: "https://wa.me/553184753764?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20or%C3%A7amento%20de%20churrasco%20com%20acompanhamentos.",
    linkText: "Solicitar orçamento",
  },
];

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  });

  function scrolPrev(){
    emblaApi?.scrollPrev()
  }

  function scrolNext(){
    emblaApi?.scrollNext()
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-12">Serviços oferecidos</h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
                >
                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex-1 flex items-start justify-between">
                      <div className="flex gap-3">
                        <span className="text-3xl">{item.icon}</span>
                        <div>
                          <h3 className="font-bold text-xl mb-1 my-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-sm select-none">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-5 h-5" />
                        <span>{item.duration}</span>
                      </div>

                      <div className="flex justify-center lg:justify-start">
                        <a
                          href={`${services[index].link}`}
                          className="hover:bg-green-500 px-5 py-3 rounded-md font-semibold flex items-center gap-2 text-white shadow-lg transition"
                        >
                          <WhatsappLogo className="w-5 h-5" />
                          Contato via WhatsApp
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

            <button className=" bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/21/2 -translate-x-1/2 top-1/2 z-10" onClick={scrolPrev}>
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            <button className=" bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/21/2 -translate-x-1/2 top-1/2 z-10" onClick={scrolNext}>
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

        </div>
      </div>
    </section>
  );
}
