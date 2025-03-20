'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

interface OverallRateProps {
    value: number;
}

export default function OverallRating({ value }: OverallRateProps) {
    return (
        <Box sx={{ '& > legend': { mt: 2 } }}>
            <Rating
                value={value}
                precision={0.05}  // รองรับครึ่งดาว
                readOnly
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
