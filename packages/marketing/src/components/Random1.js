import React,{useEffect} from 'react';

const Random1 = ({count,setCount}) => {
    useEffect(() => {
        setCount((count)=>count+1);
      },[])
    console.log("random call again",count)
    return(
        <div>Random1</div>
    )
}

export default Random1;