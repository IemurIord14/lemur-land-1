// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level":
            case "level1":return tiles.createTilemap(hex`4000100001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010103030303030303030303030303030303030303030303030303030101010101010303030303030303030303030303030303030303030303030303030301010104020202020202020202020202020202020202020202020202020201010101010102020202020202020202020202020202020202020202020202020202060101040202020202020202020202020202020202020202020202020202010101010101020202020202020202020202020202020202020202020202020202020601010402020202020202020202020202020202020202020202020202020202010102020202020202020202020202020202020202020202020202020202020206010104020202020202020202020202020202020202020202020202020202020101020202020202020202020202020202020202020202020202020202020202060101040202020202020202020202020202020202020202020202020202020201010202020202020202020202020202020202020202020202020202020202020601010402020202020202020202020202020202020202020202020202020202010102020202020202020202020202020202020202020202020202020202020206010104020202020202020202020202020202020202020202020202020202020101020202020202020202020202020202020202020202020202020202020202060101040202020202020202020205050505020202020205050205050505050501010202020202020202020202020202020202020202020202020202020202020601010402020202020205050202010101010202020202020102020202020202090902020202020202020202020202020202020202020202020202020202020206010104020202020202020202020201010202050505050201050202020202020909020202020202020202020202020202020202020202020202020202020202060101040202020505020202020202010102020202020202010105050202050501010202020202020202020202020202020202020202020202020202020202020601010402020202020202020202020101020202020202020101010102020101010102020202020202020202020202020202020202020202020202020202020206010101050505050505050505050501010507070707070701010101050501010101050505050505050505050505050505050505050505050505050505050505010101010101010101010101010101010101080808080808010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
2222222222222222222222222222222222222222222222222222222222222222
2222222222222222222222222222222222222222222222222222222222222222
22..........................222222............................22
22..........................222222............................22
22............................22..............................22
22............................22..............................22
22............................22..............................22
22............................22..............................22
22............................22..............................22
22..........2222.....22.22222222..............................22
22......22..2222......2.......................................22
22...........22..2222.22......................................22
22...22......22.......2222..2222..............................22
22...........22.......2222..2222..............................22
2222222222222222......222222222222222222222222222222222222222222
2222222222222222......222222222222222222222222222222222222222222
`, [myTiles.transparency16,sprites.castle.tilePath5,myTiles.tile1,sprites.castle.tilePath8,sprites.castle.tilePath6,sprites.castle.tilePath2,sprites.castle.tilePath4,sprites.builtin.forestTiles6,sprites.builtin.forestTiles10,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
