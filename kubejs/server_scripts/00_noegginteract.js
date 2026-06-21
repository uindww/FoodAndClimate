BlockEvents.rightClicked(event => {
    const player = event.player;
    if (!player) return;

    // Get the ID of the block that was right-clicked
    const blockId = String(event.block.id);

    // Only trigger if the target block is a Mob Spawner
    if (blockId === "minecraft:spawner") {
        const mainHandItem = player.getMainHandItem();
        const offHandItem = player.getOffHandItem();

        const mainId = mainHandItem && !mainHandItem.empty ? String(mainHandItem.getId()) : "";
        const offId = offHandItem && !offHandItem.empty ? String(offHandItem.getId()) : "";

        // If holding a spawn egg, block the interaction completely
        if (mainId.includes("spawn_egg") || offId.includes("spawn_egg")) {
            event.cancel();
        }
    }
});