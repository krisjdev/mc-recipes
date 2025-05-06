// https://kubejs.com/wiki/tutorials/block-registry
// https://kubejs.com/wiki/ref/BlockBuilder

StartupEvents.registry("block", event => {
    
    event.create("block_of_antimatter")
        .displayName("\u00A7dBlock of Antimatter") // https://minecraft.fandom.com/wiki/Formatting_codes?so=search#Use_in_server.properties_and_pack.mcmeta
        .stoneSoundType()
        .hardness(1.0)
        .resistance(1.0)
        .tagBlock("krisadditions:block_of_antimatter")

})