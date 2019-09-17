import { EmojiPicker as EmojiPickerDefinition, EmojiLabel as EmojiLabelDefinition } from "./emoji-picker";
import { View, Style, Property, CssProperty, isIOS } from "tns-core-modules/ui/core/view";
import { TextBase } from "tns-core-modules/ui/text-base/text-base";
import { EditableTextBase } from "tns-core-modules/ui/editable-text-base/editable-text-base";


export declare abstract class EmojiPickerBase extends EditableTextBase implements EmojiPickerDefinition {
   
}
export declare abstract class EmojiLabelBase extends TextBase implements EmojiLabelDefinition {
    text: string;
    textWrap: boolean;
}
export declare let com: any;
