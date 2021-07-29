import * as React from 'react';

const DetailTitle = ({title = '', subtitle = ''}) => (
    <div>
        <h1>{title}</h1>
        <div>{subtitle}</div>
    </div>
)
export default DetailTitle;
