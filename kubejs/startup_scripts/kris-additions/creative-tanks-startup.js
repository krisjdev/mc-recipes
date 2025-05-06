// https://kubejs.com/wiki/tutorials/block-registry
// https://kubejs.com/wiki/ref/BlockBuilder
// https://minecraft.fandom.com/wiki/Formatting_codes?so=search#Use_in_server.properties_and_pack.mcmeta

StartupEvents.registry("block", event => {

    var block_dict = {
        // can't use Text.gold() (or other colours) in tooltip
        antimatter: {tooltip: "\u00A7dBlock of Antimatter"},
        brine: {tooltip: "\u00A7eBlock of Brine"},
        chlorine: {tooltip: "\u00A7eBlock of Chlorine"},
        ethene: {tooltip: "Block of Ethylene"},
        fissile_fuel: {tooltip: "Block of Fissile Fuel"},
        hydrofluoric_acid: {tooltip: "Block of Hydrofluoric Acid"},
        hydrogen: {tooltip: "Block of Hydrogen"},
        hydrogen_chloride: {tooltip: "Block of Hydrogen Chloride"},
        lithium: {tooltip: "Block of Lithium"},
        nuclear_waste: {tooltip: "Block of Nuclear Waste"},
        osmium: {tooltip: "Block of Osmium"},
        oxygen: {tooltip: "Block of Oxygen"},
        plutonium: {tooltip: "Block of Plutonium"},
        polonium: {tooltip: "Block of Polonium"},
        sodium: {tooltip: "Block of Sodium"},
        spent_nuclear_waste: {tooltip: "Block of Spent Nuclear Waste"},
        steam: {tooltip: "Block of Steam"},
        sulfur_dioxide: {tooltip: "Block of Sulfur Dioxide"},
        sulfur_trioxide: {tooltip: "Block of Sulfur Trioxide"},
        sulfuric_acid: {tooltip: "Block of Sulfuric Acid"},
        superheated_sodium: {tooltip: "Block of Superheated Sodium"},
        uranium_hexafluoride: {tooltip: "Block of Uranium Hexafluoride"},
        uranium_oxide: {tooltip: "Block of Uranium Oxide"},
        water_vapour: {tooltip: "Block of Water Vapour"},
        deuterium: {tooltip: "Block of Deuterium"},
        fusion_fuel: {tooltip: "Block of Fusion Fuel"},
        tritium: {tooltip: "Block of Tritium"},
        neutron_gas: {tooltip: "Block of Neutron Gas"},    
    }

    for (var key in block_dict) {
        let tag_str = "block_of_" + key.toString().toLowerCase()
        event.create(tag_str)
            .displayName(block_dict[key].tooltip)
            .stoneSoundType()
            .hardness(1.0)
            .resistance(1.0)
            .tagBlock("krisadditions:" + tag_str)
    }
})