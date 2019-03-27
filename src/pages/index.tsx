import React, { PureComponent } from "react";
import { Link } from "@src/router/routes";

class Home extends PureComponent<any, any> {
  render() {
    return (
      <div>
        <Link route="a">
          <a>a</a>
        </Link>
        <Link route="b">
          <a>b</a>
        </Link>
      </div>
    );
  }
}

export default Home;
