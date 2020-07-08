import { EmojiLabel as EmojiLabelDefinition } from ".";
import { EmojiPicker as EmojiPickerDefinition } from ".";
import { EmojiLabelBase, EmojiPickerBase } from "./emoji-picker.common";
export * from "@nativescript/core/ui/text-base";
export * from "@nativescript/core/ui/text-field/text-field";
export declare class EmojiPicker extends EmojiPickerBase implements EmojiPickerDefinition {
    initNativeView(): void;
    disposeNativeView(): void;
}
export declare class EmojiLabel extends EmojiLabelBase implements EmojiLabelDefinition {
    initNativeView(): void;
    disposeNativeView(): void;
}
