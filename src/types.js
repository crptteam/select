import PropTypes from 'prop-types';

export const SelectDataType = PropTypes.oneOfType([
  PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({}),
      PropTypes.node,
    ])
  ),
  PropTypes.func,
]);
