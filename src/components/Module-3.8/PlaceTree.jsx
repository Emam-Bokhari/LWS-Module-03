/* eslint-disable react/prop-types */
import { Fragment } from "react";

export default function PlaceTree({ placesById, id, onComplete, parentId }) {

    // console.log(id,placesById)
    const place = placesById[id]
    // console.log(place)
    const childIds = place.childIds
    // console.log(childIds)

    return (
        <Fragment>
            <li className="mt-3" >{place.title}
                <button
                    onClick={() => onComplete(parentId, id)}
                    className="bg-indigo-500 text-white px-3 py-1 rounded-sm ml-5" >Complete</button>
                {childIds.length > 0 && (
                    <ol className="list-inside list-decimal ml-5" >
                        {childIds.map((childId) => (
                            <PlaceTree
                                key={childId}
                                id={childId}
                                parentId={id}
                                placesById={placesById}
                                onComplete={onComplete} />
                        ))}
                    </ol>
                )}
            </li>


        </Fragment>
    )
}