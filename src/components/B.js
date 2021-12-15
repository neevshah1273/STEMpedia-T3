import react, { useState } from "react";
import { useDispatch } from "react-redux";


const B = () => {

    const [name,SetName] = useState('');

    const dispatch = useDispatch();
    const handleChange = (e) =>{
        SetName(e.target.value);
        console.log(e.target.value);
        console.log(name);
    }

    const handleSubmit = (e) => {
        console.log('Button Clicked');
        e.preventDefault();
        //console.log(e.taget.value);
        console.log(name);
        dispatch({type:'UPDATE',payload:name});
        
    }

    return(
        <div>
            
            <input onChange={handleChange}>

            </input>
            <button type="submit" onClick={handleSubmit}>
                Update Name
            </button>
        </div>
    )
}

export default B;