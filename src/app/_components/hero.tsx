import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import FotoChurrasco from "../../../public/background.png.png";
import Image from "next/image";

export function Hero() {
    return (
      <section className="bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 lg:hidden">
          <Image
            src={FotoChurrasco}
            alt="foto do churrasco"
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
  
        <div className="container mx-auto pb-16 md:pb-0 relative z-10">
          <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Texto */}
            <div className="space-y-6 text-center lg:text-left pt-16 px-7 py-7">
              <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-bold">
                Churrasco de qualidade, feito com paixão!
              </h1>
              <p className="lg:text-lg">
                Especialistas em churrasco, trazemos tradição, sabor e qualidade
                para sua festa, garantindo uma experiência gastronômica única para
                você e seus convidados.
              </p>
              <div className="flex justify-center lg:justify-start">
                <a
                  href="#"
                  className="bg-green-500 px-5 py-3 rounded-md font-semibold flex items-center gap-2 text-white shadow-lg hover:bg-green-600 transition"
                >
                  <WhatsappLogo className="w-5 h-5" />
                  Contato via WhatsApp
                </a>
              </div>
            </div>
  
            {/* Imagem da metade direita em telas grandes */}
            <div className="hidden lg:block w-full h-full relative">
              <Image
                src={FotoChurrasco}
                alt="Foto Churrasco"
                className="object-cover"
                fill
                sizes="(max-width: 780px) 50vw, 100vw"
                quality={100}
                priority
              />
            </div>
          </article>
        </div>
      </section>
    );
  }
