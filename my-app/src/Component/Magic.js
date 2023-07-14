import React, { useState } from "react"
import './Magic.css';

export const Magic = ()=>{
    const [action, setAction] =  useState(true);

    const handle = ()=>{
        action ? setAction(false) : setAction(true);
    }


    

    
    return(
        <div> 
            <div className="box">
                <div className='moment'>It is basic things in circle</div>
                <div className='moment'>It is basic things in circle</div>

            </div>

            <div className="popup">
                <div className={ action ? "other" : "warning"}> warning please don't click again</div>
                <button onClick={handle} className="btn">click</button>
            </div>


            



        </div>

        
    )
}