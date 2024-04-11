import "../styles/Card.css"
import "../styles/Container.css"

interface DrinkProps{
    name:string
}

const Drink: React.FC<DrinkProps> = ({name})=>{
    return(
        <section className="card">
        {name === 'tea' ?
     
            <dl>
                   <h2>{name} 🍵</h2>
              <dt>Part of plant</dt>
              <dd>leaf</dd>
              <dt>Caffeine content</dt>
              <dd>15–70 mg/cup</dd>
              <dt>Age</dt>
              <dd>4,000 years</dd>
            </dl>
            :
         
            <dl>
                <h2>{name} ☕</h2>
              <dt>Part of plant</dt>
              <dd>bean</dd>
              <dt>Caffeine content</dt>
              <dd>80–185 mg/cup</dd>
              <dt>Age</dt>
              <dd>1,000 years</dd>
            </dl>
    
            
        }
        </section>
        
    )
    
    
      
}
  
  export default function DrinkList() {
    return (
      <div className="container">
        <Drink name="tea" />
        <Drink name="coffee" />
      </div>
    );
  }
  
//Otra solucion es utilizar una estructura if else if
//si name es igual a te part, caffeine y age tienen la info correspondiente a te
//(else if) pero si name es igual a coffee part, caffeine y age tienen la info correspondiente a coffee