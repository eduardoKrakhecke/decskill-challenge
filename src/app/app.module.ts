import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CreatePostComponent,
    TimelineComponent,
    DialogComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
