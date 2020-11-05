//from react
import React from 'react'
//from material ui
//from components
import Tebs from '../common/Tebs';
import DataLink from '../common/DataLink'
import FetchData from '../common/FetchData'
import Xarrows from '../common/Xarrows'
import LinearRegressionParameters from './LinearReagressionParameters'
//from external modules
//function begins
const LinearRegression = () => {
    return (
        <>
            <Tebs heading="Linear Regression"/>
            <DataLink />
            <FetchData />
            <LinearRegressionParameters/>
            <Xarrows /> 
        </>
    )
}

export default LinearRegression;

