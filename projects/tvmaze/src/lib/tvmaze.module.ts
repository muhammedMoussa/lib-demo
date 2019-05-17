import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvmazeComponent } from './tvmaze.component';
import { PosterComponent } from './poster.component';

@NgModule({
  declarations: [TvmazeComponent, PosterComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [TvmazeComponent, PosterComponent]
})
export class TvmazeModule { }
