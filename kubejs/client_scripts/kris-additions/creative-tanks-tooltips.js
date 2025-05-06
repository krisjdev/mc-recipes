// "https",//kubejs.com/wiki/tutorials/tooltips
// "https",//minecraft.fandom.com/wiki/Formatting_codes?so=search#Use_in_server.properties_and_pack.mcmeta

ItemEvents.tooltip(event => {

    var added_blocks = [
        "antimatter", "brine", "chlorine", "ethene", "fissile_fuel", "hydrofluoric_acid", 
        "hydrogen", "hydrogen_chloride", "lithium", "nuclear_waste", "osmium", 
        "oxygen", "plutonium", "polonium", "sodium", "spent_nuclear_waste", "steam", 
        "sulfur_dioxide", "sulfur_trioxide", "sulfuric_acid", "superheated_sodium", 
        "uranium_hexafluoride", "uranium_oxide", "water_vapour", "deuterium", 
        "fusion_fuel", "tritium", "neutron_gas" 
    ]

    for (var i = 0; i < added_blocks.length; i++){
        var tag = "kubejs:block_of_" + added_blocks[i]
        event.add(tag, [Text.gold("Kris' Additions - Creative Tanks").italic()])
    }
    
})