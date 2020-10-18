import { EventData, Page, Frame } from '@nativescript/core';
import { EmojiLabel, EmojiPicker } from '@schoolsquirrel/emoji-picker';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel {
	public onButtonTap(): void {
		const page = Frame.topmost().currentPage;
		(page.getViewById('myEmojiPicker') as EmojiPicker).togglePopup();
	}

	public onCopyBtnTap(): void {
		const page = Frame.topmost().currentPage;
		(page.getViewById('myEmojiLabel') as EmojiLabel).text = (page.getViewById('myEmojiPicker') as EmojiPicker).text;
		return;
	}
}
