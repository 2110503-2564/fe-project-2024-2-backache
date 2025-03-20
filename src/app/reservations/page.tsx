import ReservationListItem from "@/components/ReservationListItem";
import { ReservationJson, ReservationItem } from "../../../interfaces";
import getReservations from "@/libs/getReservations";

export default async function ReservationPage(){
    // const token = 'user_token';
    // const reservationJson = await getReservations({token});
    const mockData: ReservationJson = {
        success: true,
        count: 3,
        data: [
            {
                _id: '607c72ef58b1e5a2dca1d7c4',
                revDate: new Date('2025-03-25T18:00:00Z'),
                user: '607c72ef58b1e5a2dca1d7c5',
                restaurant: '67dbe3c2d2bc7d568ff9f427',
                numberOfPeople: 4,
                createdAt: new Date('2025-03-01T12:00:00Z'),
                __v: 0,
            } as ReservationItem,
            {
                _id: '607c72ef58b1e5a2dca1d7c7',
                revDate: new Date('2025-03-26T19:30:00Z'),
                user: '607c72ef58b1e5a2dca1d7c8',
                restaurant: '67dbe3c2d2bc7d568ff9f427',
                numberOfPeople: 2,
                createdAt: new Date('2025-03-02T14:00:00Z'),
                __v: 0,
            } as ReservationItem,
            {
                _id: '607c72ef58b1e5a2dca1d7ca',
                revDate: new Date('2025-03-27T20:15:00Z'),
                user: '607c72ef58b1e5a2dca1d7cb',
                restaurant: '67dbe3c2d2bc7d568ff9f427',
                numberOfPeople: 6,
                createdAt: new Date('2025-03-03T16:30:00Z'),
                __v: 0,
            } as ReservationItem
        ]
    };

    return (
        <main>
            <div className="restaurant-header">
                <div className="w-full h-[90px] bg-[#D40303] flex items-center">
                    <div className="text-white font-bold font-inter text-[30px] mx-10">My Reservations</div>
                </div>
            </div>

            <div className="reservation-list">
                {
                    mockData.data.map((reservationItem) => (
                        <div key={reservationItem._id}>
                            <ReservationListItem reservationItem={reservationItem}/>
                        </div>
                    ))
                }
            </div>
        </main>
    );
}