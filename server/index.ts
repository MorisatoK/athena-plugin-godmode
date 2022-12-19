import * as alt from 'alt-server';
import { PluginSystem } from '@AthenaServer/systems/plugins';
import { GodMode } from './src/system';

const PLUGIN_NAME = 'Athena Godmode';

PluginSystem.registerPlugin(PLUGIN_NAME, async () => {
    GodMode.init();
    alt.log(`~lg~${PLUGIN_NAME} was Loaded`);
});
