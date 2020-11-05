//from react
import React from 'react'
//from material ui
//from components
import Tebs from './datavisualisationTebs';
import DataLink from '../common/DataLink';
import FetchData from '../common/FetchData';
import BarPatameters from './DotParameters';
import Xarrows from '../common/Xarrows';
//from external modules
//function begins
const Dotplot = () => {
    return (
        <>
       
       <Tebs heading="Dot Plot"/>
        <DataLink />
        <FetchData />
        <BarPatameters />
        <Xarrows />

   
        
        

       
         
        </>
    )
}

export default Dotplot;