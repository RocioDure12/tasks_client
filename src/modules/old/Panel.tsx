import React from "react";

interface PanelProps {
    increment: () => void;
    decrement: () => void;
}

const Panel: React.FC<PanelProps> = ({ decrement, increment }) => {
    return (
        <>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </>
    );
}

export default Panel;
