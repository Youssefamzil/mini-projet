import {useEffect, useState} from "react";
export default function Counter(){

    const [displayName, setDisplayName] = useState(true)
    const [count, setCount] = useState(0)
    const [time, setTime] = useState(new Date())
    let timer= null

        // Méthode fléchée pour conserver 'this' dans le bon contexte

    useEffect(()=>{
        
        timer = setInterval(()=>{
            setTime(new Date())
        },1000);
        return () => {
            clearInterval(timer);  // Clear the timer to avoid memory leaks
          };
  
    },[]); 
    useEffect(()=>{
        
        ToggleName=()=>{
            setState(prevState => {
             return {displayName :!prevState.displayName}
            }        
             )
         }
        return () => {
            clearInterval(timer);  // Clear the timer to avoid memory leaks
          };
  
    },[]); 

    useEffect(()=>{
        const handleClick = () => {
            alert('Body clicked!');
          };
        document.addEventListener('click',handleClick);
        
    },[]
   ); 

    return<>
    <div>
    <button onClick={this.ToggleName} >{this.state.displayName.toString()}</button>
        Date :<span>{time.toLocaleString()}</span>
        <h1>il ya {count} secondes</h1>
        <button onClick={()=>{
            setCount(prevState =>{
                return prevState + 5
            })
        }}
        >
            CLICK !!
        </button><br></br>
        <button onClick={()=>{
            setCount(0)
        }}
        >
            REST !!
        </button><br></br>
        <button onClick={()=>{
            setCount(prevState =>{
                return prevState  -5
            })
        }}
        >
            DECREMENT !!
        </button>
    </div>
    
    </>
}
