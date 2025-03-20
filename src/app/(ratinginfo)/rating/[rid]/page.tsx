'use client'
import Image from "next/image";
import Rate from '@/components/ReviewRatings';
import TotalRate from '@/components/OverallRating';
import { RestaurantItem } from '../../../../../interfaces';
import { useEffect, useReducer, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@mui/material";


export default function RatingDetailPage(/*{restaurant} : {restaurant : RestaurantItem}*/) {
    const router = useRouter();

    const params = useParams();
    const rid = params?.rid as string;

    /**
     * Mock Data for Demonstration Only
     */
    const mockRestaurantRepo = new Map();
    mockRestaurantRepo.set("001", { name: "Restaurant 1", imgPath: "/img/sushi.jpg" });
    mockRestaurantRepo.set("002", { name: "Restaurant 2", imgPath: "/img/pizza.jpg" });

    const restaurant = mockRestaurantRepo.get(rid);

    if (!restaurant) {
        return (
            <main className="text-center p-5">
                <h1 className="text-lg font-medium">Restaurant Not Found</h1>
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

    const [ratings, dispatch] = useReducer(ratingReducer, new Map<string, number>());
    const [overallRating, setOverallRating] = useState(0);

    const handleRatingChange = (ratingName: string, value: number) => {
        dispatch({ type: 'update', ratingName, value });
        console.log(`Updated ${ratingName} Rating:`, value);
    };

    // Check if all categories have been rated
    useEffect(() => {
        if (ratings.size > 0) {
            const total = Array.from(ratings.values()).reduce((acc, value) => acc + value, 0);
            const newOverallRating = total / ratings.size;
            setOverallRating(parseFloat(newOverallRating.toFixed(1))); 
        } else {
            setOverallRating(0);
        }
    }, [ratings]);

    const handleSubmit = () => {
        if (overallRating < 0) return;
        
        alert(`Review submitted successfully!\nOverall Rating: ${overallRating}/5`);

        router.push("/");
    };

    return (
        <main className="text-center">
            <div className="block p-5 m-0 w-screen h-[80vh] relative">
                <Image
                    src={restaurant.imgPath}
                    alt="Restaurant Image"
                    className="object-cover w-full h-full"
                    fill
                />
            </div>
            <div className="text-5xl font-bold mt-5">
                [ {restaurant.name} ]
            </div>
            <div className="text-2xl font-bold p-2">
                Rate the Restaurant
            </div>
            <div>
                Share your thoughts about [ {restaurant.name} ] to help the restaurant improve and guide others in their dining choices!
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
            <Button
                onClick={handleSubmit}
                variant="contained"
                sx={{
                    backgroundColor: 'gray',
                    color: 'white',
                    fontWeight: 'bold',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    transition: 'background-color 0.3s',
                    '&:hover': {
                        backgroundColor: 'rgb(25, 146, 69)',
                    },
                }}>
                Submit Your Review
            </Button>

        </main>
    );
}
