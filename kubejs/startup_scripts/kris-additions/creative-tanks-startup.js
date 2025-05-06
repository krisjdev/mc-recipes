// https://kubejs.com/wiki/tutorials/block-registry
// https://kubejs.com/wiki/ref/BlockBuilder
// https://minecraft.fandom.com/wiki/Formatting_codes?so=search#Use_in_server.properties_and_pack.mcmeta

StartupEvents.registry("block", event => {

    var block_dict = {
        // can't use Text.gold() (or other colours) in tooltip
        antimatter: {tooltip: "\u00A7dBlock of Antimatter"},
        brine: {tooltip: "\u00A7eBlock of Brine"},
        chlorine: {tooltip: "\u00A7eBlock of Chlorine"}
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