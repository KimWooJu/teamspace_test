import React from 'react';
import { Carousel } from 'react-bootstrap';

class MainPage extends React.Component {
    constructor(props) {
      super(props);
    }

    render () {
        return (
            <div>
              <img width={1000} height={500} src="./image/a.jpg"/>
              <img width={900} height={500} src="./image/b.jpg"/>
              <img width={900} height={500} src="./image/c.jpg"/>
            </div>
        );
    }

}

export default MainPage;
