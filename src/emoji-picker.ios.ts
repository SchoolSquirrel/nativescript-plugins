import { CSSType } from "@nativescript/core";
import { EmojiLabel as EmojiLabelDefinition } from ".";
import { EmojiPicker as EmojiPickerDefinition } from ".";
import { EmojiLabelBase, EmojiPickerBase } from "./emoji-picker.common";

@CSSType("EmojiPicker")
export class EmojiPicker extends EmojiPickerBase implements EmojiPickerDefinition {
    public initNativeView(): void {
        //
    }

    public disposeNativeView(): void {
        //
    }
}

@CSSType("EmojiLabel")
export class EmojiLabel extends EmojiLabelBase implements EmojiLabelDefinition {
    public initNativeView(): void {
        //
    }

    public disposeNativeView(): void {
        //
    }
}
