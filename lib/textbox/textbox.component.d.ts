import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TextboxComponent {
    /** Placeholder text for the textbox */
    placeholder: string;
    /** Value of the textbox */
    value: string;
    /** Optional disabled state */
    disabled: boolean;
    /** Border radius for customization */
    borderRadius: string;
    /** Event emitted when the value changes */
    onInputChange: EventEmitter<Event>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextboxComponent, "lib-textbox", never, { "placeholder": { "alias": "placeholder"; "required": false; }; "value": { "alias": "value"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "borderRadius": { "alias": "borderRadius"; "required": false; }; }, { "onInputChange": "onInputChange"; }, never, never, true, never>;
}
