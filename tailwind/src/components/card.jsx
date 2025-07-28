import React from 'react'
function Card({chanel,btntext="default"}) {
    
    return (
        <div className=" w-72 flex flex-col rounded-xl glass  min-h-72 mt-3 ">
            <div>
                <div className="text-center">
                    <h1 className="bg-green-500 text-black text-center mb-5">{chanel}</h1>
                    <button className="bg-blue-600 text-black px-4 py-2 rounded hover:bg-blue-700">{btntext}
                    </button>
                </div>
                <img
                    src="https://media4.giphy.com/media/1gbqIc1fK8QgR3bHL7/giphy.gif?cid=790b7611a2f696d51a46ce892e420e77735707466a4abd3b&rid=giphy.gif&ct=g"
                    alt="test"
                    width="300"
                    height="300"
                    className="rounded-t-xl w-full"
                />


            </div>
        </div>

    )
}
export default Card