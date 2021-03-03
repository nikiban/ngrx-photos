import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotolistReducer } from './photo-list/store/reducer/photo-list.reducer';

import { PhotoListService } from './photo-list/photo-list.service';
import { PhotoListEffects } from './photo-list/store/effect/photo-list.effect';
import { SearchListPipe } from './photo-list/search-list.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PhotoListComponent,
    SearchListPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      photoList: PhotolistReducer
    }),
    EffectsModule.forRoot([PhotoListEffects]),
    FormsModule
  ],
  providers: [PhotoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
