import { EmojiPicker as EmojiPickerDefinition, EmojiLabel as EmojiLabelDefinition } from "./emoji-picker";
import { View, Style, Property, CssProperty, isIOS } from "tns-core-modules/ui/core/view";


export declare abstract class EmojiPickerBase extends View implements EmojiPickerDefinition {
   
}
export declare abstract class EmojiLabelBase extends View implements EmojiLabelDefinition {
    text: string;
}
export declare let com: any;
