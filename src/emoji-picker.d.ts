import { View } from "@nativescript/core/ui/core/view";
import { TextBase } from "@nativescript/core/ui/text-base/text-base";
import { EditableTextBase, Property } from "@nativescript/core/ui/editable-text-base";

export class EmojiPicker extends EditableTextBase {
    android: any;
}

export class EmojiLabel extends TextBase  {
    textWrap: boolean;
    android: any;
}