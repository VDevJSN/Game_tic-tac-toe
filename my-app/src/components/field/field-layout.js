import PropTypes from 'prop-types';
import { PLAYER, PLAYER_SIGN } from '../../constants';
import styles from './field.module.css';

export const FieldLayout = ({ field, hendleCellClick }) => {
	return (
		<div className={styles.field}>
			{field.map((cellPlayer, index) => (
				<button
					key={index}
					className={styles.cell}
					onClick={() => hendleCellClick(index)}
				>
					{PLAYER_SIGN[cellPlayer]}
				</button>
			))}
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.oneOf([PLAYER.X, PLAYER.O, PLAYER.NOBODY])),
	hendleCellClick: PropTypes.func,
};
