import React from "react";
import Panel from "./Panel";
import { useDispatch, useSelector } from 'react-redux'
import { onDecrement, onIncrement } from "../reducers/counterActions";

export default function Counter() {
    const counter = useSelector((state) => state.counter); 
    const dispatch = useDispatch();

    return (
        <section className="card">
            <div>Contador: {counter}</div>
            <Panel
                onDecrement={() => dispatch(onDecrement())}
                onIncrement={() => dispatch(onIncrement())}
            />
        </section>
    );
}
