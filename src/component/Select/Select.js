import React from 'react';

import { map } from 'lodash';

import {
  getComponentProps,
  getElementType,
  getChildren,
  isValidChildren,
} from '@crpt/react-utils';

import {
  SelectPropTypes,
  SelectDefaultProps,
} from './Select.types';

const Select = (props) => {
  const componentProps = getComponentProps(Select, props);

  const ElementType = getElementType(componentProps);

  const { data, renderOption, ...passProps } = componentProps;

  const children = getChildren(componentProps, {
    getDefault: () => {
      const values = typeof data === 'function'
        ? data(passProps)
        : data;

      const defaultChildren = typeof renderOption === 'function'
        ? map(values, (option, key) => renderOption(option, passProps, key))
        : null;

      return isValidChildren(defaultChildren)
        ? defaultChildren
        : null;
    },
  });

  return (
    <ElementType {...passProps}>
      {children}
    </ElementType>
  );
};

Select.displayName = 'Select';

Select.propTypes = SelectPropTypes;

Select.defaultProps = SelectDefaultProps;

export default Select;
