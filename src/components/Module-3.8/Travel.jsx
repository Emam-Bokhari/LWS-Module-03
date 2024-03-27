import { Fragment, useState } from "react";
import { initialTravelPlan } from "./places";
import PlaceTree from "./PlaceTree";

export default function Travel() {

    const [plan, setPlan] = useState(initialTravelPlan)
    // console.log(plan)

    const root = plan[0]
    const planetIds = root.childIds
    // console.log(root,planets)

    function handleComplete(parentId, childId) {
        const parent = plan[parentId]
        // console.log(parentId, childId, parent)

        const nexParent = {
            ...parent,
            childIds: parent.childIds.filter((id )=> id !== childId)
        }

        setPlan({
            ...plan,
            [parentId]:nexParent
        })
    }

    return (
        <Fragment>

            <h2 className="text-2xl font-medium" >
                Places to visit
            </h2>

            <ol className="list-decimal list-inside ml-5" >
                {planetIds.map((placeId) => (
                    <PlaceTree
                        key={placeId}
                        id={placeId}
                        placesById={plan}
                        onComplete={handleComplete}
                        parentId={0} />
                ))}
            </ol>


        </Fragment>
    )
}