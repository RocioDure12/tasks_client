import React, { useState } from 'react';

interface PanelProps {
    children: React.ReactNode;
    isActive: boolean;
    onShow: () => void;
  }

const Panel: React.FC<PanelProps> =({children, isActive, onShow})=>{
    return(
        <section>
            {isActive ? (
                <p>{children}</p>
            ):
            (<button onClick={onShow}>INTERRUPTOR</button>)}

        </section>
    );
};

const Room:React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return(
        <>
        <Panel 
  
            isActive={activeIndex === 0}
            onShow={() => setActiveIndex(0)}
        >💡 LIGHT ON 
        </Panel>
            
        <Panel
           
            isActive={activeIndex === 1}
            onShow={() => setActiveIndex(1)}
        >🌚 LIGHT OFF
        </Panel>
        
        </>
    )

}

export default Room;