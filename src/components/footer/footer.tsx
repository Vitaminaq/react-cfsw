import React, { Component } from "react";
import { Link } from "@src/router/routes";

interface ListItem {
  name: string;
  pathName: string;
  url: string;
  urled: string;
}
interface FooterState {
  list: ListItem[];
}

interface FooterProps {
  pathName: string;
}

class Footer extends Component<FooterProps, FooterState> {
  public constructor(props: FooterProps) {
    super(props);
    this.state = {
      list: [
        {
          name: "首页",
          pathName: "/",
          url: "./images/home.svg",
          urled: "./images/home_ed.svg"
        },
        {
          name: "发表",
          pathName: "/publish",
          url: "./images/publish.svg",
          urled: "./images/publish_ed.svg"
        },
        {
          name: "我的",
          pathName: "/center/my",
          url: "./images/my.svg",
          urled: "./images/my_ed.svg"
        }
      ]
    };
  }
  public render() {
    return (
      <footer className="nav-footer">
        {this.state.list.map(i => {
          return (
            <Link route={i.pathName} key={i.pathName}>
              <a className={"current"}>
                <img src={require(`${i.url}`)} alt="icon" />
                <div>{i.name}</div>
              </a>
            </Link>
          );
        })}
        <style jsx>{`
          .nav-footer {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            border-top: solid #adadad 1px;
            background-color: #fff;
          }

          a {
            width: 33%;
            text-decoration: none;
            font-size: 12px;
            color: #adadad;
          }

          img {
            width: 20px;
            height: 20px;
            margin-top: 5px;
          }

          div {
            margin-top: -5px;
          }

          .current {
            color: #00dcff;
          }
        `}</style>
      </footer>
    );
  }
}

export default Footer;
