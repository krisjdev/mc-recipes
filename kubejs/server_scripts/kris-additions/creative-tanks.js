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
})