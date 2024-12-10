import { OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TextareaComponent implements OnChanges {
    backgroundColor: string;
    borderRadius: string;
    width: string;
    height: string;
    placeholder: string;
    maxLength: number;
    resizable: boolean;
    textAlign: 'left' | 'center' | 'right';
    showCharCount: boolean;
    textContent: string;
    /** Detect changes in input properties */
    ngOnChanges(changes: SimpleChanges): void;
    /** Handle text input */
    onTextInput(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextareaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextareaComponent, "lib-textarea", never, { "backgroundColor": { "alias": "backgroundColor"; "required": false; }; "borderRadius": { "alias": "borderRadius"; "required": false; }; "width": { "alias": "width"; "required": false; }; "height": { "alias": "height"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "maxLength": { "alias": "maxLength"; "required": false; }; "resizable": { "alias": "resizable"; "required": false; }; "textAlign": { "alias": "textAlign"; "required": false; }; "showCharCount": { "alias": "showCharCount"; "required": false; }; }, {}, never, never, true, never>;
}
