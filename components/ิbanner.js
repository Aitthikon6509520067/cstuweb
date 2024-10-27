"use client";
import { useEffect, useState } from 'react';
import ImageLoader from '@/components/imageloader'; 
import Image from 'next/image';

const Banner = () => {
    const images = ImageLoader(); 
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000); 

        return () => clearInterval(interval); 
    }, [images.length]);

    return (
        <div className="relative rounded-3xl bg-zinc-900 h-[35rem] ">
            {<Image 
                src={images[currentImage]} 
                alt={`Banner Image ${currentImage + 1}`} 
                layout="fill" 
                objectFit="cover" 
                className="opacity-70 rounded-3xl" 
            /> }
        </div>
    );
}

export default Banner;
