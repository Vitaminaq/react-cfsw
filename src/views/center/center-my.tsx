import React, { Component, Props } from 'react';
import LogoHeader from '../../components/header/logo-header';
import Footer from '../../components/footer/footer';

class CenterMy extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    const { location } = this.props;
    return (
      <div>
        <LogoHeader />
        <Footer pathName={location.pathname || ''} />
      </div>
    );
  }
}

export default CenterMy;
