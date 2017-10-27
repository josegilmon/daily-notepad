import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NotepadComponent } from './components/notepad/notepad.component';
import { FormsModule } from '@angular/forms';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { DateListComponent } from './components/date-list/date-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NotepadComponent,
    TextFieldComponent,
    DateListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
