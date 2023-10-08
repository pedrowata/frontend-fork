import React, { useState } from 'react';
import LoginCard from "./components/LoginCard"
import styles from '@/styles/Login.module.css'
import Input from "./components/input"
import Button from "./components/button"
import NavbarLogin from "./components/NavbarLogin"
import Link from 'next/link';


  export default function Login(){
   const [passwordVisible, setPasswordVisible] = useState(false);

   const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3003', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            cpf: 'Cpf',
            password: 'Senha',
          }),
        });
        if (response.ok) {
         const result = await response.json();
         setData(result); 
       } else {
         console.error('Erro ao fazer a solicitação HTTP.');
       }
     } catch (error) {
       console.error('Erro ao fazer a solicitação HTTP:', error);
     }
   };
   
   return(
      <div className={styles.styles}>
         <NavbarLogin/>
      <div className={styles.background}>
      <div className= "background-image"></div>
         <LoginCard titulo="Login">
            <form className={styles.form}>
               <label>CPF</label>
               <Input type="number" placeholder="Enter a value"/>
               <label>Password</label>
               
                  <Input
                  type={passwordVisible ? 'text' : 'password'}
                  placeholder="Enter your password"
                   />
  
                  <button
                   type="button"
                   onClick={() => setPasswordVisible(!passwordVisible)}
                   >
                   {passwordVisible ? 'Ocultar Senha' : 'Mostrar Senha'}
                   </button>
                   <Link href="/tela_principal"> 
                     <Button>Entrar</Button>
                   </Link>
            </form>
           </LoginCard>
      </div>
   </div>
   )
  }

