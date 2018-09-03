import PropTypes from 'prop-types';

import { SelectDataType } from '../../types';

import { renderOption } from '../../lib';

import { SelectWrapper } from '../../styled';

export const SelectPropTypes = {
  as: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.symbol,
    PropTypes.shape({}),
  ]),

  data: SelectDataType.isRequired,
  multiple: PropTypes.bool,

  getOptionProps: PropTypes.func,
  getProps: PropTypes.func,

  renderOption: PropTypes.func,

  className: PropTypes.string,
  style: PropTypes.shape({}),
  theme: PropTypes.shape({}).isRequired,
};

export const SelectDefaultProps = {
  as: SelectWrapper,
  data: [],
  renderOption,
  theme: {},
};
