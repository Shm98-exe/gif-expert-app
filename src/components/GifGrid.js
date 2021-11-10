import GifGridItem from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    const { data: images, loading } = useFetchGifs( category );

    return (
        <div className="card-grid">
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            { loading && <p className="animate__animated animate__flash">Cargando..</p> }
            {
                images.map( img => 
                    <GifGridItem
                        key = { img.id }
                        { ...img }
                    />
                )
            } 
            
        </div>
    )
}

// AddCategory.propTypes = {
//     setCategories: PropTypes.func.isRequired
// }