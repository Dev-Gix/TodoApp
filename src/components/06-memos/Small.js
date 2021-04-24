import React,{memo} from 'react';


const Small = memo(({value}) => {
    console.log('Me volvi a Mostrar :(');
    return (
        <small>{value}</small>
    );
});



export default Small;