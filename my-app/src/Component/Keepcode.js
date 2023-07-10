
const handleuserdata = (e)=>{
    e.preventDefault();

    Http.post('/api/contact',{
      name:updateUser.name,
      email:updateUser.email,
      phone:updateUser.phone
    }).then((res)=>{
      console.log(res)
    }).catch((error)=>{
      console.log(error)
    })
    
    setuser([...user, userdata])
    setuserdata({name:'', email:'',phone:''})
    console.log(userdata)

  }


  /*
  
  
  
  “JavaScript is easily one of the most important languages in recent decades. It’s flexible, powerful, easy to learn, and massively popular. JavaScript is super easy to deploy on Heroku, and we’re constantly improving the experience for both front-end and back-end applications.”
  
  
  
  
  */