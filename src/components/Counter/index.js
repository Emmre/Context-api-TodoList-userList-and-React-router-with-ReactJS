import React from "react";
import { MyContext } from "../../Context";
import s from './Counter.module.css'

class Counter extends React.Component {
  render() {
    return (
      <div className={s.counter}>
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <h2 className={s.counterText}>{context.state.count}</h2>
              <div className={s.counterActions}>
                {context.state.count <= 0 ? (
                  <button>Count cannot be less than 0</button>
                ) : (
                  <button onClick={context.decrement}>Decrement</button>
                )}
                <button onClick={context.reset}>Reset</button>
                <button onClick={context.increment}>Increment</button>
              </div>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

export default Counter;
