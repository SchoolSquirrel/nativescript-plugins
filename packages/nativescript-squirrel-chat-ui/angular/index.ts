import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativescriptSquirrelChatUiComponent } from './nativescript-squirrel-chat-ui.component';
import { NativeScriptCommonModule } from "@nativescript/angular";

@NgModule({
    declarations: [
        NativescriptSquirrelChatUiComponent,
    ],
    imports: [
        NativeScriptCommonModule,
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA,
    ],
})
export class SquirrelChatUiModule {}