import { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';

// --- Types needed for TypeScript ---
declare global {
  interface Window {
    L: any; // Use 'any' to avoid deep Leaflet type definitions
  }
}
type LatLngExpression = [number, number];

// --- UPDATED: Real Sample Data for Secunderabad Area ---
const therapists = [
  { id: 1, name: 'Chetana Hospital', specialty: 'Psychiatric Hospital & De-addiction', position: { lat: 17.4435, lng: 78.4988 } },
  { id: 2, name: 'Asha Hospital', specialty: 'Psychiatric Health Care Center', position: { lat: 17.4197, lng: 78.4485 } },
  { id: 3, name: 'Jivaasri Ayurvedic Wellness', specialty: 'Ayurvedic Wellness & Therapy', position: { lat: 17.4522, lng: 78.4989 } },
  { id: 4, name: 'Dr. Pragya Rashmi, Yashoda Hospitals', specialty: 'Consultant Psychologist', position: { lat: 17.4415, lng: 78.5022 } },
];
// --------------------------------------------------------------------

// UPDATED: Default location centered in Secunderabad
const defaultCenter: LatLngExpression = [17.4399, 78.4983];

const Support = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null); // To hold the map instance
  const userMarkerRef = useRef<any>(null); // To hold the user marker instance

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Custom blue icon for the user's location, defined inside the component
  const userIcon = window.L ? new window.L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
  }) : null;

  // Effect to initialize the map once
  useEffect(() => {
    if (window.L && mapContainerRef.current && !mapInstanceRef.current) {
      const map = window.L.map(mapContainerRef.current).setView(defaultCenter, 13);
      
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Add therapist markers
      therapists.forEach(({ name, specialty, position }) => {
        window.L.marker([position.lat, position.lng])
          .addTo(map)
          .bindPopup(`<b>${name}</b><br>${specialty}`);
      });
      
      // Store map instance
      mapInstanceRef.current = map;

      // Add initial user marker
      if(userIcon) {
        userMarkerRef.current = window.L.marker(defaultCenter, { icon: userIcon })
            .addTo(map)
            .bindPopup('Your estimated location');
      }
    }
  }, [userIcon]);

  const findMyLocation = () => {
    setIsLoading(true);
    setError('');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const newCenter: LatLngExpression = [position.coords.latitude, position.coords.longitude];
        
        if (mapInstanceRef.current) {
            mapInstanceRef.current.setView(newCenter, 13);
        }
        if (userMarkerRef.current) {
            userMarkerRef.current.setLatLng(newCenter);
        }

        setIsLoading(false);
      }, () => {
        setError('Location access was denied. Showing default area.');
        setIsLoading(false);
      });
    } else {
      setError('Geolocation is not supported by this browser.');
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Find Support Near You</h2>
        <p className="text-gray-600 mb-6">Discover licensed therapists and wellness coaches in your area.</p>

        <div className="mb-6">
          <button
            onClick={findMyLocation}
            disabled={isLoading}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
               <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Searching...
              </>
            ) : (
              <>
                <Search className="w-5 h-5 mr-2" />
                Find Therapists Near Me
              </>
            )}
          </button>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        <div className="h-[500px] w-full bg-gray-200 rounded-xl overflow-hidden z-0">
           <div ref={mapContainerRef} style={{ height: '100%', width: '100%' }} />
        </div>
      </div>
    </div>
  );
};

export default Support;

