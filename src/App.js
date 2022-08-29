import { useState } from 'react';
import {  createUserWithEmailAndPassword ,onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { auth } from './firebase_connection';
import {useDispatch} from 'react-redux'
import { SignupAction } from './redux/actions/SignupAction';

function App() {
  const [registerEmail,setregisterEmail] = useState("")
  const [registerPassword,setregisterPassword]=useState("")
  const [loginEmail,setloginEmail] = useState("")
  const [loginPassword,setloginPassword]=useState("")
  const [user,setUser] = useState({})
  const dispatch = useDispatch()
  const register = async () => {
    
    try{const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword);
      console.log(user._tokenResponse)
      dispatch(SignupAction(user._tokenResponse))

    }catch(error){
      console.log(error.message)
    }
  }
 
  const logout = async ()=>{
    signOut(auth)
  }

  const login = async () =>{
    try{
      const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
      console.log(user)
    }catch(error)
    {console.log(error.message)}

  }

   onAuthStateChanged (auth,(currentUser)=>{setUser(currentUser)})
  return (
    <>
    
    <div>
      <h2>register</h2>
    <input type="text" name="email" placeholder='enter email' onChange={(e)=>setregisterEmail(e.target.value)}/>  
    <input type="text" name="password" placeholder='enter the password' onChange={(e)=>setregisterPassword(e.target.value)}/>
    <button onClick={register}>createuser</button>
    </div>
    <div>
      <h2>login</h2>
    <input type="text" name="email"  placeholder='enter email' onChange={(e)=>setloginEmail(e.target.value)} />  
    <input type="text" name="password"  placeholder='enter the password' onChange={(e)=>setloginPassword(e.target.value)}/>
    <button  onClick={login}>loginuser</button>
    </div>
    <div>
      {/* {auth.currentUser.email} */}
      {user?.email} 
      
     
    <button type="submit" onClick={logout}>logout</button>
    </div>
    
    </>
  );
}

export default App;
