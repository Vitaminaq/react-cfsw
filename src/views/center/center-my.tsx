import React, { Component, Props } from 'react';
import LogoHeader from '../../components/header/logo-header';
import Footer from '../../components/footer/footer';

class CenterMy extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div>
        <LogoHeader />
        <Footer pathName={this.props.location.pathname || ''} />
      </div>
    );
  }
}

export default CenterMy;
