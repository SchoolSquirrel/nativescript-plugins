module.exports = {
    packages: {
        "@nativescript/angular": {
            entryPoints: {
                ".": {
                    override: {
                        main: "./index.js",
                        typings: "./index.d.ts",
                    },
                    ignoreMissingDependencies: true,
                },
            },
            ignorableDeepImportMatchers: [
                /zone.js\//,
                /tns-core-modules\//,
                /@nativescript\/core\//,
            ],
        },
        "nativescript-localize": {
            entryPoints: {
                ".": {
                    override: {
                        main: "./angular.js",
                        typings: "./angular.d.ts",
                    },
                    ignoreMissingDependencies: true,
                },
            },
            ignorableDeepImportMatchers: [
                /@nativescript\/core\//,
            ],
        },
        "nativescript-datetimepicker": {
            entryPoints: {
                ".": {
                    override: {
                        main: "./index.js",
                        typings: "./index.d.ts",
                    },
                    ignoreMissingDependencies: true,
                },
                angular: {
                    override: {
                        main: "./index.js",
                        typings: "./index.d.ts",
                    },
                    ignoreMissingDependencies: true,
                },
            },
            ignorableDeepImportMatchers: [
                /tns-core-modules\//,
                /@nativescript\/core\//,
                /@nativescript\/angular\//,
            ],
        },
        "nativescript-ui-sidedrawer": {
            entryPoints: {
                angular: {
                    override: {
                        main: "./side-drawer-directives.js",
                        typings: "./side-drawer-directives.d.ts",
                    },
                    ignoreMissingDependencies: true,
                },
            },
            ignorableDeepImportMatchers: [
                /tns-core-modules\//,
                /@nativescript\/core\//,
                /@nativescript\/angular\//,
            ],
        },
        "nativescript-ui-listview": {
            entryPoints: {
                angular: {
                    override: {
                        main: "./listview-directives.js",
                        typings: "./listview-directives.d.ts",
                    },
                    ignoreMissingDependencies: true,
                },
            },
            ignorableDeepImportMatchers: [
                /tns-core-modules\//,
                /@nativescript\/core\//,
                /@nativescript\/angular\//,
            ],
        },
        "nativescript-ui-calendar": {
            entryPoints: {
                angular: {
                    override: {
                        main: "./calendar-directives.js",
                        typings: "./calendar-directives.d.ts",
                    },
                    ignoreMissingDependencies: true,
                },
            },
            ignorableDeepImportMatchers: [
                /tns-core-modules\//,
                /@nativescript\/core\//,
                /@nativescript\/angular\//,
            ],
        },
        "nativescript-emoji-picker": {
            entryPoints: {
                angular: {
                    override: {
                        main: "./emoji-picker.directives.js",
                        typings: "./emoji-picker.directives.d.ts",
                    },
                    ignoreMissingDependencies: true,
                },
            },
            ignorableDeepImportMatchers: [
                /tns-core-modules\//,
                /@nativescript\/core\//,
                /@nativescript\/angular\//,
            ],
        },
    },
};