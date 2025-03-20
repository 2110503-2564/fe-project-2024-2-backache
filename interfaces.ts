import { ObjectId } from 'mongoose';

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
    user: ObjectId,
    restaurant: ObjectId,
    numberOfPeople: number,
    createdAt: Date,
    __v: number,
}

export interface ReservationJson {
    success: boolean,
    count: number,
    pagination: Pagination,
    data: ReservationItem[]
}

export interface Pagination {
    next?: {
        page: number;
        limit: number;
    };
    prev?: {
        page: number;
        limit: number;
    };
    totalItems: number;
    totalPages: number;
}

// export interface User {
//     _id: string,
//     name: string,
//     tel?: string,
//     email: string,
//     role: 'user' | 'admin',
//     password: string,
//     resetPasswordToken?: string,
//     resetPasswordExpire?: Date,
//     createdAt: Date,

//     getSignedJwtToken(): string,
//     matchPassword(enteredPassword: string): Promise<boolean>
// }

// export interface UserJson {
//     success: boolean,
//     data : User
// }