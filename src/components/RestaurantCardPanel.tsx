'use client'
import { useReducer } from "react";
import RestaurantCard from "./RestaurantCard";
import Link from "next/link";

export default function RestaurantCardPanel() {
    const comparerReducer = (compareList:Map<string, number>, action:{type:string; restaurantName:string; rating?: number})=>{
        const newList = new Map(compareList)
        switch(action.type) {
            case 'add': {
                if (action.rating !== undefined) {
                    newList.set(action.restaurantName, action.rating);
                }
                return newList;            
            }
            case 'remove': {
                newList.delete(action.restaurantName);
                return newList;
            }
            default: return compareList
        }
    }

    const initialCompareList = new Map<string, number>([
        ["Restaurant Name", 0],
        ["Restaurant Name", 0],
        ["Restaurant Name", 0],
        ["Restaurant Name", 0]
    ]);

    const [compareList, dispatchCompare] = useReducer(comparerReducer, initialCompareList);

    /**
     * Mock Data for Demontration Only
     */
    const mockRestaurantRepo = [
        {rid: "001", name: "Restaurant 1", image: "/img/sushi.jpg", rating: 0.0},
        {rid: "002", name: "Restaurant 2", image: "/img/pizza.jpg", rating: 0.0},
        {rid: "003", name: "Restaurant 3", image: "/img/bbq.jpg", rating: 0.0},
        {rid: "004", name: "Restaurant 4", image: "/img/tomyum_seafood.jpg", rating: 0.0}
    ]
    return (
        <div>
            <div style={{margin:"20px", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
                {
                    mockRestaurantRepo.map((restaurantItem)=>(
                        <Link 
                        key={restaurantItem.rid}
                        href={`/rating/${restaurantItem.rid}`}
                        className="w-1/5">
                            <RestaurantCard 
                                restaurantName={restaurantItem.name} 
                                imgSrc={restaurantItem.image} 
                                onCompare={(restaurant, rating) => dispatchCompare({type:'add', restaurantName:restaurant, rating})} 
                                rid={restaurantItem.rid}
                                overallRating={restaurantItem.rating} 
                            />
                        </Link>     
                   ))
                }
            </div>
        </div>
    );
}
