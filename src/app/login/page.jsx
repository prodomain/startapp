import React from "react"
import Button from "../components/Button"
import Input from "../components/Input"

export default function Login(){
    return(
        <div className="m-auto w-[50%]"> 
        <form >
        <ul>
        
            <Input type="text" userid="user" place="your username"/>
            <Input type="password" userid="pwd" place="your password"/>
            <Button status="Login"/>
        
        </ul>
    </form>
    </div>
    )
}