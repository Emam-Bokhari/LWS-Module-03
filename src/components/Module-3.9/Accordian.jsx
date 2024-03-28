import { Fragment } from "react";
import Panel from "./Panel";

export default function Accordian() {
    return (
        <Fragment>
            <h2 className="font-medium text-2xl mb-2" >Learn with Sumit</h2>
            <Panel title="Paid Course">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum unde deserunt, neque pariatur expedita ex itaque illo vitae, soluta odit fuga veritatis id tenetur excepturi cupiditate. Mollitia nesciunt excepturi ab.
            </Panel>
            <Panel title="Free Course">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex mollitia quasi error explicabo deleniti voluptatibus sed facere necessitatibus, ut excepturi, aut nulla quod. Facere officia, provident odit repellat eum ex?
            </Panel>
        </Fragment>
    )
}