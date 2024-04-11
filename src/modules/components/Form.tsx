import { useState } from 'react';

export default function Principal(){
    const[showHint, setShowHint]=useState(false);
    return(
        <section>
            {showHint && 
                <p>Hint: Your favorite city?</p>
            }

            <Form/>
            {showHint ? (
                <button onClick={()=>{
                    setShowHint(false);
                }}>Hide hint</button>
            ) :(
                <button onClick={()=>{
                    setShowHint(true);
                }}>Show hint</button>

            )}

        </section>
    )
}

function Form() {
    const [text, setText] = useState('');
    return (
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
      />
    );
  }
  