LootJS.modifiers((event) => {
    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.15)
        .addAlternativesLoot([
            LootEntry.of('dcs_climate:food/cropblock_allium_wild', 3).when((c) => c.randomChance(0.040)),
            LootEntry.of('dcs_climate:food/cropblock_amaranth_wild', 3).when((c) => c.randomChance(0.042)),
            LootEntry.of('dcs_climate:food/cropblock_amarylis_wild', 3).when((c) => c.randomChance(0.043)),
            LootEntry.of('dcs_climate:food/cropblock_apium_wild', 3).when((c) => c.randomChance(0.045)),
            LootEntry.of('dcs_climate:food/cropblock_aroids_wild', 3).when((c) => c.randomChance(0.048)),
            LootEntry.of('dcs_climate:food/cropblock_aster_wild', 3).when((c) => c.randomChance(0.050)),
            LootEntry.of('dcs_climate:food/cropblock_brassia_wild', 3).when((c) => c.randomChance(0.053)),
            LootEntry.of('dcs_climate:food/cropblock_capsicum_wild', 3).when((c) => c.randomChance(0.056)),
            LootEntry.of('dcs_climate:food/cropblock_cereals_wild', 3).when((c) => c.randomChance(0.059)),
            LootEntry.of('dcs_climate:food/cropblock_ginger_wild', 3).when((c) => c.randomChance(0.063)),
            LootEntry.of('dcs_climate:food/cropblock_gourd_wild', 3).when((c) => c.randomChance(0.067)),
            LootEntry.of('dcs_climate:food/cropblock_grape_wild', 3).when((c) => c.randomChance(0.071)),
            LootEntry.of('dcs_climate:food/cropblock_herb_wild', 3).when((c) => c.randomChance(0.077)),
            LootEntry.of('dcs_climate:food/cropblock_iris_wild', 3).when((c) => c.randomChance(0.083)),
            LootEntry.of('dcs_climate:food/cropblock_knotweed_wild', 3).when((c) => c.randomChance(0.091)),
            LootEntry.of('dcs_climate:food/cropblock_lily_wild', 3).when((c) => c.randomChance(0.100)),
            LootEntry.of('dcs_climate:food/cropblock_marrow_wild', 3).when((c) => c.randomChance(0.111)),
            LootEntry.of('dcs_climate:food/cropblock_morninggloly_wild', 3).when((c) => c.randomChance(0.125)),
            LootEntry.of('dcs_climate:food/cropblock_orchid_wild', 3).when((c) => c.randomChance(0.143)),
            LootEntry.of('dcs_climate:food/cropblock_pedalia_wild', 3).when((c) => c.randomChance(0.167)),
            LootEntry.of('dcs_climate:food/cropblock_peas_wild', 3).when((c) => c.randomChance(0.200)),
            LootEntry.of('dcs_climate:food/cropblock_ranunculus_wild', 3).when((c) => c.randomChance(0.250)),
            LootEntry.of('dcs_climate:food/cropblock_reed_wild', 3).when((c) => c.randomChance(0.333)),
            LootEntry.of('dcs_climate:food/cropblock_rice_wild', 3).when((c) => c.randomChance(0.500)),
            LootEntry.of('dcs_climate:food/cropblock_solanum_wild', 3).when((c) => c.randomChance(1.000))
        ]);
});
