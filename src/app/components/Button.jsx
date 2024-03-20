import React from "react"

export default function Button({status}){
    return(
        <button className="bg bg-slate-900 text-white rounded-lg p-2" >{status}</button>
    )
}