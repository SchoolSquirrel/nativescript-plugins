import { Property } from "@nativescript/core/ui/core/view";
import { EditableTextBase } from "@nativescript/core/ui/editable-text-base/editable-text-base";
import { TextBase } from "@nativescript/core/ui/text-base/text-base";
import { EmojiLabel as EmojiLabelDefinition, EmojiPicker as EmojiPickerDefinition } from "./emoji-picker";
declare const android: any;
export declare const textProperty: Property<EmojiLabelBase, string>;
export declare abstract class EmojiPickerBase extends EditableTextBase implements EmojiPickerDefinition {
    static returnPressEvent: string;
    nativeElement: any;
    android: any;
    emojiPopup: any;
    setSecureAndKeyboardType(): void;
    togglePopup(): void;
    _onReturnPress(): void;
    _configureEditText(editText: typeof android.widget.EditText): void;
}
export declare abstract class EmojiLabelBase extends TextBase implements EmojiLabelDefinition {
    text: string;
    nativeElement: any;
    textWrap: boolean;
    EmojiLabelView: any;
}
export declare let com: any;
export {};
