import React from 'react';

// const NovedadesItem = (props) => {
//     const { title, subtitle, imagen, body} = props;
//     return (


//         <div className='novedades'>

//             <h1>{title}</h1>
//             <h2>{subtitle}</h2>
//             <img src={imagen}/>
//             <div dangerouslySetInnerHTML={{ __html: body }} />

//         </div>

//     );
// }



const NovedadesItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (

        <div>
            <main className='holder'>

                <hr />
                <div className='novedades'>
                <img src={imagen} />  
                <div className='InfoNove'>  
                    <h3>{title}</h3>
                    <h4>{subtitle}</h4>
                    
                    <div dangerouslySetInnerHTML={{ __html: body }} />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default NovedadesItem;

// <div className="servicios">
// <img src="img/foto2.jpg" alt="ModLog" />

// <div className="InfoFoto">
//     <h4>Control de Inventario</h4>
//     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam officiis eius labore porro
//         nostrum in
//         consectetur eaque qui odio corporis? Nobis minus, culpa natus sunt molestias eligendi labore.
//         Numquam,
//         saepe?</p>
// </div>
// </div>