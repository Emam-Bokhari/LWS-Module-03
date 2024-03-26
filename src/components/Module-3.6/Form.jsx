import { Fragment, useState } from "react";

export default function Form() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const fullName = firstName + " " + lastName

    return (
        <Fragment>
            <div>

                <h2 className="font-medium text-2xl" >Let's check
                    you in:</h2>
                <br />
                <label htmlFor="firstName">First Name:</label>

                <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="border-2 border-gray-500" type="text" name="" id="" />

                <br />
                <br />

                <label htmlFor="lastName">Last Namel:</label>

                <input 
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
                className="border-2 border-gray-500" type="text" name="" id="" />

                <p className="mt-2" >You ticket will be issued in: <span className="text-red-500 font-medium" >{fullName}</span></p>

            </div>
        </Fragment>
    )
}