import * as alt from 'alt-server';
import { PERMISSIONS } from '@AthenaShared/flags/permissionFlags';
import { Athena } from '@AthenaServer/api/athena';
import { GODMODE_EVENTS } from '../../shared/events';

const InternalFunctions = {
    init() {
        Athena.controllers.chat.addCommand('godmode', '/godmode', PERMISSIONS.ADMIN, InternalFunctions.toggleGodMode);
    },

    toggleGodMode(player: alt.Player) {
        player.invincible = !player.invincible;
        alt.emitClient(player, GODMODE_EVENTS.TOGGLE);
    },
};

export const GodModeServer = {
    init() {
        InternalFunctions.init();
    },
};
