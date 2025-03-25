"use client";

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import DatePicker from 'react-datepicker';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone'
import 'react-datepicker/dist/react-datepicker.css';
dayjs.extend(localizedFormat);
dayjs.extend(isSameOrAfter)
dayjs.extend(timezone)
dayjs.extend(utc)

import addReservation from '@/libs/addReservation';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import editReservation from '@/libs/editReservation';

export default function ReserveBox({restaurantId, isUpdate, reservationId} : {restaurantId : string, isUpdate : boolean, reservationId?:string}){
    const router = useRouter();
    const { data: session } = useSession();

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
        let newHours = hours + 1;
        if (newHours >= 24) {
            newHours = 0;
        }
        const formattedHours = String(newHours).padStart(2, '0');
        setTimeValue(`${formattedHours}:${String(minutes).padStart(2, '0')}`); // Keep minutes unchanged
    };
    const handleDecrementTime = () => {
        const [hours, minutes] = timeValue.split(':').map(Number);
        let newHours = hours - 1;
        if (newHours < 0) {
            newHours = 23;
        }
        const formattedHours = String(newHours).padStart(2, '0');
        setTimeValue(`${formattedHours}:${String(minutes).padStart(2, '0')}`); // Keep minutes unchanged
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

    const handleMakeReservation = async () => {
        if (!dateValue || !timeValue) {
            return null;
        }
        const [hours, minutes] = timeValue.split(':').map(Number);
        const tempDate = new Date(dateValue.toDate());
        tempDate.setHours(hours+7, minutes, 0, 0);
        const combinedDateTime = tempDate;

        console.log("dateValue:", dateValue);
        console.log("timeValue:", timeValue);
        console.log("DateTime:", combinedDateTime);
                
        if(!session || !session.user || !session.user.token) return null;
        const token = session.user.token;

        try {

            await addReservation({restaurantId : restaurantId, revDate : combinedDateTime, numberOfPeople : count, token});
            alert('Reservation successful!');
            router.replace('/reservations');
        } catch (err : any) {
            console.error('Error making reservation:', err);
            alert(err.message || 'Failed to make reservation. Please try again.');
        }
    };

    const handleEditReservation = async () => {
        if (!dateValue || !timeValue) {
            return null;
        }
        const [hours, minutes] = timeValue.split(':').map(Number);
        const tempDate = new Date(dateValue.toDate());
        tempDate.setHours(hours+7, minutes, 0, 0);
        const combinedDateTime = tempDate;

        console.log("dateValue:", dateValue);
        console.log("timeValue:", timeValue);
        console.log("DateTime:", combinedDateTime);
                
        if(!session || !session.user || !session.user.token) return null;
        const token = session.user.token;

        if(!reservationId) return null;

        try {
            await editReservation({reservationId : reservationId, revDate : combinedDateTime, numberOfPeople : count, token});
            alert('Edit Reservation successful!');
            router.replace('/reservations');
        } catch (err : any) {
            console.error('Error making reservation:', err);
            alert(err.message || 'Failed to edit reservation. Please try again.');
        }
    }

    return (
        <div>
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
            <button name="Confirm" onClick={isUpdate ? handleEditReservation : handleMakeReservation}
                className="'block bg-red-600 border border-white text-white text-xl font-semibold py-2 px-10 m-5 rounded-xl shadow-sm hover:bg-white hover:text-red-600 hover:border hover:border-red-600">
                {isUpdate ? 'Update Reservation' : 'Confirm Reservation'}
            </button>
        </div>
    );
}