import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Banner = ({ id }) => {
    const [showBanner, setShowBanner] = useState(true);
    const [countdown, setCountdown] = useState(null);
    const [timerFetched, setTimerFetched] = useState(false);
    const [bannerData, setBannerData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`/api/banners/${id}`)
            .then(response => {
                const data = response.data;
                console.log(data)
                setCountdown(parseInt(data.timer));
                setTimerFetched(true);
            })
            .catch(error => {
                console.error('Error fetching timer:', error);
                // Handle the error here (e.g., display an error message)
            });
    }, []);

    useEffect(() => {
        if (countdown === null || !timerFetched) return;

        const timer = setInterval(() => {
            setCountdown(prevCountdown => prevCountdown - 1);
        }, 1000);

        return () => {
            clearInterval(timer);
            if (countdown === 0) {
                setShowBanner(false);
            }
        };
    }, [countdown, timerFetched]);

    useEffect(() => {
        axios.get(`/api/banners/${id}`)
            .then(response => {
                const data = response.data;
                setBannerData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching banner data:', error);
                // Handle the error here (e.g., display an error message)
            });
    }, [id]);

    const toggleBanner = () => {
        setShowBanner(!showBanner);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="relative">
            <button
                onClick={toggleBanner}
                className="absolute top-4 right-4 px-4 py-2 bg-blue-600 text-white rounded"
            >
                {showBanner ? 'Hide Banner' : 'Show Banner'}
            </button>

            {showBanner && countdown !== 0 && (
                <div className="banner bg-yellow-300 p-4 text-center">
                    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] bg-gray-100 flex items-center justify-center">
                <div className="absolute inset-0 overflow-hidden">
                    <img
                        src={bannerData.image_url}
                        alt="Banner"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                </div>
                <div className="relative z-10 flex flex-col items-start justify-center max-w-7xl mx-auto p-4 md:p-8 lg:p-16">
                    <div className="text-yellow-400 text-lg font-bold">
                        <h1>{countdown?countdown:0} seconds </h1>
                                       </div>
                    <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mt-2">
                        {bannerData.title}
                    </h1>
                    <p className="text-white text-sm md:text-lg mt-4 max-w-md">
                        {bannerData.description}
                    </p>
                    <div className="mt-6">
                        <button className="bg-yellow-500 text-black px-6 py-2 rounded-md shadow-md hover:bg-yellow-600">
                           <Link to= {bannerData.link} >Go</Link>
                        </button>
                    </div>
                    
                </div>
            </div> 
                </div>
            )}

         

           
        </div>
    );
};

export default Banner;
