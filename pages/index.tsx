import Container from '../components/container'
import Image from 'next/image'
import { useRouter } from 'next/router'

function HomePage() {
  const router = useRouter();

  const downloadResume = () => {
    // get origin url 
    const origin =
        typeof window !== 'undefined' && window.location.origin
            ? window.location.origin
            : '';

    const URL = `${origin}/resume/Aaditya_Chapagain_Resume.pdf`
    if (typeof window != "undefined"){
      window.location.href = URL
    }

    console.log(URL)
  }

  return (
    <>
      <div className='container max-w-4xl m-auto '>
        <div className="space-y-6">
          <div className='p-2'>
            {' '}
          </div>
          <div className='flex flex-col md:flex-row  gap-8 content-center items-center '>
            {/* profile image layout here */}
            <div className=' shrink md:w-2/5 p-1 '>
              <div className='rounded-full shadow shadow-gray-200 border  bg-white '>
                <div className='rounded-full shadow-sm shadow-stone-400 border-none p-5'>
                  <Image
                    className='rounded-full border '
                    alt='Profile Image'
                    src="/profile_image.jpg"
                    width={400}
                    height={400}
                  ></Image>
                </div>
              </div>
            </div>
            <div className='md:w-1/2 md:ml-4 mt-3 items-center content-center '>
              <div className='text-4xl font-semibold '>Aaditya Chapagain</div>
              <div className='text-zinc-400 py-4 font-mono'>
                ML Engineer/Researcher, Full Stack Developer
              </div>
              <p className='text-stone-600 text-sm tracking-wide font-serif'>
              Hi there &#128075; , I am Machine Learning Engineer currently studying in <b>University of Wollongong, Computer Science </b>
                and working on <b>Cloud Shuttle</b> as Machine Learning Engineer, a community-focused data cloud based consulting company.
              </p>
              <div className='py-3 flex flex-row mt-3 text-sm font-semibold '>
                <button
                  className='border-emerald-500 border-2 rounded-full py-2 px-7 shadow-md hover:bg-emerald-500 hover:text-white '
                  onClick={(e) => {
                    e.preventDefault();
                    // router.push('/contact')
                    downloadResume()
                  }}
                >Download CV</button>
                  <button
                  className='ml-2 border-zinc-200 border-2 rounded-full py-2 px-9 shadow-md hover:bg-zinc-200 '
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/contact')
                  }}
                >Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
