import React from "react";

const  GifGridItem = ( { id, title, url} ) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            {/* { title } */}
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div> 
    );
}

export default GifGridItem;