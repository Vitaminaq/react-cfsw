import React, { Component } from 'react';
import { connect } from "react-redux";
import { getArtic } from "../store/modules/chatroom/action";
import { Link } from 'react-router-dom';

interface ChatRoomState {
  input: string | number;
}

class ChatRoom extends Component {
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {
    const params = {
      limit: 9,
			page: 0
    };
    (this as any).props.getArtic(params);
  }
  render() {
    return (
      <div>
        {/* <input
          onChange={e => this.updateInput(e.target.value)}
          value={(this as any).state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
        <button className="add-todo" onClick={this.toggleTodo.bind(this)}>
        toggleTodo
        </button>
        <Link to="/login">
          <button className="login">
            去登陆
          </button>
        </Link>
        <div>{(this as any).props.todos}</div> */}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  console.log(state);
  return { todos: state.todos };
};
export default connect(
  mapStateToProps,
  { getArtic }
)(ChatRoom);