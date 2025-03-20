'use client'

import Link from 'next/link';
import { User } from '../../interfaces';

export default function ProfileMenu() {
    const handleLogout = () => {
        alert('Logged out');
    };

    const mockUser: User = {
        _id: '12345',
        name: 'K.Meow Meow',
        tel: '123-456-7890',
        email: 'meow@example.com',
        role: 'user',
        createdAt: new Date(),
        __v: 0
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <img 
            src='/img/meowprofile.png'
            alt='Profile'
            className='w-36 h-36 rounded-full shadow-lg'
            />
            <div className='p-5 text-2xl font-bold text-white'>
                {mockUser.name}
            </div>
            <Link href="/user/profile" className='text-white hover:underline'>
                แก้ไขข้อมูลส่วนตัว &gt;
            </Link>
            <button
            onClick={handleLogout}
            className='mt-20 px-4 py-2 bg-white text-red-600 font-bold rounded-lg hover:bg-red-700 hover:text-white shadow-lg'
            >
                Log Out
            </button>
        </div>
    );
}