import React from 'react';
import Alert from '../alert';
// import '../style'
export default ()=>{
    const style = { marginBottom : '20px'}
    return (
        //"success" | "default" | "danger" | "warning";
        <>
            <Alert type = 'danger' closable = {true} title='危险' style={style} message="请赶快处理问题"/>
        </>
        
        
    )
}
