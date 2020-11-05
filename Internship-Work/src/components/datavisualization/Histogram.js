//from react
import React from 'react'
//from material ui
import Tebs from './datavisualisationTebs';
import DataLink from '../common/DataLink';
import FetchData from '../common/FetchData';
import BarPatameters from './HistParameters';
import Xarrows from '../common/Xarrows';
//from components
//from external modules
//function begins
const Histogram = () => {
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

export default Histogram;