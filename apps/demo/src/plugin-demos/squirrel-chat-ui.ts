import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedSquirrelChatUi } from '@demo/shared';
import {} from '@schoolsquirrel/squirrel-chat-ui';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedSquirrelChatUi {}
