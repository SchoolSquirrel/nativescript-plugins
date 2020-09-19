import { NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { EmojiPicker, EmojiLabel } from '@schoolsquirrel/emoji-picker';

@NgModule()
export class EmojiPickerModule {}

// Uncomment this line if the package provides a custom view component
registerElement('EmojiPicker', () => EmojiPicker);
registerElement('EmojiLabel', () => EmojiLabel);
