import React from 'react';
import Button from '../button';
import '../style'
export default ()=>{
    const style = { margin : '10px'}
    return (
        // "primary" |"default" | "danger" | "link"
        <>
            <Button btnType = 'primary' size = 'lg' style={style}> 主按钮</Button>
            <Button btnType = 'default' size = 'lg' style={style}> 默认按钮</Button>
            <Button btnType = 'danger' size = 'lg' style={style}> 警告按钮</Button>
            <Button btnType = 'link' size = 'lg' style={style}> 链接按钮</Button>
            <Button btnType = 'primary' size = 'sm' style={style}> 主按钮</Button>
            <Button btnType = 'default' size = 'sm' style={style}> 默认按钮</Button>
            <Button btnType = 'danger' size = 'sm' style={style}> 警告按钮</Button>
            <Button btnType = 'link' size = 'sm' style={style}> 链接按钮</Button>
        </>
        
        
    )
}
