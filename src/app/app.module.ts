import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

import { TablerIconsModule } from 'angular-tabler-icons';
import { IconCamera, IconHeart, IconBrandGithub } from 'angular-tabler-icons/icons';

const icons = {
  IconCamera,
  IconHeart,
  IconBrandGithub
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TablerIconsModule.pick(icons),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
