import { Component, NgZone, ViewChild } from '@angular/core';
import { EmojiLabel, EmojiPicker } from '@schoolsquirrel/emoji-picker';

@Component({
	selector: 'demo-emoji-picker',
	templateUrl: 'emoji-picker.component.html',
})
export class EmojiPickerComponent {
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
