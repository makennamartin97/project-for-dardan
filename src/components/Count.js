import React,{useEffect,useState} from 'react';
import data from "./Data.json";

const Count = (props) => {
    const {label,num,duration} = props.data
    const [count,setcount] = useState('0')
    useEffect(() =>{
        let start =0;
        const end = parseInt(num.substring(0,3))
        if(start === end) return;

        let totalMS= parseInt(duration)
        let incrementTime = (totalMS / end) * 1000;
        let timer = setInterval(()=> {
            start+=1;
            setcount(String(start) + num.substring(3))
            if (start === end) clearInterval(timer)
        }, incrementTime)
    }, [num,duration])
    return(
        <div>
            <h5>
                {label}: {count}
            </h5>
        </div>

    )
}
export default Count;