# FuzeLib

`FuzeLib` is an Angular component library designed to streamline UI development with reusable, customizable components. It includes essential UI components like buttons, dropdown lists, accordions, avatars, and more.

This library is built with Angular and packaged for easy installation via npm.

## Installation

To install `FuzeLib` in your Angular project, run the following command:

```bash
npm install fuze-lib --save
```

Once installed, you can start using the components provided by the library in your Angular application.

## Usage

After installation, you need to import the desired components from the library into your Angular module. Below is an example of how to use FuzeLib components:

1. Import Components: In your module file (app.module.ts), import the components you want to use.
```bash
import { ButtonComponent } from 'fuze-lib';
```

2. Add FuzeLibModule to your imports array:
```bash
@NgModule({
  declarations: [AppComponent],
  imports: [ButtonComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

3. Use Components in Templates: Now, you can use any component in your templates. For example:
```bash
<lib-button [primary]="true" [size]="'medium'" [backgroundColor]="'#DC3E4E'" [borderRadius]="'1em'">Click Me</lib-button>

<lib-dropdown-list [items]="['Option 1', 'Option 2', 'Option 3']" [placeholder]="'Select an option'" (onSelect)="handleSelect($event)"></lib-dropdown-list>
```


## Additional Resources
For more information on using the Angular CLI, including detailed command references, visit the Angular CLI Overview and Command Reference page.
