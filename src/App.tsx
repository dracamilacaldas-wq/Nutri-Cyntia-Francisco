import { Navigation } from "@/components/sections/Navigation"
import { Hero } from "@/components/sections/Hero"
import { Authority } from "@/components/sections/Authority"
import { Services } from "@/components/sections/Services"
import { Differentials } from "@/components/sections/Differentials"
import { Locations } from "@/components/sections/Locations"
import { Footer } from "@/components/sections/Footer"

function App() {
  return (
    <div className="min-h-screen bg-background font-body selection:bg-[#D9F347] selection:text-black">
      <Navigation />
      <main>
        <Hero />
        <Authority />
        <Services />
        <Differentials />
        <Locations />
      </main>
      <Footer />
    </div>
  )
}

export default App
