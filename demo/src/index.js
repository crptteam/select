import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import { Select } from '../../src';

const data = [
  { value: 'value1', title: 'title1' },
  { value: 'value2', title: 'title2' },
  { value: 'value3', title: 'title3' },
];

const getData = () => data;

const optionProps = () => ({style: {color: 'red'}});

const props = () => ({style: {backgroundColor: 'green'}});

const Demo = () => (
  <React.Fragment>
    <div>default select</div>
    <Select data={data} getOptionProps={optionProps} />
    <hr />
    <div>with 'as' styled component</div>
    <Select as={styled.select``} data={data} getProps={props} />
    <hr />
    <div>with 'as' object</div>
    <Select as={{ default: 'select' }} variant="default" data={data} />
    <hr />
    <div>data as function</div>
    <Select data={getData} />
    <hr />
    <div>selected option</div>
    <Select data={data} defaultValue={data[1].value} />
    <hr />
    <div>multi selected option</div>
    <Select data={data} defaultValue={[data[1].value, data[2].value]} multiple />
  </React.Fragment>
);

render(
  <Demo />,
  document.querySelector('#demo'),
);
