import * as i0 from '@angular/core';
import { Injectable, Component, EventEmitter, Input, Output } from '@angular/core';
import { Injectable, Component, EventEmitter, Input, Output } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class FuzeLibService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: FuzeLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: FuzeLibService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: FuzeLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class FuzeLibComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: FuzeLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.1", type: FuzeLibComponent, isStandalone: true, selector: "lib-fuze-lib", ngImport: i0, template: `
    <p>
      fuze-lib works!
    </p>
  `, isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: FuzeLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-fuze-lib', imports: [], template: `
    <p>
      fuze-lib works!
    </p>
  ` }]
        }] });

class ButtonComponent {
    /** Is this the principal call to action on the page? */
    primary = false;
    /** What background color to use */
    backgroundColor;
    /** How large should the button be? */
    size = 'medium';
    /** Button contents */
    label = 'Button';
    /** Optional click handler */
    onClick = new EventEmitter();
    /** Optional disabled state */
    disabled = false;
    /** Optional border radius */
    borderRadius = '1em'; // Default border radius
    // Dynamically calculate the button classes based on input properties
    get classes() {
        const mode = this.primary ? 'lib-button--primary' : 'lib-button--secondary';
        return ['lib-button', `lib-button--${this.size}`, mode];
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.1", type: ButtonComponent, isStandalone: true, selector: "lib-button", inputs: { primary: "primary", backgroundColor: "backgroundColor", size: "size", label: "label", disabled: "disabled", borderRadius: "borderRadius" }, outputs: { onClick: "onClick" }, ngImport: i0, template: `
    <button
      type="button"
      (click)="onClick.emit($event)"
      [ngClass]="classes"
      [ngStyle]="{
        'background-color': backgroundColor,
        'border-radius': borderRadius
      }"
      [disabled]="disabled"
    >
      {{ label }}
    </button>
  `, isInline: true, styles: [".lib-button{display:inline-block;cursor:pointer;border:0;font-weight:700;line-height:1;font-family:Montserrat,Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif}.lib-button--primary{background-color:#dc3e4e;color:#fff}.lib-button--secondary{background-color:transparent;color:#000;border:1px solid #62676B}.lib-button--small{padding:10px 16px;font-size:12px}.lib-button--medium{padding:11px 20px;font-size:14px}.lib-button--large{padding:12px 24px;font-size:16px}.lib-button:disabled{background-color:#d6d6d6;color:#a0a0a0;cursor:not-allowed}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-button', standalone: true, imports: [CommonModule], template: `
    <button
      type="button"
      (click)="onClick.emit($event)"
      [ngClass]="classes"
      [ngStyle]="{
        'background-color': backgroundColor,
        'border-radius': borderRadius
      }"
      [disabled]="disabled"
    >
      {{ label }}
    </button>
  `, styles: [".lib-button{display:inline-block;cursor:pointer;border:0;font-weight:700;line-height:1;font-family:Montserrat,Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif}.lib-button--primary{background-color:#dc3e4e;color:#fff}.lib-button--secondary{background-color:transparent;color:#000;border:1px solid #62676B}.lib-button--small{padding:10px 16px;font-size:12px}.lib-button--medium{padding:11px 20px;font-size:14px}.lib-button--large{padding:12px 24px;font-size:16px}.lib-button:disabled{background-color:#d6d6d6;color:#a0a0a0;cursor:not-allowed}\n"] }]
        }], propDecorators: { primary: [{
                type: Input
            }], backgroundColor: [{
                type: Input
            }], size: [{
                type: Input
            }], label: [{
                type: Input
            }], onClick: [{
                type: Output
            }], disabled: [{
                type: Input
            }], borderRadius: [{
                type: Input
            }] } });

class AccordionComponent {
    itemCount; // Mandatory input
    backgroundColor; // Mandatory input
    accordionBorderRadius = '0px'; // Default 0px
    itemBorderRadius = '5px'; // Default 5px
    width = '100%'; // Default 100%
    accordionHeight = 'auto'; // Overall accordion height
    itemHeight = 'auto'; // Individual item height
    itemGap = '10px'; // Gap between items
    isOpen = false; // Default false
    accordionItems = [];
    ngOnChanges(changes) {
        if (changes['itemCount'] || changes['isOpen']) {
            this.generateAccordionItems();
        }
    }
    /** Generate accordion items dynamically */
    generateAccordionItems() {
        this.accordionItems = Array.from({ length: this.itemCount }, (_, index) => ({
            title: `Item ${index + 1}`,
            content: `Content for Item ${index + 1}`,
            isOpen: this.isOpen,
        }));
    }
    /** Toggle accordion item open/close */
    toggle(item) {
        item.isOpen = !item.isOpen;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: AccordionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.1", type: AccordionComponent, isStandalone: true, selector: "lib-accordion", inputs: { itemCount: "itemCount", backgroundColor: "backgroundColor", accordionBorderRadius: "accordionBorderRadius", itemBorderRadius: "itemBorderRadius", width: "width", accordionHeight: "accordionHeight", itemHeight: "itemHeight", itemGap: "itemGap", isOpen: "isOpen" }, usesOnChanges: true, ngImport: i0, template: "<div\r\n  class=\"accordion\"\r\n  [style.borderRadius]=\"accordionBorderRadius\"\r\n  [style.width]=\"width\"\r\n  [style.gap]=\"itemGap\"\r\n>\r\n  <div\r\n    *ngFor=\"let item of accordionItems; let i = index\"\r\n    class=\"accordion-item\"\r\n    [ngStyle]=\"{\r\n      borderRadius: itemBorderRadius\r\n    }\"\r\n  >\r\n    <div\r\n      class=\"accordion-header\"\r\n      [ngStyle]=\"{\r\n        backgroundColor: backgroundColor,\r\n        borderRadius: itemBorderRadius\r\n      }\"\r\n      (click)=\"toggle(item)\"\r\n    >\r\n      <h5>{{ item.title }}</h5>\r\n      <!-- Arrow Icon -->\r\n      <span\r\n        class=\"arrow\"\r\n        [class.down]=\"item.isOpen\"\r\n        [class.up]=\"!item.isOpen\"\r\n      ></span>\r\n    </div>\r\n    <div *ngIf=\"item.isOpen\" class=\"accordion-body\">\r\n      <p>{{ item.content }}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".accordion{font-family:Montserrat,Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;overflow-y:auto;display:flex;flex-direction:column}.accordion-item{transition:all .3s ease-in-out;overflow:hidden}.accordion-header{cursor:pointer;font-weight:700;color:#fff;display:flex;justify-content:space-between;align-items:center;padding:0 15px;font-size:16px;height:100%;transition:all .3s ease-in-out}.accordion-body{padding:15px;background-color:#fff;transition:all .3s ease-in-out;border-top:1px solid #ddd}.arrow{transition:transform .3s ease;width:12px;height:12px;border-right:2px solid white;border-bottom:2px solid white;transform:rotate(45deg)}.arrow.up{transform:rotate(-135deg)}.arrow.down{transform:rotate(45deg)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: AccordionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-accordion', standalone: true, imports: [CommonModule], template: "<div\r\n  class=\"accordion\"\r\n  [style.borderRadius]=\"accordionBorderRadius\"\r\n  [style.width]=\"width\"\r\n  [style.gap]=\"itemGap\"\r\n>\r\n  <div\r\n    *ngFor=\"let item of accordionItems; let i = index\"\r\n    class=\"accordion-item\"\r\n    [ngStyle]=\"{\r\n      borderRadius: itemBorderRadius\r\n    }\"\r\n  >\r\n    <div\r\n      class=\"accordion-header\"\r\n      [ngStyle]=\"{\r\n        backgroundColor: backgroundColor,\r\n        borderRadius: itemBorderRadius\r\n      }\"\r\n      (click)=\"toggle(item)\"\r\n    >\r\n      <h5>{{ item.title }}</h5>\r\n      <!-- Arrow Icon -->\r\n      <span\r\n        class=\"arrow\"\r\n        [class.down]=\"item.isOpen\"\r\n        [class.up]=\"!item.isOpen\"\r\n      ></span>\r\n    </div>\r\n    <div *ngIf=\"item.isOpen\" class=\"accordion-body\">\r\n      <p>{{ item.content }}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".accordion{font-family:Montserrat,Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;overflow-y:auto;display:flex;flex-direction:column}.accordion-item{transition:all .3s ease-in-out;overflow:hidden}.accordion-header{cursor:pointer;font-weight:700;color:#fff;display:flex;justify-content:space-between;align-items:center;padding:0 15px;font-size:16px;height:100%;transition:all .3s ease-in-out}.accordion-body{padding:15px;background-color:#fff;transition:all .3s ease-in-out;border-top:1px solid #ddd}.arrow{transition:transform .3s ease;width:12px;height:12px;border-right:2px solid white;border-bottom:2px solid white;transform:rotate(45deg)}.arrow.up{transform:rotate(-135deg)}.arrow.down{transform:rotate(45deg)}\n"] }]
        }], propDecorators: { itemCount: [{
                type: Input
            }], backgroundColor: [{
                type: Input
            }], accordionBorderRadius: [{
                type: Input
            }], itemBorderRadius: [{
                type: Input
            }], width: [{
                type: Input
            }], accordionHeight: [{
                type: Input
            }], itemHeight: [{
                type: Input
            }], itemGap: [{
                type: Input
            }], isOpen: [{
                type: Input
            }] } });

class AvatarComponent {
    imageUrl = null;
    name = '';
    size = 40;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: AvatarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.1", type: AvatarComponent, isStandalone: true, selector: "lib-avatar", inputs: { imageUrl: "imageUrl", name: "name", size: "size" }, ngImport: i0, template: `
    <div class="avatar" [ngStyle]="{ 'width.px': size, 'height.px': size }">
      <img
        *ngIf="imageUrl"
        [src]="imageUrl"
        [alt]="name"
        class="avatar-image"
      />
      <span *ngIf="!imageUrl" class="avatar-placeholder">{{
        name.charAt(0)
      }}</span>
    </div>
  `, isInline: true, styles: [".avatar{display:flex;justify-content:center;align-items:center;border-radius:50%;overflow:hidden;background-color:#f8f9fa;border:2px solid #dc3e4e;box-shadow:0 2px 4px #0000001a;font-family:Montserrat,Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif}.avatar-image{width:100%;height:100%;object-fit:cover;border-radius:50%}.avatar-placeholder{width:100%;height:100%;display:flex;justify-content:center;align-items:center;font-size:1.5em;color:#fff;background-color:#dc3e4e;font-weight:700;text-transform:uppercase}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: AvatarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-avatar', standalone: true, imports: [CommonModule], template: `
    <div class="avatar" [ngStyle]="{ 'width.px': size, 'height.px': size }">
      <img
        *ngIf="imageUrl"
        [src]="imageUrl"
        [alt]="name"
        class="avatar-image"
      />
      <span *ngIf="!imageUrl" class="avatar-placeholder">{{
        name.charAt(0)
      }}</span>
    </div>
  `, styles: [".avatar{display:flex;justify-content:center;align-items:center;border-radius:50%;overflow:hidden;background-color:#f8f9fa;border:2px solid #dc3e4e;box-shadow:0 2px 4px #0000001a;font-family:Montserrat,Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif}.avatar-image{width:100%;height:100%;object-fit:cover;border-radius:50%}.avatar-placeholder{width:100%;height:100%;display:flex;justify-content:center;align-items:center;font-size:1.5em;color:#fff;background-color:#dc3e4e;font-weight:700;text-transform:uppercase}\n"] }]
        }], propDecorators: { imageUrl: [{
                type: Input
            }], name: [{
                type: Input
            }], size: [{
                type: Input
            }] } });

class BreadcrumbComponent {
    /** Array of breadcrumb items */
    items = [];
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: BreadcrumbComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.1", type: BreadcrumbComponent, isStandalone: true, selector: "lib-breadcrumb", inputs: { items: "items" }, ngImport: i0, template: `
    <nav>
      <ol class="breadcrumb">
        <li
          *ngFor="let item of items; let last = last"
          [ngClass]="{ active: last }"
        >
          <a *ngIf="!last" [href]="item.link">{{ item.label }}</a>
          <span *ngIf="last">{{ item.label }}</span>
        </li>
      </ol>
    </nav>
  `, isInline: true, styles: ["nav{font-family:Montserrat,Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;background-color:#f8f9fa;padding:.5rem 1rem;border-radius:.5em;box-shadow:0 2px 4px #0000001a}.breadcrumb{display:flex;align-items:center;gap:8px;margin:0;padding:0;list-style:none}.breadcrumb li{font-size:14px;color:#333;font-weight:700}.breadcrumb li a{text-decoration:none;color:#dc3e4e;transition:color .2s ease}.breadcrumb li a:hover{color:#b31c2d}.breadcrumb li.active{color:#6c757d;font-weight:700}.breadcrumb li:after{content:\"/\";color:#6c757d;margin:0 8px}.breadcrumb li:last-child:after{content:\"\"}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: BreadcrumbComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-breadcrumb', standalone: true, imports: [CommonModule], template: `
    <nav>
      <ol class="breadcrumb">
        <li
          *ngFor="let item of items; let last = last"
          [ngClass]="{ active: last }"
        >
          <a *ngIf="!last" [href]="item.link">{{ item.label }}</a>
          <span *ngIf="last">{{ item.label }}</span>
        </li>
      </ol>
    </nav>
  `, styles: ["nav{font-family:Montserrat,Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;background-color:#f8f9fa;padding:.5rem 1rem;border-radius:.5em;box-shadow:0 2px 4px #0000001a}.breadcrumb{display:flex;align-items:center;gap:8px;margin:0;padding:0;list-style:none}.breadcrumb li{font-size:14px;color:#333;font-weight:700}.breadcrumb li a{text-decoration:none;color:#dc3e4e;transition:color .2s ease}.breadcrumb li a:hover{color:#b31c2d}.breadcrumb li.active{color:#6c757d;font-weight:700}.breadcrumb li:after{content:\"/\";color:#6c757d;margin:0 8px}.breadcrumb li:last-child:after{content:\"\"}\n"] }]
        }], propDecorators: { items: [{
                type: Input
            }] } });

class DropdownListComponent {
    /** List of items to display in the dropdown */
    items = [];
    /** Selected item */
    selectedItem = null;
    /** Placeholder text when no item is selected */
    placeholder = 'Select an option';
    /** Emits the selected item */
    onSelect = new EventEmitter();
    isOpen = false;
    /** Toggle the visibility of the dropdown */
    toggleDropdown() {
        this.isOpen = !this.isOpen;
    }
    /** Select an item and emit the event */
    selectItem(item) {
        this.selectedItem = item;
        this.onSelect.emit(item);
        this.isOpen = false; // Close dropdown after selection
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: DropdownListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.1", type: DropdownListComponent, isStandalone: true, selector: "lib-dropdown-list", inputs: { items: "items", selectedItem: "selectedItem", placeholder: "placeholder", isOpen: "isOpen" }, outputs: { onSelect: "onSelect" }, ngImport: i0, template: `
    <div class="dropdown">
      <button
        class="lib-dropdown"
        (click)="toggleDropdown()"
        [ngClass]="{ active: isOpen }"
      >
        {{ selectedItem || placeholder }}
        <span class="caret"></span>
      </button>
      <ul *ngIf="isOpen" class="dropdown-menu">
        <li
          *ngFor="let item of items"
          (click)="selectItem(item)"
          [ngClass]="{ 'dropdown-item': true, selected: item === selectedItem }"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  `, isInline: true, styles: [".dropdown{position:relative;display:inline-block}.lib-dropdown{font-family:Montserrat,Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;width:200px;padding:10px 12px;background-color:#dc3e4e;color:#fff;border:none;cursor:pointer;border-radius:.5em;font-size:14px;font-weight:700;text-align:left;display:flex;justify-content:space-between;align-items:center}.lib-dropdown.active{background-color:#b31c2d}.lib-dropdown:hover{background-color:#a81424}.caret{margin-left:auto;border:6px solid transparent;border-top-color:#fff;display:inline-block;vertical-align:middle}.dropdown-menu{position:absolute;top:calc(100% + 5px);left:0;background-color:#fff;border:1px solid #ddd;border-radius:.5em;box-shadow:0 8px 16px #0003;list-style:none;margin:0;padding:5px 0;z-index:1;width:100%}.dropdown-item{padding:10px 12px;font-size:14px;color:#333;cursor:pointer}.dropdown-item:hover{background-color:#f5f5f5}.dropdown-item.selected{background-color:#dc3e4e;color:#fff;font-weight:700}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: DropdownListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-dropdown-list', standalone: true, imports: [CommonModule], template: `
    <div class="dropdown">
      <button
        class="lib-dropdown"
        (click)="toggleDropdown()"
        [ngClass]="{ active: isOpen }"
      >
        {{ selectedItem || placeholder }}
        <span class="caret"></span>
      </button>
      <ul *ngIf="isOpen" class="dropdown-menu">
        <li
          *ngFor="let item of items"
          (click)="selectItem(item)"
          [ngClass]="{ 'dropdown-item': true, selected: item === selectedItem }"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  `, styles: [".dropdown{position:relative;display:inline-block}.lib-dropdown{font-family:Montserrat,Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;width:200px;padding:10px 12px;background-color:#dc3e4e;color:#fff;border:none;cursor:pointer;border-radius:.5em;font-size:14px;font-weight:700;text-align:left;display:flex;justify-content:space-between;align-items:center}.lib-dropdown.active{background-color:#b31c2d}.lib-dropdown:hover{background-color:#a81424}.caret{margin-left:auto;border:6px solid transparent;border-top-color:#fff;display:inline-block;vertical-align:middle}.dropdown-menu{position:absolute;top:calc(100% + 5px);left:0;background-color:#fff;border:1px solid #ddd;border-radius:.5em;box-shadow:0 8px 16px #0003;list-style:none;margin:0;padding:5px 0;z-index:1;width:100%}.dropdown-item{padding:10px 12px;font-size:14px;color:#333;cursor:pointer}.dropdown-item:hover{background-color:#f5f5f5}.dropdown-item.selected{background-color:#dc3e4e;color:#fff;font-weight:700}\n"] }]
        }], propDecorators: { items: [{
                type: Input
            }], selectedItem: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], onSelect: [{
                type: Output
            }], isOpen: [{
                type: Input
            }] } });

class TextboxComponent {
    /** Placeholder text for the textbox */
    placeholder = 'Enter text';
    /** Value of the textbox */
    value = '';
    /** Optional disabled state */
    disabled = false;
    /** Border radius for customization */
    borderRadius = '0.5em'; // Default rounding
    /** Event emitted when the value changes */
    onInputChange = new EventEmitter();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: TextboxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.1", type: TextboxComponent, isStandalone: true, selector: "lib-textbox", inputs: { placeholder: "placeholder", value: "value", disabled: "disabled", borderRadius: "borderRadius" }, outputs: { onInputChange: "onInputChange" }, ngImport: i0, template: `
    <input
      class="lib-textbox"
      type="text"
      [placeholder]="placeholder"
      [value]="value"
      [disabled]="disabled"
      [ngStyle]="{
        'border-radius': borderRadius
      }"
      (input)="onInputChange.emit($event)"
    />
  `, isInline: true, styles: [".textbox-container{position:relative;display:inline-block;font-family:Montserrat,Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif}.lib-textbox{font-family:Montserrat,Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;display:inline-block;padding:10px 20px;font-size:16px;border:1px solid #ccc;border-radius:var(--textbox-border-radius, 25px);background-color:#fff;color:#333;box-sizing:border-box;transition:border-color .3s ease,transform .2s ease}.lib-textbox:hover:not(:disabled){transform:scale(1.05);border-color:#dc3e4e}.lib-textbox:focus{border-color:#dc3e4e;box-shadow:0 0 5px #dc3e4e80;outline:none}.lib-textbox:disabled{background-color:#f0f0f0;color:#a0a0a0;cursor:not-allowed}.lib-textbox::placeholder{color:#999;opacity:1}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: TextboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-textbox', standalone: true, imports: [CommonModule], template: `
    <input
      class="lib-textbox"
      type="text"
      [placeholder]="placeholder"
      [value]="value"
      [disabled]="disabled"
      [ngStyle]="{
        'border-radius': borderRadius
      }"
      (input)="onInputChange.emit($event)"
    />
  `, styles: [".textbox-container{position:relative;display:inline-block;font-family:Montserrat,Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif}.lib-textbox{font-family:Montserrat,Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;display:inline-block;padding:10px 20px;font-size:16px;border:1px solid #ccc;border-radius:var(--textbox-border-radius, 25px);background-color:#fff;color:#333;box-sizing:border-box;transition:border-color .3s ease,transform .2s ease}.lib-textbox:hover:not(:disabled){transform:scale(1.05);border-color:#dc3e4e}.lib-textbox:focus{border-color:#dc3e4e;box-shadow:0 0 5px #dc3e4e80;outline:none}.lib-textbox:disabled{background-color:#f0f0f0;color:#a0a0a0;cursor:not-allowed}.lib-textbox::placeholder{color:#999;opacity:1}\n"] }]
        }], propDecorators: { placeholder: [{
                type: Input
            }], value: [{
                type: Input
            }], disabled: [{
                type: Input
            }], borderRadius: [{
                type: Input
            }], onInputChange: [{
                type: Output
            }] } });

/*
 * Public API Surface of fuze-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AccordionComponent, AvatarComponent, BreadcrumbComponent, ButtonComponent, DropdownListComponent, FuzeLibComponent, FuzeLibService, TextboxComponent };
export { AccordionComponent, AvatarComponent, BreadcrumbComponent, ButtonComponent, DropdownListComponent, FuzeLibComponent, FuzeLibService, TextboxComponent };
//# sourceMappingURL=lib-fuze.mjs.map
