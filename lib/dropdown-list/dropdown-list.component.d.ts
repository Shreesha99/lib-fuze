import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DropdownListComponent {
    /** List of items to display in the dropdown */
    items: string[];
    /** Selected item */
    selectedItem: string | null;
    /** Placeholder text when no item is selected */
    placeholder: string;
    /** Emits the selected item */
    onSelect: EventEmitter<string>;
    isOpen: boolean;
    /** Toggle the visibility of the dropdown */
    toggleDropdown(): void;
    /** Select an item and emit the event */
    selectItem(item: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DropdownListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DropdownListComponent, "lib-dropdown-list", never, { "items": { "alias": "items"; "required": false; }; "selectedItem": { "alias": "selectedItem"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "isOpen": { "alias": "isOpen"; "required": false; }; }, { "onSelect": "onSelect"; }, never, never, true, never>;
}
