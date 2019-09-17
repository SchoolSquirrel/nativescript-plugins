import { Property, View} from "tns-core-modules/ui/core/view";
import { TextBase } from "tns-core-modules/ui/text-base/text-base";
import { EmojiLabel as EmojiLabelDefinition, EmojiPicker as EmojiPickerDefinition } from "./emoji-picker";

export const textProperty = new Property<EmojiLabelBase, string>({ name: "text", defaultValue: ""});

export abstract class EmojiPickerBase extends View implements EmojiPickerDefinition {
}

export abstract class EmojiLabelBase extends TextBase implements EmojiLabelDefinition {
    public text: string;
    public textWrap: boolean;
}

export let com: any;

textProperty.register(EmojiLabelBase);
