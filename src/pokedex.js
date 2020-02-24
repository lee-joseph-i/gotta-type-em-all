const POKEDEX = {
  0: {
    id: 0,
    name: "pikachu",
    src: "./assets/sprites/pikachu-open.png",
    src2: "./assets/sprites/pikachu-idle.png",
    shift1: 192,
    shift2_x: 60,
    shift2_y: 60,
    adjustX: 76,
    adjustX_2: 0,
    adjustY: 104,
    adjustY_2: 0,
    srcSpriteLength: 11520,
    srcSpriteLength2: 1980,
    escapeTimer: 12000,
    shiny: false
  },
  1: {
    id: 1,
    name: "squirtle",
    src: "./assets/sprites/squirtle-open.png",
    src2: "./assets/sprites/squirtle-idle.png",
    shift1: 192,
    shift2_x: 53,
    shift2_y: 54,
    adjustX: 67,
    adjustX_2: 0,
    adjustY: 110,
    adjustY_2: 0,
    srcSpriteLength: 12672 - 192,
    srcSpriteLength2: 1537,
    escapeTimer: 12000,
    shiny: false
  },
  2: {
    id: 2,
    name: "charmander",
    src: "./assets/sprites/charmander-open.png",
    src2: "./assets/sprites/charmander-idle.png",
    shift1: 192,
    shift2_x: 48,
    shift2_y: 57,
    adjustX: 73,
    adjustX_2: 0,
    adjustY: 107,
    adjustY_2: 0,
    srcSpriteLength: 13056 - 192,
    srcSpriteLength2: 3312,
    escapeTimer: 12000,
    shiny: false
  },
  3: {
    id: 3,
    name: "bulbasaur",
    src: "./assets/sprites/bulbasaur-open.png",
    src2: "./assets/sprites/bulbasaur-idle.png",
    shift1: 192,
    shift2_x: 45,
    shift2_y: 49,
    adjustX: 70,
    adjustX_2: 5,
    adjustY: 106,
    adjustY_2: 8,
    srcSpriteLength: 9792 - 192,
    srcSpriteLength2: 1845,
    escapeTimer: 12000,
    shiny: false
  },
  4: {
    id: 4,
    name: "abra",
    src: "./assets/sprites/abra-open.png",
    src2: "./assets/sprites/abra-idle.png",
    shift1: 192,
    shift2_x: 69,
    shift2_y: 53,
    adjustX: 63,
    adjustX_2: 0,
    adjustY: 106,
    adjustY_2: 0,
    srcSpriteLength: 12672 - 192,
    srcSpriteLength2: 5451,
    escapeTimer: 3000,
    shiny: false
  },
  5: {
    id: 5,
    name: "alakazam",
    src: "./assets/sprites/alakazam-open.png",
    src2: "./assets/sprites/alakazam-idle.png",
    shift1: 192,
    shift2_x: 77,
    shift2_y: 79,
    adjustX: 70,
    adjustX_2: -16,
    adjustY: 102,
    adjustY_2: -20,
    srcSpriteLength: 13632 - 192,
    srcSpriteLength2: 5698,
    escapeTimer: 12000,
    shiny: false
  },
  6: {
    id: 6,
    name: "aerodactyl",
    src: "./assets/sprites/aerodactyl-open.png",
    src2: "./assets/sprites/aerodactyl-idle.png",
    shift1: 192,
    shift2_x: 189,
    shift2_y: 145,
    adjustX: 70,
    adjustX_2: -68,
    adjustY: 85,
    adjustY_2: -50,
    srcSpriteLength: 12672 - 192,
    srcSpriteLength2: 7371,
    escapeTimer: 12000,
    shiny: false
  },
  7: {
    id: 7,
    name: "eevee",
    src: "./assets/sprites/eevee-open.png",
    src2: "./assets/sprites/eevee-idle.png",
    shift1: 192,
    shift2_x: 64,
    shift2_y: 55,
    adjustX: 69,
    adjustX_2: -8,
    adjustY: 107,
    adjustY_2: 0,
    srcSpriteLength: 13632 - 192,
    srcSpriteLength2: 1600,
    escapeTimer: 12000,
    shiny: false
  },
  8: {
    id: 8,
    name: "vaporeon",
    src: "./assets/sprites/vaporeon-open.png",
    src2: "./assets/sprites/vaporeon-idle.png",
    shift1: 192,
    shift2_x: 102,
    shift2_y: 72,
    adjustX: 69,
    adjustX_2: -14,
    adjustY: 104,
    adjustY_2: -14,
    srcSpriteLength: 11712 - 192,
    srcSpriteLength2: 6426,
    escapeTimer: 12000,
    shiny: false
  },
  9: {
    id: 9,
    name: "flareon",
    src: "./assets/sprites/flareon-open.png",
    src2: "./assets/sprites/flareon-idle.png",
    shift1: 192,
    shift2_x: 59,
    shift2_y: 93,
    adjustX: 72,
    adjustX_2: 0,
    adjustY: 102,
    adjustY_2: -34,
    srcSpriteLength: 13632 - 192,
    srcSpriteLength2: 1711,
    escapeTimer: 12000,
    shiny: false
  },
  10: {
    id: 10,
    name: "jigglypuff",
    src: "./assets/sprites/jigglypuff-open.png",
    src2: "./assets/sprites/jigglypuff-idle.png",
    shift1: 192,
    shift2_x: 46,
    shift2_y: 46,
    adjustX: 70,
    adjustX_2: 4,
    adjustY: 108,
    adjustY_2: 10,
    srcSpriteLength: 15552 - 192,
    srcSpriteLength2: 2254,
    escapeTimer: 12000,
    shiny: false
  },
  11: {
    id: 11,
    name: "psyduck",
    src: "./assets/sprites/psyduck-open.png",
    src2: "./assets/sprites/psyduck-idle.png",
    shift1: 192,
    shift2_x: 51,
    shift2_y: 53,
    adjustX: 70,
    adjustX_2: 2,
    adjustY: 106,
    adjustY_2: 4,
    srcSpriteLength: 15168 - 192,
    srcSpriteLength2: 1845,
    escapeTimer: 12000,
    shiny: false
  },
  12: {
    id: 12,
    name: "zubat",
    src: "./assets/sprites/zubat-open.png",
    src2: "./assets/sprites/zubat-idle.png",
    shift1: 192,
    shift2_x: 104,
    shift2_y: 84,
    adjustX: 72,
    adjustX_2: -20,
    adjustY: 98,
    adjustY_2: -18,
    srcSpriteLength: 7872 - 192,
    srcSpriteLength2: 4056,
    escapeTimer: 12000,
    shiny: false
  },
  13: {
    id: 13,
    name: "azumarill",
    src: "./assets/sprites/azumarill-open.png",
    src2: "./assets/sprites/azumarill-idle.png",
    shift1: 192,
    shift2_x: 89,
    shift2_y: 90,
    adjustX: 72,
    adjustX_2: -20,
    adjustY: 98,
    adjustY_2: -24,
    srcSpriteLength: 12672 - 192,
    srcSpriteLength2: 5251,
    escapeTimer: 12000,
    shiny: false
  },
  14: {
    id: 14,
    name: "blastoise",
    src: "./assets/sprites/blastoise-open.png",
    src2: "./assets/sprites/blastoise-idle.png",
    shift1: 192,
    shift2_x: 88,
    shift2_y: 83,
    adjustX: 72,
    adjustX_2: -22,
    adjustY: 98,
    adjustY_2: -20,
    srcSpriteLength: 12480 - 192,
    srcSpriteLength2: 6952,
    escapeTimer: 12000,
    shiny: false
  },
  15: {
    id: 15,
    name: "blaziken",
    src: "./assets/sprites/blaziken-open.png",
    src2: "./assets/sprites/blaziken-idle.png",
    shift1: 192,
    shift2_x: 83,
    shift2_y: 96,
    adjustX: 72,
    adjustX_2: -20,
    adjustY: 98,
    adjustY_2: -30,
    srcSpriteLength: 13632 - 192,
    srcSpriteLength2: 3901,
    escapeTimer: 12000,
    shiny: false
  },
  16: {
    id: 16,
    name: "caterpie",
    src: "./assets/sprites/caterpie-open.png",
    src2: "./assets/sprites/caterpie-idle.png",
    shift1: 192,
    shift2_x: 46,
    shift2_y: 45,
    adjustX: 75,
    adjustX_2: 0,
    adjustY: 98,
    adjustY_2: 15,
    srcSpriteLength: 10752 - 192,
    srcSpriteLength2: 2254,
    escapeTimer: 12000,
    shiny: false
  },
  17: {
    id: 17,
    name: "charizard",
    src: "./assets/sprites/charizard-open.png",
    src2: "./assets/sprites/charizard-idle.png",
    shift1: 192,
    shift2_x: 133,
    shift2_y: 140,
    adjustX: 72,
    adjustX_2: -30,
    adjustY: 98,
    adjustY_2: -80,
    srcSpriteLength: 12096 - 192,
    srcSpriteLength2: 6251,
    escapeTimer: 12000,
    shiny: false
  },
  18: {
    id: 18,
    name: "charmeleon",
    src: "./assets/sprites/charmeleon-open.png",
    src2: "./assets/sprites/charmeleon-idle.png",
    shift1: 192,
    shift2_x: 60,
    shift2_y: 70,
    adjustX: 72,
    adjustX_2: -4,
    adjustY: 102,
    adjustY_2: -10,
    srcSpriteLength: 14208 - 192,
    srcSpriteLength2: 3540,
    escapeTimer: 12000,
    shiny: false
  },
  19: {
    id: 19,
    name: "dodrio",
    src: "./assets/sprites/dodrio-open.png",
    src2: "./assets/sprites/dodrio-idle.png",
    shift1: 192,
    shift2_x: 68,
    shift2_y: 102,
    adjustX: 72,
    adjustX_2: -15,
    adjustY: 98,
    adjustY_2: -38,
    srcSpriteLength: 11712 - 192,
    srcSpriteLength2: 4012,
    escapeTimer: 12000,
    shiny: false
  },
  20: {
    id: 20,
    name: "dragonite",
    src: "./assets/sprites/dragonite-open.png",
    src2: "./assets/sprites/dragonite-idle.png",
    shift1: 192,
    shift2_x: 85,
    shift2_y: 98,
    adjustX: 72,
    adjustX_2: -16,
    adjustY: 98,
    adjustY_2: -35,
    srcSpriteLength: 15552 - 192,
    srcSpriteLength2: 3740,
    escapeTimer: 12000,
    shiny: false
  },
  21: {
    id: 21,
    name: "furret",
    src: "./assets/sprites/furret-open.png",
    src2: "./assets/sprites/furret-idle.png",
    shift1: 192,
    shift2_x: 85,
    shift2_y: 73,
    adjustX: 72,
    adjustX_2: -2,
    adjustY: 98,
    adjustY_2: -10,
    srcSpriteLength: 11520 - 192,
    srcSpriteLength2: 5015,
    escapeTimer: 12000,
    shiny: false
  },
  22: {
    id: 22,
    name: "gengar",
    src: "./assets/sprites/gengar-open.png",
    src2: "./assets/sprites/gengar-idle.png",
    shift1: 192,
    shift2_x: 84,
    shift2_y: 78,
    adjustX: 72,
    adjustX_2: -16,
    adjustY: 102,
    adjustY_2: -16,
    srcSpriteLength: 10368 - 192,
    srcSpriteLength2: 3276,
    escapeTimer: 12000,
    shiny: false
  },
  23: {
    id: 23,
    name: "haunter",
    src: "./assets/sprites/haunter-open.png",
    src2: "./assets/sprites/haunter-idle.png",
    shift1: 192,
    shift2_x: 85,
    shift2_y: 73,
    adjustX: 72,
    adjustX_2: -23,
    adjustY: 98,
    adjustY_2: -14,
    srcSpriteLength: 13632 - 192,
    srcSpriteLength2: 5015,
    escapeTimer: 12000,
    shiny: false
  },
  24: {
    id: 24,
    name: "ivysaur",
    src: "./assets/sprites/ivysaur-open.png",
    src2: "./assets/sprites/ivysaur-idle.png",
    shift1: 192,
    shift2_x: 84,
    shift2_y: 80,
    adjustX: 72,
    adjustX_2: -14,
    adjustY: 98,
    adjustY_2: -4,
    srcSpriteLength: 11712 - 192,
    srcSpriteLength2: 4116,
    escapeTimer: 12000,
    shiny: false
  },
  25: {
    id: 25,
    name: "jumpluff",
    src: "./assets/sprites/jumpluff-open.png",
    src2: "./assets/sprites/jumpluff-idle.png",
    shift1: 192,
    shift2_x: 90,
    shift2_y: 84,
    adjustX: 72,
    adjustX_2: -12,
    adjustY: 98,
    adjustY_2: -28,
    srcSpriteLength: 16128 - 192,
    srcSpriteLength2: 7110,
    escapeTimer: 12000,
    shiny: false
  },
  26: {
    id: 26,
    name: "kiria",
    src: "./assets/sprites/kiria-open.png",
    src2: "./assets/sprites/kiria-idle.png",
    shift1: 192,
    shift2_x: 44,
    shift2_y: 68,
    adjustX: 72,
    adjustX_2: 4, // +12
    adjustY: 102,
    adjustY_2: -8, // go positive
    srcSpriteLength: 12480 - 192,
    srcSpriteLength2: 1672,
    escapeTimer: 12000,
    shiny: false
  },
  27: {
    id: 27,
    name: "lapras",
    src: "./assets/sprites/lapras-open.png",
    src2: "./assets/sprites/lapras-idle.png",
    shift1: 192,
    shift2_x: 94,
    shift2_y: 84,
    adjustX: 72,
    adjustX_2: -16,
    adjustY: 98,
    adjustY_2: -22,
    srcSpriteLength: 14016 - 192,
    srcSpriteLength2: 8366,
    escapeTimer: 12000,
    shiny: false
  },
  28: {
    id: 28,
    name: "ledian",
    src: "./assets/sprites/ledian-open.png",
    src2: "./assets/sprites/ledian-idle.png",
    shift1: 192,
    shift2_x: 46,
    shift2_y: 83,
    adjustX: 72,
    adjustX_2: 0,
    adjustY: 98,
    adjustY_2: -30,
    srcSpriteLength: 11712 - 192,
    srcSpriteLength2: 1886,
    escapeTimer: 12000,
    shiny: false
  },
  29: {
    id: 25,
    name: "ledyba",
    src: "./assets/sprites/ledyba-open.png",
    src2: "./assets/sprites/ledyba-idle.png",
    shift1: 192,
    shift2_x: 61,
    shift2_y: 50,
    adjustX: 72,
    adjustX_2: 2,
    adjustY: 110,
    adjustY_2: -5, // -8
    srcSpriteLength: 10752 - 192,
    srcSpriteLength2: 2379,
    escapeTimer: 12000,
    shiny: false
  },
  30: {
    id: 30,
    name: "lickitung",
    src: "./assets/sprites/lickitung-open.png",
    src2: "./assets/sprites/lickitung-idle.png",
    shift1: 192,
    shift2_x: 58,
    shift2_y: 59,
    adjustX: 72,
    adjustX_2: -6, //+6
    adjustY: 102,
    adjustY_2: 0, // go positive
    srcSpriteLength: 11712 - 192,
    srcSpriteLength2: 1334,
    escapeTimer: 12000,
    shiny: false
  },
  31: {
    id: 31,
    name: "lombre",
    src: "./assets/sprites/lombre-open.png",
    src2: "./assets/sprites/lombre-idle.png",
    shift1: 192,
    shift2_x: 62,
    shift2_y: 62,
    adjustX: 68,
    adjustX_2: -4, // +6
    adjustY: 102,
    adjustY_2: 0, //go pos
    srcSpriteLength: 12672 - 192,
    srcSpriteLength2: 3658,
    escapeTimer: 12000,
    shiny: false
  },


};

export default POKEDEX;