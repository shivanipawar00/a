//from react
import React from 'react'

//from material UI


//from components
import Tebs from './datavisualisationTebs';
import DataLink from '../common/DataLink';
import FetchData from '../common/FetchData';
import BarPatameters from './ScaParameters';
import Xarrows from '../common/Xarrows';

//from external modules

//function begins
const Scatterplot = () => {
    return (
        <>
        <Tebs heading="Scatter Plot"/>
        <DataLink />
        <FetchData />
        <BarPatameters />
        <Xarrows />
        </>
    )
}

export default Scatterplot;
