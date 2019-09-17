import { EventData } from "tns-core-modules/data/observable";
import { NavigatedData, Page } from "tns-core-modules/ui/page";
import { HomeViewModel } from "./home-view-model";

export function pageLoaded(args: EventData) {
    //
}

export function onNavigatingTo(args: NavigatedData) {
    const page =  args.object as Page;
    page.bindingContext = new HomeViewModel();
}
