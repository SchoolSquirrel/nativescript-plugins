import { EmojiPicker as EmojiPickerDefinition } from "./emoji-picker";
import { View, Style, Property, CssProperty, isIOS } from "tns-core-modules/ui/core/view";

export const popupProperty = new Property<EmojiPickerBase, any>({ name: "popup", defaultValue: null });


export abstract class EmojiPickerBase extends View implements EmojiPickerDefinition {
    public static tapEvent = "tap";
    text: string;
}

export let com: any;

// Defines 'text' property on MyButtonBase class.
popupProperty.register(EmojiPickerBase);
