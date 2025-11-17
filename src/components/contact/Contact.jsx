import "./contact.css";
import emailjs from "@emailjs/browser";
import {useRef, useState} from "react";
import { motion } from "motion/react"
import { span } from "motion/react-client";

const listVariant = {
   initial: {
      x: 100,
      opacity: 0,
   },
   animate: {
      x: 0,
      opacity: 1,
      transition: {
         duration: 0.5,
         staggerChildren: 0.2,
      }
   }
}



const Contact = () => {
   const [success, setSuccess] = useState(false);
   const [error, setError] = useState(false);

   const ref = useRef();
    
   const sendEmail = (e) =>{
      e.preventDefault();
      emailjs
         .sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID, 
            e.target, {
               publicKey: import.meta.env.VITE_PUBLIC_KEY,
            }
         )
         .them(
            () => {
               setSucces(true);
               setError(false);
            },
            (erro) => {
               console.log(error);
               setError(true);
               setSuccess(false);
            }
         );
   };
   return(
      <div className='contact' ref = {ref} onSubmit={sendEmail}>
         <div className="cSection">
            <form>
               <h1 className="cTitle">Vamos manter em contato</h1> 
               <div className="formItem">
                  <label>Nome</label>
                  <input type="text" name = "user_username" placeholder="Jonh Silva" />
               </div>
               <div className="formItem">
                  <label>Email</label>
                  <input type="email" name = "user_Email" placeholder="Jonh@gamil.com" />
               </div>
               <div className="formItem">
                  <label>Mensagem</label>
                  <textarea rows={10} name = "user_message" placeholder = "Digite sua mensagem"></textarea>
               </div>
               <button className="formButton">Enviar</button>
               {success && <span>Sua mensagem foi enviada com sucessp</span>}
               {error && <span>Algo deu errado !</span>} 
            </form>
         </div>
         <div className="cSection">SVG</div>
      </div> 
   ) 
   
};

export default Contact;