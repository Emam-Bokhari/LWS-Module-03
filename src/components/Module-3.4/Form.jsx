import { Fragment, useState } from "react";

export default function Form() {

    const [inputs, setInputs] = useState([{
      id: 1,
        label: "input"
    }])
    console.log(inputs)
    function handleAddInput() {

        const nextId = inputs[inputs.length - 1].id + 1
        setInputs([
            ...inputs,
            {
                id: nextId,
                label: "input"
            }
        ])
    }

    return (
        <Fragment>

            {inputs.map((input) => (
                <div className="mb-3" key={input.id} >
                    <input className="border-2 border-gray-500" type="text" name="" id="" />
                </div>
            ))}

            <div className="mt-3">
                <button
                    onClick={handleAddInput}
                    className="bg-indigo-500 px-3 py-1 rounded-md text-white hover:bg-indigo-600" >
                    Add Input
                </button>
            </div>

        </Fragment>
    )
}