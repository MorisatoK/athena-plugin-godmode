import { AthenaClient } from '@AthenaClient/api/athena';
import * as alt from 'alt-client';
import * as native from 'natives';
import { GODMODE_EVENTS } from '../shared/events';

let godModeEnabled = false;

class InternalFunctions {
    static init() {
        alt.onServer(GODMODE_EVENTS.TOGGLE, InternalFunctions.toggleGodMode);
    }

    static toggleGodMode() {
        godModeEnabled = !godModeEnabled;
        native.setEntityInvincible(alt.Player.local.scriptID, godModeEnabled);
        AthenaClient.screen.notification.notification(`Godmode: ${godModeEnabled}`);
    }
}

InternalFunctions.init();
