# angular-tabler-icons <!-- omit in toc -->

[![tabler-icons-version](https://img.shields.io/badge/Tabler%20Icons-v3.26.0-%23206bc4?style=flat-square)](https://tabler.io/icons)
[![license](https://img.shields.io/npm/l/angular-tabler-icons.svg?style=flat-square)]()
[![downloads](https://img.shields.io/npm/dm/angular-tabler-icons?style=flat-square)]()

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

This package allows you to use the [Tabler Icons](https://tabler.io/icons) in your angular applications. Tabler Icons is a set of free MIT-licensed high-quality SVG icons for you to use in your web projects. Each icon is designed on a 24x24 grid and a 2px stroke.

- [Quick Start](#quick-start)
- [Usage](#usage)
  - [Available icons](#available-icons)
  - [Standalone (Recommended)](#standalone-recommended)
    - [Component](#component)
    - [HTML](#html)
  - [Styling icons](#styling-icons)
  - [Options](#options)
  - [Pick all icons](#pick-all-icons)
  - [NgModule (Legacy)](#ngmodule-legacy)
    - [Generate a module to host the icons you'll import\_](#generate-a-module-to-host-the-icons-youll-import_)
    - [Import assets](#import-assets)
    - [Import IconsModule](#import-iconsmodule)
    - [Use it in template\_](#use-it-in-template_)
- [Bundle Size Considerations](#bundle-size-considerations)
- [Angular compatibility](#angular-compatibility)
  - [Angular 19 | \>= v3.22](#angular-19---v322)
    - [Breaking Changes](#breaking-changes)
    - [Migration Guide](#migration-guide)
  - [Angular 18 | \<= v3.10.0](#angular-18---v3100)
- [Contributing](#contributing)
  - [How to rebuild for newer tabler icons version](#how-to-rebuild-for-newer-tabler-icons-version)
- [Contributors ✨](#contributors-)

## Quick Start

For a minimal setup, install the package, import the icons you need, and start using them in your templates:

```bash
npm install angular-tabler-icons
```

```ts
import { Component } from "@angular/core";
import { TablerIconComponent, provideTablerIcons } from "angular-tabler-icons";
import { IconNumber123 } from "angular-tabler-icons/icons";

@Component({
  selector: "app-demo",
  standalone: true,
  imports: [TablerIconComponent],
  providers: [provideTablerIcons({ IconNumber123 })],
  template: '< name="number-123"></>',
})
export class DemoComponent {}
```

## Usage

### Available icons

List of available icons: <https://tabler.io/icons>

This version includes **Tabler Icons v3.26.0**, see [changelog](https://tabler.io/icons/changelog) to know which icons are available.

### Standalone (Recommended)

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
  < name="number-123"></>
</fieldset>

<fieldset>
  <legend>123 (style, big)</legend>
  < name="number-123" style="height: 60px; width: 60px;"></>
</fieldset>

<fieldset>
  <legend>ad-off (style, red)</legend>
  < name="ad-off" style="color: red;"></>
</fieldset>

<fieldset>
  <legend>heart-filled (style, red)</legend>
  < name="heart-filled" style="color: red;"></>
</fieldset>
```

### Styling icons

Each icon can be styled separately with CSS:

```html
< name="camera" class="big fill-red stroke-blue thin"></>
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

### Options

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

### Pick all icons

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

### NgModule (Legacy)

#### Generate a module to host the icons you'll import\_

```sh
ng generate module icons
```

#### Import assets

You need to import:

- TablerIconsModule, as it contains the `<>` component
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
// 1. We add TablerIconsModule to the 'exports', since the <> component will be used in templates of parent module
// 2. Don't forget to pick some icons using TablerIconsModule.pick({ ... })
```

#### Import IconsModule

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

#### Use it in template\_

After importing the _IconsModule_ in your feature or shared module, use the icons as follows:

```html
< name="camera"></>
< name="heart" style="color: red;"></>
< name="heart-filled" style="color: red;"></>
< name="brand-github" class="someclass"></>
```

## Bundle Size Considerations

⚠️ **Important**: Importing all icons will increase your bundle size. For production:

✅ **Recommended**:

- Import only the icons you need
- Use tree-shakable standalone providers
- Consider lazy loading icon modules

❌ **Not recommended**:

- Importing all icons at once
- Using `TablerIcons.*` import syntax

## Angular compatibility

| Angular | angular-tabler-icons                                               |
| ------- | ------------------------------------------------------------------ |
| 19      | 3.22.0+ [see "Angular 19" section](#angular-19---v322)             |
| 18      | 2.40.1 - 3.1.0 [see "Angular 18" section](<(#angular-18---v3100)>) |
| 17      | 2.40.1+                                                            |
| 16      | 2.21.1+                                                            |
| 15      | 1.117.1+                                                           |
| 14      | 1.72.1+                                                            |
| 13      | 1.53.1+                                                            |
| 12      | 1.41.3+                                                            |
| 11      | 1.41.0+                                                            |

**N.B.**

_Versions are aligned with the [tabler iconst](https://github.com/tabler/tabler-icons/releases) versions._

_Therefore angular-tabler-icons is not following the official SemVer._

### Angular 19 | >= v3.22

This version uses Angular's Signals API and standalone components by default.

#### Breaking Changes

- Deprecated `TablerIconsModule.pick()` in favor of `provideTablerIcons()`
- Icons now use standalone components
- Requires Angular 19.0.0 or higher
- Updated to ES2022 module format

#### Migration Guide

From NgModule syntax:

```typescript
@NgModule({
  imports: [TablerIconsModule.pick(icons)]
})
```

To standalone syntax:

```typescript
import { provideTablerIcons } from "angular-tabler-icons";

export const appConfig: ApplicationConfig = {
  providers: [provideTablerIcons({ icons })],
};
```

or

```typescript
@Component({
  selector: 'my-standalone-component',
  imports: [TablerIconComponent],
  /**
   * Provide the icons which you want to use in this component.
   */
  providers: [
    provideTablerIcons({
      IconNumber123,
      IconHeartFilled,
    }),
  ],
,
})
export class StandaloneComponent {}
```

### Angular 18 | <= v3.10.0

Angular 18 is _not officially supported_, however with `3.1.x` you can use the [overrides](https://docs.npmjs.com/cli/v10/configuring-npm/package-json?v=true#overrides) in your package.json when using `npm`

```json
"overrides": {
  "angular-tabler-icons": {
    "peerDependencies": {
      "@angular/common": "18.x",
      "@angular/core": "18.x"
    }
  }
}
```

With `pnpm` you can use the [peerDependencyRules.allowVersions](https://pnpm.io/package_json#pnpmpeerdependencyrulesallowedversions) in your package.json

```json
"pnpm": {
    "peerDependencyRules": {
      "allowedVersions": {
        "angular-tabler-icons>@angular/common": "18",
        "angular-tabler-icons>@angular/core": "18"
      }
    }
  },
```

## Contributing

Feel free to report issues or to contribute to this project!
Here are few tips to start:

```bash
yarn lib:generate  # generate components from Tabler Icons
yarn lib:build  # build angular library
```

### How to rebuild for newer tabler icons version

1. Run GitHub actions workflow `Automatic PR on Tabler Icons Release`, with new Tabler Icons version (e.g. `2.40.0`). This workflow will create automatically a new Pull Request.
2. Approve and Merge the generated Pull Request.
3. Create a release/tag with the new Tabler Icons version.

Package is automatically rebuilt and published, with the GitHub actions workflow `Build and Publish package`.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/pierreavn"><img src="https://avatars.githubusercontent.com/u/8176955?v=4?s=100" width="100px;" alt="Pierre"/><br /><sub><b>Pierre</b></sub></a><br /><a href="https://github.com/pierreavn/angular-tabler-icons/commits?author=pierreavn" title="Code">💻</a> <a href="https://github.com/pierreavn/angular-tabler-icons/commits?author=pierreavn" title="Documentation">📖</a> <a href="#maintenance-pierreavn" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/the-ult"><img src="https://avatars.githubusercontent.com/u/4863062?v=4?s=100" width="100px;" alt="The Ult"/><br /><sub><b>The Ult</b></sub></a><br /><a href="https://github.com/pierreavn/angular-tabler-icons/commits?author=the-ult" title="Code">💻</a> <a href="https://github.com/pierreavn/angular-tabler-icons/commits?author=the-ult" title="Documentation">📖</a> <a href="#maintenance-the-ult" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/janschab"><img src="https://avatars.githubusercontent.com/u/56731968?v=4?s=100" width="100px;" alt="Jan Schab"/><br /><sub><b>Jan Schab</b></sub></a><br /><a href="https://github.com/pierreavn/angular-tabler-icons/commits?author=janschab" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
