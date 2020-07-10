import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]',
    exportAs:'appDropDown'
})
export class DropdownDirective {
    @HostBinding('class.show') isOpen = false;
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}