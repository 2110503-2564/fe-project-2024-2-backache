export interface RestaurantItem {
    _id: string,
    name: string,
    description?: string,
    foodType: string,
    address: string,
    province: string,
    district: string,
    postalcode: string,
    tel?: string,
    openTime: string,
    closeTime: string,
    rating: number,
    maxReservation: number,
    imgPath: string,
    __v?: number,
    id: string
}

export interface RestaurantJson {
    success: boolean,
    count: number,
    pagination: Pagination,
    data: RestaurantItem[]
}

export interface ReservationItem {
    _id: string,
    revDate: Date,
    user: string,
    restaurant: {
        _id: string,
        name: string,
        province: string,
        tel: string,
        imgPath: string,
        id: string
    },
    numberOfPeople: number,
    createdAt: Date,
    __v: number,
}

export interface ReservationJson {
    success: boolean,
    count: number,
    pagination?: Pagination,
    data: ReservationItem[]
}

export interface Pagination {
    next?: {
        page: number;
        limit: number;
    },
    prev?: {
        page: number;
        limit: number;
    }
}

export interface User {
    _id: string,
    name: string,
    tel: string,
    email: string,
    role: string,
    createdAt : Date,
    __v : number
}

export interface UserJson {
    success: boolean,
    data : User
}