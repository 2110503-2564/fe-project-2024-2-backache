import Image from "next/image"
import { StarIcon } from '@heroicons/react/20/solid'
import { ClockIcon } from '@heroicons/react/24/outline'
import { MapPinIcon } from '@heroicons/react/24/outline'
import { PhoneIcon } from '@heroicons/react/24/outline'
import getRestaurant from "@/libs/getRestaurant"
import { RestaurantItem } from '../../../../interfaces';

import ReserveBox from '@/components/ReserveBox';

export default async function Reservation({ params }: { params: { reserveId: string } }) {
    if (!params || !params.reserveId) {
        return <div className="m-5 text-lg text-medium">Invalid Restaurant ID</div>;
    }
    
    const restaurantJson = await getRestaurant(params.reserveId);

    if (!restaurantJson) {
        return <div className="m-5 text-lg text-medium">Loading Restaurant...</div>;
    }

    const restaurantDetail : RestaurantItem = restaurantJson.data;
    
    return (
        <main className="w-[100%] flex flex-col items-center justify-center">
            {/*Banner*/}
            <div className='w-screen h-[40vh] relative'>
                <Image src={restaurantDetail.imgPath}
                    alt='cover'
                    fill={true}
                    priority
                    className="object-cover"/>
                <div className="relative text-white z-20 flex flex-col items-center justify-end h-full">
                    <div className="text-4xl font-bold items-center flex"
                        style={{textShadow:'3px 3px 5px rgba(0, 0, 0, 0.6)'}}>
                        {restaurantDetail.name}
                        <StarIcon className="h-6 w-6 text-yellow-400 mt-1.5 ml-2"/>
                        <span className="font-normal text-2xl mt-2 ml-1.5">{restaurantDetail.rating}</span>
                    </div>
                    <div className="text-lg pt-2 flex"
                    style={{textShadow:'4px 4px 10px rgba(0, 0, 0, 0.9)'}}>
                        <MapPinIcon className="h-5 w-5 mr-2 mt-1.5"/>
                        {restaurantDetail.address}
                    </div>
                    <div className='pt-8'></div>
                    <div className="text-black flex bg-gray-100 rounded-lg px-10 py-1">
                        <ClockIcon className="h-5 w-5 mr-2 mt-0.5"/>
                            {restaurantDetail.openTime} - {restaurantDetail.closeTime}
                        <PhoneIcon className="h-5 w-5 ml-4 mr-2 mt-0.5"/>
                            {restaurantDetail.tel}
                    </div>
                    <div className='pb-12'></div>
                </div>
            </div>
            
            {/*Form*/}
            <div className="text-3xl text-gray-800 pt-8 pb-8">
                <div className='font-bold'>
                    Make a Reservation at {restaurantDetail.name}
                </div>
            </div>
            <ReserveBox/>
            
        </main>
    )
}