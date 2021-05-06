import React from "react";
import { useState } from "react";

const Textfield = () => {
    const [input, setInput] = useState('');

    return (
        <div>
            <input
                onChange={(e) => {
                    setInput(e.target.value);
                }}
                placeholder="Enter Guido Text"
            />
            <div>
                <h6>Show output here</h6>
                {input}
            </div>

        </div>
    )
}

export default Textfield;