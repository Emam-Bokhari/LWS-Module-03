import { Fragment, useState } from "react";
import Panel from "./Panel";

export default function Accordian() {

    const [activeIndex, setActiveIndex] = useState(0)



    return (
        <Fragment>

            <h2 className="font-medium text-2xl mb-2" >Learn with Sumit</h2>

            <Panel
                title="Paid Course"
                isActive={activeIndex === 0 && true}
                onActive={()=>setActiveIndex(0)}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum unde deserunt, neque pariatur expedita ex itaque illo vitae, soluta odit fuga veritatis id tenetur excepturi cupiditate. Mollitia nesciunt excepturi ab.
            </Panel>

            <Panel
                title="Free Course"
                isActive={activeIndex === 1 && true}
                onActive={()=>setActiveIndex(1)}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex mollitia quasi error explicabo deleniti voluptatibus sed facere necessitatibus, ut excepturi, aut nulla quod. Facere officia, provident odit repellat eum ex?
            </Panel>

        </Fragment>
    )
}