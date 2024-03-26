import { Fragment, useState } from "react";
import PlaceTree from "./PlaceTreeComplex";
import { initialTravelPlan } from "./placesData";

export default function TravelComplex() {

    const [plan, setPlan] = useState(initialTravelPlan)

    const planets = plan.childPlaces
    // console.log(planets)

    return (
        <Fragment>

            <h2 className="text-2xl font-medium" >
                Places to visit
            </h2>

            <ol className="list-disc list-inside ml-5" >
                {planets.map((place) => (
                    <PlaceTree key={place.id} place={place} />
                ))}
            </ol>

        </Fragment>
    )
}
