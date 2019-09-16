import { EmojiPickerBase, EmojiLabelBase } from "./emoji-picker.common";
export declare class EmojiPicker extends EmojiPickerBase {
    nativeView: any;
    createNativeView(): Object;
    initNativeView(): void;
    disposeNativeView(): void;
    togglePopup(): void;
}
export declare class EmojiLabel extends EmojiLabelBase {
    nativeView: any;
    createNativeView(): Object;
    initNativeView(): void;
    disposeNativeView(): void;
}
