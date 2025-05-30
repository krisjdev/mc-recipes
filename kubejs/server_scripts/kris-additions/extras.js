ServerEvents.recipes(event => {

    event.shaped(
        Item.of("forbidden_arcanus:soul", 4),
        [
            "CSC",
            "SES",
            "CSC"
        ],
        {
            C: "forbidden_arcanus:arcane_crystal_dust",
            S: "minecraft:soul_sand",
            E: "minecraft:ender_pearl"
        }
    )

    event.shaped(
        Item.of("forbidden_arcanus:corrupt_soul", 4),
        [
            "CSC",
            "SBS",
            "CSC"
        ],
        {
            C: "forbidden_arcanus:arcane_crystal_dust",
            S: "minecraft:soul_sand",
            B: "quark:soul_bead"
        }
    )

    event.shaped(
        Item.of("forbidden_arcanus:enchanted_soul", 1),
        [
            "CSC",
            "SES",
            "CSC"
        ],
        {
            C: "forbidden_arcanus:arcane_crystal_dust",
            S: "minecraft:soul_sand",
            E: "minecraft:echo_shard"
        }
    )

    event.shaped(
        Item.of("aquaculture:neptunium_ingot", 4),
        [
            " V ",
            "VSV",
            " V "
        ],
        {
            V: "allthemodium:vibranium_ingot",
            S: "minecraft:heart_of_the_sea",
        }
    )

    event.shapeless(
        Item.of("minecraft:obsidian", 64),
        [
            "twilightforest:giant_obsidian"
        ]
    )

    event.custom({
        type: "create:filling",
        ingredients: [
            {
                item: "minecraft:glass_bottle"
            },
            {
                amount: 250,
                fluid: "chemlib:radon_fluid",
                nbt: {}
            }
        ],
        results: [
            {
                item: "alexscaves:radon_bottle"
            }
        ]
    })

    event.shaped(
        Item.of("biomesoplenty:black_sand", 4),
        [
            " S ",
            "SDS",
            " S "
        ],
        {
            S: "minecraft:sand",
            D: "minecraft:black_dye"
        }
    )

    event.shaped(
        Item.of("cataclysm:enderite_block", 1),
        [
            "OOO",
            "EVE",
            "OOO"
        ],
        {
            O: "minecraft:obsidian",
            E: "minecraft:ender_eye",
            V: "cataclysm:void_core"
        }
    )

    event.shapeless(
        Item.of("cataclysm:void_infused_end_stone_bricks", 1),
        [
            "minecraft:end_stone_bricks",
            "cataclysm:void_jaw"
        ]
    )

    event.shapeless(
        Item.of("naturalist:glow_goop", 1),
        [
            "mysticalagriculture:nature_essence",
            "mysticalagriculture:glowstone_essence"
        ]
    )

    event.shaped(
        Item.of("ad_astra:ice_shard", 1),
        [
            "  I",
            " I ",
            "I  "
        ],
        {
            I: "mysticalagriculture:ice_essence"
        }
    )

})