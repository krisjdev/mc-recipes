// fixing conflicting recipe(s) that were added on top of atm9
// edited: 05/05/2025
//
// changes:
//      - adds 2 recipes to get crushed endstone dust as the occultism fella is broken and gives
//        barrier blocks instead for some reason
//
// 17/04/2025:
//      - update recipe for cracked bricks from twigs to not conflict with create deco


ServerEvents.recipes(event => {
    // remove existing recipes (smelting brick -> cracked bricks)
    event.remove({output: 'twigs:cracked_bricks'})

    // replacement recipe (brick + black dye -> cracked bricks)
    event.shapeless(
         Item.of('twigs:cracked_bricks', 1),
         [
             'minecraft:black_dye',
             'minecraft:bricks'
         ]
    )

    // workaround for broken occultism crushing fella recipe
    event.shapeless(
        Item.of('occultism:crushed_end_stone', 1),
        [
            '#alltheores:ore_hammers',
            'minecraft:end_stone'
        ]
    )

    event.custom({
        type: 'mekanism:crushing',
        input: {ingredient: {item: 'minecraft:end_stone'}},
        output: {item: 'occultism:crushed_end_stone'}
    })

})
