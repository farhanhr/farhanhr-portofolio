import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Tools from "./components/Tools"

function App() {

  return (
    <>
    <div className="max-w-[768px] container mx-auto px-4 pb-18g text-white">
      <Navbar />
      <Hero />
      <Tools />
    </div>
    </>
  )
}

export default App
