LootJS.modifiers((event) => {
    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.15)
        .addAlternativesLoot([
            LootEntry.of('dcs_climate:food/sapling_beech_wild', 3).when((c) => c.randomChance(0.071)),
            LootEntry.of('dcs_climate:food/sapling_cherry_wild', 3).when((c) => c.randomChance(0.077)),
            LootEntry.of('dcs_climate:food/sapling_camelia_wild', 3).when((c) => c.randomChance(0.083)),
            LootEntry.of('dcs_climate:food/sapling_cinnamon_wild', 3).when((c) => c.randomChance(0.091)),
            LootEntry.of('dcs_climate:food/sapling_citrus_wild', 3).when((c) => c.randomChance(0.100)),
            LootEntry.of('dcs_climate:food/sapling_erica_wild', 3).when((c) => c.randomChance(0.111)),
            LootEntry.of('dcs_climate:food/sapling_euphorbia_wild', 3).when((c) => c.randomChance(0.125)),
            LootEntry.of('dcs_climate:food/sapling_morus_wild', 3).when((c) => c.randomChance(0.143)),
            LootEntry.of('dcs_climate:food/sapling_myrtle_wild', 3).when((c) => c.randomChance(0.167)),
            LootEntry.of('dcs_climate:food/sapling_olive_wild', 3).when((c) => c.randomChance(0.200)),
            LootEntry.of('dcs_climate:food/sapling_palm_wild', 3).when((c) => c.randomChance(0.250)),
            LootEntry.of('dcs_climate:food/sapling_rose_wild', 3).when((c) => c.randomChance(0.333)),
            LootEntry.of('dcs_climate:food/sapling_rubia_wild', 3).when((c) => c.randomChance(0.500)),
            LootEntry.of('dcs_climate:food/sapling_sumac_wild', 3).when((c) => c.randomChance(1.000))
        ]);
});
