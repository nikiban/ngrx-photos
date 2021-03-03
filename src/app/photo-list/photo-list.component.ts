import { Component, OnInit } from '@angular/core';
import { PhotoListService } from './photo-list.service';
import { Store } from '@ngrx/store';
import { AppState } from './store/models/appState.model';
import { PhotoItem } from './store/models/photo-list.model';
import * as PhotoActions from './store/action/photo-list.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  searchText: string;
  photoItems: Array<PhotoItem>;
  showLoading: boolean;
  showError: Error;

  constructor(private service: PhotoListService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.searchText = '';
    this.store.select('photoList').subscribe((data) => {
      this.photoItems = data.list;
      this.showLoading = data.loading;
      this.showError = data.error;
    })
    this.store.dispatch(new PhotoActions.LoadShoppingAction());
  }

}
