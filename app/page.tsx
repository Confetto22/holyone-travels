import Hero from "@/components/homepage/hero";
import Header from "@/components/common/header";
import Trendy from "@/components/homepage/trendy";
import About from "@/components/homepage/about";
import Activities from "@/components/homepage/activities";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Trendy />
      <About />
      <Activities />
    </main>
  );
}
