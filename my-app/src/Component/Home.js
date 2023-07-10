import React, {useEffect, useState} from 'react';
import './Home.css'
import { Http } from './Http';

export const Home = ()=>{
 
  const [userdata, setuserdata] = useState({});
  const [updateUser, setUpdateUser] = useState({});
  const [user, setuser] = useState([]);
  const [show, setShow] = useState(true);
  const [id, setid] = useState(0);
 


  useEffect(()=>{
    Http.get('/api/contact').then((res)=>{
      setuser(res.data)
    }).catch((error)=>{
      console.log(error)
    })

  })

  
  
  

  








  const handlevalue = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setuserdata(userdata => ({...userdata, [name]: value}))

  }
  const handlevalue1 = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setUpdateUser(updateUser => ({...updateUser, [name]: value}))
  }


  const handleuserdata = (e)=>{
    const { name, email, phone } = userdata
    e.preventDefault();
    Http.post('/api/contact',{
      name,
      email,
      phone,
    }).then((res)=>{
      console.log(res)
    }).catch((error)=>{
      console.log(error)
    })
    setuserdata({name:'', email:'', phone:''})
  }


  const handleupdate = (id)=>{
    setid(id)
    setShow(false)
  }

  
  const handledelete = (id) =>{
    Http.delete(`/api/contact/${id}`).then((res)=>{
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
    


  }

  

  const handleupdatebutton = (e) =>{
    e.preventDefault();
    const { name, email, phone } = updateUser;
    Http.put(`/api/contact/${id}`, {
      name,
      email,
      phone,

    }).then((res)=>{
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
    setUpdateUser({name:'', email:'', phone:''})
    setShow(true)
  }



  
  return(
    <div>
      {
        show ? (
          <div>

            <div className='title'> User Data</div>
            
            <form onSubmit={handleuserdata}>
              <input type='text' placeholder='Enter Name' name ='name' value={userdata.name} onChange={handlevalue} />
              <input type='text' placeholder='Enter Email'  name ='email' value={userdata.email} onChange={handlevalue}/>
              <input type='text' placeholder='Enter phone' name ='phone' value={userdata.phone} onChange={handlevalue}/>
              <button >ADD</button>

            </form>

            <diV className='title'>All User data </diV>
            {
              user.map((user, index)=>{
                return(
                  <ul className='table' key={index}>
                    <li>{user.name}</li>
                    <li>{user.email}</li>
                    <li>{user.phone}</li>
                    <div className='action'>
                      <button onClick={()=>handledelete(user._id)}>Delete</button>
                      <button onClick={()=>handleupdate(user._id)}>Update</button>


                    </div>

                  </ul>
                )
              })
            }

          </div>

        ):(
          <div>
            <div className='title'>Update user info </div>
            <form onSubmit={handleupdatebutton}>
              <input type='text' placeholder='Enter Name' name ='name' value={updateUser.name} onChange={handlevalue1} />
              <input type='text' placeholder='Enter Email'  name ='email' value={updateUser.email} onChange={handlevalue1}/>
              <input type='text' placeholder='Enter phone' name ='phone' value={updateUser.phone} onChange={handlevalue1}/>
              <button >Update</button>
              

            </form>

          </div>

        )
      }

      




      
      
      
    </div>
  )
}

