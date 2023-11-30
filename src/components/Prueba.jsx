import { useState,useEffect } from "react";
import './prueba.css'
export function Prueba(){

    const [likes,setLikes] = useState(10)
    const [tema,setTema] = useState(true)
    const cambiarTema=()=>{
        setTema(!tema)
    }

    const quitarLike=()=>{
        if(likes ==0){
            return(prompt("Likes esta en 0"))
        }else{
            return(setLikes(likes -1))
        }
    }
    return(
        <div className={tema?"on":"off"}>
            <button onClick={cambiarTema}>Cambiar Tema</button>
            <h1>👍Likes {likes}</h1>
            <button onClick={()=>{
                setLikes(likes +1)
            }}>Dar like</button>
            <button onClick={quitarLike}>Quitar Like</button>
        </div>
    );
}