import * as PhotoActions from '../action/photo-list.action';
import { PhotoItem } from '../models/photo-list.model';

export interface State {
	list: Array<PhotoItem>;
	loading: boolean;
	error: Error;
}

const initialState: State = {
	list: [],
	loading: true,
	error: undefined
};

export function PhotolistReducer(state: State = initialState, action: PhotoActions.PhotoListActions) {
	switch (action.type) {
		case PhotoActions.LOAD_PHOTOLIST:
			return {
				...state,
				loading: true
			}
		case PhotoActions.LOAD_PHOTOLIST_SUCCESS:
			return {
				...state,
				list: action.payload,
				loading: false
			}
		case PhotoActions.LOAD_PHOTOLIST_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			}
		default:
			return state;
	}
}