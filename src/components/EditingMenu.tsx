"use client"

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockIcon from '@mui/icons-material/Lock';
import { User } from '../../interfaces';
import { useState } from 'react';

export default function EditingMenu() {

    const mockData : User = {
        _id: '12345',
        name: 'K.Meow Meow',
        tel: '123-456-7890',
        email: 'meow@example.com',
        role: 'user',
        createdAt: new Date(),
        __v: 0
    }
    
    const [userData, setUserData] = useState<User>(mockData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handCancle = () => {
        setUserData(mockData);
        alert('Cancle');
    };

    const handleSave = () => {
        alert('Changes saved');
    };

    return (
        <main>
            <div className="p-5 w-[70vw] mt-10 h-fit rounded-lg shadow-lg bg-white mx-auto px-5">
                <h2 className="text-xl font-bold mb-4">ข้อมูลส่วนตัว</h2>
                <Box sx={{ '& > :not(style)': { m: 2, width: '100%' } }}>
                    <TextField
                        label="ชื่อ"
                        placeholder="Name"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PermIdentityIcon className='text-red-600' />
                                </InputAdornment>
                            ),
                        }}
                        InputLabelProps={{
                            sx: { fontSize: '1.2rem' },
                        }}
                        variant="standard"
                    />
                    <TextField
                        label="เบอร์โทรศัพท์"
                        placeholder="Tel."
                        name="tel"
                        value={userData.tel}
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CallIcon className='text-red-600' />
                                </InputAdornment>
                            ),
                        }}
                        InputLabelProps={{
                            sx: { fontSize: '1.2rem' },
                        }}
                        variant="standard"
                    />
                    <TextField
                        label="อีเมล"
                        placeholder="Email"
                        value={userData.email}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MailOutlineIcon className='text-red-600' />
                                </InputAdornment>
                            ),
                            readOnly: true,
                        }}
                        variant="standard"
                    />
                    <TextField
                        label="รหัสผ่าน"
                        placeholder="Password"
                        value={'********'}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon className='text-red-600' />
                                </InputAdornment>
                            ),
                            readOnly: true,
                        }}
                        variant="standard"
                    />
                </Box>
            </div>
            <div className='flex flex-row justify-center'>
                <button
                    onClick={handCancle}
                    className='mt-10 px-10 py-2 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-400 hover:text-white shadow-lg'
                >
                    ยกเลิกการเปลี่ยนแปลง
                </button>
                <button
                    onClick={handleSave}
                    className='ml-10 mt-10 px-10 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 hover:text-white shadow-lg'
                >
                    บันทึกการเปลี่ยนแปลง
                </button>
            </div>
        </main>
    );
}
