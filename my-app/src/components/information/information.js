import PropTypes from 'prop-types';
import { PLAYER, PLAYER_ACTION, PLAYER_NAME, STATUS } from '../../constants';
import { InformationLayout } from './information-layout';

export const Informatin = ({ status, currentPlayer }) => {
	const playerAction = PLAYER_ACTION[status];
	const playerName = PLAYER_NAME[currentPlayer];

	const information =
		status === STATUS.DRAW ? `${playerAction}` : `${playerAction}: ${playerName}`;

	return <InformationLayout information={information} />;
};

Informatin.propTypes = {
	status: PropTypes.oneOf([STATUS.MOVE, STATUS.WIN, STATUS.DRAW]),
	currentPlayer: PropTypes.oneOf([PLAYER.X, PLAYER.O, PLAYER.NOBODY]),
};
