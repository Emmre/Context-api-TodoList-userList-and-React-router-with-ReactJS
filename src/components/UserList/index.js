import React from "react";
import { MyContext } from "../../Context";
import { Link } from "react-router-dom";
import s from "./Userlist.module.css";

class UserList extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
    const data = await response.json();

    this.setState({ users: data });
  };

  render() {
    return (
      <div className={s.userList}>
        <ul className={s.usersFirst}>
          {this.state.users.map((user) => (
            <li>
              <Link to={`/userlist/${user.id}`} key={user.id}>
                {user.name}
              </Link>
            </li>
          ))}
        </ul>
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <button onClick={context?.fetchUser}>fetchUser</button>
              <ul className={s.usersSecond}>
                {context?.state?.users.map((user) => (
                  <li key={user?.id}>{user?.name}</li>
                ))}
              </ul>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}
export default UserList;
