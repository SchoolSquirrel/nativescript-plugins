# nativescript-emoji-picker😃

[![Build Status](https://travis-ci.org/hrueger/nativescript-emoji-picker.svg?branch=master)](https://travis-ci.org/hrueger/nativescript-emoji-picker) [![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/hrueger/nativescript-emoji-picker/blob/master/LICENSE) [![Maintenance](https://img.shields.io/badge/Maintained-yes-green.svg)](https://github.com/hrueger/nativescript-emoji-picker/graphs/commit-activity) [![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.png?v=103)](https://github.com/hrueger/nativescript-emoji-picker/)

There are many emoji pickers for angular and the web, but no one for NativeScript?! Let's change this!

As this plugin is currently in developement screenshots will be added later this year.

## Installation

Install the plugin using `tns plugin add nativescript-emoji-picker`

## Usage 
### How does it work?
This plugin will give you two elements, `EmojiPicker` and `EmojiLabel`. The first one will give you a editable textfield (very similar to the NativeScript TextField) and the second one is a label (similar to NativeScript Label), which wll display your Emojis in the text correctly.

### NativeScript Core:
Define the namespace
```xml
<Page class="page"
    loaded="pageLoaded"
    navigatingTo="onNavigatingTo" 
    xmlns="http://schemas.nativescript.org/tns.xsd"
    xmlns:ns="nativescript-emoji-picker">
```
Use the plugin:
```
<ns:EmojiPicker id="myEmojiPicker"></ns:EmojiPicker>
<ns:EmojiLabel id="myEmojiLabel"></ns:EmojiLabel>
```
 
More info will follow soon, until then be sure to check out the demo and demo-angular projects!

### Angular Version:



## API

ToDo

## License

MIT
