import React, { useState, useEffect } from "react";

function HooksView(props) {

    useEffect(() => {
        console.log("render");
        return () => console.log("unmount");
    }, [])
    const [count, setCount] = useState(props.count || 0);
    const increaseHandler = () => {
        setCount(count + 1);
    }

    const decreaseHandler = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <p> Count is : {count}</p>
            <button onClick={increaseHandler}>Increase Count</button>
            <button onClick={decreaseHandler} style={{ marginLeft: '10px' }}>Decrease Count</button>
        </div>
    );

}
export default HooksView