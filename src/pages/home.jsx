import React from 'react'
import ATMCard from '../components/ATMCard';

const Home = () => {
    return (
        <div className='p-5'>
            <ATMCard>
                <p className="text-green-600 text-center bg-green-300 rounded-full font-bold">Active</p>
            </ATMCard>
        </div>
    );
}

export default Home