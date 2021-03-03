import { Action } from '@ngrx/store';
import { PhotoItem } from '../models/photo-list.model';

export const LOAD_PHOTOLIST = '[PHOTO LIST] load photo list';
export const LOAD_PHOTOLIST_SUCCESS = '[PHOTO LIST] load photo list success';
export const LOAD_PHOTOLIST_FAILURE = '[PHOTO LIST] load photo list failure';

export class LoadShoppingAction implements Action {
	readonly type = LOAD_PHOTOLIST
}

export class LoadShoppingSuccessAction implements Action {
	readonly type = LOAD_PHOTOLIST_SUCCESS

	constructor(public payload: Array<PhotoItem>) { }

}
export class LoadShoppingFailureAction implements Action {
	readonly type = LOAD_PHOTOLIST_FAILURE

	constructor(public payload: string) { }
}

export type PhotoListActions = LoadShoppingAction | LoadShoppingSuccessAction | LoadShoppingFailureAction;