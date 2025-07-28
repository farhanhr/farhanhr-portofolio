import DataImage from '../data.ts'

const Hero = () => {
  return (
    <section className='hero grid md:grid-cols-3 items-center pt-10 xl:gap-3 gap-6 grid-cols-2'>
        <div className='md:col-span-2'>
            <h1 className='text-lg sm:text-2xl md:text-3xl lg:text-5xl/tight font-bold mb-6'>Farhan Husyen Ramadhan</h1>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl/tight mb-6 opacity-90'>Student / Software Engineer
              </p>
              <a href="#" className='bg-zinc-700 rounded-2xl relative md:-bottom-8 md:p-4 p-3 md:text-md hover:bg-zinc-600'>Contact me</a>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className='w-[15rem] md:w-[18rem] md:ml-auto rounded-full' />
    </section>
  )
}

export default Hero