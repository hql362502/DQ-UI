import React from "react";
import type {CSSProperties} from "react"
import classNames from "classnames";

export type AlertType = "success" | "default" | "danger" | "warning";

export interface AlertProps {
    /**
        * @description  类名
    */
    className?: string;
    /**
        * @description 类型
    */
    type?: AlertType;
    /**
        * @description 默认不显示关闭按钮
        * @default false
    */
    closable?: boolean;
    /**
        * @description 警告提示的标题文字介绍
    */
    title?: string;
    /**
        * @description 警告提示内容
    */
    message: string;
    /**
        * @description CSSProperties样式
    */
    style?: CSSProperties;
    //背景颜色
    backgroundColor?: string;
}

const Alert: React.FC<AlertProps> = (props) => {
    const {className, type = 'default', closable, title, message, ...resetProps } = props;
    const [show, setShow] = React.useState(true);
    const classes = classNames("alert", {
        [`alert-${type}`]: type,
        "alert-closable": closable,
    });
    return show ? (
         <div className={classes} {...resetProps} >
            <div className="left">
                {title && <h4 className="alert-title">{title}</h4>}
                <span className="alert-message">{message}</span>
            </div>
            <div className="right">
                {closable && (
                    <span
                        className="alert-close"
                        onClick={() => {
                            setShow(false);
                        }
                        }
                    >
                        +
                    </span>
                )}
            </div>
        </div>) : null
}

Alert.defaultProps = {
    type: "default",
    closable: false,
}

export default Alert;