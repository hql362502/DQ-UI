import React from 'react';
import Button from '../button';
import '../style'
export default ()=>{
    const style = { margin : '10px'}
    return (
        // "primary" |"default" | "danger" | "link"
        <>
            <Button disabled={true} btnType = 'primary' style={style}> 主按钮</Button>
            <Button disabled={true} btnType = 'default' style={style}> 默认按钮</Button>
            <Button disabled={true} btnType = 'danger' style={style}> 警告按钮</Button>
            <Button disabled={true} btnType = 'link' style={style}> 链接按钮</Button>
        </>
        
        
    )
}
