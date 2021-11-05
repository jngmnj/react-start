import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const MyComponent =  ({ name, favoriteNumber, children }) => {
//   return (
//     <div>
//       나의 새롭고 멋진 컴포넌트 {name}입니다. <br />
//       children 값은 {children}입니다. <br />
//       제가 좋아하는 숫자는 {favoriteNumber}입니다.
//     </div>
//     );
// };

// MyComponent.defaultProps = {
//   name: '기본이름'
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired
// };

class MyComponent extends Component {
  static defaultProps = {
    name: '기본이름'
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
  };

  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        의 새롭고 멋진 컴포넌트 {name}입니다. <br />
        children 값은 {children}입니다. <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    )
  }
}

export default MyComponent;