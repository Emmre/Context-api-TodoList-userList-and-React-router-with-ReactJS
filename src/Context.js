import React, { Component, createContext } from "react";

export const MyContext = createContext();

// Then create a provider Component
class Context extends Component {
  state = {
    count: 0,
    users: [],
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          increment: () =>
            this.setState({
              count: this.state.count + 1,
            }),
          decrement: () => {
            this.setState({ count: this.state.count - 1 });
          },
          reset: () => {
            this.setState({ count: 0 });
          },
          fetchUser: async () => {
            const response = await fetch(
              `https://jsonplaceholder.typicode.com/users/`
            );
            const data = await response.json();
            this.setState({ users: data });
            console.log(this.state.count);
          },
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
export default Context;
