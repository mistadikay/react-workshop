import React from 'react';
import './styles.css';

import Input from '#input';

export default function Search(props) {
    return (
        <div block="search">
            <Input mix={{ block: 'search', elem: 'input' }} type="search" {...props} />
        </div>
    );
}
