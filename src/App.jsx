import React, { useState } from 'react';

const App = () =>{
     const [inputList, setInputList] = useState();
     const [items,setItems] = useState([]);


    const itemEvent=(event)=>{
        setInputList(event.target.value);
    }
    
  const  listofitems =() =>{

  }
    
    return (
    <>
    <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add Items" onChange= {itemEvent} />
          <button onClick={listofitems}> + </button>

            <ol>
                {/* <li>{inputList}</li> */}
            {Items.map( (itemval) =>{
                return <li> {itemval}</li>
            })}
            </ol>


        </div>
    </div>
    </> 
)
}
export default App;