if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,d,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(d.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-d236bde4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.md.e12a4119.js",revision:"cfba05642fca42bdec2a473a9d0a81f3"},{url:"assets/404.md.e12a4119.lean.js",revision:"cfba05642fca42bdec2a473a9d0a81f3"},{url:"assets/app.192af81a.js",revision:"aa4294ab5f86abe3f76ff8dc487d211c"},{url:"assets/behavior_pack_applied.f329cc9a.js",revision:"a1ba2e5fc8ce09892852e3e7151cb27d"},{url:"assets/concepts_animation-controllers.md.ae37426b.js",revision:"2dfa51ba8a72d46e1c5d7d9ab6e0e23e"},{url:"assets/concepts_animation-controllers.md.ae37426b.lean.js",revision:"2dfa51ba8a72d46e1c5d7d9ab6e0e23e"},{url:"assets/concepts_biomes.md.717a6813.js",revision:"8cf09990cfb5e241e2f05d6548b87c24"},{url:"assets/concepts_biomes.md.717a6813.lean.js",revision:"31de749523c6be3fbacdeb88f397674f"},{url:"assets/concepts_blocks.md.835d4a62.js",revision:"039661b2d6e28c8036c1edecc4999195"},{url:"assets/concepts_blocks.md.835d4a62.lean.js",revision:"76609ed820fc9010e4ef00c89501d4ef"},{url:"assets/concepts_components-events-groups.md.d373b85d.js",revision:"738a1d9d059e41e2b43a3b93493992b5"},{url:"assets/concepts_components-events-groups.md.d373b85d.lean.js",revision:"f75d1f8ea5e418274a6bc22f1ae4b0c2"},{url:"assets/concepts_format-version.md.7e417046.js",revision:"45bcde3b8e249364a11187d714cc6f16"},{url:"assets/concepts_format-version.md.7e417046.lean.js",revision:"b1440bdc11aac8fe02cc993b911922cb"},{url:"assets/concepts_index.md.257d0e05.js",revision:"48a3c5d5b1972e8f91dc72fc685c00a6"},{url:"assets/concepts_index.md.257d0e05.lean.js",revision:"48a3c5d5b1972e8f91dc72fc685c00a6"},{url:"assets/concepts_items.md.b13bd984.js",revision:"095a6ad2bec20e3bcb247cc3c08ea5f0"},{url:"assets/concepts_items.md.b13bd984.lean.js",revision:"64f8672fa2a1130bd23d641db17d55a7"},{url:"assets/concepts_json-ui.md.f0779870.js",revision:"d3e5de05e274887e227454a486f7a254"},{url:"assets/concepts_json-ui.md.f0779870.lean.js",revision:"a48051ccd0d2598e77e5b5d5269309a9"},{url:"assets/concepts_lang.md.a908ca2d.js",revision:"3b899879465f388ce8efb3deb05dcdc0"},{url:"assets/concepts_lang.md.a908ca2d.lean.js",revision:"f948a28abbf92d10ad9b3f8db143b0d9"},{url:"assets/concepts_materials.md.76b54bb3.js",revision:"44a4275079ef84fdf1e9c1356021ae61"},{url:"assets/concepts_materials.md.76b54bb3.lean.js",revision:"b46504cc89196d3bf898483c3333bc7b"},{url:"assets/concepts_math-based-animations.md.3600d806.js",revision:"97a90f6489a9f4e4154c03e1dfaa5d3b"},{url:"assets/concepts_math-based-animations.md.3600d806.lean.js",revision:"8afd48918ba55d215c3115bf00356c83"},{url:"assets/concepts_mcfunction.md.afede848.js",revision:"b10968b972138ad8aa60ca86b50b0c96"},{url:"assets/concepts_mcfunction.md.afede848.lean.js",revision:"da16c6f9b9c1eb6af3e2ef79d1f1ea17"},{url:"assets/concepts_mcstructure.md.d7712a00.js",revision:"3abfe1a090dd42bd7222712c84effbff"},{url:"assets/concepts_mcstructure.md.d7712a00.lean.js",revision:"bc37fc2b5703c987e3fe4ac56af9884b"},{url:"assets/concepts_namespaces.md.f297e69c.js",revision:"65a2dc1b67d3e2fcfc7135fbbb8e7bbb"},{url:"assets/concepts_namespaces.md.f297e69c.lean.js",revision:"f258b9e0952c0395860ced4a3c632071"},{url:"assets/concepts_render-controller.md.fc437d6e.js",revision:"37665374963df77e63a93c8a0f2ffa94"},{url:"assets/concepts_render-controller.md.fc437d6e.lean.js",revision:"8544ab30bd34ab69e6f1e77a538c70b5"},{url:"assets/concepts_shaders.md.43fbf9db.js",revision:"4bb118f3df61b3e0c95e76d53a815aba"},{url:"assets/concepts_shaders.md.43fbf9db.lean.js",revision:"4bb118f3df61b3e0c95e76d53a815aba"},{url:"assets/concepts_sounds.md.d028f69b.js",revision:"7ffc7e04270abc08288055a9fd8076ec"},{url:"assets/concepts_sounds.md.d028f69b.lean.js",revision:"1cba989fd3e2dfdaf1512bdaba4ed6c8"},{url:"assets/concepts_textures-list.md.8d4cb89e.js",revision:"cc81aba16266efef02037c19d6fec507"},{url:"assets/concepts_textures-list.md.8d4cb89e.lean.js",revision:"4acc17a440e257fcd7874f74f387304a"},{url:"assets/contribute.md.6e9a4501.js",revision:"c7644df1d450a7f073f77d67b476ccf2"},{url:"assets/contribute.md.6e9a4501.lean.js",revision:"86b0c8a8abe98f2bb42fe5bebc8b2bed"},{url:"assets/discord.md.c92c310d.js",revision:"766269cc47f79163f436dd80a9713917"},{url:"assets/discord.md.c92c310d.lean.js",revision:"766269cc47f79163f436dd80a9713917"},{url:"assets/documentation_biome-tags.md.7dadc984.js",revision:"b095a4f53574e8a0bf43916a18671e30"},{url:"assets/documentation_biome-tags.md.7dadc984.lean.js",revision:"a3c980049b59d809e95b449a83df4735"},{url:"assets/documentation_block-model-materials.md.908b3155.js",revision:"78f3df2c65ed845e2c4c3dc3c3149545"},{url:"assets/documentation_block-model-materials.md.908b3155.lean.js",revision:"292605fe7aea55cc38e487bb7343cdf0"},{url:"assets/documentation_block-shapes.md.3986a122.js",revision:"d36312f5c3f4c5d4323958c8b492c887"},{url:"assets/documentation_block-shapes.md.3986a122.lean.js",revision:"9effdff87d146be7f40f15ef43ee346c"},{url:"assets/documentation_block-tags.md.79be0521.js",revision:"e2e1c2ffab22ab4cf5c76c09bfaba26a"},{url:"assets/documentation_block-tags.md.79be0521.lean.js",revision:"789501852186ce90dd1b65f53d6a0617"},{url:"assets/documentation_color-codes.md.7f74a1db.js",revision:"5ef62650d650ebc265d742cb5f979e85"},{url:"assets/documentation_color-codes.md.7f74a1db.lean.js",revision:"4ed0b3873aa11563c4e40e898a9faff4"},{url:"assets/documentation_dummy-components.md.30f41def.js",revision:"bbbbf88b5090985004ee9bf322863cda"},{url:"assets/documentation_dummy-components.md.30f41def.lean.js",revision:"0fe66ce547f2ad90ea50274cc21f6fe6"},{url:"assets/documentation_emojis.md.2903cc96.js",revision:"04f463744079848b9e081e0024e431ee"},{url:"assets/documentation_emojis.md.2903cc96.lean.js",revision:"04f463744079848b9e081e0024e431ee"},{url:"assets/documentation_fog-ids.md.7d7bd550.js",revision:"3ece5cbd98c04d3b8b5c05a731824bf2"},{url:"assets/documentation_fog-ids.md.7d7bd550.lean.js",revision:"429fe168b34a0aab1dcdc748a36c9f5c"},{url:"assets/documentation_index.md.104ae1cd.js",revision:"19daa1a27016c9a85369bc844692f18b"},{url:"assets/documentation_index.md.104ae1cd.lean.js",revision:"19daa1a27016c9a85369bc844692f18b"},{url:"assets/documentation_item-groups.md.6e801894.js",revision:"1af0a6f7b82f1f8f82e1867b6b91226d"},{url:"assets/documentation_item-groups.md.6e801894.lean.js",revision:"58dbf3f8353d6e6569299a908cbef986"},{url:"assets/documentation_json-ui.md.9cb651bf.js",revision:"edec6dd0d241bcf643ffb8014bed3716"},{url:"assets/documentation_json-ui.md.9cb651bf.lean.js",revision:"9f6eeea100a67e92d1ec20966dc08915"},{url:"assets/documentation_materials.md.cc8e2123.js",revision:"50a349032d246350feb43d6e3aa8557b"},{url:"assets/documentation_materials.md.cc8e2123.lean.js",revision:"4687a7921368886444dbd3d687884008"},{url:"assets/documentation_particles.md.de41812b.js",revision:"88ab3d8ca7c8bf03e249eabde716246b"},{url:"assets/documentation_particles.md.de41812b.lean.js",revision:"72953ead587922b8834fa8657696880a"},{url:"assets/documentation_projectiles.md.f3986565.js",revision:"5c9dbf0315f84c71c2fe81c38a30c41a"},{url:"assets/documentation_projectiles.md.f3986565.lean.js",revision:"5f895f2a916d42a56d39f4be49c6bb9d"},{url:"assets/documentation_queries.md.a028da5b.js",revision:"fb087e2c8c377815818ac639978f94a2"},{url:"assets/documentation_queries.md.a028da5b.lean.js",revision:"144bad98f5db1647596b6f56c42a666a"},{url:"assets/documentation_runtime-identifier.md.3c3ee756.js",revision:"e79f17a8c73a998647db1fde0046cde1"},{url:"assets/documentation_runtime-identifier.md.3c3ee756.lean.js",revision:"5fc6a025e71d45cb2f33b13e90dbe069"},{url:"assets/documentation_sound-definitions.md.cfc96557.js",revision:"f59adb25ba0d2bab63f9b33f235dca2f"},{url:"assets/documentation_sound-definitions.md.cfc96557.lean.js",revision:"8aadea18c665f9a27272ffd260588f49"},{url:"assets/documentation_subpacks.md.6201fcd1.js",revision:"841d7c1dc9749f18b7076bd804762b84"},{url:"assets/documentation_subpacks.md.6201fcd1.lean.js",revision:"3f6688cf6ac2e46acfeedcf0f3ae4640"},{url:"assets/documentation_tellraw.md.3cdf71ff.js",revision:"6510906a45d2146657a8d0823520e07a"},{url:"assets/documentation_tellraw.md.3cdf71ff.lean.js",revision:"6510906a45d2146657a8d0823520e07a"},{url:"assets/guide_animation-controllers.md.27341e84.js",revision:"728995e7c6eacb9bec0198ec14d83113"},{url:"assets/guide_animation-controllers.md.27341e84.lean.js",revision:"728995e7c6eacb9bec0198ec14d83113"},{url:"assets/guide_appendix.md.9ef3200a.js",revision:"e2b663b264fe252a61816426d734951b"},{url:"assets/guide_appendix.md.9ef3200a.lean.js",revision:"2fd467667ff0f4f32b8a23723125fe5a"},{url:"assets/guide_creating-entity-visuals.md.6d424051.js",revision:"7e8386744e3698bdeaf2c8db77c31113"},{url:"assets/guide_creating-entity-visuals.md.6d424051.lean.js",revision:"7e8386744e3698bdeaf2c8db77c31113"},{url:"assets/guide_custom-blocks.md.b244021c.js",revision:"20b34cd0e8593f14077523c6665d41f3"},{url:"assets/guide_custom-blocks.md.b244021c.lean.js",revision:"20b34cd0e8593f14077523c6665d41f3"},{url:"assets/guide_custom-entity-full.md.8b64f8cc.js",revision:"917a2eeb0476a5b59812ddffcd28738f"},{url:"assets/guide_custom-entity-full.md.8b64f8cc.lean.js",revision:"917a2eeb0476a5b59812ddffcd28738f"},{url:"assets/guide_custom-generation.md.ca4ed6ec.js",revision:"50e472a2ef3c98b0e0deeab2e09f08b7"},{url:"assets/guide_custom-generation.md.ca4ed6ec.lean.js",revision:"50e472a2ef3c98b0e0deeab2e09f08b7"},{url:"assets/guide_custom-items.md.f07e5ec0.js",revision:"7fd9b9c58739b2f3735561463bc5facc"},{url:"assets/guide_custom-items.md.f07e5ec0.lean.js",revision:"2b043654790014e517a1c52a9f32abbf"},{url:"assets/guide_custom-particles.md.65ad4356.js",revision:"5462f05ef0ef6d1851fb94fa25fe9b41"},{url:"assets/guide_custom-particles.md.65ad4356.lean.js",revision:"5462f05ef0ef6d1851fb94fa25fe9b41"},{url:"assets/guide_custom-skin-packs.md.bbc7c314.js",revision:"b1dc7ee5f84fb3c5e7ffb5525ff53893"},{url:"assets/guide_custom-skin-packs.md.bbc7c314.lean.js",revision:"c6bb55a0590f2349fea73395ebcc4cc3"},{url:"assets/guide_custom-trades.md.bbcf5e78.js",revision:"12cda875485d6349b86823277972c38b"},{url:"assets/guide_custom-trades.md.bbcf5e78.lean.js",revision:"12cda875485d6349b86823277972c38b"},{url:"assets/guide_download-packs.md.ae76e9d5.js",revision:"beed2820c8aabcce888b77835e7be226"},{url:"assets/guide_download-packs.md.ae76e9d5.lean.js",revision:"a65bc1006f7139fbeed3bff2f39a36a3"},{url:"assets/guide_index.md.5b897e4e.js",revision:"23a0de1b286c7abb131234e37150d4de"},{url:"assets/guide_index.md.5b897e4e.lean.js",revision:"d6c7cbe01da32798e787421b56ee5cf5"},{url:"assets/guide_loot_tables-recipes-spawn_rules.md.d728c9dd.js",revision:"9de48c210ffc05dd236a159a690e00b4"},{url:"assets/guide_loot_tables-recipes-spawn_rules.md.d728c9dd.lean.js",revision:"82eaf7c686694f0d7f302bacd5626221"},{url:"assets/guide_project-setup.md.aa62bdce.js",revision:"d281efac5388f374f42e04e755bfc668"},{url:"assets/guide_project-setup.md.aa62bdce.lean.js",revision:"d281efac5388f374f42e04e755bfc668"},{url:"assets/guide_render-controllers.md.f8b458ae.js",revision:"38c838053b1438e138d452ec0f43cac7"},{url:"assets/guide_render-controllers.md.f8b458ae.lean.js",revision:"38c838053b1438e138d452ec0f43cac7"},{url:"assets/guide_software-preparation.md.65872881.js",revision:"faadd077d035275913d1653efbd7a2fe"},{url:"assets/guide_software-preparation.md.65872881.lean.js",revision:"faadd077d035275913d1653efbd7a2fe"},{url:"assets/guide_understanding-json.md.82f3f9c9.js",revision:"d53a8dad90cb23e1791443a483456bdb"},{url:"assets/guide_understanding-json.md.82f3f9c9.lean.js",revision:"05a2c5a11e90a8bc97620a89498a3000"},{url:"assets/index.md.ca103470.js",revision:"4e92e3831991fb4c310aedab2ced9264"},{url:"assets/index.md.ca103470.lean.js",revision:"45fe1639897427d9e1adf52fe3b140ef"},{url:"assets/knowledge_addon-performance.md.e45686b5.js",revision:"676246c3b2c8b2b9a9e0b95f909fc5a7"},{url:"assets/knowledge_addon-performance.md.e45686b5.lean.js",revision:"882b95bb932ec887375125eed267a77c"},{url:"assets/knowledge_addon-programming.md.701cf8c7.js",revision:"fe4124db5745dde54e94a9c7aec26d2d"},{url:"assets/knowledge_addon-programming.md.701cf8c7.lean.js",revision:"ca87c07779c380762e0f1490a7466385"},{url:"assets/knowledge_bedrock-modeling.md.ea99b8cf.js",revision:"2b437e507389b1fea82e1ab56d374e34"},{url:"assets/knowledge_bedrock-modeling.md.ea99b8cf.lean.js",revision:"93ba8bf635887807509ea3ab9885c3b8"},{url:"assets/knowledge_entity-movement.md.11997402.js",revision:"dfbf191f5d613d643c146f76ff66eb52"},{url:"assets/knowledge_entity-movement.md.11997402.lean.js",revision:"dad91b1255d853d04ff50fa2ca8002a3"},{url:"assets/knowledge_faq.md.e0ec1890.js",revision:"25b4995dc7f07b9f79f6ad8838ec1208"},{url:"assets/knowledge_faq.md.e0ec1890.lean.js",revision:"a85517e213d8f7b5c8a33dd18abc5bf5"},{url:"assets/knowledge_index.md.5c1054a7.js",revision:"61b523c90ca6154b2d76ec515f4d80d8"},{url:"assets/knowledge_index.md.5c1054a7.lean.js",revision:"61b523c90ca6154b2d76ec515f4d80d8"},{url:"assets/knowledge_jq.md.5f1410bf.js",revision:"224fdbeac47bfbee2e130beb3ad37fde"},{url:"assets/knowledge_jq.md.5f1410bf.lean.js",revision:"a0725c681184dd7656ce2ad1d806a98c"},{url:"assets/knowledge_nbt_commands.md.1aeeeafe.js",revision:"e566f07fe6768b340093cea261faf4da"},{url:"assets/knowledge_nbt_commands.md.1aeeeafe.lean.js",revision:"921c490c0109d4e99fb5bbad6be7228a"},{url:"assets/knowledge_style-guide.md.6d108f00.js",revision:"d74a57a9e943dee12f2cb03f416883a6"},{url:"assets/knowledge_style-guide.md.6d108f00.lean.js",revision:"efb166a23746ac6e6054cfefe7142ac5"},{url:"assets/knowledge_useful-links.md.7ee1e1e9.js",revision:"29432fb85a403bc6bd2b57585a214138"},{url:"assets/knowledge_useful-links.md.7ee1e1e9.lean.js",revision:"66697118b80032527643187efe9085bd"},{url:"assets/knowledge_using-schemas.md.70eb8a21.js",revision:"b4c47c6e05e38bad4ed6064012ee1f4b"},{url:"assets/knowledge_using-schemas.md.70eb8a21.lean.js",revision:"c7e6e91087c19eb8caf1b5a68044330e"},{url:"assets/knowledge_version-control.md.f9d183eb.js",revision:"e3a60f81389c93618cbc9e9d49b43d68"},{url:"assets/knowledge_version-control.md.f9d183eb.lean.js",revision:"54397362ab71128160fc1cc34caeaa35"},{url:"assets/new-guide_project-setup.md.9e8bb623.js",revision:"a7fa11069b7d2740559b1cfa09bcb6cf"},{url:"assets/new-guide_project-setup.md.9e8bb623.lean.js",revision:"a7fa11069b7d2740559b1cfa09bcb6cf"},{url:"assets/scripting_game-tests.md.9b5cbcdc.js",revision:"a7cda9a5bc8da7b9c0f5f086d1b5321a"},{url:"assets/scripting_game-tests.md.9b5cbcdc.lean.js",revision:"dea898d9e9f0f494395d974962b49793"},{url:"assets/scripting_hello-world-tutorial.md.cf038543.js",revision:"9ad706e5824fea373475932084af0167"},{url:"assets/scripting_hello-world-tutorial.md.cf038543.lean.js",revision:"eedfc52c93eb4716dacc9d7555fb45b3"},{url:"assets/scripting_index.md.662ef47e.js",revision:"52da6ad647006b982edf5d5d1cb26f67"},{url:"assets/scripting_index.md.662ef47e.lean.js",revision:"52da6ad647006b982edf5d5d1cb26f67"},{url:"assets/scripting_saving_loading.md.85e29c20.js",revision:"5d8ed8e6af92bb6cbe1538bb4963f307"},{url:"assets/scripting_saving_loading.md.85e29c20.lean.js",revision:"8cb2cceb200d80f5e15b193c43f9684c"},{url:"assets/style.e5403c0c.css",revision:"d8f9ec52163eeb0fdf79fb73601249c5"},{url:"assets/troubleshooting_entities.md.dcc60807.js",revision:"283f3c6c90ded504349e7e2681523f56"},{url:"assets/troubleshooting_entities.md.dcc60807.lean.js",revision:"d1c4198fbd1b731ee66e825fae071e64"},{url:"assets/troubleshooting_index.md.5c66e209.js",revision:"3406f467ab8c9eb08a588f89675727ac"},{url:"assets/troubleshooting_index.md.5c66e209.lean.js",revision:"1c7608ccb6b32e773a55a55b47cbd588"},{url:"assets/tutorials_beginner-commands.md.c4960286.js",revision:"8c7581d504352e478eadf349fa3b209a"},{url:"assets/tutorials_beginner-commands.md.c4960286.lean.js",revision:"045e857a81743fa65a945a53a4a9f70b"},{url:"assets/tutorials_block-texture-variation.md.a554de30.js",revision:"2201a0182097763889a55d92cd124ec9"},{url:"assets/tutorials_block-texture-variation.md.a554de30.lean.js",revision:"068225b3692e78a38dbe933e378d9aac"},{url:"assets/tutorials_boat-entities.md.a92e80a6.js",revision:"426160c4ed4bf929ccb4fcbe3a022732"},{url:"assets/tutorials_boat-entities.md.a92e80a6.lean.js",revision:"deb6b81e84d3c65d13a7e29651bcac0e"},{url:"assets/tutorials_cancelling-death-animations.md.66aee5a9.js",revision:"c53de316a2b3f96c71065de76437bf5a"},{url:"assets/tutorials_cancelling-death-animations.md.66aee5a9.lean.js",revision:"c7e32211dfb44fc84c1282925f3a3004"},{url:"assets/tutorials_controlling-flying-entities.md.28948add.js",revision:"c980264a62072346c8499284697dd279"},{url:"assets/tutorials_controlling-flying-entities.md.28948add.lean.js",revision:"f0ad84cddc6776507a709b537a572817"},{url:"assets/tutorials_craftable-spawneggs.md.67732faa.js",revision:"4c23b9586f15a351a976fcc02be21f4e"},{url:"assets/tutorials_craftable-spawneggs.md.67732faa.lean.js",revision:"f818bd2f9b3647325466ead5afe2080a"},{url:"assets/tutorials_custom-item-models.md.971ee320.js",revision:"6974d7f5bb53a9f3000457786ff4b356"},{url:"assets/tutorials_custom-item-models.md.971ee320.lean.js",revision:"968240620bfd7ee1326cbad60695cee9"},{url:"assets/tutorials_death-effects.md.7838ad1f.js",revision:"2f9839b8577d840bcaf7246b77a0c5c9"},{url:"assets/tutorials_death-effects.md.7838ad1f.lean.js",revision:"04adb0ac7c8fff47904c3e189917930a"},{url:"assets/tutorials_disabling-particles.md.3868df42.js",revision:"11b739f767fac8921a07dda82dbd6871"},{url:"assets/tutorials_disabling-particles.md.3868df42.lean.js",revision:"6a95308fbc71eb070fe6c55074472431"},{url:"assets/tutorials_disabling-team-damage.md.6e5ed498.js",revision:"524bfb03f83384808d8e02cc26950b5a"},{url:"assets/tutorials_disabling-team-damage.md.6e5ed498.lean.js",revision:"cea442af0a2c863bd8c373f3c4b392fb"},{url:"assets/tutorials_dummy-entities.md.3a577b86.js",revision:"8231b4ddaf5b1f1d8a71ec8177c9cd6d"},{url:"assets/tutorials_dummy-entities.md.3a577b86.lean.js",revision:"5a03ea170bfe6f43ea470015f85d1847"},{url:"assets/tutorials_egg-drops.md.f90e664d.js",revision:"00d0d4969ee116dadad03e2f7bf2da87"},{url:"assets/tutorials_egg-drops.md.f90e664d.lean.js",revision:"daae601a2bfdfa9edd98768213936a71"},{url:"assets/tutorials_entity-commands.md.abf4f678.js",revision:"4aa6192476d6429dab12869b872c603c"},{url:"assets/tutorials_entity-commands.md.abf4f678.lean.js",revision:"326c918da66e6022510de9925c92ed7a"},{url:"assets/tutorials_entity-events.md.e18b4af5.js",revision:"d0ac3bd59ed8961cfa92d4ff4a75790f"},{url:"assets/tutorials_entity-events.md.e18b4af5.lean.js",revision:"64618f1b0b61e6603a9132f1885d7d90"},{url:"assets/tutorials_entity-holds-item.md.2f83fe5b.js",revision:"ee88aa21543bde9ead4ad2c3dd01c86a"},{url:"assets/tutorials_entity-holds-item.md.2f83fe5b.lean.js",revision:"ee88aa21543bde9ead4ad2c3dd01c86a"},{url:"assets/tutorials_fake_blocks.md.5a18fd05.js",revision:"304f5586fcec7f075de960bac64b8f5c"},{url:"assets/tutorials_fake_blocks.md.5a18fd05.lean.js",revision:"f36247e69b9eb81104fe2a43b10efe40"},{url:"assets/tutorials_index.md.647c828d.js",revision:"f85fbb6cd547ae29b474f3af0c2798fc"},{url:"assets/tutorials_index.md.647c828d.lean.js",revision:"f85fbb6cd547ae29b474f3af0c2798fc"},{url:"assets/tutorials_invulnerable-entities.md.c0c8bf4a.js",revision:"4096dc3e711e9f67df1096521c77ff65"},{url:"assets/tutorials_invulnerable-entities.md.c0c8bf4a.lean.js",revision:"00b3f7b383c21a8e0f2b1d41c05529ca"},{url:"assets/tutorials_pathfinding-entities.md.d5773673.js",revision:"c6eeeb4ad3c539ef6077f70eccfb5658"},{url:"assets/tutorials_pathfinding-entities.md.d5773673.lean.js",revision:"cb79fda9eacaf58305acf8e1eaa05248"},{url:"assets/tutorials_player-geometry.md.8957bd79.js",revision:"62f90b6a0a6565aee57f6a5ccd83c547"},{url:"assets/tutorials_player-geometry.md.8957bd79.lean.js",revision:"768a216cdf22e6e24cea05bb501e3cbd"},{url:"assets/tutorials_remove-shadows.md.99023263.js",revision:"02b7a96e7261d0f4a6c5b4c6821a8162"},{url:"assets/tutorials_remove-shadows.md.99023263.lean.js",revision:"0d6d134f40f3aa58a6a4a5a61a02852e"},{url:"assets/tutorials_respawn-commands.md.a9eda45d.js",revision:"d910a3bd7e782ac1e60705f3d9ea406c"},{url:"assets/tutorials_respawn-commands.md.a9eda45d.lean.js",revision:"63272a372d7e11833f1229b61cd4002f"},{url:"assets/tutorials_retexturing-spawn-eggs.md.ee17d4d2.js",revision:"a72b38da3054f5755ee853b29247144f"},{url:"assets/tutorials_retexturing-spawn-eggs.md.ee17d4d2.lean.js",revision:"233736fa07c6443251a9716f38a8c842"},{url:"assets/tutorials_solid-entities.md.13505455.js",revision:"03e7c0fc77a02af2a6689c03021e64ac"},{url:"assets/tutorials_solid-entities.md.13505455.lean.js",revision:"9b6bb299d916189b0462e1e909d4ef68"},{url:"assets/tutorials_spawning-items.md.07700a03.js",revision:"d33011374c0b3589ad5e07fab8c61945"},{url:"assets/tutorials_spawning-items.md.07700a03.lean.js",revision:"c5556c051234b525896b574ef2fffb31"},{url:"assets/tutorials_text-localization.md.87da3539.js",revision:"613abd4f265c4ba12333278119339c82"},{url:"assets/tutorials_text-localization.md.87da3539.lean.js",revision:"ba83e10c3b3eb9a764f520f68aeebc75"},{url:"assets/tutorials_timers.md.f1c3fd4b.js",revision:"218b1578c53b81fab96871738f388cf5"},{url:"assets/tutorials_timers.md.f1c3fd4b.lean.js",revision:"71e80a84cbb452e2b2541bc5edafd3d9"},{url:"assets/vanilla-usage_biomes.md.f90531fe.js",revision:"c746b72997f84a369807aabf905644e3"},{url:"assets/vanilla-usage_biomes.md.f90531fe.lean.js",revision:"457c5aca40f508bec714ca4260ca7348"},{url:"assets/vanilla-usage_components.md.0ed2a5b0.lean.js",revision:"85b182badf51fc84dbde139715a41287"},{url:"assets/vanilla-usage_feature-rules.md.4e3a1286.js",revision:"c38362dc4fa6dedb29d6588438889b48"},{url:"assets/vanilla-usage_feature-rules.md.4e3a1286.lean.js",revision:"0021b15a80daaacb4d6368dcdc8e9439"},{url:"assets/vanilla-usage_index.md.625faaaa.js",revision:"2a5b08a4a40d54b661056ce2e49e6bbc"},{url:"assets/vanilla-usage_index.md.625faaaa.lean.js",revision:"2a5b08a4a40d54b661056ce2e49e6bbc"},{url:"assets/vanilla-usage_items-beta.md.4eb3704b.js",revision:"33ff02cb1eca295da23ae71e0c2f2c4d"},{url:"assets/vanilla-usage_items-beta.md.4eb3704b.lean.js",revision:"c7815b12d7b21b77490f4df40b8548f6"},{url:"assets/vanilla-usage_items.md.b92cb0ec.js",revision:"5f8610b7e3c3cb8ba3c2d5d9d38467fe"},{url:"assets/vanilla-usage_items.md.b92cb0ec.lean.js",revision:"49f1f889a9b15e8c9c59a48f541ef452"},{url:"assets/vanilla-usage_spawn-rules.md.813fe2c9.js",revision:"b5b63b170f34b865b6ecde90566e5b1a"},{url:"assets/vanilla-usage_spawn-rules.md.813fe2c9.lean.js",revision:"0e11628d91c9f8bfd52f0956bf8ff38e"},{url:"registerSW.js",revision:"3be22912fd14291c200edaae7ff5f610"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map