# Angular Simple Global [![Paypal donate](https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif)](https://www.paypal.com/donate/?business=HZF49NM9D35SJ&no_recurring=0&currency_code=CAD)

A global variable service for Angular.
<!--more-->

> __ngx-simple-global__ uses Angular CLI starting 12.2.0.

### Table Of Content
<!-- TOC -->

- [Install](#install)
- [Usage](#usage)
  - [Module](#module)
  - [Component](#component)
- [API](#api)
- [Example](#example)
- [Repository](#repository)
- [Contributors](#contributors)
- [Changelog](#changelog)
- [License](#license)

<!-- /TOC -->

### Install

```sh
npm install ngx-simple-global
```

### Usage

`ngx-simple-global` is implemented as Angular injectable service name **SimpleGlobal**.

#### Module

Add `SimpleGlobal` into module providers.

```ts
import { SimpleGlobal } from 'ngx-simple-global';

@NgModule({
    providers: [SimpleGlobal]
})
```

#### Component

```ts
import {SimpleGlobal} from 'ngx-simple-global';

export class ChildComponent {

    constructor(private sg: SimpleGlobal) { }

}
```

### API

```ts
import {SimpleGlobal} from 'ngx-simple-global';

@Component({
    selector: 'child-com',
    template: `
        <p>This is a global variable: {{sg.gv}}</p>
        <input type="text" [(ngModel)]="sg.gv">
    `
})
export class ChildComponent {

    localVar;

    constructor(private sg: SimpleGlobal) {
        if (this.sg['gv']) {
            this.localVar = this.sg['gv'];
        }
    }

}
```

