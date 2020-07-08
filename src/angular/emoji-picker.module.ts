import { NgModule } from "@angular/core";
import { registerElement } from "@nativescript/angular";

import { EmojiLabelDirective, EmojiPickerDirective } from "./emoji-picker.directives";

@NgModule({
    declarations: [EmojiLabelDirective, EmojiPickerDirective],
    exports: [EmojiLabelDirective, EmojiPickerDirective],
})
export class EmojiPickerModule { }
registerElement("EmojiPicker", () => require("nativescript-emoji-picker").EmojiPicker);
registerElement("EmojiLabel", () => require("nativescript-emoji-picker").EmojiLabel);
