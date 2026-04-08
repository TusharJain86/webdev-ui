import React, { useState } from 'react'
import Card from '../components/Card';


const Hero = () => {

    const [balance, setbalance] = useState(10000);

    const increaseBalance= () =>{
        setbalance(balance+1000);
    };

    const decreaseBalance=() =>{
        setbalance(balance-1000);
    }

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
                            <p className="text-4xl font-light">Total Balance</p>
                            <div className="flex justify-between items-center mt-2">
                            
                            <p className="text-3xl font-bold">
                                ${balance.toLocaleString()}.00
                            </p>
                            <div className='flex gap-3 mt-3'>
                                <button onClick={increaseBalance} className='bg-zinc-900 text-white shadow font-bold px-3 py-1 rounded-lg cursor-pointer hover:scale-102'>
                                    +
                                </button>
                                <button onClick={decreaseBalance} className='bg-white text-black shadow font-bold px-3 py-1 rounded-lg cursor-pointer hover:scale-102'>
                                    -
                                </button>
                            </div>
                            </div>
                            <p className="text-2xl font-light">
                                <span className="text-green-500 font-bold">+5% </span>
                                from last month
                            </p>

                            <div className="grid grid-cols-3 mt-5 gap-4">
                                <div className='bg-gray-900 rounded-full mt-3 p-4 shadow text-center cursor-pointer hover:scale-105 hover:bg-black transition'>
                                    <span className='text-white font-bold text-xl'>Transfer</span>
                                </div>

                                <div className='bg-white text-black rounded-full mt-3 p-4 shadow text-center cursor-pointer hover:scale-105 hover:bg-orange-500 hover:text-white transition'>
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
                    <div className="grid grid-cols-3 gap-4 mt-5">

                        <Card title="$ USD" value="$8,420">
                            <p className="text-green-600 text-center bg-green-300 rounded-full font-bold">Active</p>
                        </Card>

                        <Card title="€ EUR" value="$3,120">
                            <p className="text-red-700 text-center bg-red-400 rounded-full font-bold">Inactive</p>
                        </Card>

                        <Card title="£ GBP" value="$15,000">
                            <p className="text-green-600 text-center bg-green-300 rounded-full font-bold">Active</p>
                        </Card>

                    </div>
                </div>

                <div className="flex-3 flex flex-col gap-4">

                    {/* 3 CARDS ON TOP */}
                    <div className="grid grid-cols-3 gap-4">
                        <Card title="Income" value="$8,420" className="hover:scale-105">
                            <p className="text-green-600 font-bold">+7% This month</p>
                        </Card>
                        <Card title="Expenses" value="$3,120" className="hover:scale-105">
                            <p className="text-red-600 font-bold">-5% This month</p>
                        </Card>
                        <Card title="Savings" value="$15,000" className="hover:scale-105">
                            <p className="text-green-600 font-bold">+8% This month</p>
                        </Card>

                    </div>

                    {/* CONTAINER BELOW */}
                    <div className="bg-white rounded-xl p-4 shadow flex justify-between items-start">
                        <div className='flex flex-col'>
                            <h2 className="font-bold">Total Income</h2>
                            <p>View your income in a certain period of time</p>
                            <div className='mt-4 flex justify-center'>
                                <img src='/public/share.png' alt="chart" className='w-full object-cover' />
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <div className="bg-orange-500 text-white px-3 py-1 rounded-lg text-sm cursor-pointer">
                                Profit
                            </div>

                            <div className="bg-gray-200 text-black px-3 py-1 rounded-lg text-sm cursor-pointer">
                                Loss
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            

        </div>
    );
}

export default Hero