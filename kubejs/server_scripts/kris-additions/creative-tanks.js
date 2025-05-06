// adds crafting recipes for the creative chemical tanks from mekanism

ServerEvents.recipes(event => {

    // creative mekanism tank
    event.shaped("mekanism:creative_chemical_tank", 
        [
            "ATA",
            "UCU",
            "ATA"
        ],
        {
            A: "mekanism:alloy_atomic",
            T: "mekanism:energy_tablet",
            U: "allthemodium:unobtainium_block",
            C: "mekanism:ultimate_chemical_tank"
        }
    ).id("krisadditions:mekanism/creative_chemical_tank")

    
    // blocks of gas
    // used to make the creative chemical tank variants in energiser recipe

    var block_dict = {
        // valid keys are:
        //      input, gas_input, gas_amount, duration
        //
        // input defaults to "allthecompressed:cobblestone_9x"
        // duration defaults to 400
        // gas_amount defaults to 10,000
        // gas_input is required and has no default value

        // TODO: probably could make the gas input string using the key to reduce repetition
        antimatter: {gas_input: "mekanism:antimatter", gas_amount: 1000, duration: 400},
        brine: {gas_input: "mekanism:brine"},
        chlorine: {gas_input: "mekanism:chlorine"},
        ethene: {gas_input: "mekanism:ethene"},
        fissile_fuel: {gas_input: "mekanism:fissile_fuel"},
        hydrofluoric_acid: {gas_input: "mekanism:hydrofluoric_acid"},
        hydrogen: {gas_input: "mekanism:hydrogen"},
        hydrogen_chloride: {gas_input: "mekanism:hydrogen_chloride"},
        lithium: {gas_input: "mekanism:lithium"},
        nuclear_waste: {gas_input: "mekanism:nuclear_waste"},
        osmium: {gas_input: "mekanism:osmium"},
        oxygen: {gas_input: "mekanism:oxygen"},
        plutonium: {gas_input: "mekanism:plutonium"},
        polonium: {gas_input: "mekanism:polonium"},
        sodium: {gas_input: "mekanism:sodium"},
        spent_nuclear_waste: {gas_input: "mekanism:spent_nuclear_waste"},
        steam: {gas_input: "mekanism:steam"},
        sulfur_dioxide: {gas_input: "mekanism:sulfur_dioxide"},
        sulfur_trioxide: {gas_input: "mekanism:sulfur_trioxide"},
        sulfuric_acid: {gas_input: "mekanism:sulfuric_acid"},
        superheated_sodium: {gas_input: "mekanism:superheated_sodium"},
        uranium_hexafluoride: {gas_input: "mekanism:uranium_hexafluoride"},
        uranium_oxide: {gas_input: "mekanism:uranium_oxide"},
        water_vapour: {gas_input: "mekanism:water_vapor"},
        deuterium: {gas_input: "mekanismgenerators:deuterium"},
        fusion_fuel: {gas_input: "mekanismgenerators:fusion_fuel"},
        tritium: {gas_input: "mekanismgenerators:tritium"},
        neutron_gas: {gas_input: "kubejs:neutron_gas"},
    }


    for (var key in block_dict) {
        var value = block_dict[key]

        event.custom({
            type: "mekanism:nucleosynthesizing",
            duration: value.duration ? value.duration : 400,
            gasInput: {
                amount: value.gas_amount ? value.gas_amount : 10000,
                gas: value.gas_input
            },
            itemInput: {
                ingredient: {
                    item: value.input ? value.input : "allthecompressed:cobblestone_9x"
                }
            },
            output: {
                // item: value.output
                item: "kubejs:block_of_" + key.toString().toLowerCase()
            }
        })
        
    }

    // creative antimatter chemical tank
    event.custom({
        type: "powah:energizing",
        ingredients: [
            // TODO: can we use NBT items? doesn't seem like it... :(
            /*
                fails with:
                - Error in 'ServerEvents.recipes': Cannot convert {mekData:{GasTanks:[{Tank:0b,stored:{amount:1,gasName:"mekanism:antimatter"}}]}} to java.lang.Integer
                - …rhino.EvaluatorException: Cannot convert {mekData:{GasTanks:[{Tank:0b,stored:{amount:1,gasName:"mekanism:antimatter"}}]}} to java.lang.Integer

            */
            // Ingredient.of("mekanism:ultimate_chemical_tank", '{mekData:{GasTanks:[{Tank:0b,stored:{amount:1,gasName:"mekanism:antimatter"}}]}}'),
            // Ingredient.of("mekanism:ultimate_chemical_tank", '{mekData:{GasTanks:[{Tank:0b,stored:{amount:"8192000",gasName:"mekanism:antimatter"}}]}}').toJson(),
            Ingredient.of("mekanism:creative_chemical_tank",),
            Ingredient.of("mekanism:creative_chemical_tank",),
            Ingredient.of("allthetweaks:atm_star"),
            Ingredient.of("mekanism:creative_chemical_tank",),
            Ingredient.of("mekanism:creative_chemical_tank",),
            Ingredient.of("kubejs:block_of_antimatter",),
        ],
        energy: "2147483647",
        // 9223372036854775807 is the wanted value for the amount stored, but that gets translated into a string that breaks the infinite functionality of the tank
        // 4294967294 is the upper limit, -0.001 to prevent it from casting it into a string
        // or not... because 9223372036854775807-0.001 works..?
        // result: Item.of("mekanism:creative_chemical_tank", '{mekData:{GasTanks:[{Tank:0b,stored:{amount:4294967293.9999,gasName:"mekanism:antimatter"}}]}}')
        result: Item.of("mekanism:creative_chemical_tank", '{mekData:{GasTanks:[{Tank:0b,stored:{amount:9223372036854775806.999,gasName:"mekanism:antimatter"}}]}}')
      }).id("krisadditions:energizing/mekanism_creative_chemical_tank_antimatter")

})