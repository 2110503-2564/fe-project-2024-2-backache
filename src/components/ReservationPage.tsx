"use client";
import Image from "next/image"
import { StarIcon } from '@heroicons/react/20/solid'
import { ClockIcon } from '@heroicons/react/24/outline'
import { MapPinIcon } from '@heroicons/react/24/outline'
import { PhoneIcon } from '@heroicons/react/24/outline'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import DatePicker from 'react-datepicker';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './clock.module.css'
import { red } from "@mui/material/colors";
dayjs.extend(localizedFormat);
dayjs.extend(isSameOrAfter)

export default function ReservationPage() {

    // Mock Data
    const mockRestaurant = new Map()
    mockRestaurant.set("001", {name:"Tuaytung Icecream", image:"/img/tuaytung.jpg", address:"961 Soi Chula 12 Bantadthong Road, Bangkok 10330 Thailand", tel:"0614214702", openTime:"15:00", closeTime:"23:00", foodType:"Icecream", rating:"4.3"})

    // Date
    const today = new Date()
    const [dateValue, setDateValue] = useState(dayjs());
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
    const handleDateChange = (date: Date | null) => {
        if (date) {
            const dayjsDate = dayjs(date);
            if (dayjsDate.isSameOrAfter(dayjs(), 'day')) {
                setDateValue(dayjsDate);
                setIsDatePickerOpen(false);
            }
        } else {
            // Handle the case where date is null (clear the date, or do nothing)
            setIsDatePickerOpen(false);
        }
    };
    const handleIncrementDate = () => {
        setDateValue(dateValue.add(1, 'day'));
    };
    const handleDecrementDate = () => {
        if (dateValue.isAfter(dayjs(), 'day')) {
            setDateValue(dateValue.subtract(1, 'day'));
        }
    };

    // Time
   const [timeValue, setTimeValue] = useState('12:00');
    const handleIncrementTime = () => {
        const [hours, minutes] = timeValue.split(':').map(Number);
        let newMinutes = minutes + 1;
        let newHours = hours;
        if (newMinutes >= 60) {
            newMinutes -= 60;
            newHours += 1;
        }
        if (newHours >= 24) {
            newHours = 0;
        }
        const formattedHours = String(newHours).padStart(2, '0');
        const formattedMinutes = String(newMinutes).padStart(2, '0');
        setTimeValue(`${formattedHours}:${formattedMinutes}`);
    };
    const handleDecrementTime = () => {
        const [hours, minutes] = timeValue.split(':').map(Number);
        let newMinutes = minutes - 1;
        let newHours = hours;
        if (newMinutes < 0) {
            newMinutes += 60;
            newHours -= 1;
        }
        if (newHours < 0) {
            newHours = 23;
        }
        const formattedHours = String(newHours).padStart(2, '0');
        const formattedMinutes = String(newMinutes).padStart(2, '0');
        setTimeValue(`${formattedHours}:${formattedMinutes}`);
    };
    const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTimeValue(event.target.value);
    };

    // Guests
    const [count, setCount] = useState<number>(1);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        setCount(isNaN(value) || value < 1 ? 1 : value);
    };
    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    };
    const handleDecrement = () => {
        setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
    };
    
    return (
        <main className="w-[100%] flex flex-col items-center justify-center">
            {/*Banner*/}
            <div className='w-screen h-[40vh] relative'>
                <Image src={(mockRestaurant.get('001')).image}
                    alt='cover'
                    fill={true}
                    priority
                    objectFit='cover'/>
                <div className="relative text-white z-20 flex flex-col items-center justify-end h-full">
                    <div className="text-4xl font-bold items-center flex"
                        style={{textShadow:'3px 3px 5px rgba(0, 0, 0, 0.6)'}}>
                        {(mockRestaurant.get('001')).name}
                        <StarIcon className="h-6 w-6 text-yellow-400 mt-1.5 ml-2"/>
                        <span className="font-normal text-2xl mt-2 ml-1.5">{(mockRestaurant.get('001')).rating}</span>
                    </div>
                    <div className="text-lg pt-2 flex"
                    style={{textShadow:'4px 4px 10px rgba(0, 0, 0, 0.9)'}}>
                        <MapPinIcon className="h-5 w-5 mr-2 mt-1.5"/>
                        {(mockRestaurant.get('001')).address}
                    </div>
                    <div className='pt-8'></div>
                    <div className="text-black flex bg-gray-100 rounded-lg px-10 py-1">
                        <ClockIcon className="h-5 w-5 mr-2 mt-0.5"/>
                            {(mockRestaurant.get('001')).openTime} - {(mockRestaurant.get('001')).closeTime}
                        <PhoneIcon className="h-5 w-5 ml-4 mr-2 mt-0.5"/>
                            {(mockRestaurant.get('001')).tel}
                    </div>
                    <div className='pb-12'></div>
                </div>
            </div>

            {/*Form*/}
            <div className="text-3xl text-gray-800 pt-8 pb-8">
                <div className='font-bold'>
                    Make a Reservation at {(mockRestaurant.get('001')).name}
                </div>
            </div>

            {/*Date*/}
            <div className="text-lg text-gray-800 flex flex-col items-center w-fit">
                <div className="flex items-center justify-center">
                    <button className="px-5 disabled:text-gray-400" onClick={handleDecrementDate} disabled={dateValue.isSame(dayjs(), 'day')}>
                        <ChevronLeftIcon className="h-6 w-6" />
                    </button>
                    <span className="w-40 h-15 text-xl text-center font-semibold" onClick={() => setIsDatePickerOpen(true)}>
                        {dateValue.format('ddd, DD MMM')}
                    </span>
                    <button className="px-5" onClick={handleIncrementDate}>
                        <ChevronRightIcon className="h-6 w-6" />
                    </button>
                </div>
                {isDatePickerOpen && (
                    <div className="pt-4">
                        <style>{`
                            .react-datepicker__day--selected {
                                background-color:rgb(255, 0, 0) !important; color: white !important;}
                            .react-datepicker__day:hover:not(.react-datepicker__day--disabled) {
                                background-color:rgb(255, 170, 170) !important;}
                            .react-datepicker__day:active {
                                background-color:rgb(255, 170, 170) !important;}
                            .react-datepicker__day--disabled {
                                color:rgb(156, 156, 156) !important;}
                        `}</style>
                        <DatePicker selected={dateValue.toDate()} minDate={today} onChange={handleDateChange} inline/>
                    </div>
                )}
            </div>
            <div className="text-md text-gray-700 flex justify-center pb-5">
                Date
            </div>

            {/*Time*/}
            <div className="text-lg text-gray-800 flex items-center w-fit flex flex-row justify-center">
                <button onClick={handleDecrementTime} className="px-5">
                    <ChevronLeftIcon className="h-6 w-6" />
                </button>
                <input
                    type="time"
                    value={timeValue}
                    onChange={handleTimeChange}
                    className="w-30 h-15 text-xl text-center font-semibold px-5 z-30 relative bg-transparent"/>
                <button onClick={handleIncrementTime} className="px-5">
                    <ChevronRightIcon className="h-6 w-6" />
                </button>
            </div>
            <div className="text-md text-gray-700 flex justify-center pb-5">
                Time
            </div>

            {/*Guests*/}
            <div className="text-lg text-gray-800 flex items-center w-fit flex flex-row justify-center">
                <button className="px-5 disabled:text-gray-400" onClick={handleDecrement} disabled={count === 1}>
                    <ChevronLeftIcon className="h-6 w-6" />
                </button>
                    <input
                        type="number"
                        value={count}
                        onChange={handleChange}
                        className='w-40 h-15 text-xl text-center font-semibold pl-2.5 bg-transparent'
                />
                <button onClick={handleIncrement} className="px-5">
                    <ChevronRightIcon className="h-6 w-6" />
                </button>
            </div>
            <div className="text-md text-gray-700 flex justify-center pb-5">
                Guests
            </div>

            <button name="Confirm" className="'block bg-red-600 border border-white text-white text-xl font-semibold py-2 px-10 m-5 rounded-xl shadow-sm hover:bg-white hover:text-red-600 hover:border hover:border-red-600">
                Confirm Reservation
            </button>
        </main>
    )
}