import DataImage from '../data.ts'

const Hero = () => {
  return (
    <>
    <section className='profile grid md:grid-cols-3 items-stretch pt-10 xl:gap-3 gap-6 grid-cols-2'>
        <div className='md:col-span-2 pt-4 flex flex-col h-full'>
            <h1 className='text-xl sm:text-2xl md:text-3xl/tight mt-auto sm:mt-2 font-bold mb-2 sm:mb-3'>Farhan Husyen Ramadhan</h1>
              <p className='text-sm/tight sm:text-lg md:text-xl/tight opacity-90'>Software Engineering & Data Enthusiast
              </p>
              <div className='my-auto sm:mb-2 sm:mt-auto bg-gray-800/80 border border-white rounded-xl w-max hover:bg-gray-700 hover:text-blue-400 transition-all duration-300 transform hover:scale-105 ease-in-out'>
                <a href="https://linkedin.com/in/farhanhram" target='_blank' className='text-base block px-4 py-2'>Contact me</a>
              </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className='w-[15rem] md:w-[18rem] md:ml-auto self-start rounded-full' />
    </section>

    {/* about */}
    <section className='about mt-6 py-2'>
      <h2 className='font-bold text-xl/snug'>About</h2>
      <p className='font-normal text-sm mt-2'>
        Hello there, I'm Farhan Husyen Ramadhan. Software development enthusiast and data enthusiast. I'm familiar with data analysis and web development. I'm well-versed with python and javascript. I love exploring technology and always like to try a new one.
      </p>
    </section>
    </>
  )
}

export default Hero