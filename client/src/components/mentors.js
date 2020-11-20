import React,{useState} from 'react';
import axios from 'axios';
import './mentors.css';


const Mentor = ({ data}) => {

    const [addTask, setAddTask] = useState(false);
    const [newTask, setNewTask] = useState("Consultation at 5 p.m.");
    const [edit, setEdit] =useState(false);
  

    const [form, setForm] = useState({
        fullName:"Enter Name", 
        age: "Enter Age",
        email:"Enter Email",
        currentProfile:"Enter Profile",
        company:"Enter company",
        phone: "Enter Contact No." 
    });
    
    // const handleEdit = (e) => {
    //    setEdit(!edit);        
    // }

    const handleChange = (e) => {        
        setForm({...form, [e.target.name]: e.target.value});        
    }

    const updateMentor = (e) => {
       e.preventDefault();
       const updatedMentor = {...form, tasks: data.tasks};
       axios.put(`http://localhost:5000/mentor/${data._id}`, updatedMentor);
       setEdit(!edit);
    };

    const handleDelete = () => {
        axios.delete(`http://localhost:5000/mentor/${data._id}`);
    }

    const handleTaskInput = (e) => {
        setNewTask(e.target.value);
    }

    const handleTaskSubmit = (e) => {
        e.preventDefault();
        const currentTask = [...data.tasks, {task : newTask}];
        const updatedMentor = {...data, tasks: currentTask};
        axios.put(`http://localhost:5000/mentor/${data._id}`, updatedMentor);
        setAddTask(!addTask);
    }

    

    
    return(
        <div className='mentor'>
               
            <div>
                <span><h5>Name: {data.fullName}</h5></span>
                <span><h5>Age: {data.age}</h5></span>
                <span><h5>Email: {data.email}</h5></span>
                <span><h5>Profile: {data.currentProfile}</h5></span>
                <span><h5>Company: {data.company}</h5></span>
                <span><h5>Phone: {data.phone}</h5></span>                
            </div>

            <div>
                <p>Tasks</p>
                <ul>
                {data.tasks.map((task,index) => {
                    return <li>{task.task}</li> 
                })}
                </ul>
            </div>

            <div>
                <span> <button className='btn btn-dark' onClick={() => setEdit(!edit)} type="submit">Edit Mentor</button>  </span>
                <span> <button className='btn btn-dark' onClick={handleDelete} type="submit">Delete Mentor</button>  </span>
                <span> <button className='btn btn-dark' onSubmit={(e)=>e.preventDefault() } onClick={() => setAddTask(!addTask)} type="submit">Add task</button>  </span>
                {edit ? (
                    <div>
                        <form className='mentorUpdateForm' action="" >
                            <label htmlFor="">Name:<input onChange={handleChange} name='fullName' type="text" value={form.fullName}/></label>
                            <span><label htmlFor="">Age:<input onChange={handleChange} name='age' type="text" value={form.age} /></label>  </span>
                            <span><label htmlFor="">EmailID:<input onChange={handleChange} name ='email' type="text" value={form.email}/></label>  </span>
                            <span><label htmlFor="">Profile:<input onChange={handleChange} name ='currentProfile' type="text" value={form.currentProfile}/></label>  </span>
                            <span><label htmlFor="">Company:<input onChange={handleChange} name ='company' type="text" value={form.company} /></label>  </span>
                            <span><label htmlFor="">Phone:<input onChange={handleChange} name ='phone' type="text" value={form.phone} /></label>  </span>
                            <button onClick={updateMentor}  type="submit">Submit</button>
                        </form>
                    </div>
                ):(<div></div>)}

                {addTask? (
                    <div>
                        <form action="">
                            <label htmlFor="">Add Task Here: <input onChange={handleTaskInput} type="text" name='newTask' value={newTask} /></label>
                            <button onClick={handleTaskSubmit} type="submit">Submit Task</button>
                        </form>
                    </div>
                ):(<div></div> )}

            </div>    
                
            
        </div>
    )

}

export default Mentor;