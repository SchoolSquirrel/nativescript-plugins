import { Observable } from "tns-core-modules/data/observable";

const  frame = require("ui/frame");

export class HomeViewModel extends Observable {
    constructor() {
        super();
    }
    public onButtonTap(args): void {
        const page = frame.topmost().currentPage;
        page.getViewById("myEmojiPicker").togglePopup();
    }

    public onCopyBtnTap(args): void {
        alert("Copied");
        return;
        const page = frame.topmost().currentPage;
        page.getViewById("myEmojiPicker").togglePopup();
    }
}
