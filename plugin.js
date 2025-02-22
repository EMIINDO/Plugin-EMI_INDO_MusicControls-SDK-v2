"use strict";
// Porting BY EMI INDO with c3addon-ide-plus
{
    const SDK = globalThis.SDK;

    const PLUGIN_ID = "EMI_INDO_MusicControls";
    // callMap Deprecated const PLUGIN_VERSION = "1.0.0.0";
    const PLUGIN_CATEGORY = "media";

    const PLUGIN_CLASS = SDK.Plugins.EMI_INDO_MusicControls = class MusicControlsPlugin extends SDK.IPluginBase {
        constructor() {
            super(PLUGIN_ID);

            SDK.Lang.PushContext("plugins." + PLUGIN_ID.toLowerCase());

            this._info.SetName(globalThis.lang(".name"));
            this._info.SetDescription(globalThis.lang(".description"));
            // callMap Deprecated this._info.SetVersion(PLUGIN_VERSION);
            this._info.SetCategory(PLUGIN_CATEGORY);
            this._info.SetAuthor("EMI_INDO");
            this._info.SetHelpUrl(globalThis.lang(".help-url"));
            this._info.SetRuntimeModuleMainScript("c3runtime/main.js");
            this._info.SetIsSingleGlobal(true);

            this._info.SetSupportedRuntimes(["c3"]);

            this._info.AddCordovaPluginReference(
                {
                    id: "cordova-plugin-music-controls2"
                });

            SDK.Lang.PushContext(".properties");

            this._info.SetProperties([
                new SDK.PluginProperty("group", "Create-the-media-controls"), //
                new SDK.PluginProperty("group", "Default"), //
                new SDK.PluginProperty("text", "track", "Time is Running Out"), // 0
                new SDK.PluginProperty("text", "artist", "Muse"), //1
                new SDK.PluginProperty("text", "album", "Absolution"), //2
                new SDK.PluginProperty("text", "cover", "albums/absolution.jpg"), //3
                new SDK.PluginProperty("text", "isPlaying", "true"), //4
                new SDK.PluginProperty("text", "dismissable", "true"), //5
                new SDK.PluginProperty("text", "hasPrev", "false"), //6
                new SDK.PluginProperty("text", "hasNext", "false"), //7
                new SDK.PluginProperty("text", "hasClose", "true"), //8----
                new SDK.PluginProperty("group", "iOS-only-optional"), //
                new SDK.PluginProperty("text", "duration", "60"), //======9
                new SDK.PluginProperty("text", "elapsed", "10"), //10
                new SDK.PluginProperty("text", "hasSkipForward", "true"), //11
                new SDK.PluginProperty("text", "hasSkipBackward", "true"), //12
                new SDK.PluginProperty("text", "skipForwardInterval", "15"), //13
                new SDK.PluginProperty("text", "skipBackwardInterval", "15"), //14
                new SDK.PluginProperty("text", "hasScrubbing", "false"), //========15
                new SDK.PluginProperty("group", "Android-only-optional"), //
                new SDK.PluginProperty("text", "ticker", "Now playing Time is Running Out"), //=======16
                new SDK.PluginProperty("text", "playIcon", "media_play"), //17
                new SDK.PluginProperty("text", "pauseIcon", "media_pause"), //18
                new SDK.PluginProperty("text", "prevIco", "media_prev"), //19
                new SDK.PluginProperty("text", "nextIcon", "media_next"), //20
                new SDK.PluginProperty("text", "closeIcon", "media_close"), //21
                new SDK.PluginProperty("text", "notificationIcon", "notification") //22========


            ]);


            SDK.Lang.PopContext(); //.properties
            SDK.Lang.PopContext();
        }
    };

    PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}