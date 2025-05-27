ServerEvents.recipes(event => {

    function make_globe(globe, planet_ingot, planet_rock) {
        event.shaped(
            Item.of(globe, 1),
            [
                "NP ",
                "NR ",
                "NG "
            ],
            {
                N: "minecraft:gold_nugget",
                P: planet_ingot,
                R: planet_rock,
                G: "minecraft:gold_ingot"
            }
        )
    }

    make_globe("ad_astra:earth_globe", "minecraft:gold_ingot", "minecraft:stone")
    make_globe("ad_astra:moon_globe", "ad_astra:desh_ingot", "ad_astra:moon_stone")
    make_globe("ad_astra:mars_globe", "ad_astra:ostrum_ingot", "ad_astra:mars_stone")
    make_globe("ad_astra:mercury_globe", "minecraft:gold_ingot", "ad_astra:mercury_stone")
    make_globe("ad_astra:venus_globe", "ad_astra:calorite_ingot", "ad_astra:venus_stone")
    make_globe("ad_astra:glacio_globe", "ad_astra:ice_shard", "ad_astra:glacio_stone")

})