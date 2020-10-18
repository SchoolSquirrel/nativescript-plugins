import { NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { LetterAvatar } from '@schoolsquirrel/letter-avatar';

@NgModule()
export class LetterAvatarModule {}

// Uncomment this line if the package provides a custom view component
registerElement('LetterAvatar', () => LetterAvatar);
