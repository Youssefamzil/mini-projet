export default function Fruit({fruits}){
    const displayfruits = () => fruits.map(fruit =>
             <li>{fruit}</li>
        )
    
    return <>
    <h1>FRUITS :</h1>
    <ul>
        {displayfruits()}
    </ul>
    </>
}