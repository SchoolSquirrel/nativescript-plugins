import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativescriptSquirrelChatUiComponent } from './nativescript-squirrel-chat-ui.component';

@NgModule({
    declarations: [
        NativescriptSquirrelChatUiComponent,
    ],
    imports: [],
    schemas: [
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA,
    ],
})
export class SquirrelChatUiModule {}