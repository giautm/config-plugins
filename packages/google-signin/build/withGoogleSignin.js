"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_plugins_1 = require("@expo/config-plugins");
/**
 * Apply google-signin configuration for Expo SDK 42 projects.
 */
const withGoogleSignin = (config, _props = {}) => {
    // Support passing no props to the plugin.
    const props = _props || {};
    // Return the modified config.
    return config;
};
const pkg = {
    // Prevent this plugin from being run more than once.
    // This pattern enables users to safely migrate off of this
    // out-of-tree `@config-plugins/google-signin` to a future
    // upstream plugin in `google-signin`
    name: "google-signin",
    // Indicates that this plugin is dangerously linked to a module,
    // and might not work with the latest version of that module.
    version: "UNVERSIONED",
};
exports.default = config_plugins_1.createRunOncePlugin(withGoogleSignin, pkg.name, pkg.version);
