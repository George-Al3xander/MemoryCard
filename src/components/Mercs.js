import React from "react";

const Mercs = (props) => {
    return(
        <div className="mercs">
            {props.array.map((item) => {
                 
            return  <div id={item.id} onClick={props.onclick} key={item.id}>
                        <img src={item.src} alt="" />
                         <h1>{item.id}</h1>
                    </div>
            })}
        </div>
    )
}

export default Mercs