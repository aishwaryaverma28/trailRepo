import React,{useState} from 'react'

const PostApi = () => {
    const [userId,setuserId]=useState("");
    const [id,setId]=useState("");
    const [title,setTitle]=useState("");
    function saveData(){
        let data = {userId,id,title};
        // console.log(data);
        fetch("https://jsonplaceholder.typicode.com/todos",{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            resp.json().then((result)=>{
                console.log("result",result)
            })
        })
    }
  return (
    <div>PostApi
        <input type="text" name="name" value={userId} onChange={(e)=>{setuserId(e.target.value)}}  /> <br /> <br />
      <input type="text" name="id"  value={id} onChange={(e)=>{setId(e.target.value)}} /> <br /> <br />
      <input type="text" name="title"  value={title} onChange={(e)=>{setTitle(e.target.value)}}/> <br /> <br />
      <button type="button" onClick={saveData} >Save New User</button>
    </div>
  )
}

export default PostApi