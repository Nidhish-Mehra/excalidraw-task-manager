import React,{useState, useEffect} from 'react'
import M from 'materialize-css'
import Navbar from './Navbar'

function NewTask() {
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
    const [status,setStatus] = useState(false)
    const [due,setDue] = useState("")
    const createTodo = ()=>{
        fetch("/createTodo",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                title,
                content,
                status,
                created:Date.now(),
                due
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html:data.error, classes:"#c62828 red darken-3"})
            }
            else{
                M.toast({html: data.message, classes:"#43a047 green darken-1"})
            }
        }).catch(error=>{
            console.log(error)
        })
    }

    return (
        <div >
            <Navbar/>
            <div className="valign-wrapper" style={{marginLeft:"80px",paddingTop:"200px"}}>
            <div className="card #424242 grey darken-3" style={{maxWidth:'500px', padding: '10px' ,margin: 'auto', textAlign: 'center'}}>
          <input
          style={{color:"#ffffff"}}
          placeholder="Title" 
          type="text" 
          value={title} 
          onChange={(e)=>{
              setTitle(e.target.value)
            }}
          />
          <input 
          style={{color:"#ffffff"}}
          placeholder="Brief about the task" 
          type="text"
          value={content} 
          onChange={(e)=>{
              setContent(e.target.value)
            }}
          />
          <input
          style={{color:"#ffffff"}}
          placeholder="Deadline" 
          type="date"
          value={due} 
          onChange={(e)=>{
              setDue(e.target.value)
            }}
          />
          <button className="waves-effect waves-light btn large-btn"
          onClick={()=>createTodo()}
          >
              Create Task
          </button><br/>
      </div>
      </div>
            
        </div>
    )
}

export default NewTask


      