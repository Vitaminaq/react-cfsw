import React from "react";
import { Link } from "@src/router/routes";

export default () => (
  <ul>
    <li>
      <Link route="a" params={{ slug: "hello-world" }}>
        <a>a</a>
      </Link>
    </li>
    <li>
      <Link route="b" params={{ slug: "hello-world" }}>
        <a>b</a>
      </Link>
    </li>
  </ul>
);
