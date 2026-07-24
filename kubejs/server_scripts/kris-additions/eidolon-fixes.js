ServerEvents.recipes(event => {
    event.shaped(
        Item.of("eidolon:magicians_wax", 4),
        [
            "UTU",
            "CAC",
            "TTT"
        ],
        {
            A: "eidolon:ender_calx",
            T: "minecraft:redstone",
            U: "minecraft:red_dye",
            C: "eidolon:tallow"
        }
    )

    event.shaped(
        Item.of("eidolon:magic_ink", 2),
        [
            "ATA",
            "CBC",
            " U "
        ],
        {
            A: "minecraft:black_dye",
            T: "minecraft:glow_ink_sac",
            U: "minecraft:blue_dye",
            C: "alltheores:silver_nugget",
            B: "minecraft:glass_bottle"
        }
    )

    event.shaped(
        Item.of("productivebees:spawn_egg_configurable_bee", '{EntityTag:{type:"productivebees:soul_shard"}}'),
        [
            " A ",
            "UTU",
            "   "
        ],
        {
            A: Item.of("productivebees:spawn_egg_configurable_bee", '{EntityTag:{type:"productivebees:withered"}}'),
            T: "minecraft:redstone",
            U: "eidolon:soul_shard"
        }
    )

    event.shaped(
        Item.of("eidolon:ender_calx", 2),
        [
            "TA ",
            "   ",
            "   "
        ],
        {
            A: "eidolon:enchanted_ash",
            T: "minecraft:ender_pearl"
        }
    )

    event.shaped(
        Item.of("eidolon:death_essence", 4),
        [
            " T ",
            "UAU",
            " C "
        ],
        {
            A: "eidolon:zombie_heart",
            T: "minecraft:rotten_flesh",
            U: "minecraft:bone_meal",
            C: "minecraft:charcoal"
        }
    )

    event.shaped(
        Item.of("eidolon:crimson_essence", 2),
        [
            "TUA",
            "   ",
            "   "
        ],
        {
            A: "gtceu:sulfur_dust",
            T: "minecraft:weeping_vines",
            U: "minecraft:nether_wart"
        }
    )

    event.shaped(
        Item.of("eidolon:shadow_gem"),
        [
            " U ",
            "ABA",
            "CTC"
        ],
        {
            A: "eidolon:death_essence",
            T: "minecraft:coal",
            U: "minecraft:ghast_tear",
            C: "eidolon:soul_shard",
            B: "minecraft:diamond"
        }
    )

    event.shaped(
        Item.of("eidolon:lesser_soul_gem"),
        [
            "UCU",
            "TAT",
            "CCC"
        ],
        {
            A: "minecraft:quartz",
            T: "minecraft:lapis_lazuli",
            U: "minecraft:redstone",
            C: "eidolon:soul_shard"
        }
    )

    event.shaped(
        Item.of("eidolon:offering_incense", 2),
        [
            "ATU",
            "   ",
            "   "
        ],
        {
            A: "eidolon:merammer_resin",
            T: "eidolon:enchanted_ash",
            U: "eidolon:oanna_bloom"
        }
    )

    event.shaped(
        Item.of("eidolon:warped_sprouts"),
        [
            "ATU",
            "   ",
            "   "
        ],
        {
            A: "minecraft:warped_fungus",
            T: "eidolon:ender_calx",
            U: "minecraft:nether_wart"
        }
    )

    event.shaped(
        Item.of("eidolon:elder_brick", 16),
        [
            "ATA",
            "AUA",
            "   "
        ],
        {
            A: "minecraft:packed_mud",
            T: "eidolon:enchanted_ash",
            U: "eidolon:soul_shard"
        }
    )

    event.shaped(
        Item.of("eidolon:parchment", 4),
        [
            " A ",
            "TTT",
            " U "
        ],
        {
            A: "minecraft:leather",
            T: "minecraft:paper",
            U: "eidolon:enchanted_ash"
        }
    )

    event.shaped(
        Item.of("eidolon:arcane_gold_ingot", 2),
        [
            " U ",
            "ATA",
            " U "
        ],
        {
            A: "minecraft:redstone",
            T: "eidolon:soul_shard",
            U: "minecraft:gold_ingot"
        }
    )

    event.shaped(
        Item.of("eidolon:polished_planks", 14),
        [
            "AAA",
            "ATA",
            "AUA"
        ],
        {
            A: "#minecraft:planks",
            T: "eidolon:enchanted_ash",
            U: "eidolon:soul_shard"
        }
    )

    event.shapeless(
        Item.of("eidolon:oanna_bloom", 1),
        [
            "minecraft:lily_pad"
        ]
    )

})