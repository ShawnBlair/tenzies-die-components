import React from "react"
import Die from "./Die"

export default function App(){
    return(
        <div >
        <main className="container">
        <Die value="1"/>
        <Die value={2}/>
        <Die value={3}/>
        <Die value={4}/>
        <Die value={5}/>
        <Die value={6}/>
        <Die value={1}/>
        <Die value={2}/>
        <Die value={3}/>
        <Die value={4}/>
        </main></div>
    )
}