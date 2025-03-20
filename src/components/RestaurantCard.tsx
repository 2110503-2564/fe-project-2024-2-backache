'use client';
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import { useRouter } from 'next/navigation';

interface CardProps {
    restaurantName: string;
    imgSrc: string;
    onCompare: (restaurantName: string, rating: number) => void;
    overallRating?: number;  // เปลี่ยนชื่อ initialRating เป็น overallRating เพื่อความชัดเจน
    rid: string;
}

export default function RestaurantCard({ restaurantName, imgSrc, onCompare, overallRating = 0, rid }: CardProps) {
    const router = useRouter();

    // ไม่มี useState เพราะใช้ overallRating ตรง ๆ จาก parent
    const handleStarClick = () => {
        router.push(`/rating/${rid}`);
    };

    return (
        <InteractiveCard contentName={restaurantName}>
            <div className="w-full h-[70%] relative rounded-t-lg">
                <Image 
                    src={imgSrc}
                    alt="Product Picture"
                    fill={true}
                    className="object-cover rounded-t-lg"
                />
            </div>
            <div className="w-full h-[15%] p-[10px] ">
                {restaurantName}
            </div>
            <div className='detail' style={{ display: 'flex', alignItems: 'center', gap: '5px', marginLeft: '6px' }}>
                <Box
                    display="flex"
                    alignItems="center"
                    sx={{ cursor: 'pointer' }}
                    onClick={handleStarClick}
                >
                    <StarIcon sx={{ color: '#FFD700' }} />
                    <Typography sx={{ marginLeft: '4px', marginTop: '3px'}}>{overallRating.toFixed(1)}</Typography>
                </Box>  
                <div className='place' style={{ marginLeft: '0px', marginTop: '3px' }}>
                    •  Bangkok
                </div> 
            </div>
        </InteractiveCard>
    );
}
