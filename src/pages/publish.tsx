import React, { Component } from "react";
import LogoHeader from "../components/header/logo-header";
import Footer from "../components/footer/footer";

class Publish extends Component<any, any> {
  public constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <div>
        <LogoHeader />
        <Footer pathName={""} />
      </div>
    );
  }
}

export default Publish;
