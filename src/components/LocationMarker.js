
import { Icon } from '@iconify/react';
import fireAlert from '@iconify-icons/mdi/fire-alert';


export default function LocationMarker({ lat, lng, onClick }) {

    return (
        <div className="location-marker">
            <Icon icon={fireAlert} className="location-icon"></Icon>
        </div>
    )
}