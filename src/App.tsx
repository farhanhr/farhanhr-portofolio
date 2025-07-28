import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Tools from "./components/Tools"

function App() {

  return (
    <>
    <div className="max-w-[768px] container mx-auto px-4 pb-18 text-white">
      <Navbar />
      <Hero />
      <Tools />
      <Project />
    </div>
    </>
  )
}

export default App
