import { Fragment } from "react";
// import RefectorPointer from "./components/Module-3.4/RefectorPointer";
import Form from "./components/Module-3.4/Form";
// import Form from "./components/Module-3.2/Form";

export default function App() {

  // const statuses = ["empty", "typing", "submitting", "success", "error"]

  return (
    <Fragment>
      {/* {statuses.map((status) => (
        <Form key={status} status={status} />
      ))} */}

      {/* <RefectorPointer /> */}

      <Form />

    </Fragment>
  )
}