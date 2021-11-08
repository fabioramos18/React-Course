import React, {useState} from 'react'

export const FormElements = () => {

    const[form,setForm]=useState({"name":"","age":"","course":""})
   
    const handlFormChange=(e)=>{
        if(e.target.getAttribute('name')==='name'){
            setForm({"name":e.target.value,"age":form.age,"course":form.course})
        }
        else if(e.target.getAttribute('name')==='age'){
            setForm({"name":form.name,"age":e.target.value,"course":form.course})
        }
        else if(e.target.getAttribute('name')==='course'){
            setForm({"name":form.name,"age":form.age,"course":e.target.value})
        }
    }

    return (
        <div>
            <label>Name</label>
            <input  type="text"  name="name"value={form.name} onChange={(e)=>handlFormChange(e)}/>
            <label>Age</label>
            <input  type="text"  name="age"value={form.age} onChange={(e)=>handlFormChange(e)}/>
            <label>Course</label>
            <input  type="text"  name="course"value={form.course} onChange={(e)=>handlFormChange(e)}/>
           
           
            <p>Name: {form.name}</p> 
            <p>Age: {form.age}</p> 
            <p>Course: {form.course}</p> 

        </div>
    )
}
