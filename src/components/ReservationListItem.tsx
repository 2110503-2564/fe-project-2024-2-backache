import Image from "next/image";
import Link from "next/link";
import { ReservationItem, RestaurantJson } from "../../interfaces";
import getRestaurant from "@/libs/getRestaurant";

export default async function ReservationListItem({ reservationItem }: { reservationItem: ReservationItem }) {
    const restaurantJson : RestaurantJson = await getRestaurant(reservationItem.restaurant);
    const restaurantItem = Array.isArray(restaurantJson.data) ? restaurantJson.data[0] : restaurantJson.data;

    if (!restaurantJson || !restaurantJson.data) {
        return <div className="m-5 text-lg text-medium">Loading Reservation...</div>;
    }

    return (
        <div  className="mx-20 my-10 flex items-start transition-shadow duration-300 border-b border-gray-300 pb-10 text-gray-600">
            <div className="w-[200px] h-[200px] overflow-hidden rounded-xl shadow-lg hover:shadow-2xl">
                <Image className="object-cover w-full h-full"
                    src={restaurantItem.imgPath} alt="Restaurant Image" width={200} height={200} />
            </div>
            <div className="ml-10 font-bold font-inter text-[18px] flex flex-col justify-center">
                <div className="font-bold text-[36px] text-black">{restaurantItem.name}</div>
                <div className="text-gray-600 flex items-center">
                    <span>{reservationItem.revDate.toLocaleDateString('en-GB', { weekday: 'short', day: '2-digit', month: 'long', year: 'numeric' })}</span>
                    <Image className="ml-5 mr-2" src="/icons/clock_icon.png" alt="Clock Icon" width={18} height={18} />
                    <span>{reservationItem.revDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
                <div>{reservationItem.numberOfPeople} {reservationItem.numberOfPeople > 1 ? 'Guests' : 'Guest'}</div>
            </div>

            <div className="ml-auto flex flex-row space-x-4 self-end">
                <Link href={`/reservations?id=${reservationItem._id}`}>
                    <button className="w-[150px] bg-[#838383] text-white text-[22px] font-bold px-4 py-2 rounded-xl hover:bg-gray-500 hover:shadow-lg transition-all">
                        Edit
                    </button>
                </Link>
                <button className="w-[150px] bg-[#D40303] text-white text-[22px] font-bold px-4 py-2 rounded-xl hover:bg-red-700 hover:shadow-lg transition-all">
                    Cancel
                </button>
            </div>
        </div>
    );
}