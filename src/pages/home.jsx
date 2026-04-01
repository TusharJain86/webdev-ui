import React from 'react'

const Home = () => {
  return (
    <div>
        {/*top most section */}
        <div className='p-6'>
            <h1 className='text-2xl font-bold'>
                Hi, Good Morning!
            </h1>
        </div>
        
        {/*cards section */}
        <div className="flex gap-6 px-5">

              {/* LEFT BOX */}
              <div className="flex-2 bg-gray-200 rounded-xl p-6">

                  {/* TOP AREA */}
                  <div className="flex justify-between items-start">

                      {/* LEFT TEXT */}
                      <div>
                          <p className="text-2xl font-light">Total Balance</p>
                          <p className="text-3xl font-bold">$62,789.00</p>
                          <p className="text-2xl font-light">
                              <span className="text-green-500 font-bold">+5% </span>
                              from last month
                          </p>

                          <div className="grid grid-cols-3 mt-5 gap-4">
                                <div className='bg-gray-900 rounded-full mt-3 p-4 shadow text-center cursor-pointer hover:bg-black transition'>
                                    <span className='text-white font-bold text-xl'>Transfer</span>
                                </div>

                                <div className='bg-white text-black rounded-full mt-3 p-4 shadow text-center cursor-pointer hover:bg-orange-500 hover:text-white transition'>
                                    <span className='font-bold text-xl'> ←Request</span>
                                </div>
                          </div>
                      </div>

                      {/* SMALL TOP RIGHT CONTAINER */}
                      <div className="bg-white px-3 py-1 font-black rounded-lg text-sm shadow cursor-pointer hover:bg-orange-500 hover:text-white transition">
                          <span className='font-bold'>USD ▼</span>
                      </div>
                  </div>

                  {/* DIVIDER */}
                  <div className="border-t border-gray-300 my-6"></div>

                  <div><p className="text-2xl font-light"><span className='font-bold'>Wallets |</span> Total 6 wallets</p></div>

                  {/* 3 CARDS */}
                  <div className="grid grid-cols-3 mt-5 gap-4">

                      <div className="bg-white rounded-lg p-4 shadow">
                          Card 1
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow">
                          Card 2
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow">
                          Card 3
                      </div>
                  </div>
              </div>

            {/* RIGHT BOX */}
            <div className="flex-1 bg-zinc-800 rounded-xl p-6">
                Right Content
            </div>
        </div>

    </div>
  );
}

export default Home