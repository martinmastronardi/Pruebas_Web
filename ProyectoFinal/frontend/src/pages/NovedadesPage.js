import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';

const NosotrosPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    }, []);

    return (
        <section className='holder'>
            <h2>Novedades</h2>
            {
                loading ? (
                    <p>Cargando...</p>
                ) : (
                    novedades.map(item => <NovedadItem key={item.id}
                        title={item.titulo} subtitle={item.subtitulo}
                        imagen={item.imagen} body={item.novedad} />)
                )}
        </section>
    );
}


export default NosotrosPage;

    //     return (
    //         <div>
    //             <main class="holder">
    //                 <h2>Novedades</h2>
    //                 <hr />
    //                 <div class="novedades">
    //                     <h3>Titulo</h3>
    //                     <h4>Subtitulo</h4>
    //                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit at libero saepe eveniet voluptatum placeat
    //                         voluptate, distinctio itaque officiis quasi voluptatem nihil vero mollitia. Quo impedit numquam
    //                         aspernatur molestias possimus.</p>
    //                     <hr />
    //                 </div>
    //                 <div class="novedades">
    //                     <h3>Titulo</h3>
    //                     <h4>Subtitulo</h4>
    //                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit at libero saepe eveniet voluptatum placeat
    //                         voluptate, distinctio itaque officiis quasi voluptatem nihil vero mollitia. Quo impedit numquam
    //                         aspernatur molestias possimus.</p>
    //                     <hr />
    //                 </div>
    //                 <div class="novedades">
    //                     <h3>Titulo</h3>
    //                     <h4>Subtitulo</h4>
    //                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit at libero saepe eveniet voluptatum placeat
    //                         voluptate, distinctio itaque officiis quasi voluptatem nihil vero mollitia. Quo impedit numquam
    //                         aspernatur molestias possimus.</p>
    //                     <hr />
    //                 </div>
    //             </main>
    //         </div>
    //     );
    // }
