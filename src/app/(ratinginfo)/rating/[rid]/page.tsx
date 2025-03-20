'use client'
import * as React from 'react';
import Image from "next/image";
import Rate from '@/components/ReviewRatings';
import TotalRate from '@/components/OverallRating';
import { useParams } from 'next/navigation';

export default function RatingDetailPage() {
    const params = useParams();
    const rid = params?.rid as string;

    /**
     * Mock Data for Demonstration Only
     */
    const mockRestaurantRepo = new Map();
    mockRestaurantRepo.set("001", { name: "Restaurant 1", image: "/img/sushi.jpg" });
    mockRestaurantRepo.set("002", { name: "Restaurant 2", image: "/img/pizza.jpg" });

    const rating = mockRestaurantRepo.get(rid);

    if (!rating) {
        return (
            <main className="text-center p-5">
                <h1 className="text-lg font-medium">Rating Not Found</h1>
            </main>
        );
    }

    const ratingReducer = (state: Map<string, number>, action: { type: string, ratingName: string, value: number }) => {
        const newState = new Map(state);
        switch (action.type) {
            case 'update':
                newState.set(action.ratingName, action.value);
                return newState;
            default:
                return state;
        }
    };

    const [ratings, dispatch] = React.useReducer(ratingReducer, new Map<string, number>());
    const [overallRating, setOverallRating] = React.useState(0);
    const [canCalculate, setCanCalculate] = React.useState(false);

    const handleRatingChange = (ratingName: string, value: number) => {
        dispatch({ type: 'update', ratingName, value });
        console.log(`Updated ${ratingName} Rating:`, value);
    };

    const calculateOverallRating = () => {
        const total = ['Food', 'Service', 'Ambiance', 'Value for Money'].reduce((acc, category) => acc + (ratings.get(category) || 0), 0);
        return total / 4;
    };

    // ตรวจสอบว่าค่าทุกตัวได้รับการให้คะแนนแล้ว
    React.useEffect(() => {
        const allRated = ['Food', 'Service', 'Ambiance', 'Value for Money'].every(category => ratings.has(category));
        setCanCalculate(allRated);
    }, [ratings]);

    // คำนวณค่า Overall Rating เมื่อกดปุ่ม
    const handleCalculate = () => {
        if (canCalculate) {
            const newOverallRating = calculateOverallRating();
            setOverallRating(parseFloat(newOverallRating.toFixed(1)));  // ปัดทศนิยม 1 ตำแหน่ง
            console.log(`Overall Rating: ${newOverallRating}`);
        }
    };


    return (
        <main className="text-center">
            <div className="block p-5 m-0 w-screen h-[80vh] relative">
                <Image
                src={rating.image}
                alt="Restaurant Image"
                fill
                style={{ objectFit: 'cover' }}
                />
            </div>
            <div className="text-5xl font-bold mt-5">
                [ {rating.name} ]
            </div>
            <div className="text-2xl font-bold p-2">
                Rate the Restaurant
            </div>
            <div>
                Share your thoughts about [ {rating.name} ] to help the restaurant improve and guide others in their dining choices!
            </div>
            
            <div className="mt-10 flex flex-wrap flex-row justify-center">
                {['Food', 'Service', 'Ambiance', 'Value for Money'].map((category) => (
                    <div key={category} className="flex flex-col text-xl font-bold scale-125 mx-20 my-10">
                        {category}
                        <Rate
                            ratingName={category}
                            onCompare={handleRatingChange}
                            initialRating={ratings.get(category) || 0}
                        />
                    </div>
                ))}
            </div>

            {/* Overall Rating */}
            <div className="justify-center p-10">
                <div key="Overall Rating" className="flex flex-col text-xl font-bold mb-4 scale-150">
                    Overall Rating
                    <div className="relative flex flex-col items-center ">
                        <div className="pointer-events-none ">
                            <TotalRate value={overallRating} />
                        </div>
                        <div className="absolute -top-6 text-sm font-bold p-10 mt-5 ">
                            {overallRating}/5
                        </div>
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <button
            onClick={handleCalculate}
            disabled={!canCalculate}
            className={`mb-10 px-5 py-2 text-white font-bold rounded ${canCalculate ? 'bg-[#D40303] hover:bg-red-700' : 'bg-gray-400 cursor-not-allowed'}`}
            >
                Submit Your Review
            </button>
        </main>
    );
}
