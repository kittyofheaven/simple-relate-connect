'use client'

import React, { useState, useEffect } from 'react'

export default function DatePlanner() {

    const [AiResult, setAiResult] = useState('')
    const [loading, setLoading] = useState(false)

    async function getAiResult(place: string, time: string) {
        const cohere = require('cohere-ai');
        cohere.init('DWFkWRSVIoP2s9xHZE6i2JUjVRBKTaOAHx21u1PB'); // This is your trial API key
        (async () => {
            const response = await cohere.generate({
                model: '3ec3f15a-0b0a-479c-a479-bbaea8077153-ft',
                prompt: `make a summarized date plan at the vicinity of ${place} at ${time}`,
                max_tokens: 1564,
                temperature: 1,
                k: 0,
                stop_sequences: [],
                return_likelihoods: 'NONE'
            });
            setAiResult(`${response.body.generations[0].text}`);
        })();
    }

    // getAiResult()

    useEffect(() => {
        
    }, [AiResult])


    function handleForm(e: any) {
        e.preventDefault()
        getAiResult(e.target[0].value, e.target[1].value)
        setLoading(true)
    }


    return (
        <div>
            <h5 className='text-4xl text-center font-bold mt-6'>Put in your destination and time </h5>
            <form onSubmit={handleForm}>
                <div className=' flex gap-9 items-center justify-center mt-11'>
                    <input className='px-8 py-2 font-medium border border-b-4 border-r-4 border-black rounded-lg shadow-lg hover:shadow-sm' type="text" placeholder='Place ? e.g: Ancol' />
                    <input className='px-8 py-2 font-medium border border-b-4 border-r-4 border-black rounded-lg shadow-lg hover:shadow-sm' type="text" placeholder='Time ? e.g: 4PM' />
                    <button className='px-8 py-2 bg-pink-500 flex items-center p4 border-b-4 border-r-4 border-black rounded-md shadow-lg hover:bg-pink-200 ' type="submit">Create!</button>
                </div>
            </form>

            {loading === false ? (<></>) : (

                <div>
                    {AiResult === '' ? (<div className='text-2xl text-center mt-10'  >Loading ...</div>) : (
                        <div className='bg-white rounded-lg py-4 border-b-4 border-r-4 p-8 text-md text-center mt-8 mx-80'>
                            {AiResult}
                        </div>
                    )} 
                </div>

            )}
        </div>
    )
}
