export default async function addReservation ({restaurantId, revDate, token} : {restaurantId : string, revDate : string, token : string}) {
    const response = await fetch(process.env.BACKEND_URL+`api/v1/restaurants/${restaurantId}/reservations`, {
        method : 'POST',
        headers : {
            'Authorization': `Bearer ${token}`,
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            token : token,
            revDate : revDate
        }),
    });

    if(!response.ok){
        throw new Error('Failed to make reservation');
    }

    return await response.json();
}