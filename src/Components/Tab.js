import React, { useState } from 'react';
import styles from './style.module.css';

const Tab = (props) => {

    const {tasks} = props;
    const [selected, setSelected] = useState(0);

    const selectTab = (e, index) => {
        setSelected(index);
    }

    return ( 
        <div className="container">
            <div className="row my-2 justify-content-start">
                {
                    tasks.map((task, i) => 
                        <div key={i} onClick={e => selectTab(e, i)} className={"col-2 mx-2 border border-dark " + ((selected==i) ? styles.selected : "")}>{task.label}</div>
                    )
                }
            </div>
            <div className="row my-2">
                <div className="col-12 border border-dark text-left" style={{minHeight: "300px"}}>
                    {tasks[selected].content}
                </div>
            </div>
        </div>
     );
}
 
export default Tab;