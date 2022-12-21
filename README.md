# Athena Plugin - Godmode

A godmode plugin for the Athena Framework compatible with `4.0.0` of the [Athena Framework](https://athenaframework.com/).

## Installation

1. Open a command prompt in your main Athena Directory.
2. Navigate to the plugins folder.

```ts
cd src/core/plugins
```

3. Copy the command below.

**SSH**

```
git clone git@github.com:MorisatoK/athena-plugin-godmode.git
```

**HTTPS**

```
git clone https://github.com/MorisatoK/athena-plugin-godmode.git
```

Or install as submodule.

4. Start the Server
5. Use `/godmode` in chat to toggle Godmode

## Information

To reliably work this also needs an adjustment in `src\core\server\events\playerDeath.ts` of the Framework:

Change

```
if (player && player.valid && player.data && player.data._id) {
```

to

```
if (player && player.valid && player.data && player.data._id && !player.invincible) {
```
