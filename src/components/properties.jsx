import React, { Fragment } from 'react';
import PropertyCard from './property-card';
import '../../styles/addproperty.scss';
import axios from 'axios';
import Alert from './alert';

class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alertMessage: '',
      isError: false,
      properties: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/PropertyListing')
      .then((response) => {
        this.setState({
          properties: response.data,
        });
      })
      .catch(() => {
        this.setState({
          alertMessage: 'There was a problem retrieving the properties',
          isError: true,
        });
      });
  }

  render() {
    return (
      <Fragment>
        {
          this.state.isError && (
            <div className="Alert Alert.success">
              <Alert message={this.state.alertMessage} />
            </div>
          )
        }
        {this.state.properties.map(property => (
          <div key={property._id} className="col">
            <PropertyCard {...property} />
          </div>
        ))}
      </Fragment>
    );
  }
}

export default Properties;
