import PropTypes from 'prop-types';
import { PLAYER } from '../../constants';
import { FieldLayout } from './field-layout';

export const Field = ({ field, hendleCellClick }) => {
	return <FieldLayout field={field} hendleCellClick={hendleCellClick} />;
};

Field.propTypes = {
	field: PropTypes.arrayOf(PropTypes.oneOf([PLAYER.X, PLAYER.O, PLAYER.NOBODY])),
	hendleCellClick: PropTypes.func,
};
