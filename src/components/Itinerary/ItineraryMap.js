import React from "react";
//useContext
import { useCosts } from "../../context/ShowDataContext";
//firestore
import db from "../../firebase";
import { collection, query, orderBy } from "@firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
//mapbox
import  Map , { NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
//components
import ItineraryMarker from "./ItineraryMarker";


const ItineraryMap = ({ mapRef }) => {

  const { trip } = useCosts();
  const q = query(collection(db, trip), orderBy("index", "asc"));
  const [timetable, loading, error] = useCollectionData(q);
  
  return (
    <Map
     mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      initialViewState={{
        longitude: -123.113952,
        latitude: 49.2608724,
        zoom: 10,
        maxZoom: 15,
        minZoom: 8,
      }}
      mapStyle="mapbox://styles/zoewang0401/cllq8pn4v003h01r60p2r5ofw"
      style={{ width: "100%", height: "90vh" }}
      ref={mapRef}
      mapLib={import('mapbox-gl')}
    >
      <NavigationControl position="top-left" />
      {timetable?.map((item) => {
        return (
          <div key={item.id}>
            <ItineraryMarker path={`${trip}/${item.name}/events`} />;
          </div>
        );
      })}
    </Map>
  );
};
export default ItineraryMap;
