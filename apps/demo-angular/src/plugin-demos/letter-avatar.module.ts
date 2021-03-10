import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { LetterAvatarComponent } from './letter-avatar.component';
import { LetterAvatarModule as LAModule } from '@schoolsquirrel/letter-avatar/angular';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: LetterAvatarComponent }]), LAModule],
	declarations: [LetterAvatarComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class LetterAvatarModule {}
