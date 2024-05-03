import { useDispatch } from 'react-redux';

const dispatch=useDispatch()

export const onIncrement=()=>{
    dispatch({
        type:'increment',
    });
    }

export const onDecrement=()=>{
    dispatch({
        type:'decrement',
    
    });
    }


