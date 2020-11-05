//from react
import React from 'react';
//from material ui
//from components
import Tebs from './datavisualisationTebs';
import DataLink from '../common/DataLink';
import FetchData from '../common/FetchData';
import BarPatameters from './BarPatameters';
import Xarrows from '../common/Xarrows';
//from external modules
//function begins
const Bubble = () => {
    return (
        <>
       
       <Tebs heading="Bubble Plot" />
        <DataLink />
        <FetchData />
        <BarPatameters />
        <Xarrows />

   
        
        

       
         
        </>
    )
}

export default Bubble;
