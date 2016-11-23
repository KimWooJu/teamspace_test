import React from 'react';
import { Carousel } from 'react-bootstrap';

class MainPage extends React.Component {
    constructor(props) {
      super(props);
    }

    render () {
        return (
            <div>
                <Carousel>
                  <Carousel.Item>
                    <img width={1000} height={500} src="./image/a.jpg"/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img width={900} height={500} src="./image/b.jpg"/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img width={900} height={500} src="./image/c.jpg"/>
                  </Carousel.Item>
                </Carousel>
            </div>
        );
    }

}

export default MainPage;
