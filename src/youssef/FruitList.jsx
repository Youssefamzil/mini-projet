import {useState} from "react";
// import './FruitList.css';
export default function FruitList (){
    const [fruits, setFruits] = useState('')
    const [fruitList, setFruitList] = useState([])

    const displayfruits = () => fruitList.map((fruit,fruitkey) => <li key={fruitkey}>{fruit}</li> ) 
//key pour afficher dans un tableau 

    const handleInput = () => {
        const fruitValue = document.querySelector('#fruit').value 
        setFruits(fruitValue)
    }
    const handleAddFruit = (e) => {
        e.preventDefault()
        setFruitList([...fruitList,fruits])
        document.write(fruits)
    } 
// e => pour rester dans la meme page 
    return<>
    <body>
    <div id="div1">
        <h1></h1>
        <h1>Fruit List  :</h1>
            <form>
                <input type="text" id="fruit"  onChange={handleInput}/>
                <input type="submit" value='Add fruit' onClick={handleAddFruit}></input>

            </form>
            <ul>
                {displayfruits()}
            </ul>
    </div> 
     
   
    </body>
    </>
}