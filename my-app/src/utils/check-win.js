import { WIN_PATTERNS } from '../constants';

export const checkWin = (field, currentPlayer) => {
	return WIN_PATTERNS.some((winPattern) => {
		return winPattern.every((cellIndex) => field[cellIndex] === currentPlayer);
	});
};
