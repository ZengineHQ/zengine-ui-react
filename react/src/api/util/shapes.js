import PropTypes from 'prop-types';

const FieldDefinitionShape = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  help: PropTypes.string,
  validators: PropTypes.arrayOf(PropTypes.string)
};

export default FieldDefinitionShape;
