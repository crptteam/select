import React from 'react';

import {
  collectProps,
  getChildren,
  getElementType,
} from '@crpt/react-utils';

import { SelectItem } from '../styled';


export const renderOption = (item, props = {}, key) => {
  const collectedProps = collectProps(props, {
    accessor: 'getItemProps',
    initial: item,
  });

  const ElementType = getElementType(collectedProps, {
    getDefault: () => getElementType(props, {
      getDefault: () => SelectItem,
      shorthand: [
        'Item',
        'ItemComponent',
        'ItemElementType',
        'ItemRender',
        'ItemType',
      ],
      updateProps: false,
    }),
  });

  const children = getChildren(collectedProps);

  return (
    <ElementType
      key={`option-${key}`}
      {...collectedProps}
    >
      {children}
    </ElementType>
  );
};
