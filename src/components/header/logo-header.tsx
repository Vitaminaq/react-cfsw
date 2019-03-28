import React, { Component } from "react";

class LogoHeader extends Component {
  public render() {
    return (
      <header className="header">
        <h1>Confenssion Wall</h1>
        <style jsx>{`
          .header {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            background-color: #00dcff;
            color: white;
            height: 0.96rem;
            text-align: center;
            line-height: 0.96rem;
            z-index: 999;
          }

          h1 {
            margin: 0;
            padding: 0;
            font-size: 20px;
          }
        `}</style>
      </header>
    );
  }
}

export default LogoHeader;
