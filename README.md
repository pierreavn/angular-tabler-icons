# angular-tabler-icons

[![tabler-icons-version](https://img.shields.io/badge/Tabler%20Icons-v1.43-%23206bc4)](https://tabler-icons.io)
[![license](https://img.shields.io/npm/l/angular-tabler-icons.svg?style=flat-square)]()

## Description

This package allows you to use the [Tabler Icons](https://tabler-icons.io/) in your angular applications. Tabler Icons is a set of over 1250 free MIT-licensed high-quality SVG icons for you to use in your web projects. Each icon is designed on a 24x24 grid and a 2px stroke.  
  
Inspired by [angular-feather](https://github.com/michaelbazos/angular-feather), thank you to the author.

## Usage

_1. Install the package_

```sh
npm install angular-tabler-icons
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
  
This version includes **Tabler Icons v1.44.0**, see [changelog](https://tabler-icons.io/changelog) to know which icons are available.


## Styling icons

Each icon can be styled separately with CSS:

```html
<i-tabler name="camera" class="big fill-red stroke-blue"></i-tabler>
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
$ npm run lib:generate  # generate components from Tabler Icons
$ npm run lib:build  # build angular library
$ cd dist/angular-tabler-icons && npm publish  # publish package
```

## How to rebuild for newer tabler icons version

1. Update `@tabler/icons` version into `package.json`
2. Update version into `package.json` and `projets/angular-tabler-icons/package.json`
3. Update the two versions into `README.md`
4. Update tabler icons package: `npm update`
5. Regenerate tabler icons components: `npm run lib:generate`
6. Build angular library: `npm run lib:build`
7. Commit changes: `git add . && git commit -am 'Version 1.x.0'`
8. Create tag: `git tag 1.x.0`
9. Push commit & tag: `git push origin --tags`
10. Publish package: `cd dist/angular-tabler-icons && npm publish`
