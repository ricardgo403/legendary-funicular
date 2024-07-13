import { useState } from "react";

export default function Button() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }
    return (
        <button
            onClick={handleClick}
            type="button"
            className="bg-blue-500 hover:bg-blue-700 rounded text-white font-bold px-4 py-2"
        >
            I have been clicked {count} times
        </button>
    );
}