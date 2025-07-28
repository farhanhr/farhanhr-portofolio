import DataImage from '../data.ts'

const Hero = () => {
  return (
    <div className='hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1'>
        <div>
            <h1 className='text-5xl/tight font-bold mb-6'>Farhan Husyen Ramadhan</h1>
              <p className='text-base/loose mb-6 opacity-50'>A student and software development enthusiast. I'm familiar with android development and web development. I'm well-versed with Kotlin for android development and JavaScript for web development. I love exploring technology and always like to try a new one.
              </p>
              <div className='flex items-center gap-4'>
          <a href="#" className='bg-violet-700 rounded-2xl p-4 hover:bg-violet-600'>
            <i className="ri-download-line ri-lg"></i> Download CV</a>
                <a href="#" className='bg-zinc-700 rounded-2xl p-4 hover:bg-zinc-600'>Contact me</a>
              </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className='w-[500px] ml-auto' />
    </div>
  )
}

export default Hero