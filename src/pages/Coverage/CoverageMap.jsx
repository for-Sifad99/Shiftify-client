import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

//?  Fixing the default marker icon issue
// 1️⃣ Importing marker image manually from Leaflet's internal assets
import iconUri from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
// 2️⃣ Creating a default icon using L.icon() function
let DefaultIcon = L.icon({
    iconUrl : iconUri,
    shadowUrl: iconShadow
});
// 3️⃣ Setting this icon as the default for ALL markers
L.Marker.prototype.options.icon = DefaultIcon;

const CoverageMap = ({ districts }) => {

    return (
        <div className="h-[500px] w-full max-w-6xl mx-auto rounded-xl overflow-hidden">
            {/* 1️⃣ Importing the Map component and setting it up */}
            <MapContainer
                center={[23.685, 90.3563]}  
                zoom={7}                    
                scrollWheelZoom={true}    
                style={{ height: "100%", width: "100%" }}
            >

                {/* 2️⃣ Adding the map tiles from OpenStreetMap */}
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />

                {/* 3️⃣ Looping through districts and adding markers */}
                {districts.map((district, i) => (
                    // 4️⃣ Adding a marker for each district
                    <Marker key={i} position={[district.latitude, district.longitude]}>
                        {/* 5️⃣ Showing a popup with district name when the marker is clicked */}
                        <Popup>
                            <strong className='text-secondary font-extrabold'>{district.district}</strong>
                            <br />
                            {district.covered_area.join(',')}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default CoverageMap;