'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3d97460ae5af9d28ce3fe21e65c030a3",
"main.dart.js_69.part.js": "b990b2ad4f6ee89effdec307c05152d9",
"main.dart.js_101.part.js": "3c0a55656ebbbff857f57efbe588f010",
"main.dart.js_24.part.js": "bc117891afda2cffe6e3f9485688bfaa",
"main.dart.js_34.part.js": "0f90b2d97f97715d02022a4fadd2a576",
"main.dart.js_56.part.js": "78d9836d0f5ae69582176bc257927a25",
"main.dart.js_163.part.js": "b02ad68db8cc15e57c7a3526987b333e",
"main.dart.js_173.part.js": "1756ddae6244f0ecfecbaff193daf9a3",
"main.dart.js_145.part.js": "ed387d95da845791aec5946ed6ae472a",
"version.json": "ce6d1bc8a3330cb8c2e243fcb50aa5b9",
"main.dart.js_7.part.js": "6eb87699253b593387eceba69c9f425c",
"main.dart.js_127.part.js": "8cd587224fdff94533bb218231579675",
"main.dart.js_84.part.js": "b1070e3bce2f80c37390535b6491444b",
"main.dart.js_118.part.js": "b29cf3b20a79e6a77068807512dafc3e",
"main.dart.js_154.part.js": "cb7831e3f9a6dba80f6038211b720e9e",
"main.dart.js_71.part.js": "c0ceaec2d563855195e1e2bf17a66a82",
"main.dart.js_6.part.js": "b2a50713728e590a3b881891640fcd33",
"index.html": "13662372493af66ce6ea7f38899ba088",
"/": "13662372493af66ce6ea7f38899ba088",
"main.dart.js_136.part.js": "cafde73dc2b18da288fae23ca0eead9f",
"main.dart.js_109.part.js": "fe487a770c13e3b0f514fb6d5c25aa31",
"main.dart.js_119.part.js": "78182a01f3d49890b13a4954156263ca",
"main.dart.js_95.part.js": "0fb7b22a4dce2485b80fa56feb19ab99",
"main.dart.js_85.part.js": "d2ad1f0acee21749ba44ddf404f07e3c",
"main.dart.js_68.part.js": "85e7bda361f6f263073d490ac60fde03",
"main.dart.js_78.part.js": "c42e58a3ac6b8489f59dea6432099314",
"main.dart.js_100.part.js": "7c855f920a9a1e5cc4dc772c2407bd08",
"main.dart.js_35.part.js": "7a4283afe4f9bfb354b15e7e887ac944",
"main.dart.js_25.part.js": "a4ca47641512c2f8b97b9c99f12f8bdc",
"main.dart.js_47.part.js": "efbceaa6afe13474aaaccffca94dbd7d",
"main.dart.js_172.part.js": "c257e4963534a8b0053d91615025c301",
"main.dart.js_162.part.js": "f58166db80f07c4bbe6ce842f3a9c7db",
"main.dart.js_124.part.js": "28537e95cec118897118d709312c7432",
"main.dart.js_11.part.js": "60afe101b26ccf70d93463e4fd75eb6f",
"main.dart.js_63.part.js": "5d159a2f0e5d681e065158d1aa064e43",
"main.dart.js_4.part.js": "c2454378bb8ac44a575aa2f1a95fe46e",
"main.dart.js_73.part.js": "35870cab6b4196805d7fb8fb16d1f26c",
"main.dart.js_146.part.js": "3f8bb2102e6947b44ad903b3b6406793",
"main.dart.js": "debb45a5eb83d1f60fa1d00391ec98b4",
"main.dart.js_87.part.js": "5fe9ba7c98d6b5a96a07440998d23eb6",
"main.dart.js_97.part.js": "de8b8a6e733cff948f4abc018720a01c",
"main.dart.js_179.part.js": "3a424052188618edbef6068e17acf78d",
"main.dart.js_169.part.js": "49df26922cf4db5fc10612a5e6ffc726",
"main.dart.js_18.part.js": "e1e9320baa6c41b8f3ec9bfc39088b00",
"main.dart.js_45.part.js": "f68f8e212ffc4ffb8aae725139070145",
"main.dart.js_37.part.js": "b69e14ab1f0b0928fb5d6c0c3403bf29",
"main.dart.js_102.part.js": "4bb846908711e5c69ea8bd70fd5da8ef",
"main.dart.js_112.part.js": "ffb0279c5efd9baf26f54590d747fe05",
"main.dart.js_19.part.js": "8740784180db299073907191285b77a6",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"main.dart.js_171.part.js": "1f20cfd1551aa4e62652bb167a9e3ec0",
"main.dart.js_54.part.js": "b1906f4a87ea0e4739a5a0bde3bb3bac",
"main.dart.js_44.part.js": "30e0217bcbaf45c0aade282edaf39ada",
"main.dart.js_36.part.js": "dc404d46b93efbc17220c33c3e1cc8f7",
"main.dart.js_113.part.js": "a6043f203ceb2e5e9371e1bed54d7287",
"main.dart.js_103.part.js": "0ee2aeb115e29658668250c2fc5ea06e",
"main.dart.js_135.part.js": "4dd7163bea0a1eb85692e7e5f7c017a8",
"main.dart.js_125.part.js": "4dc49355224552c071fd1a6e61a76f6b",
"main.dart.js_10.part.js": "d94eed92037e67df11c0904682de1d33",
"main.dart.js_72.part.js": "941e4dc290f9c5f99e8d9747ca1be228",
"main.dart.js_5.part.js": "823c0a8c7c6b67f2db9471b70e1a98c6",
"main.dart.js_157.part.js": "509e884dcf783205140b9f46bac5b7cc",
"main.dart.js_147.part.js": "141204afb78b50a86e961bfb4fbeb294",
"main.dart.js_96.part.js": "f3f3d738178e4892e473e32be3ad5021",
"main.dart.js_86.part.js": "4bfe10567d6ce9f3e02eef7c5adf0507",
"main.dart.js_168.part.js": "51ea037924ad1d9288779a3b1ef8e847",
"main.dart.js_178.part.js": "b52fb7837ec5eea91822e0ce23701711",
"main.dart.js_83.part.js": "757eda7b2270f613dae1e581fc14fc0a",
"main.dart.js_93.part.js": "24c3eb6027b767fd58bd351d8e4cf299",
"main.dart.js_58.part.js": "008bea7558da8dfa5420db5d4cb87853",
"main.dart.js_15.part.js": "2dce485c16c152dec7448e2fb7865928",
"main.dart.js_120.part.js": "75e060a4caf6dc9420d7ca0c2d4fddeb",
"main.dart.js_142.part.js": "2e7069e996e01bc3899b3c455295985f",
"main.dart.js_152.part.js": "2a4ecff84490e46ce930777b8475b4d8",
"main.dart.js_67.part.js": "67da1873d3f4a176f4159da39b844021",
"main.dart.js_77.part.js": "a9bbf74001640f5dbf674cd13ab47ce7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_41.part.js": "c16469c2a86c73dbef62283c08b1ec95",
"main.dart.js_51.part.js": "8b6f7d4c005ebdc59204fd59fb860a85",
"main.dart.js_164.part.js": "63cbfd1dafca5f8c98356e558e6d9230",
"main.dart.js_174.part.js": "8b39f8284198f108d65450c07f61b9ba",
"main.dart.js_106.part.js": "d999c83cd8f84187defa464b988e3015",
"main.dart.js_116.part.js": "ecb37200637edde08ed98ba4b9c064d2",
"main.dart.js_33.part.js": "cf1d21a3f8e830664ae0675305befd06",
"main.dart.js_139.part.js": "50756b93a4fd378d3b496dd317880335",
"main.dart.js_129.part.js": "ae2c1e279e9ebd879e7acbf5ac28ebe4",
"main.dart.js_180.part.js": "188190b0efe17ac25e813852d889366e",
"main.dart.js_50.part.js": "dbd25b4d57316afa3df5fb9d3b496e6e",
"main.dart.js_40.part.js": "72924a01c70c8d6ced7d0fc1b7c0b4c3",
"main.dart.js_175.part.js": "60f7cc25116ce3e5914eb210a4418000",
"main.dart.js_165.part.js": "e6dca5d4772af5619f9d5afc79b1dd9a",
"main.dart.js_117.part.js": "842b651bbba9621943e35c4db32519fc",
"main.dart.js_107.part.js": "59a2ebab019bc73f2551d40b814d173b",
"main.dart.js_32.part.js": "8ed69ff041a19c40f57a8dfdcfe66400",
"main.dart.js_22.part.js": "e5bdd3a7b2c3b9f8a01bc88b704c385f",
"main.dart.js_8.part.js": "ae8e750344b1c70afbf2a87a70eaf668",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.js_181.part.js": "e2276aaf553c0ed48d39eb01ccadea14",
"main.dart.js_128.part.js": "825bfc910d009bc3bb8ce467475ee82d",
"manifest.json": "3f381c438e8240fd0b48db94681bf220",
"main.dart.js_92.part.js": "f9d4d00da6c8b8a251c7096195074c04",
"main.dart.js_82.part.js": "5cfc1da41acc77f947a337037d1dd227",
"main.dart.js_59.part.js": "ec92562d51d1e8a9235888ba61f09578",
"main.dart.js_14.part.js": "108d3359f4b381f52ff81a017366cac3",
"main.dart.js_131.part.js": "819e69724d2ccf6c03ebb10a00cd7d93",
"main.dart.js_121.part.js": "72718a6d3002ddb23793b169129e83b6",
"main.dart.js_76.part.js": "af6405c687e6515a0790ac9adc26db9f",
"main.dart.js_1.part.js": "45b5663134440f33d08a76652c6d09c0",
"main.dart.js_20.part.js": "2b458b904b992df39cd76c11fcb85be5",
"main.dart.js_30.part.js": "be43b6a9487e3bae33548347f18fd96a",
"main.dart.js_115.part.js": "fb1fca92ee7934fb31c7235a4336b788",
"main.dart.js_99.part.js": "5221dccb40a4cb5d89b8ffb603581400",
"main.dart.js_89.part.js": "e240bad3e036f1ec74f09eb845bf9d68",
"main.dart.js_167.part.js": "e6aa4639b86dc8831f0f56384c3dc1b6",
"main.dart.js_177.part.js": "c7ef845662614aa3209fad2ad6a52bb3",
"main.dart.js_42.part.js": "9afd2d2f475f4606f565d978684c08c8",
"main.dart.js_183.part.js": "1e2997c3ad435d83eeec8273035a689c",
"main.dart.js_39.part.js": "74d4ea8d690b65f5b896f0369c9e461c",
"main.dart.js_80.part.js": "8b98fcb656fb58f71d5ef94143d03dd1",
"main.dart.js_3.part.js": "aca5852c11f52a7041f1a64543654dfe",
"main.dart.js_74.part.js": "af875b3e3e158fded3517cf59bf7b148",
"main.dart.js_141.part.js": "22bdb7f1d141498b63cd646f79d18f24",
"main.dart.js_151.part.js": "e042a8491975bf1f92ff4cde4284f98e",
"main.dart.js_123.part.js": "0bd9aec69a57e0da163bb58291f9de6a",
"main.dart.js_133.part.js": "abf90d990a3d1e341c85409408add4cc",
"main.dart.js_16.part.js": "511a1c9043deec385dbd3843bd5a71a6",
"assets/NOTICES": "dc0fab6ee0781ff659500ef9a579fad8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "0e187aee16aca7e9c339f8b090745a76",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "0926df9b2020471c183fe6388d09a8c3",
"assets/fonts/MaterialIcons-Regular.otf": "a1bdd7322e688e0aa22fff6e30ce1b6f",
"assets/assets/anim/color_pridiction.json": "f1a9d648389cfb4ede25cbab3c0af028",
"assets/assets/anim/celebration.json": "20bc60204d37ccd00fb894effc4e2ddc",
"assets/assets/anim/aviator_splash.json": "4dbbdd552ace8b49c0145dafad80d1b8",
"assets/assets/anim/cricket.json": "3e9e9c7d29d8fe9b5b2dce889519322d",
"assets/assets/anim/bounce.xml": "b3f4f558047c04218daa88c83e9b40d4",
"assets/assets/anim/dailyreward.json": "a314710fa5fb4811b5cb8053844bd62a",
"assets/assets/anim/rotate.xml": "d5b7853a7311dbfd71458b8c37763265",
"assets/assets/anim/betandball.json": "b5801de37162c12508703dd980b39f01",
"assets/assets/anim/playing_card.json": "1b875a8cb8dab55735e1e4c4b85836d3",
"assets/assets/anim/head_tail.json": "b0c757109e5fd6cd6bb682d19ddc1ec2",
"assets/assets/anim/blink.xml": "ec3c2ae81c08a5fa3a1e6bea80355c31",
"assets/assets/anim/Aviator%2520Propeller.json": "d236d935f3a396fd934493f1c7305b63",
"assets/assets/anim/table_tennis.json": "21c689b9bf02360ac0db90d1d28f2a8a",
"assets/assets/anim/football.json": "b8bd294486aff11b56b71ac1714a2bc0",
"assets/assets/anim/casino.json": "ed39155b158d889e24c07a414bc35e55",
"assets/assets/anim/ludo.json": "7df186beabb77dee6b409fba3c0b5752",
"assets/assets/games_assets/private_table/button_background_finish.webp": "86402d3c6ad2c828e79894c4b23a190d",
"assets/assets/games_assets/private_table/update_background_profile.webp": "f1e0019fc93a126037091d33ca681d98",
"assets/assets/games_assets/private_table/backside_teenpatti.png": "b22c8d15347fc040222c0ca9f6c317f8",
"assets/assets/games_assets/private_table/img.png": "74bbf546acc6d7594196c94bbc5986e2",
"assets/assets/games_assets/private_table/home_private_table.gif": "b19aa7948d4f30892673a638a7f3b6e9",
"assets/assets/games_assets/private_table/home_privatetable.gif": "d89746888da2d9510b64a9f031eaecd5",
"assets/assets/games_assets/seven_up_down/ic_seven_up_circlebg.webp": "6ab71fe775618a70e5c7f78b599d7b6a",
"assets/assets/games_assets/seven_up_down/ic_seven_up_box_up_mid.webp": "9c845d3ec795057531215feb57f1edbc",
"assets/assets/games_assets/seven_up_down/ic_seven_up_box_up_right.webp": "9cf1af0e0ec9e47471e54b1934b77626",
"assets/assets/games_assets/seven_up_down/ic_seven_up_box_up_left.webp": "2e21e68b7a6e962008b6c79ca2cdc4de",
"assets/assets/games_assets/seven_up_down/ic_sevenup_table.webp": "6fe52adace19b6e81765cf6cc1a1076d",
"assets/assets/games_assets/seven_up_down/home_seven.gif": "d89746888da2d9510b64a9f031eaecd5",
"assets/assets/games_assets/jhandi_munda/dic_spade.webp": "6f264d295ca3edd617d9055dd3762ce5",
"assets/assets/games_assets/jhandi_munda/dic_club.webp": "11fae95cd958a7e96867543fd6c8a3d0",
"assets/assets/games_assets/jhandi_munda/home_jundimundi.gif": "d89746888da2d9510b64a9f031eaecd5",
"assets/assets/games_assets/jhandi_munda/ic_jackpot_box_new.webp": "bf5df0fd6b10000333e77c15097c6ef7",
"assets/assets/games_assets/jhandi_munda/dic_heart.webp": "ed3ad04c2782c3afc588d6c2bd805982",
"assets/assets/games_assets/jhandi_munda/dic_flag.webp": "072d75c602c438171a57f85d0b6b2357",
"assets/assets/games_assets/jhandi_munda/dice.xml": "b823fa1469a507d27922ac64fe02be49",
"assets/assets/games_assets/jhandi_munda/dic_face.webp": "cff72a624dda8ab5c18e99747deeaf70",
"assets/assets/games_assets/jhandi_munda/dic_diamond.webp": "6fd1e5b08f4f4ddaf0e45359213a0a6a",
"assets/assets/games_assets/andhar_bahar/iv_andhar_bahar_carddrawn_bg.webp": "811cab2f3562cff3d1780f2fecc8420a",
"assets/assets/games_assets/andhar_bahar/girle_character_teen.gif": "0320179f9e0c28fdfe7aee0d95c79017",
"assets/assets/games_assets/andhar_bahar/ic_ab_rule1.webp": "6dbe23d164e39901eac4e4d85d7b988b",
"assets/assets/games_assets/andhar_bahar/top_pop_up_bahar.webp": "c3f011b50e12627c47d33dd36206e18a",
"assets/assets/games_assets/andhar_bahar/top_pop_andhar.png": "ec01d34e8cba980dabcf83de3fa91024",
"assets/assets/games_assets/andhar_bahar/ab_table_3d.png": "dfaa5a35671d89ce29d1a3f3c078f5bb",
"assets/assets/games_assets/andhar_bahar/icon_bahar.png": "f25bcb2d88f151f002efb0d53ee90e34",
"assets/assets/games_assets/andhar_bahar/icon_andar.png": "c6963a0a2d16d602eaf944b02de76949",
"assets/assets/games_assets/andhar_bahar/home_andherbahar.webp": "de42d7c83287b84eb547732aaf1450af",
"assets/assets/games_assets/andhar_bahar/andr_bahr.png": "7d1f8428a39b3c952ff60bba1c075ebb",
"assets/assets/games_assets/andhar_bahar/ic_ab_rule2.webp": "41fdca3a2c8f2ad0ee333daefaf6fe59",
"assets/assets/games_assets/andhar_bahar/iv_andar_bahar_table.webp": "f82bfcb8236d37a9d387a9c9e29605aa",
"assets/assets/games_assets/andhar_bahar/home_andhar_bhar.gif": "d89746888da2d9510b64a9f031eaecd5",
"assets/assets/games_assets/icon_game/private_table.png": "69005d2646f47de36ca74f13ca484f2d",
"assets/assets/games_assets/icon_game/jhandi_munda.png": "f1974e6add329b7c309612e4e21a7679",
"assets/assets/games_assets/icon_game/headandtail.png": "d9fc5d83dd091df9e3900f90d4fd5abc",
"assets/assets/games_assets/icon_game/jacpot3patti.png": "98b441e096bb694cadee5ff6b21c2465",
"assets/assets/games_assets/icon_game/roulette.png": "c40f1fc7be3e70d3b29f29835506f9dc",
"assets/assets/games_assets/icon_game/poker.png": "a10e65980a188c6aa9195c529ebad37d",
"assets/assets/games_assets/icon_game/baccarat.png": "5e08bfd4dd5cd4c78bbff0c38db2d14e",
"assets/assets/games_assets/icon_game/7updown.png": "5f561ea30605e2f2488c1da21c4e3a54",
"assets/assets/games_assets/icon_game/local_ludo.png": "e7ba8e1e06912e32adb680fcaa5352e7",
"assets/assets/games_assets/icon_game/pointrummy.png": "39019bef4f1fca2fa3f4e49b2169b4b1",
"assets/assets/games_assets/icon_game/pool_rummy.png": "6393c3a3a443d86030a336567f4df48f",
"assets/assets/games_assets/icon_game/aviator.png": "5314c1c74cf8bbf96b017579ceeb9812",
"assets/assets/games_assets/icon_game/andar_bahar.png": "32b17cdd0193f4e9949350ed163b8a01",
"assets/assets/games_assets/icon_game/online_ludo.png": "7b3f1e05197b77d4c8f605e3af50b556",
"assets/assets/games_assets/icon_game/teenpatti.png": "e8dd41620db45280b226a26eb9146150",
"assets/assets/games_assets/icon_game/car_roulette.png": "1c2c9a20056f2ffd31b7638d02ba98a0",
"assets/assets/games_assets/icon_game/deal_rummy.png": "e5b9620b8c7c7411670a165f69b301d7",
"assets/assets/games_assets/icon_game/redandblack.png": "c7b7732bd6e480cfc68f4b890a8a04d2",
"assets/assets/games_assets/icon_game/computer_ludo.png": "b09547990ce08c4e860dbdb45ee272ab",
"assets/assets/games_assets/icon_game/color_pridiction.png": "2c486d3e5ccfbd04e85ae0f8a2409244",
"assets/assets/games_assets/icon_game/private_rummy.png": "65752d22d9a67f6c5a3c0244d24544a3",
"assets/assets/games_assets/icon_game/dragontiger.png": "03d5982c7e70fd6ad951182c415a1314",
"assets/assets/games_assets/baccarat/rp2.webp": "2394a161b1aab16b2be1615978c51817",
"assets/assets/games_assets/baccarat/rs8.webp": "c6be0e49397fb2f576fc429f6e627742",
"assets/assets/games_assets/baccarat/bp5.webp": "63422474b35a87868563625757d86b8e",
"assets/assets/games_assets/baccarat/rs4.webp": "3c8bf85506172f0457c72ed39057fe23",
"assets/assets/games_assets/baccarat/bp9.webp": "e7858aedf627a1e8b0d0ff0e44fa4c74",
"assets/assets/games_assets/baccarat/bp8.webp": "0e7c85ea4dc39d33a92f2b87cac55c1d",
"assets/assets/games_assets/baccarat/rs5.webp": "e6346fc7afe2bf79c76a18e4811e968e",
"assets/assets/games_assets/baccarat/rpq.webp": "d28ce1d231c6263311ab981cb0a8cae7",
"assets/assets/games_assets/baccarat/bp10.webp": "06d548c423f2c451f6d32b63f3dcd2e4",
"assets/assets/games_assets/baccarat/p_player.webp": "d9fd8c6244a888e6730b4725b5521cb0",
"assets/assets/games_assets/baccarat/bp4.webp": "61ac26ab91d86b52ffafc7779be6d8c6",
"assets/assets/games_assets/baccarat/rs9.webp": "9a2bcb94dcfa5528b20b76ebcef4b659",
"assets/assets/games_assets/baccarat/rp3.webp": "fd93dd47e795325adca0a6cf598adaef",
"assets/assets/games_assets/baccarat/b_banker.webp": "335247dfbe16d7435f2c470720530700",
"assets/assets/games_assets/baccarat/rp8.webp": "2d8eda6699dcacd6a11309ae3ff4f4c0",
"assets/assets/games_assets/baccarat/rs2.webp": "9533f86f0dd38ed83dc817f5f8645003",
"assets/assets/games_assets/baccarat/rp4.webp": "09e30dfcfe04b0b1684d38de70dafb9c",
"assets/assets/games_assets/baccarat/bp3.webp": "4b6a95aaff539579184dd56741b6692e",
"assets/assets/games_assets/baccarat/bp2.webp": "bebb58079513e5002543e1e7f38e9469",
"assets/assets/games_assets/baccarat/img.png": "548b761fe97a64864156d5b352208c68",
"assets/assets/games_assets/baccarat/home_baccarat.gif": "d89746888da2d9510b64a9f031eaecd5",
"assets/assets/games_assets/baccarat/rp5.webp": "8084118b2c79111606e0b2b0a65463d5",
"assets/assets/games_assets/baccarat/rs3.webp": "6f6c944667a169c60329366e439be4ea",
"assets/assets/games_assets/baccarat/rs10.webp": "a2e9eb269846e0ad661d53456fa97513",
"assets/assets/games_assets/baccarat/rp9.webp": "b23dce4298a3c62071b0197e606ab233",
"assets/assets/games_assets/baccarat/rsk.webp": "3b3fd3e15abacbd0a1d4f36fe65d6eb4",
"assets/assets/games_assets/baccarat/rpa.webp": "96dc560cc273be65edb812a0aef3fb76",
"assets/assets/games_assets/baccarat/rp6.webp": "f72c902c21991aae25e810113b0fff8b",
"assets/assets/games_assets/baccarat/rp7.webp": "f0383a4872f72a3570763b78e0930421",
"assets/assets/games_assets/baccarat/ic_jackpot_box.webp": "3dd02887b6676cd7ab06a9fa2118f2e4",
"assets/assets/games_assets/baccarat/rsj.webp": "3bab973d3a4654db7b0fd3c9ddde712f",
"assets/assets/games_assets/baccarat/bp7.webp": "7801e715124fc7734ce52c22b7cf64eb",
"assets/assets/games_assets/baccarat/rsa.webp": "976c0a69045d6b7b1eb98efb7352e0b4",
"assets/assets/games_assets/baccarat/rpk.webp": "c19d159d29f6a2a7a6399b2316512e49",
"assets/assets/games_assets/baccarat/rs6.webp": "1b93a27595966c4e8c2af3236c7c3992",
"assets/assets/games_assets/baccarat/rp10.webp": "48a563251758944f39a2f3aa0e9d5166",
"assets/assets/games_assets/baccarat/rs7.webp": "d337533ba932c72a413e68cb296fcff8",
"assets/assets/games_assets/baccarat/rpj.webp": "49c9574be1fffdbe8d55c37a08edf3c3",
"assets/assets/games_assets/baccarat/bp6.webp": "835c33f0d7ef3223546f11c7ef7cc593",
"assets/assets/games_assets/aviator/rocket.json": "2f0dc951d14339dfabaa017adef3bc29",
"assets/assets/games_assets/aviator/plane-2.svg": "71a9e619b16b50924d609e04634ed203",
"assets/assets/games_assets/aviator/aviator_vertical_icon.gif": "3390dc9b5868aa0082cfa4e4a06c8777",
"assets/assets/games_assets/aviator/aviator.gif": "d89746888da2d9510b64a9f031eaecd5",
"assets/assets/games_assets/teen_patti/rp2.webp": "2394a161b1aab16b2be1615978c51817",
"assets/assets/games_assets/teen_patti/rs8.webp": "c6be0e49397fb2f576fc429f6e627742",
"assets/assets/games_assets/teen_patti/bp5.webp": "63422474b35a87868563625757d86b8e",
"assets/assets/games_assets/teen_patti/rs4.webp": "3c8bf85506172f0457c72ed39057fe23",
"assets/assets/games_assets/teen_patti/bp9.webp": "e7858aedf627a1e8b0d0ff0e44fa4c74",
"assets/assets/games_assets/teen_patti/bp8.webp": "0e7c85ea4dc39d33a92f2b87cac55c1d",
"assets/assets/games_assets/teen_patti/rs5.webp": "e6346fc7afe2bf79c76a18e4811e968e",
"assets/assets/games_assets/teen_patti/rpq.webp": "d28ce1d231c6263311ab981cb0a8cae7",
"assets/assets/games_assets/teen_patti/bp10.webp": "06d548c423f2c451f6d32b63f3dcd2e4",
"assets/assets/games_assets/teen_patti/bp4.webp": "61ac26ab91d86b52ffafc7779be6d8c6",
"assets/assets/games_assets/teen_patti/girle_character_teen.gif": "0320179f9e0c28fdfe7aee0d95c79017",
"assets/assets/games_assets/teen_patti/rs9.webp": "9a2bcb94dcfa5528b20b76ebcef4b659",
"assets/assets/games_assets/teen_patti/rp3.webp": "fd93dd47e795325adca0a6cf598adaef",
"assets/assets/games_assets/teen_patti/teen_patti_table_3d.png": "59656e2c29a1276be1d8386dd914c8bb",
"assets/assets/games_assets/teen_patti/teen_patti_table.png": "7d1f8428a39b3c952ff60bba1c075ebb",
"assets/assets/games_assets/teen_patti/rp8.webp": "2d8eda6699dcacd6a11309ae3ff4f4c0",
"assets/assets/games_assets/teen_patti/rs2.webp": "9533f86f0dd38ed83dc817f5f8645003",
"assets/assets/games_assets/teen_patti/seen.webp": "f6acab273e46477237ce2bccc65e0b55",
"assets/assets/games_assets/teen_patti/rp4.webp": "09e30dfcfe04b0b1684d38de70dafb9c",
"assets/assets/games_assets/teen_patti/bp3.webp": "4b6a95aaff539579184dd56741b6692e",
"assets/assets/games_assets/teen_patti/bp2.webp": "bebb58079513e5002543e1e7f38e9469",
"assets/assets/games_assets/teen_patti/rp5.webp": "8084118b2c79111606e0b2b0a65463d5",
"assets/assets/games_assets/teen_patti/chipp.webp": "f677dd8f486794e221adeea499b52e35",
"assets/assets/games_assets/teen_patti/rs3.webp": "6f6c944667a169c60329366e439be4ea",
"assets/assets/games_assets/teen_patti/home_teenpatti.gif": "d89746888da2d9510b64a9f031eaecd5",
"assets/assets/games_assets/teen_patti/rs10.webp": "a2e9eb269846e0ad661d53456fa97513",
"assets/assets/games_assets/teen_patti/rp9.webp": "b23dce4298a3c62071b0197e606ab233",
"assets/assets/games_assets/teen_patti/rpa.webp": "96dc560cc273be65edb812a0aef3fb76",
"assets/assets/games_assets/teen_patti/rp6.webp": "f72c902c21991aae25e810113b0fff8b",
"assets/assets/games_assets/teen_patti/rp7.webp": "f0383a4872f72a3570763b78e0930421",
"assets/assets/games_assets/teen_patti/bp7.webp": "7801e715124fc7734ce52c22b7cf64eb",
"assets/assets/games_assets/teen_patti/rsa.webp": "976c0a69045d6b7b1eb98efb7352e0b4",
"assets/assets/games_assets/teen_patti/rpk.webp": "c19d159d29f6a2a7a6399b2316512e49",
"assets/assets/games_assets/teen_patti/rs6.webp": "1b93a27595966c4e8c2af3236c7c3992",
"assets/assets/games_assets/teen_patti/rp10.webp": "48a563251758944f39a2f3aa0e9d5166",
"assets/assets/games_assets/teen_patti/teenpatti_backcard.png": "b22c8d15347fc040222c0ca9f6c317f8",
"assets/assets/games_assets/teen_patti/blind.webp": "11c28ed8b5ff6e77da119bb223a69b62",
"assets/assets/games_assets/teen_patti/rs7.webp": "d337533ba932c72a413e68cb296fcff8",
"assets/assets/games_assets/teen_patti/rpj.webp": "49c9574be1fffdbe8d55c37a08edf3c3",
"assets/assets/games_assets/teen_patti/bottom_pannel_teen_pati.webp": "0fbb000a9b44452ae8c16e8465e242e1",
"assets/assets/games_assets/teen_patti/bp6.webp": "835c33f0d7ef3223546f11c7ef7cc593",
"assets/assets/games_assets/car_roulette/rules_car_roulette.webp": "b6223a1cd32c9a33e87e84dc0b25c0f1",
"assets/assets/games_assets/car_roulette/ic_car_circle_audi.webp": "9c4c5397608ce9e751f179ea39332e59",
"assets/assets/games_assets/car_roulette/ic_car_circle_tata.webp": "5ae10b1a67833b0686dfc457fb087332",
"assets/assets/games_assets/car_roulette/ic_car_lamborghiani.webp": "2f3dd2b6a19d5c52ae2de1fcb11bfbe8",
"assets/assets/games_assets/car_roulette/ic_car_circle_lucky.webp": "78c33ce5acdf26e9038b755ca83b9f6c",
"assets/assets/games_assets/car_roulette/car_oulette_rules.webp": "65d90809743c459c90e75c4838a5ed24",
"assets/assets/games_assets/car_roulette/ic_car_circle_mahindra.webp": "a70ebb5ce3af5e20afa6262ae80e3656",
"assets/assets/games_assets/car_roulette/ic_car_circle_porche.webp": "3002c98fd1225fb9790f6536eab2dc5d",
"assets/assets/games_assets/car_roulette/ic_car_circle_bmw.webp": "32b5fc5244ac17478e14fd86d012c53c",
"assets/assets/games_assets/car_roulette/home_car.gif": "b72b3de8e3e6efee5141d3cec1334baf",
"assets/assets/games_assets/car_roulette/ic_car_circle_mercedez.webp": "ec8086426013761bdd9fd15643f91b9d",
"assets/assets/games_assets/car_roulette/ic_car_circle_ferrari.webp": "cd05d7fb6c5381f68114d19745701ab3",
"assets/assets/games_assets/dragon_tiger/ic_dt_d.webp": "ca36952ab9aaea0e2f94ea92f4c26cd3",
"assets/assets/games_assets/dragon_tiger/ic_dt_tiger_button_new.png": "c20cf55b1043c68f9bfae0c4d8599f0c",
"assets/assets/games_assets/dragon_tiger/ic_dt_tiegame.webp": "0d91dc7d7e274fa45c88b586bcde99e9",
"assets/assets/games_assets/dragon_tiger/gif_tiger_animated.gif": "5dd07894f83955530371794efc211a0f",
"assets/assets/games_assets/dragon_tiger/ic_dt_tie.webp": "51736ec8f97711ba873d473684e5b806",
"assets/assets/games_assets/dragon_tiger/ic_dt_dragont_button_new.png": "0c1988e0e855219fabe48f414f4f3079",
"assets/assets/games_assets/dragon_tiger/ic_tiger_gif.gif": "a7b1d86cf24982c2440d56fae301e097",
"assets/assets/games_assets/dragon_tiger/ic_dragon_gif.gif": "3fc6265a6beeeb19e442c7a5bad92639",
"assets/assets/games_assets/dragon_tiger/dragon_tiger_bg.jpg": "198c2da3bce4a7f0889dd0ef55af8998",
"assets/assets/games_assets/dragon_tiger/home_tgdr.gif": "d89746888da2d9510b64a9f031eaecd5",
"assets/assets/games_assets/dragon_tiger/ic_dt_t.webp": "d56bf4d843e21e0a5feeeaf73cbf8cb8",
"assets/assets/games_assets/dragon_tiger/gif_dragon_animated.gif": "0a1785699c9cbf020db55b8678d95761",
"assets/assets/games_assets/dragon_tiger/ic_dt_tie_button.webp": "05379e6dac3d9b451094bbf744b885be",
"assets/assets/games_assets/common/ic_dt_table.webp": "a37fbca6195ab6781385412f5c84eb4f",
"assets/assets/games_assets/common/home_bg2.jpg": "498e0d9c928fbc286d69fe2514f1ca52",
"assets/assets/games_assets/common/game_icon/home_poolrummy.gif": "d5aff93e6432c8eda3373926496b7a66",
"assets/assets/games_assets/common/game_icon/home_poker.gif": "9c3ade81823b66873248493115563f2f",
"assets/assets/games_assets/common/game_icon/home_redblack.gif": "21e69ebf6d82b532aa104749c5e10e5b",
"assets/assets/games_assets/common/game_icon/home_custom_table.gif": "a7038f150b0c5efacd8c34e10c0d51ac",
"assets/assets/games_assets/common/game_icon/home_rummy_deal.gif": "00b8af2d8fad7bbacedf72971deeb63b",
"assets/assets/games_assets/common/game_icon/home_public_img.gif": "34480fb618b4c3f0bb8e0cd65042e310",
"assets/assets/games_assets/common/game_icon/home_rummy_pool.gif": "635ed384971d7c20c02c3e2ac41c7c4b",
"assets/assets/games_assets/common/game_icon/home_headtales.gif": "e524bef6415765e98ef4f9160595ba56",
"assets/assets/games_assets/common/game_icon/home_localludo.gif": "ed7f51c4d63860e6fbc85af67e674c14",
"assets/assets/games_assets/common/game_icon/home_baccarat.gif": "3a809fe8ef395ee6719b274c107aa87f",
"assets/assets/games_assets/common/game_icon/home_jundimundi.gif": "cdcf7c3f7148c06f2a97368528e28d6b",
"assets/assets/games_assets/common/game_icon/home_teenpatti.gif": "c42c87480276ec1cd469e003163c7be9",
"assets/assets/games_assets/common/game_icon/color_prediction_00013.webp": "616e22c1d8d13356627cf6ce936a5a0d",
"assets/assets/games_assets/common/game_icon/home_jack_pot.gif": "2fdb20d2c8211344a9363f739013a9e6",
"assets/assets/games_assets/common/game_icon/home_rummydeal.gif": "21163bc147513ee2d080c69a06cf7ecf",
"assets/assets/games_assets/common/game_icon/home_animal.gif": "c75e9fa8d3bfdd963874452c7174dc75",
"assets/assets/games_assets/common/game_icon/aviator_vertical_icon.gif": "3390dc9b5868aa0082cfa4e4a06c8777",
"assets/assets/games_assets/common/game_icon/home_pointrummy.gif": "fc0cda4f0cfa6c19108f1ae397005859",
"assets/assets/games_assets/common/game_icon/home_tgdr.gif": "5d7e270c1b4a88834cbc7288091daef5",
"assets/assets/games_assets/common/game_icon/home_color.gif": "335810046f1186d0b6157da1e1ea90b7",
"assets/assets/games_assets/common/game_icon/home_rummy_point.gif": "7f13985de85cbd9981beb228ce8ee330",
"assets/assets/games_assets/common/game_icon/home_onlineludo.gif": "44b4e5f97b253834d1b044a4d66ffb1f",
"assets/assets/games_assets/common/game_icon/home_ludocomputer.gif": "64102228187f8d2bc51c3c425682560a",
"assets/assets/games_assets/common/game_icon/home_pvtrummy.gif": "9c28842d75b01e5350d82d6c6ba60fee",
"assets/assets/games_assets/common/game_icon/home_seven.gif": "026142f54d9bed86a94b4b28567646be",
"assets/assets/games_assets/common/game_icon/home_privatetable.gif": "cefd2a4016bdb77e45afcae3531afa55",
"assets/assets/games_assets/common/game_icon/home_andhar_bhar.gif": "91971306103fbd5ca2957d9f0f1f66aa",
"assets/assets/games_assets/common/img.png": "36653fea4b1f9d77f4df8b840b1d48cd",
"assets/assets/games_assets/common/ic_verse.webp": "006dcc33c0e900c0f3f068befbcfa684",
"assets/assets/games_assets/common/waiting_for_next.gif": "20f9ec5ad380dfe8ec00795a4fde45d9",
"assets/assets/games_assets/common/watch_update.webp": "ebae91e29fda48da3715416b77b6702c",
"assets/assets/games_assets/common/place_your_bet.gif": "a361e90328bbdd685d8f289ab0e5cbed",
"assets/assets/games_assets/common/ic_bottom_strip.webp": "efd8045f35812c82c9fc617dfa90ca46",
"assets/assets/games_assets/head_and_tail/ic_head_bg.png": "636d051b3513a6bbd7a9fae4fb99a987",
"assets/assets/games_assets/head_and_tail/head_last.webp": "ea03f9a760f611399661469a41e45a10",
"assets/assets/games_assets/head_and_tail/ic_tail_bg.webp": "ecb632cef6edd62788bd51f786404fab",
"assets/assets/games_assets/head_and_tail/tails.webp": "7c1735880a735c500b29265330cf01f1",
"assets/assets/games_assets/head_and_tail/heads.webp": "c7fe85f7bf8e29447e2435430d974da5",
"assets/assets/games_assets/head_and_tail/tail_last.webp": "a08999655118787fadb353b84c685eff",
"assets/assets/games_assets/point_rummy/waiting_bt.webp": "a5784d1435553fe3de129daa2765a99a",
"assets/assets/games_assets/point_rummy/button_background_finish.webp": "86402d3c6ad2c828e79894c4b23a190d",
"assets/assets/games_assets/point_rummy/update_background_profile.webp": "f1e0019fc93a126037091d33ca681d98",
"assets/assets/games_assets/point_rummy/backside_teenpatti.png": "b22c8d15347fc040222c0ca9f6c317f8",
"assets/assets/games_assets/point_rummy/ic_uncheckbox.png": "10bbf4631b5a14a0937831b29b69e281",
"assets/assets/games_assets/point_rummy/img.png": "74bbf546acc6d7594196c94bbc5986e2",
"assets/assets/games_assets/point_rummy/home_pointrummy.gif": "d89746888da2d9510b64a9f031eaecd5",
"assets/assets/games_assets/point_rummy/update_rummy_table.png": "6abfa1ba1849263f0406f7660f16a9a8",
"assets/assets/games_assets/point_rummy/home_rummy_point.gif": "7f13985de85cbd9981beb228ce8ee330",
"assets/assets/games_assets/animal_roulette/ic_animal_bear.webp": "1efaeb643493daff5d689aa5d866a4b6",
"assets/assets/games_assets/animal_roulette/ic_animal_cheetah.webp": "13e1031ed00db0a55f3d7ae307cb4bd0",
"assets/assets/games_assets/animal_roulette/ic_animal_tiger.webp": "bf34edf5e731923372c5e5b3da24912c",
"assets/assets/games_assets/animal_roulette/home_animal.gif": "d89746888da2d9510b64a9f031eaecd5",
"assets/assets/games_assets/animal_roulette/ic_animal_crocodile.webp": "75003eafe82fd398ffc88399f6024011",
"assets/assets/games_assets/animal_roulette/ic_animal_shark.webp": "03fa13c7acb0d82df2e503b66e84c674",
"assets/assets/games_assets/animal_roulette/ic_animal_snake.webp": "8c69fa40b67d763cd2f55e2a898d80ce",
"assets/assets/games_assets/animal_roulette/ic_animal_whale.webp": "116bb1ed35fbf3fc5906b405abfa84df",
"assets/assets/games_assets/animal_roulette/animal_roulette_rules.webp": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/games_assets/animal_roulette/ic_animal_fox.webp": "4eb5a028ff1b7140f9994417b894c62f",
"assets/assets/games_assets/animal_roulette/ic_animal_lion.webp": "28b09d53b2d6d68a69193eccbc1ffbd6",
"assets/assets/games_assets/animal_roulette/ic_animal_wolf.webp": "e2fd694735d9043ca8f180e95e264e86",
"assets/assets/games_assets/red_black/ic_black_spade.webp": "34c240616e114bf7f6586e602076de5e",
"assets/assets/games_assets/red_black/table.webp": "a39572414fd83fc5972cf377f391b8e9",
"assets/assets/games_assets/red_black/ic_game_over.png": "ab86fd0ed603a1b6cb4b6182c9690666",
"assets/assets/games_assets/red_black/card_bg.png": "b22c8d15347fc040222c0ca9f6c317f8",
"assets/assets/games_assets/red_black/ic_red_hearts.webp": "b69b72ddfcb4eaea762db0e7b050f69e",
"assets/assets/games_assets/jackpot_3_patti/ic_history.png": "63957d51dea57fd347afa99b52d4e624",
"assets/assets/games_assets/jackpot_3_patti/ic_game_over.png": "ab86fd0ed603a1b6cb4b6182c9690666",
"assets/assets/games_assets/jackpot_3_patti/ic_jackpot_box.webp": "3dd02887b6676cd7ab06a9fa2118f2e4",
"assets/assets/games_assets/jackpot_3_patti/ic_jackpot_cardsbg.webp": "cdb846cb5957e07809ffc172b8730bb9",
"assets/assets/games_assets/jackpot_3_patti/card_bg.png": "b22c8d15347fc040222c0ca9f6c317f8",
"assets/assets/images/README.md": "87a8164fa5de10c01cde9d0901744ae6",
"assets/assets/images/history/history_withdrawal.png": "480bbab54bd4ddd2c1c63a595772374b",
"assets/assets/images/history/history_bonus.png": "38ac378bb98c5352456f40e03fb58f3a",
"assets/assets/images/history/history_deposit.png": "f210014c95946b5c9d540412a57b92e3",
"assets/assets/images/history/history_game.png": "5d0033543b95b4973142c08bc6bac743",
"assets/assets/rewards/day4.webp": "cf27966505804ef17903203efaa0376a",
"assets/assets/rewards/day5.webp": "162b20729cb5d66e024e09e778dec738",
"assets/assets/rewards/day2.webp": "23a27cdcc4c478fd29acfdd14f9071b6",
"assets/assets/rewards/animation.json": "d1bfb4eb5a71aa7ab2fbd51e276b5959",
"assets/assets/rewards/day3.webp": "cde58b7536e2d172463dae75ae07781a",
"assets/assets/rewards/day1.webp": "2355283e58bded631cc6188cf10472af",
"assets/assets/animation.json": "d1bfb4eb5a71aa7ab2fbd51e276b5959",
"assets/assets/sounds/deal_start.wav": "117cfcae23d00ca24af17c578d6a3c66",
"assets/assets/sounds/win.wav": "895ee862f8022d123ea4919a1ec1d57f",
"assets/assets/sounds/chip.wav": "40c152cf5151f42cb97593e485547b71",
"assets/assets/sounds/timer_tick.wav": "632fd8dba99ee6588b090dada4c3e143",
"assets/assets/sounds/lose.wav": "2188c994b59d2bcee1522c5adbd305fa",
"assets/assets/sounds/card_deal.wav": "4247e4d6a6ffffb29e2ba840e1fdc52f",
"assets/assets/sounds/token_move.wav": "a5303e178e531eedb512426426dbbae2",
"assets/assets/sounds/token_home.wav": "03b02a9295a167088abbb828a1c8fc0b",
"assets/assets/sounds/dice_roll.wav": "735b23d11f06b109c352b40d52e0e349",
"assets/assets/sounds/card_discard.wav": "dc633c5d0879d020c9430966db262193",
"assets/assets/sounds/coin.wav": "f422075efb71b9f53e485d51f0082834",
"assets/assets/sounds/card_flip.wav": "9ebe4499c4334debafc60c4251687f88",
"assets/assets/sounds/button_click.wav": "866e404de64e39ccba87b9b9551793ad",
"assets/assets/sounds/token_capture.wav": "473b5a51112cd033ec7a9a6f1f9b7334",
"assets/assets/sounds/turn_alert.wav": "ecfffc2cf9c0beeda7c12efc73935334",
"assets/assets/audio/dice_roll.mp3": "f4392cb561a813fa99cf19f94c1db5ed",
"assets/assets/audio/coin.mp3": "1a9080e89b8fd6a13d002b80512179dd",
"assets/assets/audio/reward.mp3": "56bae4571a67bab94f25f34dbbc0f703",
"assets/assets/audio/loose.mp3": "3e053ae1e13a12dc6a0ccd8368523d9d",
"assets/assets/audio/lets_play.mp3": "1b7f28cb68b243a6923d6691fadf4bda",
"assets/assets/audio/card_flip.mp3": "158b391a0a704c7788a577bc8d5d0e06",
"assets/assets/audio/multi_sound.mp3": "b8fd9cea0c7c386fe66c10ab1a338232",
"assets/assets/audio/win.mp3": "72451c8d28f1d19aded588bf280d3e68",
"assets/assets/audio/game_audio.mp3": "8cf92b060538044e62ae1b8e40670283",
"assets/assets/audio/dragon.mp3": "02b42e6fb4a3e19ef9f18aa8898c98f0",
"assets/assets/audio/wheel.mp3": "b498ac09156febcd9c83fa7d2347e97e",
"assets/assets/audio/aviator.mp3": "f065e8534cefe01b30d78e9db9013b5b",
"assets/assets/coin/coin_50.webp": "1fdad8b983559b19861f85c0a8d53c35",
"assets/assets/coin/coin_1000.webp": "9934f62198137e4f5f984cfb4f3ae63d",
"assets/assets/coin/coin_100.webp": "d9c31de38bd732b45f524249a9d4aa76",
"assets/assets/coin/coin_10.webp": "136ddb9136105f1257ec9655eba0b6ab",
"assets/assets/coin/coin_5000.webp": "3092af709b151e9571c275e048781731",
"assets/assets/icon/team.png": "c6a2afd7994c016d1fedab7d8c1adac5",
"assets/assets/icon/casino.png": "be7b9013fe8905cdcb4fc9318a3d13b0",
"assets/assets/icon/day.png": "fcd54db88cc0b9e92889976560b0d379",
"assets/assets/icon/settings.png": "16df1c56ba3a1cf1d8ef545ff62c410a",
"assets/assets/icon/log-out.png": "857df1727025f20ee2c6ede423450062",
"assets/assets/icon/cricket.png": "fec93d6e7bf93233c75a97588f8018b0",
"assets/assets/icon/user.png": "eeec22e867e4bc83954d30d64e81c3f9",
"assets/assets/icon/withdraw.png": "e037fbb45c460fd40a4302a600ba0581",
"assets/assets/icon/history.png": "1f6e5eb00a62222aea9a024d085ae132",
"assets/assets/icon/mlm.png": "eab8da40436fb32355746f3dfd46338a",
"assets/assets/icon/share.png": "135734bb28ead48cc0ca1e4e51a039a5",
"assets/assets/data/data.json": "80f2ff6b3ee81ba99bf02e2cec110cb5",
"main.dart.js_75.part.js": "057e4c533f8a4a33b3df16c87d0abe55",
"main.dart.js_2.part.js": "785143103933eb230484eb50fee3843a",
"main.dart.js_65.part.js": "068ed3132f599cee160ff4108d8703c6",
"main.dart.js_150.part.js": "bd6b8cfa7a1092e52f2a63339ce70b6e",
"main.dart.js_140.part.js": "d6d452a5e0cd89400b045ad91fa86ded",
"main.dart.js_132.part.js": "844b8c2cb6d80d0091426468686a77c7",
"main.dart.js_122.part.js": "ebf869a44545f6e0f66107d856d739f8",
"main.dart.js_17.part.js": "ac64f68d27c7ad478c6450c5e17f1f13",
"main.dart.js_98.part.js": "fdb035a77087605c90c55bd28a75319b",
"main.dart.js_104.part.js": "c84cd5292cf22acad7e5cc4c25d44333",
"main.dart.js_176.part.js": "fdab960ad2411aec2a6f06a8a1e60901",
"main.dart.js_166.part.js": "18bf5d6bc9117047b429f855f83f1962",
"main.dart.js_53.part.js": "1066d1293554c7573947a267f28da1db",
"main.dart.js_43.part.js": "3fa4d764689fc54b454c51651201b93a",
"main.dart.js_182.part.js": "3bdb256abe6ce4dad0714dfe63e0aa22",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"main.dart.js_149.part.js": "2f026440a10431b369bf1870c302d26e",
"main.dart.js_159.part.js": "e7ba26d887a3cdc4eecf259be77e1b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
