import React from 'react'


const LocationInfoBox = ({info}) => {
    return (
        <div className="location-info">
            <h1>Location ID: <strong>info.id</strong></h1>
            <h1>Location Title: <strong>info.title</strong></h1>
        </div>
    )
}


export default LocationInfoBox;
