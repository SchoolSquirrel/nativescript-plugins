import { Observable, EventData, Page, Frame } from '@nativescript/core';
import { DemoSharedEmojiPicker } from '@demo/shared';
import { EmojiLabel, EmojiPicker } from '@schoolsquirrel/emoji-picker';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedEmojiPicker {
	public onButtonTap(args): void {
		const page = Frame.topmost().currentPage;
		(page.getViewById('myEmojiPicker') as EmojiPicker).togglePopup();
	}

	public onCopyBtnTap(args): void {
		const page = Frame.topmost().currentPage;
		(page.getViewById('myEmojiLabel') as EmojiLabel).text = (page.getViewById('myEmojiPicker') as EmojiPicker).text;
		return;
	}
}
