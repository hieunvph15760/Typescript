import React,{useState} from "react";
import { signup } from "../../api/auth";

type signupType = {
    name:String,
    email:String,
    password:String
}

function Signup(){

    const [username,setUsername] = useState<string>('');
    const [password,setPassword] = useState<string>('');
    const [email,setEmail] = useState<string>('');

    console.log(username);

   

    const handlSubmit = async () =>{
        const data = {
            name:username,
            email:email,
            password:password
        }

        const response = await signup(data);
        console.log(response);
        
    }


    return(
        <div>
            <form>
                <p>Username: <input style={{border:'1px solid gray'}} type="text" onChange={(event)=>setUsername(event.target.value)} /></p>
                <p>Email: <input style={{border:'1px solid gray'}} type="email" onChange={(event)=>setEmail(event.target.value)}/></p>
                <p>Password: <input style={{border:'1px solid gray'}} type="text" onChange={(event)=>setPassword(event.target.value)}/></p>
                <p><button onClick={()=> handlSubmit()} type="button">Dang ky</button></p>
            </form>
        </div>
    )

}

export default Signup;