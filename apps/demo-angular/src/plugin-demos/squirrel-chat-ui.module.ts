import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { SquirrelChatUiComponent } from './squirrel-chat-ui.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: SquirrelChatUiComponent }])],
	declarations: [SquirrelChatUiComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class SquirrelChatUiModule {}
