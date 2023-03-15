'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0beb0911c49063c70710c3c1363ccf48",
".git/config": "7a0b1dca02b3bfff4d53474ca8282cce",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "24ee5659987bab5f06e5eb2d490138e0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "93171c7b24e361cf2438e0a3ab2cc259",
".git/logs/refs/heads/main": "6511b79f33ad57f61956ae0a5f88c668",
".git/logs/refs/remotes/origin/main": "2be5a5c3128c8608574534ffc19fbcce",
".git/objects/01/05d9b707b29d6f2ab596fbe7f886239249fd50": "2214d5481490a577734cbc91634503a3",
".git/objects/01/fd9d0adc783a686307acb646114e047459021e": "f3e8a3e5a72b13918ecb9d5c0c41ff22",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/03/1e90489dfadc4cf5b425c60ec1eac544bc720b": "747a74daaad6ea04372cc44fad4546a9",
".git/objects/0c/f1bb7ae1ea810bb10e988862baceef3c705e52": "018ad2d3af054531f5b17756813104c6",
".git/objects/0d/9944907d7b7088f0bf3871f19135f47ca4e501": "8286572672359208b0f1699bd89e4850",
".git/objects/10/d41e9ac2b6321ed80d4ed465c65bfdd3ad942b": "11984ec05ffe080dae313ff3eb24e093",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/17/a4de0aa37da6ae5ee7d0d9c14d2f59bf44dc72": "9ea3daed8e42ae1e70aef767c8fa1119",
".git/objects/1a/866958ef2fa034508f8a709a5efb78c928293d": "3da77ba5743118b919a783eabe63b35d",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/1d/7dc079b3bf5aa9285e67722cb6bff6f050af06": "c47fe340fc72be693a7fe1cc2a2d5a61",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/20/8180a10143a4c069cafa131ad60b89df7bcddd": "2b9f3f4ffba79325ebaa796d932bf12b",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/26/2c42b4cdfb00a0c85bbbf244717763c409daad": "b4b225855f438403617e026a5d822b0f",
".git/objects/26/a8f797bedc233b87a95c27637d1e0a6f32a70f": "e24baa954e22a188b63a634588e67d5a",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/2a/f1b3e8456d107127c8b89d31a50371e80e9c16": "1466bdc2d74c16c43798a0a01d36f802",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/32/b25e471044f8400a6edf26eea0203692d9cfc7": "f5988cee33c8fcdfa90ebbee99dee029",
".git/objects/33/2edaaefd13f9ac1a024d20e880d564ccb6e419": "7a5a89145eb90a6eb31abc7488ebb7ea",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/34/a65164338c9e9039e6b001bd8076a986368cb8": "5599480a522f05e5ab98bbaa0bce4e6a",
".git/objects/35/120896257aab9361df9247429bc439d5ede379": "9e97ccfa0cdf67f07a7e76b27a0fd163",
".git/objects/36/3425ca86e53a6bced022bb815d3f512414866c": "8538381205a933a0982d0128dd435395",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3a/28a41daf1122e7c81cade63225932543e13b88": "e937eba66f25c1b50820d383d1112c3f",
".git/objects/3b/f8f030603153ae565eaeecea8bf76cf78c2d44": "6ebf6493d539ef268a6ca5fe32b6f019",
".git/objects/3c/4a7fc65c11f07ea70acef60cadd75f24cc3b93": "c035afefbb140b8850e107d4e04eb9f6",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/43/fa1d86bbeae1bdc1f25cae8e917e225380cebf": "3aa3aa11510fca1d2ffcf4439f44c60c",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/45/237a22a8169e36c8a218b6ecd5a4e99ea644ec": "a69018bb006fabb9a0db2f53d3861287",
".git/objects/46/203996d3943540d81e516dc03e54ed112aec36": "92f0c5d2d370b0d8748fc85b4c9fb64c",
".git/objects/47/5d44cedb3383c64f7fed21dcc1d21fe71aab46": "04796161b2637d19d4a2a40e91f7319b",
".git/objects/49/f7fbf534608f38d42a844180850ba102801f69": "dff2804fc000aeaba231e560f26ffcf8",
".git/objects/4a/34dd2c41ea96afbc64f08b6c385d4f455721bc": "887feeab4e6c2346dc2a4b3991db6c85",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4c/8a3110a5ea142d358d83aaa900c13c882003f6": "cee3ac8a950a734cd65f9967aa73aa3c",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/50/d0c570aa8ebbaf4852fc4f19d78bb758a0a76c": "f20180cd13a5af5109b79dc81f9fc627",
".git/objects/53/dabaef15467168489c2b66c496b0b034682945": "f36de7a42521e89e69d2b2b9b719a8cf",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/56/8985d3aa6b471fcf427786b8d00166477bb8cd": "dbdc559f0528fb4447acef48a670dca8",
".git/objects/57/151381a28acc01aa1e10ab5db05feee264ff82": "b8fb4d10297cd7289e5e9d757b6898a2",
".git/objects/5f/dc637875ee91576899cdd845ba26fee2896662": "1fdead60e35cc682351812046d6a4d1d",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/63/b3fa17c5b4388fdc633b9ed3fbf1e0108b5427": "2b183dcb8e9c33c90f2e21b0e53ffeaa",
".git/objects/67/2b5136a4181c2d6867861ca43eb57aa42e5cf4": "2699fcebd1e883411c1b8f9b1ae59466",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6b/938b22455da565e07a0c89ff9843836e436501": "9d3e700565c79243200e8492fc156d76",
".git/objects/6e/3c0e76b4004e0768709169ea116fd0419634a6": "a45db0ccefd12e70d290b400374e3727",
".git/objects/73/2078bd9e88ce30ebd5b17f774dcbf3590f6ee8": "79f0018bb52fcc371850c2afcea0464a",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/7e/b2af74f020076445fec8a54a5b0fcd2ca8c0f6": "e2672ff36c110aca250a9a2fc643f84d",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/84/d5b8aa9ffebfdc3bd0d240f435cf5aced4e97c": "e52266d270abfd208db72954320125f4",
".git/objects/87/dc5d8ceabbd3227eab5f24ac01975dd2ed174d": "86deb45fd2f6d6375c93ed5a4ba4a43a",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/89/3ff4019d7e2c4971d72f0a76aa2af3b495ffc3": "477bc7207d22ee43fe66afe608c7754e",
".git/objects/89/fb32564aa083c722ee06f04713cc309af32203": "c5d3baa1d81ada723fb5730623b910a8",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8b/b7f9c88bed3010bc19e8afd3007402fd0e1ee2": "c2d5b7acc87fe834f69c0e1080132d15",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/8f/5d68795d85185415b18d33e5032b52976fc991": "24457fc38cd13bbd15755c7174171fb0",
".git/objects/8f/e1536bdf5add3e1de7c703c97fbae8507fa88d": "2ddd4d8d4b98848749165eab0c4fc06e",
".git/objects/98/96fbb18cd29b20cc88f54971aa30b01aaa4bb0": "7a098474eaa5f282ab051c016b898b72",
".git/objects/98/d72758a818a3e9b7ab2a975257c9e50527d453": "1e61799a02754fcece7484f1ef5cff09",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/9c/72f0967221c414af9a5610dfbbe766c8004e59": "83c07b28f8addcd82a9a5b109ff7c4cc",
".git/objects/9d/a33e42d7e364ad1fb3412280e39faa13a3092f": "f8de0cfd0126a3c6ed00f30f99c88382",
".git/objects/9f/6bd056d5c3c2355b9bd9391eaf8c5829ede380": "4cbe27bf43202a2182734ff549ec7cb1",
".git/objects/a1/0724cc610c2312eb3adbf776ecebcf5200bc82": "7ce243f3b69cf1eb6aa6d7d339b3264e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/d163fe31376be7f1feb202cbd1c1973d23df7e": "a6752aa3adf6f870861edd7d6be74b71",
".git/objects/a6/b54e79d226f71c25d56c85fe52ae9ce680ffc8": "21a046edd27aa0ccecdd34250e5abcfd",
".git/objects/a7/b3f9434086fb7131fc7bc2b2d0073403fd4580": "b9eba189c751e95f581a158d2c92d73a",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/9ffa784a7af2b60c509ce3b28b624a815dcbbd": "5d419bb74e9203dc415d92913ea9df04",
".git/objects/ab/b191cf3c30fddf0077897c636b2f2adbf190d5": "563cfb19dd4e3e898c6cd0f5e29c33b0",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ae/804f398922d352a693685eb3bd4125a98e7e21": "c77d82033cca261a42d9f494c7f6723f",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/ba/50c828254e73c225377b30de8f6be700a35916": "87328c8715b1cdbdf29836385def957b",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/ba/919bcc9443fa0463ad933c4640e9e057c6e573": "7b624167f2015cafe98e14e106d1e2ab",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c3/7766bb8ff62d11240ccba2dfc0678dd59151d7": "b406d8dfeb464114556c08d631dc62b2",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/c6/85cc701f99d7f66f6fd53c81fe198228490367": "77860517c108ab5304ab9e470fd00f90",
".git/objects/c9/a48f4104fdcb2d19d20bd7cf7bbcfaaa33e0fc": "786b3d15959cd71a8163e75f60b79775",
".git/objects/c9/fffc92840206ff157a9a1211497dbbe0df1920": "7b49077d4e23bea6fb5bfc1f53783162",
".git/objects/cb/70d64dd06455df7f70e9b25599ab6e2807a358": "28b56461b879dd46d40020687fca7957",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/d2/40f7cb451c30dedd1578068ca3aa601a81c551": "9d193be6455a93cf5c56aa50312188a0",
".git/objects/d5/121336c81e490346482cc26fa5b45506d526c4": "f9b71605bc69bac94d0688eb95fe7f2a",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/d7/8171a8bf1fb2cec8fe7f650ab2c88d3b100a53": "c700b6d21bcfd5f856504fd4e351fc9f",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/da/1f36232d1c813753d60141014cfe45349c8f35": "95355f1b2887e6baeea76e9378c7c20f",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/db/d23409d3b0df0ef50c2cccbb32dadcc8a9304d": "7bba7f28c9134f225d3d1672d42863d1",
".git/objects/df/1274769f29f918e434cedaa8172604fe9f7734": "c2f0fa3f37c5ad956113998c130308f6",
".git/objects/e0/4de294698c835e97e1bed23d5ed0b7510e947d": "efd84b15f9b8346c1768010a879bb3f6",
".git/objects/e4/330ae5e7752b5b5560ad2181e7dbb34bf3d3dc": "8286a0482c779ec83be4ea971453c60b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/e8/a59023ee0c985a2671a3d600933f009a1edcc7": "a3a7a8db3dbdfdfc74de3cab1165d2a0",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/f0/7d6c465883050641a07be93a31ba31c2624ad2": "a54f5fc77d6a90363fff73ffe1120070",
".git/objects/f0/8cea7cbdc6f4698556b9413604207b511d36e7": "2303462d3711fa59c387ec38bea00504",
".git/objects/f5/2adce872c6d64f8a68b4508129090f29d76aa9": "eceba43307a8d269b20cdbbd3eb88ee9",
".git/objects/fa/64d9ec4bf228abe5d8f204032e85dd8e0c01a1": "494e021c160b41e003f6554e800bd6a3",
".git/refs/heads/main": "b474c859fa81074923a69fc0a6683eb1",
".git/refs/remotes/origin/main": "b474c859fa81074923a69fc0a6683eb1",
"assets/AssetManifest.json": "010e5a745599dfb068d62b1a463ddeec",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/photos/black-white.png": "852703416bbaa1b60c50fff40165a9d5",
"assets/assets/photos/colored.gif": "74592861147bd0e77048b4561a23fab3",
"assets/assets/photos/mobile.png": "5b555a00a2992116986394d34e772513",
"assets/assets/projects/android.png": "765adf924dae4d5e67bfb640bcd05c48",
"assets/assets/projects/covid.png": "ce5867e02a313ba47ee5bd652ef84554",
"assets/assets/projects/covidB.png": "02d9b38e28f2bcbfa9a6c140e0afbd93",
"assets/assets/projects/earbender.png": "64099d76f6c7df0fac39c222293fd473",
"assets/assets/projects/flutter.png": "bea3de1dadd40059deda49472fee1b53",
"assets/assets/projects/hereiam.png": "7fbf5a6e75025709e1e549c31705afbe",
"assets/assets/projects/hereiamB.png": "0e340e03f8d0bca4e70618f16bf9c667",
"assets/assets/projects/java.png": "62be9fb6e1d7166e9cbeeed913096752",
"assets/assets/projects/medkit.png": "32abf50bcacc96b29806d5bcb201d43a",
"assets/assets/projects/medkitB.png": "54fa2df3847e183fd7d724e736b678cc",
"assets/assets/projects/messenger.png": "f28ead750653b586737ed63db6f2d53a",
"assets/assets/projects/newsap.png": "76f409c262e997d92818f9be00f137df",
"assets/assets/projects/newsapp.png": "e90bc575ffa4e193fa17b949ee772f6c",
"assets/assets/projects/quran.png": "df38aca2227046c5728fbc4a6bd63797",
"assets/assets/projects/quranB.png": "bec6edcb37bc0ac48922c64b2716878d",
"assets/assets/projects/snackbar.png": "7db64a9394e111dacff8d03d2fc422af",
"assets/assets/services/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/services/blog.png": "5e1cbb2c67e2b8ea9ae4bcce0705d2a4",
"assets/assets/services/fiverr.png": "9d4018924e1f0e983a86e7eaf8a0958b",
"assets/assets/services/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/services/open_b.png": "b65517dd1a07922b014409bb8dcb1e81",
"assets/assets/services/rapid.png": "8d3ff9fbdddae77403af46662f011ee8",
"assets/assets/services/ui.png": "3cf727247752b730a05f51fe0177036f",
"assets/assets/work/cui.png": "01cc764fc11beece302d0ad15682b80b",
"assets/assets/work/dsc.png": "864dbd2c5dda86d817819127d2ae92f2",
"assets/assets/work/flutterIsl.png": "c3840237696ab7cf184180cd00541f4a",
"assets/assets/work/st.png": "3d408ddaf0192e1c39efe07c51ec1156",
"assets/data.json": "f756576b39cc9f4da228178547e5c487",
"assets/FontManifest.json": "eb13a0d169d41e78994c5d6eb9075409",
"assets/fonts/agustina/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/NOTICES": "b105b105b4e004d5a84d43afc5114452",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "99260aa5142dc36036f9f63503601d5a",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "bd1f475e0383aa717c97226d5f2bbe35",
"icons/Icon-512.png": "bd1f475e0383aa717c97226d5f2bbe35",
"index.html": "d5042b1c7c9dda642426432687b8de9f",
"/": "d5042b1c7c9dda642426432687b8de9f",
"main.dart.js": "76b91ac50c4dc6de870a58ef61e3d065",
"manifest.json": "57f83595cacec7f30e4b86137298d0bd",
"version.json": "a29e8b22a08aa0274b027931eec216c4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
