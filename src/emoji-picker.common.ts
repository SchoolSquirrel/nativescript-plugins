import { EmojiPicker as EmojiPickerDefinition, EmojiLabel as EmojiLabelDefinition } from "./emoji-picker";
import { View, Property} from "tns-core-modules/ui/core/view";
import { TextBase } from "tns-core-modules/ui/text-base/text-base";


export const textProperty = new Property<EmojiLabelBase, string>({ name: "text", defaultValue: ""});

export abstract class EmojiPickerBase extends View implements EmojiPickerDefinition {
}

export abstract class EmojiLabelBase extends TextBase implements EmojiLabelDefinition {
    text: string;
    textWrap: boolean;
}

export let com: any;

textProperty.register(EmojiLabelBase);