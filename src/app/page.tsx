import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyJovive from "@/components/WhyJovive";
import Providers from "@/components/Providers";
import BookingCalendar from "@/components/BookingCalendar";
import TmsSpotlight from "@/components/TmsSpotlight";
import Locations from "@/components/Locations";
import TrustBar from "@/components/TrustBar";
import FAQ from "@/components/FAQ";
import InquiryForm from "@/components/InquiryForm";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyJovive />
      <TmsSpotlight />
      <Locations />
      <TrustBar />
      <Providers />
      <BookingCalendar />
      <FAQ />
      <InquiryForm />
      <FinalCTA />
    </>
  );
}
