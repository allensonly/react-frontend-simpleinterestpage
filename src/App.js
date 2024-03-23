import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App(){

  // jscode
  const [principle,setprinciple] = useState(0) // to store p.a
  const [rate,setrate] = useState(0)  // to store rate
  const [year,setyear] = useState(0)  // to store year
  const [interest,setinterest] = useState(0)
  const[isprinciple,setisprinciple] = useState(true)
  const[israte,setisrate] = useState(true)
  const[isyear,setisyear] = useState(true)

  const validateData = (e) =>{
    const {name,value} = e.target  //destructure
    //console.log(name,value);
   // console.log(typeof(value));
   //console.log(!!value.match(/^[0-9]+$/)); // tu convert to boolean

   if(!!value.match(/^[0-9]+$/)){
    if(name=='principle'){setprinciple(value)
    setisprinciple(true)}
  
    else if(name=='rate'){setrate(value)
    setisrate(true)}

    else if(name=='year'){setyear(value)
      setisyear(true)}
   }
    else {
      if(name=='principle'){setprinciple(value)
      setisprinciple(false)}

      else if(name=='rate'){setrate(value)
        setisrate(false)}

        else if(name=='year'){setyear(value)
          setisyear(false)}
    }
    
      
    
  }

  const handlecalculate =(e) =>{
    e.preventDefault()
    if(!principle || !rate|| !year){
      alert('please fill the form completly')
    }
    else{
      setinterest(principle*rate*year/100)
    }

  }

  const handlereset = (e) =>{
    setisprinciple(true)
    setisrate(true)
    setisyear(true)
    setprinciple(0)
    setrate(0)
    setyear(0)
    setinterest(0)
  }

  return(
    <div>
      <div style={{height:'150vh'}} className='d-flex align-items-center justify-content-center w-100 bg-dark'>
        <div className='bg-light rounded p-5' style={{width:'500px'}}>
        <h1>Simple Interest</h1>
        <p>Calculate your Simple Interest easily</p>

        <div style={{height:'150px'}} className='d-flex align-items-center justify-content-center w-100 bg-warning mt-5 flex-column rounded shadow'>
          <h1>₹ {interest}</h1>
            <p> Total Simple Interest</p>
        </div>
        <form className='mt-5' onSubmit={handlecalculate}>

          <div  className='mb-3'>
          <TextField name='principle' onChange={(e) => validateData(e) } value={principle || ""} className='w-100' id="outlined-basic" label="₹ Principal Amount" variant="outlined" />

          </div>

{   !isprinciple &&  
     <div><p className='text-danger fw-bolder'>*invalid input</p></div>
}
          <div className='mb-3'>
          <TextField name='rate' onChange={(e) => validateData(e) } value={rate || ""} className='w-100' id="outlined-basic" label="Rate of Interest (p.a) %" variant="outlined" />

          </div>
          {   !israte &&  
     <div><p className='text-danger fw-bolder'>*invalid input</p></div>
             }

          <div className='mb-3'>
          <TextField name='year' onChange={(e) => validateData(e) } value={year || ""} className='w-100' id="outlined-basic" label="Year(Yr)" variant="outlined" />

          </div>

          {   !isyear &&  
     <div><p className='text-danger fw-bolder'>*invalid input</p></div>
             }

          <div className='mt-5'>
          <Stack direction="row" spacing={2}>
          <Button disabled ={isprinciple && israte && isyear ? false:true} style={{height:'60px', width:"200px"}} variant="contained" type='submit'>Calculate</Button>
          <Button onClick={handlereset} style={{height:'60px', width:"200px"}} variant="outlined">Reset</Button>
  
          </Stack>
          </div>

         


        </form>


        </div>
        
      </div>
    </div>
  )
}

export default App;
