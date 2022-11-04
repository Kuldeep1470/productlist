import React, { useEffect, useState } from "react";


export const Login = () => {

    const [users, setRecords] = useState([]);

    // This method fetches the records from the database.
    useEffect(() => {
      async function getRecords() {
        const response = await fetch(`http://localhost:5000/users/`);
  
        if (!response.ok) {
          const message = `An error occured: ${response.statusText}`;
          window.alert(message);
          return;
        }
  
        const users = await response.json();
        setRecords(users);
      }
  
      getRecords();
  
      return;
    }, [users.length]);
    function recordList() {
      return users.map((users) => {
         return users.username === userName || users.password === password;
      });
    }


    const [userName , setUserName] = useState('');
    const [password , setPassword] = useState('');

    const handelSubmit = async (e)=>{
        e.preventDefault();
        console.log(userName , password)
        console.log(recordList());
        setUserName('')
        setPassword('')
    }

  return (
    <div style={{margin:"10%auto"}}>
        <form onSubmit={handelSubmit} className="form file-form" >
    <h4>Login</h4>
    <div className="form-row">
        <label htmlFor="name" className="form-label">Admin name</label>
        <input type="text" onChange={(e)=>{setUserName(e.target.value)}} value = {userName} name="admin_name" className="form-input" placeholder="admin" autoFocus required="" autoComplete="off" />
    </div>

    <div className="form-row">
        <label htmlFor="name" className="form-label">PASSWORD</label>
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password} name="passward" className="form-input" placeholder="password" autoComplete="off"/>
    </div>

    <button type="submit" name="login" className="btn btn-block">Login</button>
     
</form></div>
  )
}
