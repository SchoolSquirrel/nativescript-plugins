import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'emoji-picker', loadChildren: () => import('./plugin-demos/emoji-picker.module').then((m) => m.EmojiPickerModule) },
	{ path: 'letter-avatar', loadChildren: () => import('./plugin-demos/letter-avatar.module').then((m) => m.LetterAvatarModule) },
	{ path: 'nativescript-squirrel-chat-ui', loadChildren: () => import('./plugin-demos/nativescript-squirrel-chat-ui.module').then((m) => m.NativescriptSquirrelChatUiModule) },
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
