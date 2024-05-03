import React from "react";
import Panel from "./Panel";
import { useAppSelector, useAppDispatch } from "../../hooks"
import { decrement, increment } from "../reducers/counterSlice"


export default function Counter() {
    const counter = useAppSelector(state => state.counter.value)
    const dispatch = useAppDispatch()


    return (
        <section className="card">
            <div>Contador: {counter}</div>
            <Panel
                decrement={() => dispatch(decrement())}
                increment={() => dispatch(increment())}
            />
        </section>
    );
}
