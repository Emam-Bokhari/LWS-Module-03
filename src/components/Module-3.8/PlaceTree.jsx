/* eslint-disable react/prop-types */
import { Fragment } from "react";

export default function PlaceTree({ placesById, id }) {

    // console.log(id,placesById)
    const place = placesById[id]
    // console.log(place)
    const childIds = place.childIds
    // console.log(childIds)

    return (
        <Fragment>
            <li>{place.title}</li>
            {childIds.length > 0 && (
                <ol>
                    {childIds.map((id) => (
                        <PlaceTree
                            key={id}
                            id={id}
                            placesById={placesById} />
                    ))}
                </ol>
            )}



        </Fragment>
    )
}