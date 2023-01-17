import React, { useState } from "react";



export function App() {

    var timex = new Date().toLocaleTimeString();
    //console.log(timex);

    const [curtime, updatetime] = useState(timex);

    return (
        <div>
            <h1>{timex}</h1>
            <button onClick={() => updatetime(new Date().toLocaleTimeString())}>
                Update Time
            </button>
        </div>
    );
}