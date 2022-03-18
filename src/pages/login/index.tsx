import React, { useState } from 'react';
function Login(){
    const [usernameValue,setusernameValue] = useState<string>('');
    const [passwordValue,setpasswordValue] = useState<string>('');
    console.log(usernameValue);
    
    const onSubmit = (): any =>{
        const data = {
            username:usernameValue,
            passworld:passwordValue
        }
        console.log(data);
        
    }
    return (
       <>
         <p>Login</p>
        <form>
            <input type="text" placeholder='name' onChange={(event)=> setusernameValue(event.target.value)}/><br/>
            <input type="password" placeholder='password' onChange={(event)=> setpasswordValue(event.target.value)}/>
            <button type='button' onClick={()=> onSubmit()}>Submit</button>
        </form>
       </>
    )
}
export default Login;