import React from 'react';

const NovedadesItem = (props) => {
    const { title, subtitle, imagen, body} = props;
    return (

            
        <div className='novedades'>
            
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <img src={imagen}/>
            <div dangerouslySetInnerHTML={{ __html: body }} />
            
        </div>
        
    );
}

export default NovedadesItem;


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
    