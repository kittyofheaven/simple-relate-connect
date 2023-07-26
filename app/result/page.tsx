import Image from 'next/image'
import { tipsData } from '../../data/tipsData'


let categories:string = 'romanticizer'

export default function Home() {
  return (
    <main>

      <div className='text-center'>
            <div className='text-5xl my-5 '>
              <h5>Hello There, User !</h5>
            </div>
            <div className='my-4'>
              <p>You are categorized as, </p>
            </div>
      </div>

      {/* BAGIAN USER START */}
      <div className='bg-white rounded-xl shadow-lg mx-24 mb-8'>
          <div className='p-5 flex flex-col'>

            {/* TITLE START */}
            <h5 className='text-2xl font-medium mt-3 border-b-4 border-r-4 text-center bg-pink-300 text-pink-700 py-2 rounded-lg  hover:bg-pink-500 focus:scale-95 transition-all duration-200 ease-out'>The {categories.toUpperCase()}</h5>
            {/* TITLE END */}

            {/* DESCRIPTION START */}
            <p className='text-lg mt-3'>
              {categories ? tipsData['romanticizer'].description : 'Loading...'}
            </p>

            <ol type='1'>
              {categories ? tipsData['romanticizer'].tips.map((tip) => {
                return (
                  <li key={tip} className='text-lg mt-3'>● {tip}</li>  //! ini ada emot symbol ● barangkali klo lempar error ini kemungkinan bisa jadi penyebab
                )
              }) : 'Loading...'}
            </ol>
            {/* DESCRIPTION END */}


          </div>
      </div>

    </main>
  )
}
