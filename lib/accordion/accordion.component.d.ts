import { OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
interface AccordionItem {
    title: string;
    content: string;
    isOpen: boolean;
}
export declare class AccordionComponent implements OnChanges {
    itemCount: number;
    backgroundColor: string;
    accordionBorderRadius: string;
    itemBorderRadius: string;
    width: string;
    accordionHeight: string;
    itemHeight: string;
    itemGap: string;
    isOpen: boolean;
    accordionItems: AccordionItem[];
    ngOnChanges(changes: SimpleChanges): void;
    /** Generate accordion items dynamically */
    generateAccordionItems(): void;
    /** Toggle accordion item open/close */
    toggle(item: AccordionItem): void;
    /** Toggle an accordion item by index */
    toggleItem(index: number): void;
    /** Open all accordion items */
    openAll(): void;
    /** Close all accordion items */
    closeAll(): void;
    /** Dynamically add a new item to the accordion */
    addItem(title: string, content: string): void;
    /** Remove an item by index */
    removeItem(index: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccordionComponent, "lib-accordion", never, { "itemCount": { "alias": "itemCount"; "required": false; }; "backgroundColor": { "alias": "backgroundColor"; "required": false; }; "accordionBorderRadius": { "alias": "accordionBorderRadius"; "required": false; }; "itemBorderRadius": { "alias": "itemBorderRadius"; "required": false; }; "width": { "alias": "width"; "required": false; }; "accordionHeight": { "alias": "accordionHeight"; "required": false; }; "itemHeight": { "alias": "itemHeight"; "required": false; }; "itemGap": { "alias": "itemGap"; "required": false; }; "isOpen": { "alias": "isOpen"; "required": false; }; }, {}, never, never, true, never>;
}
export {};
