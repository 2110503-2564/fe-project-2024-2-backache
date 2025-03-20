'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

interface RateProps {
    ratingName: string;
    onCompare: (ratingName: string, rating: number) => void;
    initialRating?: number;  
}

export default function ReviewRating({ ratingName, onCompare, initialRating = 0 }: RateProps) {
    const [value, setValue] = React.useState<number | null>(initialRating);

    const handleRatingChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
        setValue(newValue);
        if (newValue !== null) {
            onCompare(ratingName, newValue);
        }
    };

    return (
        <Box sx={{ '& > legend': { mt: 2 } }}>
            <Rating
                id={`${ratingName} Rating`}
                name={`${ratingName} Rating`}
                value={value}
                onChange={handleRatingChange}
                sx={{
                    fontSize: '2rem',
                    color: '#FFDD00', // Change default color
                    '& .MuiRating-iconFilled': {
                        color: '#FFDD00', // Filled star color
                    },
                    '& .MuiRating-iconEmpty': {
                        color: 'lightgray', // Empty star color (optional)
                    },
                }}
            />
        </Box>
    );
}
