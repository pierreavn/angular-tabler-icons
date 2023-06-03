import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

import { TablerIconsModule } from 'angular-tabler-icons';
import { IconCamera, IconHeart, IconBrandGithub } from 'angular-tabler-icons/icons';
import { StandaloneComponent } from './standalone/standalone.component';

const icons = {
  IconCamera,
  IconHeart,
  IconBrandGithub
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    StandaloneComponent,
    BrowserModule,
    TablerIconsModule.pick(icons),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
