import { useNavigate } from "react-router-dom"

export function TaskCard({task}) {

  const navigate = useNavigate()

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"></link>
      <div className="task"
        onClick={()=>{
          navigate(`/tasks/${task.id}`)
        }}
      >
        <h1>{task.title}</h1>
        <p>{task.description}</p>
      </div>
    </>
    
  )
}

