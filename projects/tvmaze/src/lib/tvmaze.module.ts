import { NgModule } from '@angular/core';
import { TvmazeComponent } from './tvmaze.component';
import { PosterComponent } from './poster.component';

@NgModule({
  declarations: [TvmazeComponent, PosterComponent],
  imports: [
  ],
  exports: [TvmazeComponent]
})
export class TvmazeModule { }
