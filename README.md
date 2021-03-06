# angular-tabler-icons

[![tabler-icons-version](https://img.shields.io/badge/Tabler%20Icons-v1.78.0-%23206bc4?style=flat-square)](https://tabler-icons.io)
[![license](https://img.shields.io/npm/l/angular-tabler-icons.svg?style=flat-square)]()
[![downloads](https://img.shields.io/npm/dm/angular-tabler-icons?style=flat-square)]()

## Description

This package allows you to use the [Tabler Icons](https://tabler-icons.io/) in your angular applications. Tabler Icons is a set of over 2050 free MIT-licensed high-quality SVG icons for you to use in your web projects. Each icon is designed on a 24x24 grid and a 2px stroke.  
  
Inspired by [angular-feather](https://github.com/michaelbazos/angular-feather), thank you to the author.

## Usage

_1. Install the package_

```sh
npm install angular-tabler-icons
# or
yarn add angular-tabler-icons
```

_2. Generate a module to host the icons you'll import_
 
```sh
ng generate module icons
```
  
_3. Import assets_ 

You need to import:
 - TablerIconsModule, as it contains the `<i-tabler>` component
 - The icons that you need

We put this in IconsModule for modularity. See example below:


*file: icon.module.ts*
```ts  
import { NgModule } from '@angular/core';

import { TablerIconsModule } from 'angular-tabler-icons';
import { IconCamera, IconHeart, IconBrandGithub } from 'angular-tabler-icons/icons';

// Select some icons (use an object, not an array)
const icons = {
  IconCamera,
  IconHeart,
  IconBrandGithub
};

@NgModule({
  imports: [
    TablerIconsModule.pick(icons)
  ],
  exports: [
    TablerIconsModule
  ]
})
export class IconsModule { }

// NOTES:
// 1. We add TablerIconsModule to the 'exports', since the <i-tabler> component will be used in templates of parent module
// 2. Don't forget to pick some icons using TablerIconsModule.pick({ ... })
```

_4. Use it in template_

After importing the _IconsModule_ in your feature or shared module, use the icons as follows:

```html
<i-tabler name="camera"></i-tabler>
<i-tabler name="heart" style="color: red;"></i-tabler>
<i-tabler name="brand-github" class="someclass"></i-tabler>
```

## Available icons

List of available icons: https://tabler-icons.io/  
  
This version includes **Tabler Icons v1.78.0**, see [changelog](https://tabler-icons.io/changelog) to know which icons are available.


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
import { environment } from '../environments/environment';
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

@NgModule({
  imports: [
    TablerIconsModule.pick(TablerIcons, {

      // Ignore warnings, such as "Tabler Icon not found"
      ignoreWarnings: true,
      ignoreWarnings: environment.production,

    })
  ],
  exports: [
    TablerIconsModule
  ]
})
export class IconsModule { }
```

## Pick all icons

You can import all icons at once by doing the following. However, keep in mind that by doing this, all icons will end up in your application bundle. While this may not be much of an issue for prototyping, **it is not recommended for any application that you plan to release**.

```ts
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

@NgModule({
  imports: [
    TablerIconsModule.pick(TablerIcons)
  ],
  exports: [
    TablerIconsModule
  ]
})
export class IconsModule { }
```

## Contributing

Feel free to report issues or to contibute to this project!  
Here are few tips to start:
```bash
$ yarn lib:generate  # generate components from Tabler Icons
$ yarn lib:build  # build angular library
```

## How to rebuild for newer tabler icons version

1. Run GitHub actions workflow `Automatic PR on Tabler Icons Release`, with new Tabler Icons version (e.g. `1.65.0`). This workflow will create automatically a new Pull Request.
2. Approve and Merge the generated Pull Request.
3. Create a release/tag with the new Tabler Icons version.
  
Package is automatically rebuilt and published, with the GitHub actions workflow `Build and Publish package`.
