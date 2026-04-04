import React from 'react'
import ATMCard from '../components/ATMCard';

const Home = () => {
    return (
        <div className='p-5 flex gap-6 px-5'>
            <div className='flex-2 bg-gray-200 rounded-xl p-6'>
                <div className="grid grid-cols-2 gap-4 mt-5">
                <ATMCard className="bg-gradient-to-r from-orange-500 to-orange-700 text-white" status="NPM BANK" accountNumber="1234 5678 9010" number="9546" expiry="12/26" cvv="800"></ATMCard>
                <ATMCard className="bg-gradient-to-r from-gray-900 to-gray-700 text-white" status="PIN BANK" accountNumber="2222 3333 4444" number="1234" expiry="02/27" cvv="123"></ATMCard>
                <ATMCard className="bg-black text-yellow-500" status="DOR BANK" accountNumber="3951 4456 5205" number="5678" expiry="08/27" cvv="456"></ATMCard>
                <ATMCard className="bg-gradient-to-r from-blue-800 to-purple-900 text-white" status="ABC BANK" accountNumber="9542 7431 8562" number="2468" expiry="04/28" cvv="789"></ATMCard>
                </div>
            </div>

            <div className="flex-3 flex flex-col gap-4">
                {/* 3 CARDS ON TOP */}
                <div className="grid grid-cols-3 gap-4">
                    <p>hi</p>
                </div>
            </div>
        </div>
    );
}

export default Home