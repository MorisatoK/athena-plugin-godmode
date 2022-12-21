import * as alt from 'alt-client';
import * as native from 'natives';
import { AthenaClient } from '@AthenaClient/api/athena';
import { GODMODE_EVENTS } from '../../shared/events';

const InternalFunctions = {
    godModeEnabled: false,
    init() {
        alt.onServer(GODMODE_EVENTS.TOGGLE, InternalFunctions.toggleGodMode);
    },

    toggleGodMode() {
        InternalFunctions.godModeEnabled = !InternalFunctions.godModeEnabled;
        native.setEntityInvincible(alt.Player.local.scriptID, InternalFunctions.godModeEnabled);
        AthenaClient.screen.notification.notification(`Godmode: ${InternalFunctions.godModeEnabled}`);
    },
};

export const GodModeClient = {
    init() {
        InternalFunctions.init();
    },
};
