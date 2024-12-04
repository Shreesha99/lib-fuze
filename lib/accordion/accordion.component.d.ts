import { OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
interface AccordionItem {
    title: string;
    content: string;
    isOpen: boolean;
}
export declare class AccordionComponent implements OnChanges {
    /** Number of accordion items */
    itemCount: number;
    isOpen: boolean;
    /** Accordion items */
    accordionItems: AccordionItem[];
    ngOnChanges(changes: SimpleChanges): void;
    /** Generate items dynamically based on itemCount and isOpen */
    private generateAccordionItems;
    /** Toggle the visibility of the accordion item */
    toggle(item: AccordionItem): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccordionComponent, "lib-accordion", never, { "itemCount": { "alias": "itemCount"; "required": false; }; "isOpen": { "alias": "isOpen"; "required": false; }; }, {}, never, never, true, never>;
}
export {};
