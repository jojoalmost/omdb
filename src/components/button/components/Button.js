import * as React from 'react';

import styles from './Button.module.css';

const Button = ({variant, className, ...rest}) => {
    let buttonVariant;
    switch (variant) {
        case 'secondary':
            buttonVariant = styles.secondary;
            break;
        default:
            buttonVariant = styles.primary;
            break;
    }
    return <button className={`${className} ${buttonVariant}`} {...rest}/>
}
export default Button;
