import React, { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

//?  Fixing the default marker icon issue
// 1️⃣ Importing marker image manually from Leaflet's internal assets
import iconUri from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import DistrictSearchBox from './DistrictSearchBox';
// 2️⃣ Creating a default icon using L.icon() function
let DefaultIcon = L.icon({
    iconUrl: iconUri,
    shadowUrl: iconShadow
});
// 3️⃣ Setting this icon as the default for ALL markers
L.Marker.prototype.options.icon = DefaultIcon;

// 🔄 This component handles the "flyTo" effect using useMap()
const MapFlyTo = ({ target }) => {
    const map = useMap();

    if (target) {
        map.flyTo(target, 10, { duration: 1.5 });
    };

    return null;
};
const CoverageMap = ({ districts }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [targetCoord, setTargetCoord] = useState(null);
    const [activeDistrict, setActiveDistrict] = useState(null);

    const handleSearch = () => {
        const query = searchQuery.trim().toLowerCase();
        const matchDistrict = districts.find(d =>
            d.district.toLowerCase().includes(query)
        );

        if (matchDistrict) {
            setTargetCoord([matchDistrict.latitude, matchDistrict.longitude]);
            setActiveDistrict(matchDistrict.district);
        };
    };

    const handleKeyPress = e => {
        if (e.key === 'Enter') {
            handleSearch();
        };
    };

    return <>
        <DistrictSearchBox
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onSearch={handleSearch}
            onKeyDown={handleKeyPress}
        />
        <div className="w-full max-w-6xl mx-auto rounded-xl overflow-hidden h-[300px] sm:h-[400px] md:h-[500px]">

            {/* 1️⃣ Importing the Map component and setting it up */}
            <MapContainer
                center={[23.685, 90.3563]}
                zoom={7.6}
                minZoom={4}
                maxZoom={12}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
            >

                {/* 2️⃣ Adding the map tiles from OpenStreetMap */}
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />

                {/* 🔄 Fly to location when targetCoord updates */}
                <MapFlyTo target={targetCoord} />

                {/* 3️⃣ Looping through districts and adding markers */}
                {districts.map((district, i) => (
                    // 4️⃣ Adding a marker for each district
                    <Marker
                        key={i}
                        position={[district.latitude, district.longitude]}
                    >
                        {/* 5️⃣ Showing a popup with district name when the marker is clicked */}
                        <Popup autoOpen={district.district === activeDistrict}>
                            <strong className='text-secondary font-extrabold'>{district.district}</strong>
                            <br />
                            {district.covered_area.join(',')}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    </>
};

export default CoverageMap;