import * as React from 'react';

import styles from './Button.module.css';

const Button = ({type, className, ...rest}) => {
    let buttonType;
    switch (type) {
        case 'secondary':
            buttonType = styles.secondary;
            break;
        default:
            buttonType = styles.primary;
            break;
    }
    return <button type='button' className={`${className} ${buttonType}`} {...rest}/>
}
export default Button;
