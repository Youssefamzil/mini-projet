import { useEffect, useState, useRef } from "react";

export default function Counter() {
  const [displayName, setDisplayName] = useState(true);
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());
  
  const timerRef = useRef(null);  // useRef to store the timer ID

  // Update time every second
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup the timer on component unmount
    return () => {
      clearInterval(timerRef.current);
      console.log('deaed')
    };
  }, []); 

  // Toggle display name
  const toggleName = () => {
    setDisplayName(prevState => !prevState);
  };

  // Handle document click
  useEffect(() => {
    const handleClick = () => {
      alert('Body clicked!');
    };

    document.addEventListener('click', handleClick);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []); 

  return (
    <div>
      <button onClick={toggleName}>{displayName.toString()}</button>
      <div>
        Date: <span>{time.toLocaleString()}</span>
      </div>
      <h1>Il y a {count} secondes</h1>
      <button onClick={() => setCount(prevState => prevState + 5)}>
        CLICK !!
      </button><br />
      <button onClick={() => setCount(0)}>
        RESET !!
      </button><br />
      <button onClick={() => setCount(prevState => prevState - 5)}>
        DECREMENT !!
      </button>
    </div>
  );
}
