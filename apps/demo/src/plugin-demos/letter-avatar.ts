import { EventData, Page } from '@nativescript/core';
import {} from '@schoolsquirrel/letter-avatar';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel {}
