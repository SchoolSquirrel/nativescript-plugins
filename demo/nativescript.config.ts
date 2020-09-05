import { NativeScriptConfig } from "@nativescript/core";

export default {
  android: {
    markingMode: "none",
    v8Flags: "--expose_gc",
  },
  appPath: "app",
  appResourcesPath: "app/App_Resources",
  id: "org.nativescript.demo",
  useLegacyWorkflow: false,
} as NativeScriptConfig;
