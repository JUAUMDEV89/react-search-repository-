import React, { useState, useEffect } from 'react';

import './styles/style.css';

import Repo from './components/repo';

function App() {
   
const [repo, setRepo] = useState([]);
const [value, setValue] = useState('');
const [name, setName] = useState('JUAUMDEV89');

useEffect(()=>{
     fetch(`https://api.github.com/users/${name}/repos`)
      .then(res=>{
        return res.json();
      }) 
      .then((res)=>{
        setRepo(res);
      })
},[name])

  function onChange(event){
    setValue(event.target.value);    
  }

  function handleSearchRepo(){
    setRepo([]);
    setName(value);
    setValue('');
  }

  return ( 
    <>
    <div class="page">
      <h1>Repositorios</h1>
      
      <div>
      <input onChange={onChange} type="text" placeholder="Coloque o nome do seu usuario" />
      <input onClick={handleSearchRepo} type="submit" value="Pesquisar" />
      </div>

     {
       repo.map(res => (
         <ul  key={res.id}>
           <li><Repo 
             name={res.name}
             description={res.description}
             url={res.html_url}
           /></li>
         </ul>
       ))
     }   
     
     {
       repo.length <= 0 && <p>Carregando...</p>
     }   

  </div>
    </>   
    );
  }

export default App;
