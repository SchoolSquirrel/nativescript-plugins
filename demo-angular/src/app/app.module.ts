import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
    bootstrap: [
        AppComponent,
    ],
    declarations: [
        AppComponent,
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
    ],
})
export class AppModule { }
