import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { EmojiPickerComponent } from './emoji-picker.component';
import { EmojiPickerModule as EmojiModule } from '@schoolsquirrel/emoji-picker/angular';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: EmojiPickerComponent }]), EmojiModule],
	declarations: [EmojiPickerComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class EmojiPickerModule {}
