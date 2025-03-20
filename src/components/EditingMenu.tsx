"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockIcon from '@mui/icons-material/Lock';

export default function EditingMenu() {
    
    const handleLogout = () => {
        console.log('Logged out');
    };

    return (
        <main>
            <div className="p-5 w-[70vw] mt-10 h-fit rounded-lg shadow-lg bg-white mx-auto px-5">
                <h2 className="text-xl font-bold mb-4">
                    ข้อมูลส่วนตัว
                </h2>
                <Box sx={{ '& > :not(style)': { m: 2, width: '100%' } }}>
                    <TextField
                        label="ชื่อ"
                        placeholder="Name"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PermIdentityIcon 
                                    className='text-red-600'/>
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
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CallIcon 
                                    className='text-red-600'/>
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
                        value="meow@example.com"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment 
                                position="start"
                                >
                                    <MailOutlineIcon 
                                    className='text-red-600'/>
                                </InputAdornment>
                            ),
                            readOnly: true,
                            className: "text-red-600"
                        }}
                        variant="standard"
                    />
                    <TextField
                        label="รหัสผ่าน"
                        placeholder="Passwaord"
                        value="********"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment 
                                position="start"
                                >
                                    <LockIcon 
                                    className='text-red-600'/>
                                </InputAdornment>
                            ),
                            readOnly: true,
                            className: "text-red-600"
                        }}
                        variant="standard"
                    />
                </Box>
            </div>
            <div className='flex flex-row justify-center'>
                <button
                onClick={handleLogout}
                className='mt-10 px-10 py-2 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-400 hover:text-white shadow-lg'
                >
                    ยกเลิกการเปลี่ยนแปลง
                </button>
                <button
                onClick={handleLogout}
                className='ml-10 mt-10 px-10 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 hover:text-white shadow-lg'
                >
                    บันทึกการเปลี่ยนแปลง
                </button>
            </div>
        </main>
    );
}
