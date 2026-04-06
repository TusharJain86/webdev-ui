import React from 'react'
import ATMCard from '../components/ATMCard';
import Activity from '../components/Activity';

const Home = () => {
    return (
        <div className='p-5 flex gap-6 px-5'>
            <div className='w-153 bg-gray-200 rounded-xl p-6'>
                <div className="grid grid-cols-2 gap-4 mt-5">
                    <ATMCard className="bg-gradient-to-r from-orange-500 to-orange-700 text-white" status="NPM BANK" accountNumber="**** **** 9010" number="9546" expiry="12/26" cvv="800"></ATMCard>
                    <ATMCard className="bg-gradient-to-r from-gray-900 to-gray-700 text-white" status="PIN BANK" accountNumber="**** **** 4444" number="1234" expiry="02/27" cvv="123"></ATMCard>
                    <ATMCard className="bg-black text-yellow-500" status="DOR BANK" accountNumber="**** **** 5205" number="5678" expiry="08/27" cvv="456"></ATMCard>
                    <ATMCard className="bg-gradient-to-r from-blue-800 to-purple-900 text-white" status="ABC BANK" accountNumber="**** **** 8562" number="2468" expiry="04/28" cvv="789"></ATMCard>
                </div>
            </div>

            {/* CONTAINER BELOW */}
            <div className="w-211 h-45 bg-white rounded-xl p-4 shadow ">
                <div className='flex flex-col'>
                    <h2 className="font-bold text-3xl">MONTHLY SPENDING LIMIT</h2>
                    <p className='mt-2 text-2xl'><span className='font-bold text-red-500'>$1500.00</span> spent out of <span className='font-bold text-green-500'>$8000.00</span></p>
                    <div className='bg-gray-200 shadow-md mt-4 rounded-full h-10 overflow-hidden'>
                        <div className="bg-orange-400 h-10 w-50 rounded-full flex items-center justify-center">
                            <p className="font-light text-orange-400 cursor-pointer hover:text-yellow-400 transition">Spent</p>
                        </div>
                    </div>
                </div>

                {/* DIVIDER */}
                    <div className="border-t border-gray-300 mt-20 my-6"></div>

                    <div className="flex gap-2 justify-end">
                        <div className="bg-gray-200 outline outline-2 outline-gray-300 text-white px-3 py-1 rounded-lg text-sm cursor-pointer">
                                🔍
                                <input type="text" placeholder='Search transactions' className='bg-transparent focus:outline-none ml-2' />
                        </div>

                        <div className="bg-gray-200 text-black px-3 py-1 rounded-lg font-medium outline outline-2 outline-gray-300 text-sm cursor-pointer">
                                Filter:
                        </div>
                    </div>

                <div className='flex flex-col mt-10'>
                    <h2 className="font-bold text-3xl">Recent Activities</h2>
                    <Activity title="Payment Received" amount="$1,200.00" user="John Doe" time="2 hours ago" type="income"></Activity>
                    <Activity title="Electricity Bill" amount="$80.00" user="Utility Company" time="5 hours ago" type="expense"></Activity>
                    <Activity title="Salary Received" amount="$5,000.00" user="Monthly salary" time="1 day ago" type="income"></Activity>
                    <Activity title="Grocery Shopping" amount="$150.00" user="Walmart" time="1 day ago" type="expense"></Activity>
                </div>

                
            </div>


        </div>
    );
}

export default Home