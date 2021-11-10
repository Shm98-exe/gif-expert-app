import { useState, useEffect } from "react"
import { getGifs } from '../helpers/GetGifs';

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //render por primera vez
    useEffect( () => {
        getGifs( category ).then( imgs => 
            setState({
                data: imgs,
                loading: false
            }) 
        )
    }, [ category ])
    return state;

}