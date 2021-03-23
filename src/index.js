import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Col, Container, Row,
} from 'react-bootstrap';
import Navigation from './components/navigation';
import Movielist from './components/movielist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      axiosData:null 
    };
  }

  componentDidMount() {
    Axios.get('https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&facet=category&facet=tags&facet=address_name&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=access_type&facet=price_type')
      .then((data) => this.setState({axiosData:data}))
      .catch((err) => console.log(err));
  }

  render() {
    const [...state] = this.state;

    return (
      <div>
        <Navigation onInput={this.filterMovies} />
          <Container>
            <Row>
              <Col xs={8}>
                <h3> Aucune activité disponible </h3>
                <h5>
                  Résultats :
                  {state.length > 0 ? state.length : '0'}
                </h5>
                <Movielist data={state} />
              </Col>
            </Row>
          </Container>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
