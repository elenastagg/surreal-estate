import React from 'react';
import { shallow } from 'enzyme';
import PropertyCard from '../src/components/property-card';

let wrapper;
beforeEach(() => {
  wrapper = shallow((
    <PropertyCard
      title="mockTitle"
      type="mockType"
      bathrooms={1}
      bedrooms={2}
      price={3}
      city="mockCity"
      email="elena@elena.com"
    />
  ));
});

it('renders the title', () => {
  expect(wrapper.find('.property-card__title').text()).toEqual('mockTitle');
});

it('renders the type', () => {
  expect(wrapper.find('.property-card__type').text()).toEqual('mockType');
});

it('renders the bathrooms', () => {
  const node = wrapper.find('.property-card__bathrooms');
  expect(node.find('i').hasClass('fa-shower')).toBe(true);
  expect(node.text()).toEqual('1');
});

it('renders the bedrooms', () => {
  const node = wrapper.find('.property-card__bedrooms');
  expect(node.find('i').hasClass('fa-bed')).toBe(true);
  expect(node.text()).toEqual('2');
});

it('renders the price', () => {
  expect(wrapper.find('.property-card__price').text()).toEqual('£3');
});

it('renders the city', () => {
  expect(wrapper.find('.property-card__city').text()).toEqual('mockCity');
});

it('renders the email', () => {
  expect(wrapper.find('.property-card__email').text()).toEqual('elena@elena.com');
});
