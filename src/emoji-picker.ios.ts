import { CSSType } from "tns-core-modules/ui/text-base";
import { EmojiLabel as EmojiLabelDefinition } from ".";
import { EmojiPicker as EmojiPickerDefinition } from ".";
import { EmojiLabelBase, EmojiPickerBase } from "./emoji-picker.common";
export * from "tns-core-modules/ui/text-base";
export * from "tns-core-modules/ui/text-field/text-field";

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
