import Header from "@/app/(landing)/_components/header";
import Hero from "@/app/(landing)/_components/hero";
import Features from "@/app/(landing)/_components/features";
import Work from "@/app/(landing)/_components/work";
import Testimonials from "@/app/(landing)/_components/testimonials";
import CTA from "@/app/(landing)/_components/cta";
import Footer from "@/app/footer";

export default function ElysiumLanding() {
  return (
      <div className="min-h-screen bg-background">
        <Header/>

        {/* Hero Section */}
        <Hero/>

        {/* Features Section */}
        <Features/>

        {/* How It Works */}
        <Work/>

        {/* Testimonials */}
        <Testimonials/>

        {/* CTA Section */}
        <CTA/>
      </div>
  )
}
