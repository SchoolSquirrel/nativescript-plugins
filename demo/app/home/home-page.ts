import { NavigatedData, Page } from "tns-core-modules/ui/page";
import { HomeViewModel } from "./home-view-model";
import { EventData } from "tns-core-modules/data/observable";

export function pageLoaded(args: EventData) {
}


export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new HomeViewModel();
}


