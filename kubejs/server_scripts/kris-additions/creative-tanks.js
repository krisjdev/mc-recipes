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

    // block of antimatter
    event.custom({
        type: "mekanism:nucleosynthesizing",
        duration: 4000,
        gasInput: {
            amount: 1000,
            gas: "mekanism:antimatter"
        },
        itemInput: {
            ingredient: {
                item: "allthecompressed:cobblestone_9x"
            }
        },
        output: {
            item: "kubejs:block_of_antimatter"
        }
    })

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