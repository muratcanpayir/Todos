import { useState } from "react";
import './App.css';


function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [active,setActive]=useState([]);
  const [completed,setCompleted]=useState([]);

  const onClick = ((e) => {
    e.preventDefault();
    setList([...list,text]);
    setText("");
  })
  const onChangeInput = ((e) => {
    setText(e.target.value);
    console.log(text);
  })
  const handleChange=((e)=>{
    const lii=e.target.checked;
    if(lii===true){
      e.target.parentElement.parentElement.classList="completed";
    }
    else{
      e.target.parentElement.parentElement.classList.remove("completed");
    }   
  })
  const removeButton=((e)=>{
    e.target.parentElement.parentElement.remove();
  })
  const handleChangeAll=((e)=>{
    const handle=e.target.checked;
    console.log(handle);
  })
  const all=((e)=>{
    e.preventDefault();
    const a=e.target.value;
    if(e.target.value==="All"){
      list.map((l,i)=>(
        <li key={i}>
                <div className="view">
                  <input className="toggle" type="checkbox" onChange={handleChange}></input>
                  <label>{l}</label>
                  <button className="destroy" onClick={removeButton}></button>
                </div>
              </li>
      ))
    }  
    else if(e.target.value=="Active" && e.target.className=="active"){
      console.log("aktif");
      setActive([text]);
      active.map((l,i)=>(
        <li key={i}>
                <div className="view">
                  <input className="toggle" type="checkbox" onChange={handleChange}></input>
                  <label>{l}</label>
                  <button className="destroy" onClick={removeButton}></button>
                </div>
              </li>
      ))

    }
  })
  const activeList=((e)=>{
    e.preventDefault();
  })
  const completedList=((e)=>{
    e.preventDefault();
  })


  return (
    <div className="App">

      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form>
            <input value={text} className="new-todo" placeholder="What needs to be done?" autoFocus onChange={onChangeInput}></input>
            <button className="ignore" onClick={onClick}></button>
          </form>
        </header>

        <section className="main">
          <input className="toggle-all"  type="checkbox" onChange={handleChangeAll} ></input>
          <label htmlFor="toggle-all" >
            Mark all as complete
          </label>

          <ul className="todo-list">
            {
              
              list.map((l,i)=>(
                <li key={i}>
                <div className="view">
                  <input className="toggle" type="checkbox" onChange={handleChange}></input>
                  <label>{l}</label>
                  <button className="destroy" onClick={removeButton}></button>
                </div>
              </li>
              ))
            }
         </ul>
        </section>


        <footer className="footer">


          <span className="todo-count">
            <strong>2</strong>
            items left
          </span>

          <ul className="filters">
            <li>
              <button value="All" className="selected" onClick={all}>All</button>
            </li>
            <li>
              <button value="Active" onClick={all}>Active</button>
            </li>
            <li>
              <button value="Completed" onClick={all}>Completed</button>
            </li>
          </ul>


          <button className="clear-completed">
            Clear completed
          </button>
        </footer>
      </section>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>

    </div>
  );
}

export default App;
