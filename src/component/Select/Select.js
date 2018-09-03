import React from 'react';

import { map, unset, set } from 'lodash';

import {
  getComponentProps,
  getElementType,
  getChildren,
  isValidChildren,
  getPropWith,
} from '@crpt/react-utils';

import {
  SelectPropTypes,
  SelectDefaultProps,
} from './Select.types';

const Select = (props) => {
  const componentProps = getComponentProps(Select, props);

  const ElementType = getElementType(componentProps);

  const children = getChildren(componentProps, {
    getDefault: (ownProps) => {
      const data = getPropWith(ownProps, 'data');
      const { renderOption, ...passProps } = ownProps;

      const defaultChildren = typeof renderOption === 'function'
        ? map(data, (option, key) => renderOption(option, passProps, key))
        : null;

      return isValidChildren(defaultChildren)
        ? defaultChildren
        : null;
    },
    updateProps: (propValue, propName, ownProps) => {
      unset(ownProps, 'data');
      unset(ownProps, 'renderOption');
      set(ownProps, propName, propValue);
    }
  });

  return (
    <ElementType {...componentProps}>
      {children}
    </ElementType>
  );
};

Select.displayName = 'Select';

Select.propTypes = SelectPropTypes;

Select.defaultProps = SelectDefaultProps;

export default Select;
