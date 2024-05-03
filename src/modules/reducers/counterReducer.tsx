const inicialState={
    counter:0
}

interface Action{
    type:string;
    payload?:any
}

const counterReducer=(state=inicialState, action:Action)=>{
    switch(action.type){
        case 'increment':
            return{...state, counter:state.counter +1};
        case 'decrement':
            return { ...state, counter: state.counter > 0 ? state.counter - 1 : state.counter };
    }


}

export default counterReducer