import { useState } from 'react';
import { AppLayout } from './app-layout';
import { checkWin } from './utils';
import { STATUS, PLAYER } from './constants';

export const App = () => {
	const [status, setStatus] = useState(STATUS.MOVE);

	const [currentPlayer, setCurrentPlayer] = useState(PLAYER.X);

	// const initialField = ['', '', '', '', '', '', '', '', ''];
	const initialField = new Array(9).fill(PLAYER.NOBODY);
	const [field, setField] = useState(initialField);

	const hendleCellClick = (cellIndex) => {
		if (
			status === STATUS.WIN ||
			status === STATUS.DRAW ||
			field[cellIndex] !== PLAYER.NOBODY
		) {
			return;
		}
		const newField = [...field];
		newField[cellIndex] = currentPlayer;
		setField(newField);

		if (checkWin(newField, currentPlayer)) {
			setStatus(STATUS.WIN);
		} else if (newField.some((cellPlayer) => cellPlayer === PLAYER.NOBODY)) {
			setCurrentPlayer(currentPlayer === PLAYER.X ? PLAYER.O : PLAYER.X);
		} else {
			setStatus(STATUS.DRAW);
		}
	};

	const hendleRestart = () => {
		setField(initialField);
		setStatus(STATUS.MOVE);
		setCurrentPlayer(PLAYER.X);
	};

	return (
		<AppLayout
			status={status}
			currentPlayer={currentPlayer}
			field={field}
			hendleCellClick={hendleCellClick}
			hendleRestart={hendleRestart}
		/>
	);
};
