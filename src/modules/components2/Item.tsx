interface ItemProps {
    name: string;
    isPacked:boolean
}

const Item: React.FC<ItemProps> = ({name, isPacked})=>{
    return(
        <li>
            {isPacked ? 

            <del>(name+ '✔')</del>
            
             : (name + '❌')}
        </li>
    )

}

export default Item;