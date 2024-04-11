import Item from "../components2/Item"
import "../styles/Container.css"

export default function PackingList(){
    return(
        <section>
        <h2>Alice Ride's Packing List</h2>
        <ul>
            <Item

                isPacked={true}
                name="coat"
            />
            <Item
                isPacked={false}
                name="sandals"
            />
            <Item
                isPacked={true}
                name="scarf"
            />

        </ul>

    </section>
    )

    
}