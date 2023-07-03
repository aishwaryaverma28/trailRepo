import { useState } from "react";
import data from "./data";



function Accordian() {
    const [isIndex, setIsIndex] = useState(0);

    function accordianClick(index) {
        if (index === isIndex) {
            setIsIndex(0);
        } else {
            setIsIndex(index);
        }

    }
    return (
        <div className="App">
            <h1>QUESTION & ANSWER</h1>
            {data.map(item => {
                return (
                    <div className="text_container">
                        <div className="question">
                            <p>{item.ques}</p>
                            <button onClick={() => accordianClick(item.id)} className="toggle_btn">
                                {(isIndex === item.id) ? <span>minus</span> : <span>plus</span>}
                            </button>
                        </div>

                        <div
                            className={(isIndex === item.id) ? "answer display_answer" : "answer"}
                        ><p>{item.ans}</p>
                        </div>
                    </div>
                )
            })}


        </div>
    );
}

export default Accordian;