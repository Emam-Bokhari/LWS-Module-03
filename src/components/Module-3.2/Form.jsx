import { Fragment } from "react";

export default function Form({ status = "empty" }) {

    // visual states: empty,typing,submitting,success,error

    if (status === "success") return <Fragment>
        <h1 className="font-bold" >Thats right!</h1>
        <hr />
    </Fragment>

    return (
        <Fragment>
            <h2>City quiz</h2>
            <p>What city is located on two continents?</p>
            <form>

                <textarea className="border-2 border-black" disabled={status === "submitting"}></textarea>

                <br />

                <button className={`${(status === "submitting" || status === "empty") ? "bg-gray-300 cursor-not-allowed" : "bg-indigo-500 cursor-pointer"} px-3 py-1 rounded-sm cursor-pointer`} disabled={status === "empty" || status === "submitting"}>Submit</button>

                {status === "submitting" && <p>Loading...</p>}

                {status === "error" && <p className="text-red-500">That was an error!</p>}

            </form>
            <hr />
        </Fragment>
    )
}