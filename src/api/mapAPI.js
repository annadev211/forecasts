import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import {useEffect, useRef} from "react";
import {TOKEN_MAPBOX} from "../config/config";

mapboxgl.accessToken = TOKEN_MAPBOX;

const Map = ({coordinates}) => {
    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [coordinates.longitude, coordinates.latitude],
            zoom: coordinates.zoom
        });
    });

    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    );

}

export default Map