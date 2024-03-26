/* eslint-disable react/prop-types */
import { Fragment } from "react";

export default function PlaceTreeComplex({ place }) {

    // console.log(place)
    const childPlaces = place.childPlaces
    console.log(childPlaces)

    return (
        <Fragment>
            <p>{place.title}</p>
            {childPlaces.length > 0 && (
                <ol className=" ml-5 list-decimal list-inside" >
                    {childPlaces.map((place) => (
                        <PlaceTreeComplex key={place.id} place={place} />
                    ))}
                </ol>
            )}
        </Fragment>
    )
}