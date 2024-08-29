import React, { useEffect, useState } from 'react';
import '../assets/styles/scrolLeft.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function LocationInfo() {
    const [locationData, setLocationData] = useState({
        country: 'Loading...',
        localTime: 'Loading...',
        ip: 'Loading...',
        city: 'Loading...',
        longitude: 'Loading...',
        latitude: 'Loading...',
        browser: 'Loading...',
        os: navigator.platform,
    });

    const fetchData = async () => {
        try {
            const response = await fetch('https://get.geojs.io/v1/ip/geo.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const localTime = new Date().toLocaleTimeString();
            const browserName = navigator.userAgent.split(' ')[0];

            setLocationData({
                country: data.country || 'Unknown',
                localTime: localTime,
                ip: data.ip || 'Unknown',
                city: data.city || 'Unknown',
                longitude: data.longitude || 'Unknown',
                latitude: data.latitude || 'Unknown',
                browser: browserName,
                os: navigator.platform.includes('Win64') ? 'Win64' : navigator.platform,
            });
        } catch (error) {
            console.error('Fetch error:', error.message);
            setLocationData(prevData => ({
                ...prevData,
                country: 'Error',
                city: 'Error',
                ip: 'Error',
                longitude: 'Error',
                latitude: 'Error',
            }));
        }
    };

    useEffect(() => {
       
        fetchData();
    }, []); 

    return (
        <>
        
            <div className="textCom">
                <div className=" flower text-t1">
                    <p className="country-info"> Country ~ <span>{locationData.country}</span></p>
                    <p>Local Time ~ <span>{locationData.localTime}</span></p>
                </div>
                <div className=" flower textCom3">
                    <p className="naida-info"> {locationData.city} ~ <span>Location</span></p>
                    <p>IP ~ <span>{locationData.ip}</span></p>
                </div>
            </div>

            <div className="text-tp-info">
                <div className=" flower text-tp">
                    <p className="langitude-info"> Longitude ~ <span>{locationData.longitude}</span></p>
                    <p>Latitude ~ <span>{locationData.latitude}</span></p>
                </div>
                <div className=" flower textCom2">
                    <p className="browser-info">{locationData.browser} ~ <span>Browser</span></p>
                    <p>{locationData.os} ~<span> OS  </span></p>
                </div>
            </div>        
        </>
    );
}

export default LocationInfo;
