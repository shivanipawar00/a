//from react
import React from 'react'
//from material ui
//from components
import Tebs from '../common/Tebs'
import Testinfo from '../common/Testinfo'
//from external modules
//function begins
const DataInfo = () => {
    return (
        <div>
            <Tebs heading="Data Info"/>
            <div style={{marginTop:"80px",}}>
                <Testinfo/>
            </div>
        </div>
    )
}

export default DataInfo;
