import React,{useEffect, useState} from 'react'
import Navbar from './Navbar';
import M from 'materialize-css'

function ViewTasks() {
    const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/readTodos", {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result)
      });
  }, []);

  const markCompleted = (id)=>{
      fetch('/markCompleted',{
          method:'put',
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify({
              _id:id
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
  const deleteTask = (id)=>{
      fetch('/deleteTask',{
          method:'put',
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify({
              _id:id
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
        <div>
            <Navbar/>
            <div style={{marginLeft:"80px"}}>
                            <div className="row">
            {data.map((item) => {
                let temp = item.due;
                let DueDate = new Date(temp).toLocaleDateString();
                let temp2 = item.created;
                let createdDate = new Date(temp2).toLocaleDateString();
                let temp3 = item.completedOn;
                let completedDate = new Date(temp3).toLocaleDateString();
                let today = new Date
                let difference = Math.floor(( (new Date(DueDate).getTime()) - new Date(today).getTime() )  / (1000 * 3600 * 24))
                if(difference<0){
                    difference = "Deadline Passed"
                }
                if(item.status){
                    return (
                        <div className="col s12 m4">
                        <div style={{paddingLeft:"20px",paddingRight:"20px"}} >
                        <div class="card-panel green">
                          <div class="card-content white-text">
                            <span class="card-title">{item.title}</span>
                            <p>{item.content}</p>
                            <span>Assigned on: {createdDate}</span><br/>
                            <span>Deadline: {DueDate}</span><br/>
                            <span>Completed On: {completedDate}</span><br/>
                          </div>
                          <div className="card-action">
                          <button 
                            className="btn waves-effect waves-light red"
                            onClick={()=>{
                                deleteTask(item._id)
                                window.location.reload()
                            }}
                            >
                                Delete Task
                            </button>
                        </div>
                          
                          
                        </div>
                      </div>
                      </div>
                    );
                }else{
                    return (
                        <div className="col s12 m4">
                        <div style={{paddingLeft:"20px",paddingRight:"20px"}} >
                        <div class="card-panel red">
                          <div class="card-content white-text">
                            <span class="card-title">{item.title}</span>
                            <p>{item.content}</p>
                            <span>Assigned on: {createdDate}</span><br/>
                            <span>Deadline: {DueDate}</span><br/>
                            <span>Remaining Days: {difference}</span>
                          </div>
                          <div class="card-action">
                            
                            <button 
                            className="btn waves-effect waves-light green"
                            onClick={()=>{
                                markCompleted(item._id)
                                window.location.reload()
                            }}
                            >
                                Mark as done
                            </button>
                          </div>
                        </div>
                      </div>
                      </div>
                    );
                }
                
              })}
            </div>
            </div>

        </div>
    )
}

export default ViewTasks
