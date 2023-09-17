import React,{useEffect} from 'react';

const Random = ({count,setCount}) => {
    useEffect(() => {
        setCount((count)=>count+1);
      },[])
    console.log("random call",count);
    return(
        <div>Random</div>
    )
}

export default Random;