import React, { Component } from 'react';
import LogoHeader from '../components/header/logo-header';
import Footer from '../components/footer/footer';

class Publish extends Component<any, any> {
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

export default Publish;
