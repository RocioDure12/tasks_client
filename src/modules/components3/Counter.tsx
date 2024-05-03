import React from "react";
import Panel from "./Panel";
import { useDispatch, useSelector } from 'react-redux'
import { onDecrement, onIncrement } from "../reducers/counterActions";
import { Store } from "../reducers/counterReducer";

export default function Counter() {
    const counter = useSelector<Store, number>((state) => state.counter); 
    const dispatch = useDispatch();

    return (
        <section className="card">
            <div>Contador: {counter}</div>
            <Panel
                onDecrement={() => onDecrement()}
                onIncrement={() => onIncrement()}
            />
        </section>
    );
}
