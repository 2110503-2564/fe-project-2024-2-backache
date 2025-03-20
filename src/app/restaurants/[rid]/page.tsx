import Image from "next/image"
import { StarIcon } from '@heroicons/react/20/solid'
import { ClockIcon } from '@heroicons/react/24/outline'
import { MapPinIcon } from '@heroicons/react/24/outline'
import { PhoneIcon } from '@heroicons/react/24/outline'

export default function RestaurantDetailPage({params} : {params: {rid: string}}) {

    // Mock Data
    const mockRestaurant = new Map()
    mockRestaurant.set("001", {name:"Tuaytung Icecream", image:"/img/tuaytung.jpg", address:"961, 963 Soi Chula 12 Bantadthong Road, Bangkok 10330", tel:"0614214702", openTime:"15:00", closeTime:"23:00", foodType:"Icecream", rating:"4.3", description:"Tuaytung icecream is a Hongkong style cafe'. We serve homemade ice-cream with Chinese bun aka Mantou. Our ice-cream flavors are a little bit unique such as Chestnut, Caramelize peanut bar, Black sesame with Soymilk, etc. Customers can choose Fried bun, Steamed bun, or Pudding together with our ice-cream. We hope our customers have a great time and enjoy at Tuaytung icecream."})

    return (
        <main>
            <div className='w-screen h-[50vh] relative block p-5 m-0'>
                <Image src={(mockRestaurant.get(params.rid)).image}
                    alt='cover'
                    fill={true}
                    priority
                    objectFit='cover'/>
            </div>

            <div className="text-[19px] text-gray-800 px-12 mx-5">
                <div className="flex items-center text-3xl font-bold pt-8">
                    {(mockRestaurant.get(params.rid)).name}
                    <StarIcon className="h-6 w-6 text-yellow-400 ml-2"/>
                    <span className="font-semibold text-2xl mt-1 ml-1.5">
                        {(mockRestaurant.get(params.rid)).rating}
                    </span>
                </div> 
                <div className="pt-2 flex">
                    <MapPinIcon className="h-5 w-5 mr-2 mt-1.5"/>
                    {(mockRestaurant.get(params.rid)).address}
                </div>
                <div className="text-xl font-bold pt-4">
                    About this Restaurant
                    <div className="text-[19px] font-normal pt-2">
                        {(mockRestaurant.get(params.rid)).description}
                    </div>
                </div>
                <div>
                    <div className="font-semibold pt-2">
                        Food Type |
                        <span className="font-normal ml-1">
                            {(mockRestaurant.get(params.rid)).foodType}
                        </span>
                    </div>
                    <div className="flex pt-1.5">
                        <ClockIcon className="h-5 w-5 mr-3 mt-1.5"/>
                        {(mockRestaurant.get(params.rid)).openTime} - {(mockRestaurant.get(params.rid)).closeTime}
                    </div>
                    <div className="flex pt-1.5 pb-10">
                        <PhoneIcon className="h-5 w-5 mr-3 mt-1.5"/>
                        {(mockRestaurant.get(params.rid)).tel}
                    </div>
                </div>
            </div>
            <button name="Reserve" className='block bg-myred border border-white text-white text-xl font-semibold py-2 px-10 m-5 rounded-xl z-30 absolute bottom-1 right-14 shadow-sm hover:bg-white hover:text-red-600 hover:border hover:border-red-600'>
                Reserve
            </button>
        </main>
    )
}