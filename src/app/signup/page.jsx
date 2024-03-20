import React from "react"
import Button from "../components/Button"
import Input from "../components/Input"


export default function Signup(){
    return(
        <div className="m-auto w-[50%]">
            <form>
                <ul>
                 <Input type="text" name="user" id="user" place="your username"/>
                 <Input type="email" name="email" id="email" place="your email address"/> 
                 <Input type="password" name="pwd" id="pwd" place="your password"/>
             
                <Button status="SignUp"/>
                
                </ul>
            </form>
        </div>
    )
}
