import React from 'react';

const NovedadesItem = (props) => {
    return (
        <div className='novedades'>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <img src={imagen} />
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
        </div>
    );
}

export default NovedadesItem;