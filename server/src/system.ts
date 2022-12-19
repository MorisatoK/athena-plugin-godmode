import * as alt from 'alt-server';
import { PERMISSIONS } from '@AthenaShared/flags/permissionFlags';
import { Athena } from '@AthenaServer/api/athena';
import { GODMODE_EVENTS } from '../../shared/events';

class InternalFunctions {
    static init() {
        Athena.controllers.chat.addCommand('godmode', '/godmode', PERMISSIONS.ADMIN, InternalFunctions.toggleGodMode);
    }

    static toggleGodMode(player: alt.Player) {
        player.invincible = !player.invincible;
        alt.emitClient(player, GODMODE_EVENTS.TOGGLE);
    }
}

export class GodMode {
    static init() {
        InternalFunctions.init();
    }
}
