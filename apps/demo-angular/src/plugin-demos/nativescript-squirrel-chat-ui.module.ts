import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptSquirrelChatUiComponent } from './nativescript-squirrel-chat-ui.component';
import { NativeScriptSquirrelChatUiModule } from '@schoolsquirrel/nativescript-squirrel-chat-ui/angular';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptSquirrelChatUiComponent }]), NativeScriptSquirrelChatUiModule],
	declarations: [NativescriptSquirrelChatUiComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptSquirrelChatUiModule {}
