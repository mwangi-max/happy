import React from 'react';
import {data} from './data'

const App = ()=>{
 return(
  <section>
  <h2>HELLOO PEOPLE</h2>

  {
   data.map((person)=>{
    const {id,name,image} = person;
    return <div key={id} className='changes'>
     
     <figure>
            <img src= {image} alt={name} className='images'/>
     </figure>
     <div>
             <h3>{name}</h3>
     </div>
    
     
    </div>
   })
  }

 
  </section>
 )
}


export default App;