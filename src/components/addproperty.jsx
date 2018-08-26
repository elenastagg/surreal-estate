import React from 'react';
import '../../styles/addproperty.scss';
import Field from './field';
import axios from 'axios';
import Alert from './alert';

class AddProperty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      type: '',
      bedrooms: 1,
      bathrooms: 0,
      price: 0,
      city: '',
      email: '',
      alertMessage: '',
      isSuccess: false,
      isError: false,
    };

    this.handleAddProperty = this.handleAddProperty.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleAddProperty(event) {
    event.preventDefault();
    this.setState({
      alertMessage: '',
      isSuccess: false,
      isError: false,
    });

    axios.post('http://localhost:3000/api/v1/PropertyListing/', this.state)
      .then(() => this.setState({
        isSuccess: true,
        alertMessage: 'Property added.',
      }))
      .catch(() => {
        this.setState({
          alertMessage: 'Server error. Please try again later.',
          isError: true,
        });
      });
  }

  handleFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleOptionChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="add-property">
        <form onSubmit={this.handleAddProperty}>
          <div className="Alert Alert.success">
            {
              this.state.isSuccess &&
                <Alert message={this.state.alertMessage} success />
            }
            {
              this.state.isError &&
                <Alert message={this.state.alertMessage} />
            }
          </div>
          <div className="row">
            <Field label="Title" name="title">
              <input
                className="input top-input"
                name="title"
                value={this.state.title}
                placeholder="A tagline for your property"
                onChange={this.handleFieldChange}
              />
            </Field>
          </div>

          <div className="row">
            <Field label="Type" name="type">
              <select
                className="select-input"
                value={this.state.type}
                onChange={this.handleOptionChange}
                name="type"
              >
                <option value="Flat">Flat</option>
                <option value="Detached">Detached</option>
                <option value="Semi-Detached">Semi-Detached</option>
                <option value="Terraced">Terraced</option>
                <option value="End Of Terrace">End Of Terrace</option>
                <option value="Cottage">Cottage</option>
                <option value="Bungalow">Bungalow</option>
              </select>
            </Field>

            <Field label="Price £" name="price">
              <input
                className="input"
                name="price"
                type="number"
                min={0}
                value={this.state.price}
                onChange={this.handleFieldChange}
              />
            </Field>
          </div>

          <div className="row">

            <Field label="Bedrooms" name="bedrooms">
              <input
                className="input"
                name="bedrooms"
                type="number"
                min={1}
                max={10}
                value={this.state.bedrooms}
                onChange={this.handleFieldChange}
              />
            </Field>

            <Field label="Bathrooms" name="bathrooms">
              <input
                className="input"
                name="bathrooms"
                type="number"
                min={1}
                max={6}
                value={this.state.bathrooms}
                onChange={this.handleFieldChange}
              />
            </Field>
          </div>

          <div className="row">
            <Field label="City" name="city">
              <select
                className="select-input"
                value={this.state.city}
                onChange={this.handleOptionChange}
                name="city"
              >
                <option value="Manchester">Manchester</option>
                <option value="Leeds">Leeds</option>
                <option value="Sheffield">Sheffield</option>
                <option value="Liverpool">Liverpool</option>
              </select>
            </Field>

            <Field label="Email" name="email">
              <input
                className="input"
                name="email"
                type="email"
                value={this.state.email}
                placeholder="example@example.com"
                onChange={this.handleFieldChange}
              />
            </Field>
          </div>
          <button type="submit" className="button">
            Add Property
          </button>
        </form>
      </div>
    );
  }
}

export default AddProperty;
