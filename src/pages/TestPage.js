import * as React from 'react';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useRef } from 'react';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
const apikey ="pk.eyJ1Ijoiem9ld2FuZzA0MDEiLCJhIjoiY2xscTdnMzl0MDFkaDNtcGg1eXljNWdtOSJ9.FGTJXPEGd-nO9pf3Vw0Nww";
const TestPage =()=>{
  const mapRef = useRef(null);

    //fly to function
    const NavigateButton = () => {
      mapRef.current?.flyTo({ center: [83, 23], zoom: 13 , essential: true});
    };

    return (
    <>
    <h1>MapArea</h1>
    <button onClick={NavigateButton}>Fly</button>
    <Map
     mapboxAccessToken={apikey}
    mapLib={import('mapbox-gl')}
    initialViewState={{
      longitude: -100,
      latitude: 40,
      zoom: 3.5
    }}
    style={{width: 600, height: 400}}
    mapStyle="mapbox://styles/zoewang0401/cllq8pn4v003h01r60p2r5ofw"
    ref={mapRef}
  /> <LocalizationProvider dateAdapter={AdapterDayjs}>
 
    <DatePicker label="Basic date picker" />
  
</LocalizationProvider>
  </>);
};
export default TestPage;



