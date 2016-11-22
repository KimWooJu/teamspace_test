import React from 'react';
import { MainPage } from 'components';
import { connect } from 'react-redux';


class Main extends React.Component {

  constructor(props) {
      super(props);
  }

  render () {
      return (
          <div>
              <MainPage />
          </div>
      );
  }
};

export default Main;
