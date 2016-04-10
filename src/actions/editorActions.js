import * as types from '../constants/ActionTypes';

export function swapHeader(settings) {
	return { type: types.SWAP_HEADER, settings };
}
