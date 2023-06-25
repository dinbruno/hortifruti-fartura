import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lojas from "@/components/Lojas";
import Ofertas from "@/components/Ofertas";
import Receipts from "@/components/Receipts";
import Section from "@/components/Section";
import SectionGrid from "@/components/SectionGrid";
import dynamic from "next/dynamic";

const Banner = dynamic(() => import("@/components/Banner"))


export default function Home() {
  return (
    <div className="h-[300rem]">
      
    <Header/>
    <Banner/>
    <Section/>
    <SectionGrid/>
    <Receipts/>
    <Lojas/>
    <Ofertas/>
    <Footer/>

    </div>
  )
}
