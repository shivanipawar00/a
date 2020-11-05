//from react
import React from 'react'
//from material ui
//from components
import Tebs from './datavisualisationTebs';
import DataLink from '../common/DataLink';
import FetchData from '../common/FetchData';
import BarPatameters from './DistParameters';
import Xarrows from '../common/Xarrows';
//from external modules
//function begins
const Distplot = () => {
    return (
        <>
       
       <Tebs heading="Bar Plot"/>
        <DataLink />
        <FetchData />
        <BarPatameters />
        <Xarrows />

   
        
        

       
         
        </>
    )
}

export default Distplot;