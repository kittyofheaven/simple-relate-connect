import Link from 'next/link'


let categories:string = 'romanticizer'

export default function Home() {
  return (
    <main>

      <div className=' flex min-h-screen min-w-full container items-center justify-between -mt-14'>
          {/* //GRID START */}
          <div className='w-fit grid grid-cols-4 gap-9 mx-24 '>


            {/* //CARD 1 */}
            <div className='bg-white rounded-xl shadow-lg'>
              <div className='p-5 flex flex-col'>
                <div className='rounded-xl overflow-hidden border-black border-b-4 border-r-4'>
                  <img src='https://commit30.com/cdn/shop/products/WeeklyDayPlannerInside_1280x.jpg?v=1688748909' alt='' />
                </div>
                <h5 className='text-2xl font-medium mt-3 '>Auto Date Planner</h5>
                <p className='text-md mt-3'>Ask an AI to plan a date for you, since you're too busy thinking about everything else! You may be busy but a date is always necessary if you still want to have a relationship. </p>
                <a href='/dateplanner' className='border-b-4 border-r-4 text-center bg-pink-300 text-pink-700 py-2 rounded-lg font-semibold mt-6 hover:bg-pink-500 focus:scale-95 transition-all duration-200 ease-out'>Explore</a>
              </div>
            </div>

            {/* //CARD 3 */}
            <div className='bg-white rounded-xl shadow-lg'>
              <div className='p-5 flex flex-col'>
                <div className='rounded-xl overflow-hidden border-black border-b-4 border-r-4'>
                  <img src='https://hips.hearstapps.com/hmg-prod/images/img-20200415-110729-1586974804.jpg?crop=0.752xw:1.00xh;0.119xw,0&resize=1200:*' alt='' />
                </div>
                <h5 className='text-2xl font-medium mt-3 '>His/Her Journal</h5>
                <p className='text-md mt-3'> Sometimes it's hard being honest, but this time it doesn't have to. The journal allows you to write about how your relationship has been going & you could read it again and reflect on it. </p>
                <a href='/journal' className='border-b-4 border-r-4 text-center bg-pink-300 text-pink-700 py-2 rounded-lg font-semibold mt-6 hover:bg-pink-500 focus:scale-95 transition-all duration-200 ease-out'>Explore</a>
              </div>
            </div>

            {/* //CARD 4 */}
          
          </div>
          {/* //GRID END */}
        </div>


        <div className='flex flex-col items-center justify-center'>
          <Link href='/quiz' className=' border-b-4 border-r-4 -mt-6 mb-7 text-center bg-pink-300 text-pink-700 py-4 px-7 rounded-lg font-semibold  hover:bg-pink-500 focus:scale-95 transition-all duration-200 ease-out'>Retake the tendency Quiz ✨</Link>
        </div>
      

    </main>
  )
}
