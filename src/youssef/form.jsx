import { useState } from "react";

export default function Form(){

    const [formValues,setFormValue]= useState({
        name:"votre nom",
        age:"votre age",
        city:"ville" ,
        acceptCondition : false
    });

    const handleChange =(e)=>{
        const currentTarget = e.currentTarget
        const id = currentTarget.id
        let value = undefined
        switch(currentTarget.type){
            case 'text':
                value = currentTarget.value
                break;
            case 'checkbox':
                value = currentTarget.checked
            default :
            console.error('invalid type')
        }
        setFormValue(prevState => {
            console.log(prevState)
            return {...prevState,...{[id] : value}}
        })
    }
return<>
<div className={'container my-1'}>
    <form >
        {JSON.stringify(formValues)}
        <div className="form-group">
            <label> Name : </label>
            <input type="text" className="form-control" id="name" onChange={handleChange}></input>
        </div>
        <div className="form-group">
            <label> Age : </label>
            <input type="text" className="form-control" id="age" onChange={handleChange}></input>
        </div>
        <div className="form-group">
            <label> city : </label>
            <input type="text" className="form-control" id="city" onChange={handleChange}></input>
        </div>
        <div className="form-check">
            <input type="checkbox" className="form-check-input" onChange={handleChange} id="acceptCondition" ></input>
            <label> I accept </label>
        </div>
        <div className="form-group">  
            <button className="btn btn-primary " id="" >Save</button>
        </div>
    </form>
</div>
</>
}