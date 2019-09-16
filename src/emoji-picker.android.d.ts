import { EmojiPickerBase } from "./emoji-picker.common";
export declare class EmojiPicker extends EmojiPickerBase {
    nativeView: any;
    _androidViewId: number;
    createNativeView(): Object;
    initNativeView(): void;
    disposeNativeView(): void;
    togglePopup(): void;
}
