import React from "react";

interface PanelProps {
    onIncrement: () => void;
    onDecrement: () => void;
}

const Panel: React.FC<PanelProps> = ({ onDecrement, onIncrement }) => {
    return (
        <>
            <button onClick={onDecrement}>-</button>
            <button onClick={onIncrement}>+</button>
        </>
    );
}

export default Panel;
