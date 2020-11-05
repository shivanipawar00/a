//from react
import React from 'react'
//from material ui
//from components
import Tebs from './datavisualisationTebs';
import DataLink from '../common/DataLink';
import FetchData from '../common/FetchData';
import BarPatameters from './LineParameters';
import Xarrows from '../common/Xarrows';
//from external modules
//function begins
const Linechart = () => {
    return (
        <>
       
       <Tebs heading="Line Chart"/>
        <DataLink />
        <FetchData />
        <BarPatameters title="Line Group" />
        <Xarrows />

   
        
        

       
         
        </>
    )
}

export default Linechart;
