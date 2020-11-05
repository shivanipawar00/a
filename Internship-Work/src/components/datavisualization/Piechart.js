//from react
import React from 'react'
//from material ui
//from components
import Tebs from './datavisualisationTebs';
import DataLink from '../common/DataLink';
import FetchData from '../common/FetchData';
import BarPatameters from './PieParameters';
import Xarrows from "../common/Xarrows";
//from external modules
//function begins
const Piechart = () => {
    return (
        <>
       
       <Tebs heading="Pie Chart"/>
        <DataLink />
        <FetchData />
        <BarPatameters />
        <Xarrows />
   
        
        

       
         
        </>
    )
}

export default Piechart;
