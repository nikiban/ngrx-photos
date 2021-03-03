
import { Injectable } from '@angular/core';
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { PhotoListService } from '../../photo-list.service';
import * as PhotoActions from '../action/photo-list.action';
import { PhotoItem } from '../models/photo-list.model';

@Injectable()
export class PhotoListEffects {
	loadPhotoList$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(PhotoActions.LOAD_PHOTOLIST),
			mergeMap(
				() =>
					this.photoListService.getPhotoList()
						.pipe(
							map((data: Array<PhotoItem>) => {
								return new PhotoActions.LoadShoppingSuccessAction(data)
							}),
							catchError(error => of(new PhotoActions.LoadShoppingFailureAction(error)))
						)

			)
		)
	});
	constructor(
		private actions$: Actions,
		private photoListService: PhotoListService
	) { }
}