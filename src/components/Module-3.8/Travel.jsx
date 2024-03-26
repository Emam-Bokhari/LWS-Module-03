import { Fragment, useState } from "react";
import { initialTravelPlan } from "./places";
import PlaceTree from "./PlaceTree";

export default function Travel() {

    const [plan, setPlan] = useState(initialTravelPlan)
    // console.log(plan)

    const root = plan[0]
    const planetIds = root.childIds
    // console.log(root,planets)
    return (
        <Fragment>

            <h2 className="text-2xl font-medium" >
                Places to visit
            </h2>

            <ol>
                {planetIds.map((placeId) => (
                    <PlaceTree key={placeId} id={placeId} placesById={plan} />
                ))}
            </ol>


        </Fragment>
    )
}