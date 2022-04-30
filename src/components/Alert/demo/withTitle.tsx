import React from 'react';
import Alert from '../alert';
// import '../style'
export default ()=>{
    const style = { marginBottom : '20px'}
    return (
        //"success" | "default" | "danger" | "warning";
        <>
            <Alert type = 'success' title='标题' style={style} message="提示内容"/>
        </>
        
        
    )
}
