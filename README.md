# angular-tabler-icons

[![tabler-icons-version](https://img.shields.io/badge/Tabler%20Icons-v3.1.0-%23206bc4?style=flat-square)](https://tabler.io/icons)
[![license](https://img.shields.io/npm/l/angular-tabler-icons.svg?style=flat-square)]()
[![downloads](https://img.shields.io/npm/dm/angular-tabler-icons?style=flat-square)]()

## Description

This package allows you to use the [Tabler Icons](https://tabler.io/icons) in your angular applications. Tabler Icons is a set of free MIT-licensed high-quality SVG icons for you to use in your web projects. Each icon is designed on a 24x24 grid and a 2px stroke.

Inspired by [angular-feather](https://github.com/michaelbazos/angular-feather), thank you to the author.

## Install

_1. Install the package_

```sh
npm install angular-tabler-icons
# or
yarn add angular-tabler-icons
```

## Usage

### Standalone

If you are using Standalone Components, use the `provideTablerIcons()`

#### Component

```ts
import { Component } from '@angular/core';
import { TablerIconComponent, provideTablerIcons } from 'angular-tabler-icons';
import {
  IconNumber123,
  IconAdOff,
  IconHeartFilled,
} from 'angular-tabler-icons/icons';

@Component({
  selector: 'app-standalone',
  imports: [TablerIconComponent],
  /**
   * Provide the icons which you want to use in this component.
   */
  providers: [
    provideTablerIcons({
      IconNumber123,
      IconAdOff,
      IconHeartFilled,
    }),
  ],
,
})
export class StandaloneComponent {}

```

#### HTML

```html
<fieldset>
  <legend>123</legend>
  <i-tabler name="number-123"></i-tabler>
</fieldset>

<fieldset>
  <legend>123 (style, big)</legend>
  <i-tabler name="number-123" style="height: 60px; width: 60px;"></i-tabler>
</fieldset>

<fieldset>
  <legend>ad-off (style, red)</legend>
  <i-tabler name="ad-off" style="color: red;"></i-tabler>
</fieldset>

<fieldset>
  <legend>heart-filled (style, red)</legend>
  <i-tabler name="heart-filled" style="color: red;"></i-tabler>
</fieldset>
```

### NgModule (Legacy)

_1. Generate a module to host the icons you'll import_

```sh
ng generate module icons
```

_2. Import assets_

You need to import:

- TablerIconsModule, as it contains the `<i-tabler>` component
- The icons that you need

We put this in IconsModule for modularity. See example below:

_file: icon.module.ts_

```ts
import { NgModule } from "@angular/core";

import { TablerIconsModule } from "angular-tabler-icons";
import { IconCamera, IconHeart, IconBrandGithub } from "angular-tabler-icons/icons";

// Select some icons (use an object, not an array)
const icons = {
  IconCamera,
  IconHeart,
  IconBrandGithub,
};

@NgModule({
  imports: [TablerIconsModule.pick(icons)],
  exports: [TablerIconsModule],
})
export class IconsModule {}

// NOTES:
// 1. We add TablerIconsModule to the 'exports', since the <i-tabler> component will be used in templates of parent module
// 2. Don't forget to pick some icons using TablerIconsModule.pick({ ... })
```

_3. Import IconsModule_

If you are using NgModules, import it this way:

```ts
import { NgModule } from "@angular/core";
import { MyComponent } from "./my/my.component";
import { IconsModule } from "./icons.module";

@NgModule({
  declarations: [MyComponent],
  imports: [
    IconsModule, // <--- Here
  ],
})
export class MyModule {}
```

_4. Use it in template_

After importing the _IconsModule_ in your feature or shared module, use the icons as follows:

```html
<i-tabler name="camera"></i-tabler>
<i-tabler name="heart" style="color: red;"></i-tabler>
<i-tabler name="heart-filled" style="color: red;"></i-tabler>
<i-tabler name="brand-github" class="someclass"></i-tabler>
```

## Available icons

List of available icons: <https://tabler.io/icons>

This version includes **Tabler Icons v3.1.0**, see [changelog](https://tabler.io/icons/changelog) to know which icons are available.

## Styling icons

Each icon can be styled separately with CSS:

```html
<i-tabler name="camera" class="big fill-red stroke-blue thin"></i-tabler>
```

```css
.big {
  height: 50px;
  width: 50px;
}

.fill-red {
  fill: red;
}

.stroke-blue {
  color: blue;
}

.thin {
  stroke-width: 1px;
}
```

## Options

Some options are available to configure the module:

```ts
import { environment } from "../environments/environment";
import { TablerIconsModule } from "angular-tabler-icons";
import * as TablerIcons from "angular-tabler-icons/icons";

@NgModule({
  imports: [
    TablerIconsModule.pick(TablerIcons, {
      // Ignore warnings, such as "Tabler Icon not found", for example:
      //   ignoreWarnings: environment.production,
      ignoreWarnings: true,
    }),
  ],
  exports: [TablerIconsModule],
})
export class IconsModule {}
```

## Pick all icons

You can import all icons at once by doing the following. However, keep in mind that by doing this, all icons will end up in your application bundle. While this may not be much of an issue for prototyping, **it is not recommended for any application that you plan to release**.

```ts
import { TablerIconsModule } from "angular-tabler-icons";
import * as TablerIcons from "angular-tabler-icons/icons";

@NgModule({
  imports: [TablerIconsModule.pick(TablerIcons)],
  exports: [TablerIconsModule],
})
export class IconsModule {}
```

## Angular version compatibility

| Angular | angular-tabler-icons |
| ------- | -------------------- |
| 18      | 3.10.0+              |
| 17      | 2.40.1+              |
| 16      | 2.21.1+              |
| 15      | 1.117.1+             |
| 14      | 1.72.1+              |
| 13      | 1.53.1+              |
| 12      | 1.41.3+              |
| 11      | 1.41.0+              |

## Contributing

Feel free to report issues or to contribute to this project!
Here are few tips to start:

```bash
yarn lib:generate  # generate components from Tabler Icons
yarn lib:build  # build angular library
```

## How to rebuild for newer tabler icons version

1. Run GitHub actions workflow `Automatic PR on Tabler Icons Release`, with new Tabler Icons version (e.g. `2.40.0`). This workflow will create automatically a new Pull Request.
2. Approve and Merge the generated Pull Request.
3. Create a release/tag with the new Tabler Icons version.

Package is automatically rebuilt and published, with the GitHub actions workflow `Build and Publish package`.
