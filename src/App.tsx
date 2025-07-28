import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <div className="max-w-[768px] container mx-auto px-4 text-white">
    <Navbar />
    <Hero />
    </div>
    </>
  )
}

export default App
