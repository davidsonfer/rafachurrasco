import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Services } from "./_components/services";
import { About } from "./_components/sobre";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Services/>
      <Footer/>
    </main>
  );
}