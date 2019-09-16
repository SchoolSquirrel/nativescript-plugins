import { EmojiPicker as EmojiPickerDefinition, EmojiLabel as EmojiLabelDefinition } from "./emoji-picker";
import { View, Style, Property, CssProperty, isIOS } from "tns-core-modules/ui/core/view";


export const textProperty = new Property<EmojiLabelBase, string>({ name: "text", defaultValue: ""});

export abstract class EmojiPickerBase extends View implements EmojiPickerDefinition {
}

export abstract class EmojiLabelBase extends View implements EmojiLabelDefinition {
    text: string;
}

export let com: any;

textProperty.register(EmojiLabelBase);