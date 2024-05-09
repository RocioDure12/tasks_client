import React, { useContext } from "react";
import Panel from "./Panel";
import { useAppSelector, useAppDispatch } from "../../hooks"
import { decrement, increment } from "../slicers/counterSlice"
import ThemeContext from "../context/ThemeContext";
import useThemeContext from "../hooks/useThemeContext";


export default function Counter() {
    const counter = useAppSelector(state => state.counter.value)
    const dispatch = useAppDispatch()

    //const themeContext = useContext(ThemeContext)
    const themeContext = useThemeContext()

    return (
        <section className={`card`}>
            {themeContext.theme}
            <div>Contador: {counter}</div>
            <Panel
                decrement={() => dispatch(decrement())}
                increment={() => dispatch(increment())}
            />
        </section>
    );
}
