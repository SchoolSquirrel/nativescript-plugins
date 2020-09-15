import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { EmojiPickerComponent } from './emoji-picker.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: EmojiPickerComponent }])],
	declarations: [EmojiPickerComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class EmojiPickerModule {}
