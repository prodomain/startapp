import React from 'react'

export default function Input({type, username, userid, place}){
    return(
        <li>
            <input type={type} name={username} id={userid} placeholder={place}
            className="p-4 border-2 border-solid border-slate-900 rounded-md m-3 w[20%]"/>
        </li>
    )
}
