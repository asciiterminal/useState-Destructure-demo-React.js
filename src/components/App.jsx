import React, {useState} from "react";


function App(){
  // const state = useState(123);//This re-renders in real-time
  //rather than constantly calling DOM,in other words its faster.



  //in ES6 there is a method called "Destructure" which as defined destructures
  //complex codes like Objects and Arrays.
  //For example:
  // const rgb = [9, 132, 227]//(amount of: red,green,blue)
  //This looks like a mess so we will destructure it
  // const [red, green,  blue] = [9, 132, 227] This destructure gives
  //us an insight of how the array works if we log: console.log(blue)
  //the output on the console will we [227].

  //Destructure of a state
  const [count, setCount] = useState(0);




function increase(){
  setCount(count + 1)
 

}

function decrease(){
  setCount(count - 1)
}

// ReactDOM.render(

  return( <div className="container">
    <h1>{count}</h1>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
  </div>
  // document.getElementById("root")
);
}

export default App;
