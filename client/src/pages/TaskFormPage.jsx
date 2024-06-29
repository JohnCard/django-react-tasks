import { useEffect } from "react";
import { useForm } from "react-hook-form"
import { createTask, deleteTask, updateTask, getTask } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";

export function TaskFormPage(){
    const {register, handleSubmit, formState:{errors},
    setValue
} = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit( async data => {
        if(params.id){
            updateTask(params.id,data)
        }
        else{
            await createTask(data);
        }
        navigate('/tasks');
    });

    useEffect(()=>{
        async function loadTask(){
            if(params.id){
                const {data: {title,description}} = await getTask(params.id);
                setValue('title',title);
                setValue('description',description);
            }
            
        }
        loadTask()
    },[])

    return (
        <div>
            <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"></link>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="title"
                {...register('title',{required:true})} />
                {errors.title && <span>text required</span> }
                <textarea rows='3' placeholder="description"
                {...register('description', {required:true})}></textarea>
                {errors.description && <span>description required</span> }
                <button>Save</button>
            </form>
            {params.id && <button className="delete-button" onClick={async()=>{
                const accept = window.confirm('are you sure?');
                if (accept){
                    await deleteTask(params.id);
                    navigate('/tasks');
                }
            }} >Delete</button>}
            
        </div>
    )
}