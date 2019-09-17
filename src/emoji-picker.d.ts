import { View } from "tns-core-modules/ui/core/view";
import { TextBase } from "tns-core-modules/ui/text-base/text-base";
import { EditableTextBase, Property } from "tns-core-modules/ui/editable-text-base";

export class EmojiPicker extends EditableTextBase {
    android: any;
}

export class EmojiLabel extends TextBase  {
    textWrap: boolean;
    android: any;
}