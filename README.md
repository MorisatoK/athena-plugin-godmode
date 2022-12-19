# athena-plugin-godmode

A simple godmode command for the Athena Roleplay Framework

## Information

To reliably work this also needs an adjustment in `src\core\server\events\playerDeath.ts´ of the Framework:

Change

```
if (player && player.valid && player.data && player.data._id) {
```

to

```
if (player && player.valid && player.data && player.data._id && !player.invincible) {
```
