import Image from "next/image";
import FotoRafa from "../../../public/file.png";
import { Check } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Certificado from "../../../public/certificado.png";
import Carnes from "../../../public/cortes.png";
export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 mt-10">
            <h2 className="text-5xl font-bold">Sobre</h2>
            <p className="text-2xl">
              Sou Rafael, churrasqueiro desde 2010, e faço cada churrasco com
              dedicação e profissionalismo. Prezo pela qualidade e pelo sabor,
              garantindo uma experiência única para cada cliente. Para mim,
              churrasco é mais do que comida, é um momento especial para
              compartilhar!
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" /> No mercado desde 2010
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" /> Certificado pela Ao Gosto
                Carnes
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" /> Qualidade e satisfação é
                minha maior prioridade
              </li>
            </ul>
            <a
              href="https://wa.me/553184753764?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20or%C3%A7amento%20de%20churrasco"
              className="bg-green-500 px-5 py-3 rounded-md font-semibold flex items-center justify-center gap-2 w-fit text-white shadow-lg hover:bg-green-600 transition"
            >
              <WhatsappLogo className="w-5 h-5 text-white" />
              Contato via WhatsApp
            </a>
          </div>
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden ">
            {/* Primeiro tópico */}

            <Image
              src={FotoRafa}
              alt="Foto Rafa"
              fill
              quality={100}
              priority
              className="object-contain hover:scale-110 duration-300"
            />
          </div>
        </div>
      </div>

      {/* Segundo Tópico */}

      <div className="bg-[#FDF6ec] py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 mt-10">
              <h2 className="text-5xl font-bold">
                Certificado pelo Ao Gosto Carnes
              </h2>
              <p className="text-2xl">
                Em 2015 participei do Workshop Churrasco Ao gosto Eventos,
                ministrado pelo chef Rodrigo Prime. Expandi meu conecimento para
                entregar excelência e profissionalismo no preparo de carnes.
              </p>
            </div>

            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={Certificado}
                alt="Foto do certificado"
                fill
                quality={100}
                priority
                className="object-contain hover:scale-110 duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Terceiro Tópico */}

      <div className="bg-[#FDF6ec] py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 mt-10">
              <h2 className="text-5xl font-bold">
                Qualidade e satisfação é minha maior prioridade
              </h2>
              <p className="text-2xl">
                Faço questão de trabalhar com os melhores cortes, afim de trazer
                o melhor sabor e qualidado para o evento
              </p>
            </div>
          </div>
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
            <Image
              src={Carnes}
              alt="Foto do certificado"
              fill
              quality={100}
              priority
              className="object-contain hover:scale-110 duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
