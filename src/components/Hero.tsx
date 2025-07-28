import DataImage from '../data.ts'

const Hero = () => {
  return (
    <section className='hero grid md:grid-cols-3 items-center pt-10 xl:gap-3 gap-6 grid-cols-2'>
        <div className='md:col-span-2'>
            <h1 className='text-lg sm:text-2xl md:text-3xl lg:text-5xl/tight font-bold mb-2 sm:mb-6'>Farhan Husyen Ramadhan</h1>
              <p className='text-sm/tight sm:text-lg md:text-xl lg:text-2xl/tight mb-6 opacity-90'>Student / Software Engineer
              </p>
              <a href="#" className='bg-gray-800/80 border border-white rounded-xl relative md:-bottom-8 md:p-4 sm:p-3 p-2 text-base hover:bg-gray-700 hover:text-blue-400'>Contact me</a>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className='w-[15rem] md:w-[18rem] md:ml-auto rounded-full' />
    </section>
  )
}

export default Hero