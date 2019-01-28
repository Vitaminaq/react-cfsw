import React, { Component } from 'react';
import '../../style/components/header/logo-header.scss';

class LogoHeader extends Component {
    constructor(props: any) {
        super(props);
    }
    render() {
        return(
            <header className="header">
                <h1>Confenssion Wall</h1>
            </header>
        );
    }
}

export default LogoHeader;
