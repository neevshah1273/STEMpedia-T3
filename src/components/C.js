import react from "react";
import {useSelector } from 'react-redux';
const C = () => {

    let DisplayName = useSelector((state) => state.NameR);
    //console.log(DisplayName);
    return(
        <div>
            {DisplayName}  
        </div>
    )
}

export default C;