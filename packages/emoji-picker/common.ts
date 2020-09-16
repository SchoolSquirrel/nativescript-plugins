import { EditableTextBase, TextBase, Property } from "@nativescript/core";

declare const android: any;

export const textProperty = new Property<EmojiLabelCommon, string>({ name: "text", defaultValue: ""});

export abstract class EmojiPickerCommon extends EditableTextBase {
    public static returnPressEvent = "returnPress";
    public nativeElement: any;
    public android: any;
    public emojiPopup;
    public setSecureAndKeyboardType(): void {  }
    public togglePopup(): void {  }
    public _onReturnPress(): void { }
    public _configureEditText(editText: typeof android.widget.EditText): void {  }
}

export abstract class EmojiLabelCommon extends TextBase {
    public text: string;
    public nativeElement: any;
    public textWrap: boolean;
    public EmojiLabelView;
}

export let com: any;

textProperty.register(EmojiLabelCommon);