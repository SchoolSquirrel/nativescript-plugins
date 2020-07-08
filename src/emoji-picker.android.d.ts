import { EmojiLabel as EmojiLabelDefinition } from ".";
import { EmojiPicker as EmojiPickerDefinition } from ".";
import { EmojiLabelBase, EmojiPickerBase } from "./emoji-picker.common";
export * from "@nativescript/core/ui/text-base";
export * from "@nativescript/core/ui/text-field/text-field";
declare const com: any;
declare const android: any;
export declare class EmojiPicker extends EmojiPickerBase implements EmojiPickerDefinition {
    nativeView: any;
    emojiPopup: any;
    _configureEditText(editText: typeof android.widget.EditText): void;
    setSecureAndKeyboardType(): void;
    _onReturnPress(): void;
    createNativeView(): object;
    initNativeView(): void;
    togglePopup(): void;
    disposeNativeView(): void;
}
export declare class EmojiLabel extends EmojiLabelBase implements EmojiLabelDefinition {
    nativeViewProtected: typeof com.vanniktech.emoji.EmojiTextView;
    nativeTextViewProtected: typeof com.vanniktech.emoji.EmojiTextView;
    EmojiLabelView: typeof com.vanniktech.emoji.EmojiTextView;
    get textWrap(): boolean;
    set textWrap(value: boolean);
    createNativeView(): object;
    initNativeView(): void;
    disposeNativeView(): void;
}
