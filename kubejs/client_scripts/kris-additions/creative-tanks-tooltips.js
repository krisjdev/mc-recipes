// https://kubejs.com/wiki/tutorials/tooltips
// https://minecraft.fandom.com/wiki/Formatting_codes?so=search#Use_in_server.properties_and_pack.mcmeta

ItemEvents.tooltip(event => {
    event.add("kubejs:block_of_antimatter", [Text.gold("Kris' Additions - Creative Tanks").italic()])
})