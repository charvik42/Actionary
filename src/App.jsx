import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';
import '@fontsource/poppins';

function App() {
  const [todo, setTodo] = useState("") //input text
  const [todos, setTodos] = useState([]) //array of todos
  const [showFinished, setshowFinished] = useState(false)
  const notify = () => toast("Wow so easy!");

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos)
    }
  }, [])
  

  const savetoLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
  }
  
  

  const handleEdit = (e, id) =>{
    let t = todos.filter(i=>i.id===id);
    setTodo(t[0].todo);
    let newTodos = todos.filter(item=>{
      return item.id !== id;
    });
    setTodos(newTodos);
    savetoLS();
  }
  const handleDelete = (e, id) =>{
    let newTodos = todos.filter(item=>{
      return item.id !== id;
    });
    setTodos(newTodos);
    savetoLS();
  }
  const handleAdd = () =>{
    setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}])
    setTodo("")
    savetoLS();
  }
  const handleChange = (e) =>{
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    console.log(index);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    savetoLS();
  }
  

  return (
    <>
    <Navbar/>
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 border border-slate-800 bg-violet-100 min-h-[80vh] md:w-[35%]">
      <h1 className='font-bold text-center text-lg'>Actionary - Manage your Todos at One Place</h1>
          <div className="addTodo my-5 flex flex-col gap-4">
            <h2 className='text-lg font-bold'>Add a Todo</h2>
            <div className="flex">
            <input onChange={handleChange} value={todo} type="text" className='w-full border border-slate-500 rounded-full px-5 py-1' />
            <button onClick={handleAdd} disabled={todo.length<=3} className='bg-slate-800 mx-2 hover:bg-slate-950 disabled:bg-slate-500 p-4 text-sm font-bold py-2 text-white rounded-full'>Save</button>
            </div>
          </div>
          <input className='my-4' id="show" onChange={toggleFinished} type="checkbox" checked={showFinished}/>
          <label className='my-2' htmlFor="show"> Show Finished</label>
          <div className='h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2'></div>
          <h2 className='text-lg font-bold'>Your Todos</h2>
          <div className="todos">
            {todos.length===0 && <div className='m-5'>No Todos to display</div>}
            {todos.map(item=>{

            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex my-3 justify-between">
              <div className='flex gap-5'>
              <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id=""/>
              <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
              </div>
              <div className="buttons flex h-full">
                <button onClick={(e)=>handleEdit(e, item.id)} className='bg-slate-800 hover:bg-slate-950 p-2 text-sm font-bold py-1 text-white rounded-md mx-1'><FaEdit /></button>
                <button onClick={(e)=>{handleDelete(e,item.id)}} className='bg-slate-800 hover:bg-slate-950 p-2 text-sm font-bold py-1 text-white rounded-md mx-1'><AiFillDelete/></button>
              </div>
            </div>
            })}
          </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
