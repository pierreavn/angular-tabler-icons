import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

import { StandaloneComponent } from './standalone/standalone.component';
import { IconsModule } from "./icons.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    StandaloneComponent,
    BrowserModule,
    IconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
