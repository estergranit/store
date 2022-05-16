import React, { useState } from 'react'

export default function Slider(props){

    const [currentImage,setCurrentImage]=useState(0)   
    let numOfImages=React.Children.count(props.children)

    function getImage(){
        return React.cloneElement(React.Children.toArray(props.children)[currentImage])
    }


    return(
        <>
            <button disabled={currentImage==0} onClick={()=>setCurrentImage(p=>p-1)}>&lt; הקודם</button>
            <button disabled={currentImage==numOfImages-1} onClick={()=>setCurrentImage(p=>p+1)}>&gt; הבא</button><br/>
            {getImage()}
        </>
    )
} 