//from react
import React from 'react'
//from material ui
//from components
import Tebs from '../common/Tebs';
import DataLink from '../common/DataLink';
import FetchData from '../common/FetchData';
import DataModificationParameters from './DataModificationParameters'
import Xarrows from '../common/Xarrows';
//from external modules

//function begins
const DataModification = () => {
    return (
        <>
        <Tebs heading="Data Modification"/>
        <DataLink />
        <FetchData />
        <DataModificationParameters />
        <Xarrows /> 
        </>
    )
}

export default DataModification
