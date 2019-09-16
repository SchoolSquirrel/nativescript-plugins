import { EmojiPicker as EmojiPickerDefinition } from "./emoji-picker";
import { View, Style, Property, CssProperty } from "tns-core-modules/ui/core/view";
export declare const textProperty: Property<EmojiPickerBase, string>;
export declare const myOpacityProperty: CssProperty<Style, number>;
export declare abstract class EmojiPickerBase extends View implements EmojiPickerDefinition {
    static tapEvent: string;
    text: string;
}
export declare let com: any;
