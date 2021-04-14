import GoogleMapReact from 'google-map-react'
import { config } from '../config/index'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'
import {useState} from 'react'

export default function Map({ eventData, center, zoom }) {
     const[locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map(ev => {
        if (ev.categories[0].id === 8) {
            return <LocationMarker lat={ev.geometries[0].coordinates[1]}
                lng={ev.geometries[0].coordinates[0]} 
                onClick={()=>setLocationInfo({id:ev.id, title:ev.title})}/>
        }
        return null
    })
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: config.GoogleApiKey }}
                defaultCenter={center}
                defaultZoom={zoom}>
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo}/>}
        </div>
    )
}
Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}
