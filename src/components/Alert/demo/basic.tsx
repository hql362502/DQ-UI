import React from 'react';
import Alert from '../alert';
import '../style';
// import {Alert} from 'hql-dq-ui';
// import 'hql-dq-ui/lib/components/Alert/style'
export default ()=>{
    const style = { marginBottom : '20px'}
    return (
        //"success" | "default" | "danger" | "warning";
        <>
            <Alert type = 'success' style={style} message="成功提示"/>
            <Alert type = 'default' style={style} message="默认提示"/>
            <Alert type = 'danger' style={style} message="危险提示"/>
            <Alert type = 'warning' style={style} message="警告提示"/>
        </>
        
        
    )
}
