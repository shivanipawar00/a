//from react
import React from 'react'
//from material ui
//from components
import Tebs from './datavisualisationTebs';
import DataLink from '../common/DataLink';
import FetchData from '../common/FetchData';
import BarPatameters from './BoxParameters';
import Xarrows from '../common/Xarrows';
//from external modules
//function begins
const Boxplot = () => {
    return (
        <>
       
       <Tebs heading="Box Plot"/>
        <DataLink />
        <FetchData />
        <BarPatameters />
        <Xarrows />

   
        
        

       
         
        </>
    )
}

export default Boxplot;
