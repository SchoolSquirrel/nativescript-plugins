import { Component, OnInit, ViewChild } from "@angular/core";
import { EmojiPicker, EmojiLabel } from "nativescript-emoji-picker";

@Component({
    moduleId: module.id,
    selector: "Home",
    styleUrls: ["./home.component.css"],
    templateUrl: "./home.component.html",
})
export class HomeComponent {
    @ViewChild("myEmojiPicker", { static: false }) public myEmojiPicker: EmojiPicker;
    @ViewChild("myEmojiLabel", { static: true }) public myEmojiLabel: EmojiLabel;


    public onButtonTap(): void {
        this.myEmojiPicker.nativeElement.togglePopup();
    }

    public onCopyBtnTap(): void {
        console.log("pressed!");
        this.myEmojiLabel.nativeElement.text = this.myEmojiPicker.nativeElement.text;
    }

}
