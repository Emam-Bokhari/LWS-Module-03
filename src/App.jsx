import { Fragment } from "react";
import Form from "./components/Module-3.2/Form";

export default function App() {

  const statuses = ["empty", "typing", "submitting", "success", "error"]

  return (
    <Fragment>
     
      {statuses.map((status) => (
        <Form key={status} status={status} />
      ))}
    </Fragment>
  )
}