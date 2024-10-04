import PropTypes from 'prop-types';
import styles from './app.module.css';
import { Field, Informatin } from './components';
import { PLAYER, STATUS } from './constants';

export const AppLayout = ({
	status,
	currentPlayer,
	field,
	hendleCellClick,
	hendleRestart,
}) => {
	return (
		<div className={styles.appLayout}>
			<header className={styles.header}>
				<h1>Крестики-нолики</h1>
			</header>
			<Informatin status={status} currentPlayer={currentPlayer} />
			<Field field={field} hendleCellClick={hendleCellClick} />
			<button className={styles.newGame} onClick={hendleRestart}>
				Начать заново
			</button>
		</div>
	);
};

AppLayout.propTypes = {
	status: PropTypes.oneOf([STATUS.MOVE, STATUS.WIN, STATUS.DRAW]),
	currentPlayer: PropTypes.oneOf([PLAYER.X, PLAYER.O, PLAYER.NOBODY]),
	field: PropTypes.arrayOf(PropTypes.oneOf([PLAYER.X, PLAYER.O, PLAYER.NOBODY])),
	hendleCellClick: PropTypes.func,
	hendleRestart: PropTypes.func,
};
