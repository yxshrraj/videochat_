import React , {useState, useCallback} from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar';


 const Homepage =()=> {

    const [value,setValue] = useState();
    const navigate = useNavigate()

    const handleJoinRoom = useCallback(() =>
    {
           navigate(`/room/${value}`); 
    }, [navigate,value]);
    return (
        <>
         <Navbar/>
         <div className="whole">
        <div className ="box my-2">
        <input value={value} onChange ={(e) => setValue(e.target.value)} type="text" placeholder="Enter Room code" />
        
        <button type="button" className="btn btn-outline-primary my-4" onClick={handleJoinRoom }><b>Join</b></button>
        </div>
      
        
        </div>
        
    
    </>
    
    );
 }
export default Homepage;