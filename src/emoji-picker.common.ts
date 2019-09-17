import { Property, View} from "tns-core-modules/ui/core/view";
import { EditableTextBase } from "tns-core-modules/ui/editable-text-base/editable-text-base";
import { TextBase } from "tns-core-modules/ui/text-base/text-base";
import { EmojiLabel as EmojiLabelDefinition, EmojiPicker as EmojiPickerDefinition } from "./emoji-picker";

export const textProperty = new Property<EmojiLabelBase, string>({ name: "text", defaultValue: ""});

export abstract class EmojiPickerBase extends EditableTextBase implements EmojiPickerDefinition {
    public static returnPressEvent = "returnPress";
    public nativeElement: any;
    public android: any;
    public emojiPopup;
    public setSecureAndKeyboardType(): void {  }
    public togglePopup(): void {  }
    public _onReturnPress(): void { }
    public _configureEditText(editText: android.widget.EditText): void {  }
}

export abstract class EmojiLabelBase extends TextBase implements EmojiLabelDefinition {
    public text: string;
    public nativeElement: any;
    public textWrap: boolean;
    public EmojiLabelView;
}

export let com: any;

textProperty.register(EmojiLabelBase);
