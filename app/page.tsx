import Link from 'next/link'
import Image from 'next/image'


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
                  <Image src='/autoDatePlanner.jpeg' alt='' width={400} height={400} />
                </div>
                <h5 className='text-2xl font-medium mt-3 '>Auto Date Planner</h5>
                <p className='text-md mt-3'>Ask an AI to plan a date for you, since you're too busy thinking about everything else! You may be busy but a date is always necessary if you still want to have a relationship. </p>
                <Link href='/dateplanner' className='border-b-4 border-r-4 text-center bg-pink-300 text-pink-700 py-2 rounded-lg font-semibold mt-6 hover:bg-pink-500 focus:scale-95 transition-all duration-200 ease-out'>Try it!</Link>
              </div>
            </div>

            {/* //CARD 2 */}
            <div className='bg-white rounded-xl shadow-lg'>
              <div className='p-5 flex flex-col'>
                <div className='rounded-xl overflow-hidden border-black border-b-4 border-r-4'>
                  <Image src='/tendencyQuiz.jpg' alt='' width={400} height={400} />
                </div>
                <h5 className='text-2xl font-medium mt-3 '>Tendency Quiz</h5>
                <p className='text-md mt-3'> Sometimes it's hard being honest, but this time it doesn't have to. The journal allows you to write about how your relationship has been going & you could read it again and reflect on it. </p>
                <Link href='/journal' className='border-b-4 border-r-4 text-center bg-pink-300 text-pink-700 py-2 rounded-lg font-semibold mt-6 hover:bg-pink-500 focus:scale-95 transition-all duration-200 ease-out'>Take the Tendency Quiz</Link>
              </div>
            </div>
          
          </div>
          {/* //GRID END */}
        </div>

      

      <footer>
        <div className='flex justify-center items-centerh-24'>Made with ❤️ by Relate Connect team</div>
      </footer>
    </main>
  )
}
