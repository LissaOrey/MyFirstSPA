import React from 'react';
import preloader from '../../../assets/images/Preloader.gif';

let Preloader =(props)=>{
    return <img src={preloader} style={ {height: '100px', width:'100px'}} />
}

export default Preloader;