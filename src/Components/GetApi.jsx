import React,{useEffect, useState} from 'react'

const GetApi = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos").then((result)=>{
        result.json().then((resp)=>{
            // console.log("result", resp)
            setData(resp)
        })
    })
    },[])
    console.log(data)
    
  return (
    <div>get api
        <table>
            <tr>
                <td>ID</td>
                <td>Title</td>
                
            </tr>
            {data.map((item)=>
            <tr key={item.id}>
                <td>{item.userId}</td>
                <td>{item.title}</td>
            </tr>
            )}
        </table>
    </div>
  )
}

export default GetApi