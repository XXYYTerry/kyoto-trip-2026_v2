const qs=(s,p=document)=>p.querySelector(s), qsa=(s,p=document)=>[...p.querySelectorAll(s)];
const store={get:(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}},set:(k,v)=>localStorage.setItem(k,JSON.stringify(v))};
const toast=(msg)=>{const t=qs('#toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1600)};
const mapUrl=q=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

const img={
 kyoto:'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
 market:'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=900&q=80',
 temple:'https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=900&q=80',
 uji:'https://images.unsplash.com/photo-1545048702-79362596cdc9?auto=format&fit=crop&w=900&q=80',
 deer:'https://images.unsplash.com/photo-1553521306-938e58a4c042?auto=format&fit=crop&w=900&q=80',
 ramen:'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80',
 sushi:'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80',
 yakiniku:'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
 cafe:'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80',
 curry:'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80',
 usj:'https://images.unsplash.com/photo-1597466599360-3b9775841aec?auto=format&fit=crop&w=900&q=80',
 airport:'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80'
};


const commons=name=>`https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(name)}?width=1200`;
const fixedPhotos={
  daiwa:[
    'https://www.daiwaroynet.jp/datas/cache/images/2026/05/01/1760x790_ea1e9d427fb5664c32c517a73e421e58_9677b500b2731ace7593fc96f9a0fb41735dc466.jpg',
    'https://www.daiwaroynet.jp/datas/cache/images/2026/03/29/1000x720_ea1e9d427fb5664c32c517a73e421e58_4a29c6153d2e78c7776c00097497ad80018fc973.jpg',
    'https://www.daiwaroynet.jp/datas/cache/images/2026/03/29/1000x720_ea1e9d427fb5664c32c517a73e421e58_175ea2b0b6d8db8e02731a83871cc1be9dbd1f3e.jpg',
    'https://www.daiwaroynet.jp/datas/cache/images/2026/04/18/1000x720_ea1e9d427fb5664c32c517a73e421e58_48b551550f687b245998f552498a9ace768c43ee.jpg'
  ],
  odysis:[
    'https://www.odysissuitesosaka.com/odysiscms/wp-content/themes/odysis/img/top/visual01.jpg',
    'https://www.odysissuitesosaka.com/odysiscms/wp-content/themes/odysis/img/top/space-bg.jpg',
    'https://www.odysissuitesosaka.com/odysiscms/wp-content/themes/odysis/img/top/visual02.jpg'
  ],
  kix:[
    commons('Kansai International Airport Terminal 1.jpg'),
    commons('Kansai International Airport Terminal.jpg'),
    commons('Kansai International Airport 01.jpg')
  ],
  kyotoStation:[
    commons('Kyoto Station November 2016.jpg'),
    commons('Kyoto Station Building 2018.jpg'),
    commons('Kyoto Station interior.jpg')
  ],
  nishiki:[
    commons('Nishiki Market, Kyoto - Flickr - Sergiy Galyonkin.jpg'),
    commons('Nishiki market - Kyoto - 2022 Dec 30 various 11 30 08 508000.jpeg'),
    commons('Nishiki Ichiba by jason.kaechler in Kyoto.jpg'),
    commons('Fish shop by ellievanhoutte in Nishiki-ichiba, Kyoto.jpg')
  ],
  byodoin:[
    commons('Byodo-in in Uji.jpg'),
    commons('Byodo-in Uji03bs2640.jpg'),
    commons('Byodo-in Uji01pbs2640.jpg'),
    commons('Byodoin Phoenix Hall Uji 2009.jpg')
  ],
  nara:[
    commons('Deer in Nara Park, Nara, Japan.jpg'),
    commons('Nara Park deer.jpg'),
    commons('Sika deer in Nara Park.jpg'),
    commons('Nara Park, Nara, Japan.jpg')
  ],
  todaiji:[
    commons('Tōdai-ji Kon-dō.jpg'),
    commons('Todaiji Temple Nara Japan.jpg'),
    commons('Great Buddha Hall, Todai-ji, Nara.jpg'),
    commons('Nandaimon of Todaiji.jpg')
  ],
  kiyomizu:[
    commons('Kiyomizu-dera, Kyoto, Japan (48923900762).jpg'),
    commons('Japan Kyoto KiyoMizuDera temple from afar DSC00653.jpg'),
    commons('20131014 70 Kyoto - Higashiyama - Kiyomizudera Temple (10512818343).jpg'),
    commons('View of Kyoto skyline from Kiyomizu-dera.jpg')
  ],
  higashiyama:[
    commons('Sannenzaka Kyoto.jpg'),
    commons('Ninenzaka, Kyoto.jpg'),
    commons('Yasaka Pagoda and Sannen Zaka Street.jpg'),
    commons('Hokanji Temple Kyoto.jpg')
  ],
  aquarium:[
    commons('Kyoto Aquarium.jpg'),
    commons('Kyoto Aquarium penguins.jpg'),
    commons('Kyoto Railway Museum 2016.jpg'),
    commons('Kyoto Railway Museum main hall.jpg')
  ],
  usj:[
    commons('Universal Studios Japan 2015.jpg'),
    commons('Universal Studios Japan globe.jpg'),
    commons('Universal Studios Japan entrance.jpg')
  ],
  jaws:[
    'https://www.usj.co.jp/contentdata/usj/en/us/files/images/gds-images/usj-gds-jaws-b.jpg',
    'https://www.usj.co.jp/contentdata/usj/en/us/files/images/gds-images/usj-gds-jaws-photo-cf1-b.jpg',
    'https://www.usj.co.jp/contentdata/usj/en/us/files/images/gds-images/usj-gds-jaws-lifted-jaws-gallery-b.jpg',
    'https://www.usj.co.jp/contentdata/usj/en/us/files/images/gds-images/usj-gds-jaws-swim-jaws-cf1-b.jpg'
  ],
  nintendo:[
    commons('Super Nintendo World Universal Studios Japan.jpg'),
    commons('Super Nintendo World at Universal Studios Japan.jpg'),
    commons('Mario Kart Koopa’s Challenge.jpg'),
    'https://www.usj.co.jp/contentdata/usj/en/us/files/images/usj-super-nintendo-world-5th-hero-m.jpg?imwidth=1200'
  ],
  harry:[
    commons('The Wizarding World of Harry Potter Universal Studios Japan.jpg'),
    commons('Hogwarts Castle Universal Studios Japan.jpg'),
    commons('Hogsmeade Universal Studios Japan.jpg')
  ],
  donkey:[
    commons('Donkey Kong Country Universal Studios Japan.jpg'),
    commons('Mine Cart Madness Universal Studios Japan.jpg'),
    commons('Golden Temple Donkey Kong Country USJ.jpg'),
    'https://www.usj.co.jp/contentdata/usj/en/us/files/images/usj-super-nintendo-world-5th-hero-m.jpg?imwidth=1200'
  ]
};
const photoSets={
  '抵達關西機場':fixedPhotos.kix,
  'HARUKA 前往京都':fixedPhotos.kyotoStation,
  '飯店寄放行李':fixedPhotos.daiwa,
  '錦市場':fixedPhotos.nishiki,
  '寺町・新京極':fixedPhotos.higashiyama,
  '3COINS +plus 河原町 OPA 店':fixedPhotos.kyotoStation,
  '京都高島屋 S.C.／Nintendo KYOTO':fixedPhotos.kyotoStation,
  '河原町晚餐':fixedPhotos.nishiki,
  '京都 → 宇治':fixedPhotos.byodoin,
  '宇治表參道':fixedPhotos.byodoin,
  '平等院・宇治川':fixedPhotos.byodoin,
  '宇治午餐':fixedPhotos.byodoin,
  '宇治 → 奈良':fixedPhotos.nara,
  '奈良公園':fixedPhotos.nara,
  '東大寺':fixedPhotos.todaiji,
  '返回京都':fixedPhotos.kyotoStation,
  '前往清水寺':fixedPhotos.higashiyama,
  '清水寺':fixedPhotos.kiyomizu,
  '三年坂・二年坂・八坂塔':fixedPhotos.higashiyama,
  '祇園／東山午餐':fixedPhotos.higashiyama,
  '午後二選一':fixedPhotos.aquarium,
  'JR 京都伊勢丹':fixedPhotos.kyotoStation,
  '京都 Porta 地下街':fixedPhotos.kyotoStation,
  '京都飯店退房':fixedPhotos.daiwa,
  'USJ 入園':fixedPhotos.usj,
  '上午自由玩':fixedPhotos.usj,
  '提早午餐':fixedPhotos.usj,
  '哈利波特／親子園區':fixedPhotos.harry,
  'JAWS 快速通關':fixedPhotos.jaws,
  '前往任天堂世界入口':fixedPhotos.nintendo,
  '瑪利歐賽車 Express':fixedPhotos.nintendo,
  '咚奇剛瘋狂礦車 Express':fixedPhotos.donkey,
  '任天堂世界夜景':fixedPhotos.nintendo,
  '前往機場飯店':fixedPhotos.odysis,
  '早餐與最後整理':fixedPhotos.odysis,
  '退房前往 KIX':fixedPhotos.kix,
  '報到・托運・安檢':fixedPhotos.kix,
  'BR177 返回台灣':fixedPhotos.kix
};
function stopPhotos(title){return (photoSets[title]||fixedPhotos.kyotoStation).slice(0,5)}
function galleryHtml(title){
  const photos=stopPhotos(title);
  return `<div class="place-gallery" data-gallery-title="${title}"><button type="button" class="gallery-main" data-gallery-open="0" aria-label="放大查看 ${title} 照片"><img src="${photos[0]}" alt="${title} 實景照片 1" loading="lazy"><span>1 / ${photos.length}</span></button><div class="gallery-thumbs">${photos.map((p,i)=>`<button type="button" data-gallery-thumb="${i}" class="${i===0?'active':''}" aria-label="查看第 ${i+1} 張照片"><img src="${p}" alt="${title} 實景照片 ${i+1}" loading="lazy"></button>`).join('')}</div><script type="application/json" class="gallery-data">${JSON.stringify(photos)}</script></div>`;
}

const hotels={
 kyoto:{name:'Daiwa Roynet Hotel Kyoto Shijo Karasuma',map:'Daiwa Roynet Hotel Kyoto Shijo Karasuma'},
 airport:{name:'Odysis Suites Osaka Airport Hotel',map:'Odysis Suites Osaka Airport Hotel'}
};

const days=[
{date:'7/25',day:'D1',title:'抵達京都・河原町購物',sub:'輕鬆開場，先逛錦市場與本次必去 3COINS。',mood:'舒適度 ★★★★☆',metrics:['約 8,000 步','購物主日','晚餐彈性'],hotel:hotels.kyoto,transport:'HARUKA＋地下鐵／步行',focus:'錦市場｜3COINS｜Nintendo KYOTO',reminders:[['💡','旅行提醒','抵達後先到飯店寄放行李，再開始河原町行程。'],['👨‍👩‍👧','親子提醒','第一天不排太滿，孩子累了可直接縮短祇園散步。']],stops:[
['10:10','✈️','抵達關西機場','入境、領行李，預留 60–90 分鐘。','Kansai International Airport',img.airport],
['11:40','🚆','HARUKA 前往京都','搭指定席較適合親子，約 80 分鐘。','Kyoto Station',img.kyoto],
['13:30','🏨','飯店寄放行李','稍作休息，再前往河原町。',hotels.kyoto.map,img.kyoto],
['15:00','🍢','錦市場','邊走邊吃，先逛會較早收店的市場。','Nishiki Market Kyoto',img.market],
['16:20','🛍️','寺町・新京極','依孩子體力縮短。','Shinkyogoku Shopping Street',img.kyoto],
['17:10','⭐','3COINS +plus 河原町 OPA 店','本次唯一排入正式行程的 3COINS。','3COINS +plus 河原町OPA店',img.market],
['18:10','🏬','京都高島屋 S.C.／Nintendo KYOTO','百貨、伴手禮與角色周邊一次完成。','Kyoto Takashimaya S.C.',img.kyoto],
['19:30','🍽️','河原町晚餐','打開「美食」頁，依排隊與孩子狀況決定。','Kyoto Kawaramachi Station',img.ramen]
],foodArea:'河原町'},
{date:'7/26',day:'D2',title:'宇治抹茶 × 奈良小鹿',sub:'上午宇治、下午奈良；戶外較多，記得補水。',mood:'舒適度 ★★★☆☆',metrics:['約 13,000 步','JR 移動','戶外日'],hotel:hotels.kyoto,transport:'JR 奈良線',focus:'平等院｜宇治抹茶｜奈良公園｜東大寺',reminders:[['👨‍👩‍👧','親子提醒','奈良鹿靠近時先讓孩子站在大人身旁，鹿仙貝分次拿。'],['💰','省錢提醒','宇治與奈良移動多，餐廳排隊太久就選車站周邊，不必硬等名店。']],stops:[
['08:00','🚆','京都 → 宇治','搭 JR 奈良線。','Uji Station Kyoto',img.uji],['09:00','🍵','宇治表參道','抹茶甜點與伴手禮。','Byodoin Omotesando Uji',img.uji],['10:30','🏯','平等院・宇治川','停留約 60–90 分鐘。','Byodoin Temple',img.temple],['12:15','🍜','宇治午餐','熱門店可提早排。','Uji Station Kyoto',img.ramen],['13:30','🚆','宇治 → 奈良','搭 JR 前往奈良。','Nara Station',img.deer],['14:30','🦌','奈良公園','分次拿鹿仙貝。','Nara Park',img.deer],['16:00','🙏','東大寺','視天氣縮短戶外時間。','Todai-ji',img.temple],['18:30','🌙','返回京都','可在京都站或飯店附近簡單用餐。','Kyoto Station',img.kyoto]],foodArea:'宇治奈良'},
{date:'7/27',day:'D3',title:'清水寺 × 京都車站購物',sub:'早上經典京都，午後改為有冷氣的親子與百貨行程。',mood:'舒適度 ★★★★☆',metrics:['早起避暑','室內午後','伊勢丹'],hotel:hotels.kyoto,transport:'計程車＋市區交通',focus:'清水寺｜二年坂｜水族館／鐵道館｜伊勢丹',reminders:[['👨‍👩‍👧','親子提醒','清水寺坡道多，穿好走的鞋並預備水與小風扇。'],['💰','省錢提醒','京都站購物與晚餐可一次完成，避免晚上再特地折返。']],stops:[
['07:30','🚕','前往清水寺','建議搭計程車節省上坡體力。','Kiyomizu-dera',img.temple],['08:00','🏯','清水寺','清晨人潮較少。','Kiyomizu-dera',img.temple],['09:30','📷','三年坂・二年坂・八坂塔','一路慢走拍照。','Sannenzaka Kyoto',img.kyoto],['11:30','🍽️','祇園／東山午餐','湯豆腐、蕎麥麵或親子餐廳。','Gion Kyoto',img.sushi],['14:00','🐧','午後二選一','京都水族館或鐵道博物館。','Kyoto Aquarium',img.kyoto],['16:30','🏬','JR 京都伊勢丹','B1 伴手禮、熟食與甜點。','JR Kyoto Isetan',img.market],['18:00','🛍️','京都 Porta 地下街','順路逛街與用餐。','Kyoto Porta',img.market]],foodArea:'京都車站'},
{date:'7/28',day:'D4',title:'USJ 親子任務日',sub:'預設 09:00 入園，以 17:10 任天堂世界時段為核心。',mood:'舒適度 ★★★☆☆',metrics:['09:00 入園','快通 2 項','晚宿機場'],hotel:hotels.airport,transport:'京都→USJ→臨空城',focus:'USJ｜任天堂世界｜換飯店',reminders:[['💡','旅行提醒','今天換飯店，離開京都前確認行李、充電器與護照。'],['👨‍👩‍👧','親子提醒','中午安排一次完整坐下休息，下午保留體力給任天堂世界。']],usj:true,stops:[
['07:15','🧳','京都飯店退房','確認大行李與交通方式。',hotels.kyoto.map,img.kyoto],['09:00','🌍','USJ 入園','先看等候時間再選設施。','Universal Studios Japan',img.usj],['09:20','🎢','上午自由玩','優先沒有快速通關的設施。','Universal Studios Japan',img.usj],['11:30','🍔','提早午餐','避開尖峰。','Universal Studios Japan',img.usj],['13:00','🪄','哈利波特／親子園區','依體力選擇。','The Wizarding World of Harry Potter Japan',img.usj],['15:30','🦈','JAWS 快速通關','無指定時間，可彈性使用。','JAWS Universal Studios Japan',img.usj],['16:35','🍄','前往任天堂世界入口','不要壓線。','Super Nintendo World Japan',img.usj],['17:10','🏎️','瑪利歐賽車 Express','指定時段 17:10–17:40。','Mario Kart Koopa Challenge',img.usj],['17:40','🛤️','咚奇剛瘋狂礦車 Express','指定時段 17:40–18:10。','Donkey Kong Country USJ',img.usj],['18:10','🌙','任天堂世界夜景','拍照、購物。','Super Nintendo World Japan',img.usj],['19:30','🚆','前往機場飯店','入住 Odysis Suites。',hotels.airport.map,img.airport]],foodArea:'USJ'},
{date:'7/29',day:'D5',title:'關西機場・平安回台',sub:'早上不排景點，保留充足報到與移動時間。',mood:'舒適度 ★★★★★',metrics:['BR177','11:10 起飛','輕鬆收尾'],hotel:null,flight:'BR177｜11:10 KIX → TPE',transport:'飯店接駁／電車至 KIX',focus:'退房｜機場報到｜返台',reminders:[['✈️','返台提醒','再次確認護照、手機、錢包與退稅商品，建議提早抵達機場。']],stops:[
['07:00','☀️','早餐與最後整理','確認護照、退稅品與充電器。',hotels.airport.map,img.airport],['08:15','🏨','退房前往 KIX','預留接駁與航廈移動時間。','Kansai International Airport',img.airport],['09:00','🛫','報到・托運・安檢','完成後再買最後伴手禮。','Kansai International Airport',img.airport],['11:10','🇹🇼','BR177 返回台灣','旅程完成，平安回家。','Kansai International Airport',img.airport]],foodArea:'關西機場'}];

const defaultPrep=[
['證件與票券',['護照與護照影本','電子機票截圖','飯店訂房憑證','旅遊保險資料','USJ 入園門票 QR Code','Express Pass QR Code']],
['手機與交通',['安裝並登入 USJ App','下載 Google Maps 離線地圖','完成 eSIM 設定','確認 ICOCA／交通卡','行動電源充滿電']],
['親子與行李',['兒童常備藥','體溫計','防曬用品','小風扇與冰毛巾','雨具','水壺與簡單零食']],
['最後確認',['設定起床鬧鐘','確認前往機場交通','確認行李重量','護照放入隨身包','手機／相機／行動電源充電']]
];

const baseRestaurants=[
{area:'河原町',name:'麵匠 Takamatsu 四條店',type:'拉麵／沾麵',rating:'4.3',reviews:'1,000+',budget:'¥1,000–2,000',kid:'可',desc:'四條烏丸附近的人氣沾麵，適合第一天或回飯店前用餐。',map:'麺匠 たか松 四条店',photos:[img.ramen,img.kyoto]},
{area:'河原町',name:'京極かねよ',type:'鰻魚／京都料理',rating:'4.1',reviews:'1,500+',budget:'¥2,500–4,000',kid:'可',desc:'京都老字號鰻魚飯，想吃特色正餐時可選。',map:'Kyogoku Kane-yo Kyoto',photos:[img.sushi,img.kyoto]},
{area:'河原町',name:'京都高島屋餐廳樓層',type:'多國料理',rating:'4.0+',reviews:'百貨內多店',budget:'¥1,500–3,000',kid:'親子友善',desc:'有冷氣、洗手間與多種選擇，孩子累時最穩。',map:'Kyoto Takashimaya Restaurant',photos:[img.market,img.cafe]},
{area:'宇治奈良',name:'中村藤吉 宇治本店',type:'抹茶／甜點',rating:'4.4',reviews:'4,000+',budget:'¥1,500–2,500',kid:'可',desc:'宇治代表性抹茶餐點，熱門時先取號再去附近散步。',map:'Nakamura Tokichi Honten Uji',photos:[img.uji,img.cafe]},
{area:'宇治奈良',name:'伊藤久右衛門 JR宇治站前店',type:'抹茶／蕎麥麵',rating:'4.2',reviews:'2,000+',budget:'¥1,200–2,500',kid:'親子友善',desc:'離 JR 宇治站近，行程彈性高。',map:'Itoh Kyuemon JR Uji Station',photos:[img.uji,img.cafe]},
{area:'宇治奈良',name:'志津香 公園店',type:'釜飯',rating:'4.1',reviews:'2,000+',budget:'¥1,500–2,500',kid:'可',desc:'奈良經典釜飯，排隊過長時不必勉強。',map:'Kamameshi Shizuka Nara Park',photos:[img.curry,img.deer]},
{area:'京都車站',name:'京都拉麵小路',type:'拉麵',rating:'4.2',reviews:'5,000+',budget:'¥1,000–1,800',kid:'可',desc:'伊勢丹樓上多家拉麵店，可依現場隊伍決定。',map:'Kyoto Ramen Koji',photos:[img.ramen,img.kyoto]},
{area:'京都車站',name:'JR 京都伊勢丹餐廳街',type:'多國料理',rating:'4.0+',reviews:'百貨內多店',budget:'¥1,500–3,500',kid:'親子友善',desc:'購物後直接用餐最省力。',map:'JR Kyoto Isetan Restaurant',photos:[img.market,img.sushi]},
{area:'京都車站',name:'奥丹清水',type:'湯豆腐／京都料理',rating:'4.1',reviews:'1,000+',budget:'¥3,000–5,000',kid:'可',desc:'想安排一餐傳統京都風味時可選。',map:'Okutan Kiyomizu Kyoto',photos:[img.temple,img.sushi]},
{area:'USJ',name:'Studio Stars Restaurant',type:'西式／親子',rating:'4.0',reviews:'1,000+',budget:'¥1,500–2,500',kid:'親子友善',desc:'座位與餐點選擇相對穩定，適合提早午餐。',map:'Studio Stars Restaurant USJ',photos:[img.usj,img.cafe]},
{area:'USJ',name:'Snoopy Backlot Cafe',type:'速食／親子',rating:'4.1',reviews:'500+',budget:'¥1,200–2,000',kid:'很適合',desc:'小朋友接受度高，搭配親子園區動線。',map:'Snoopy Backlot Cafe USJ',photos:[img.usj,img.cafe]},
{area:'關西機場',name:'關西機場餐廳區',type:'多國料理',rating:'4.0+',reviews:'依店家',budget:'¥1,000–2,500',kid:'親子友善',desc:'完成報到與安檢後再依時間決定。',map:'Kansai Airport restaurants',photos:[img.airport,img.sushi]}
];

const mainShopping=[
{name:'3COINS +plus 河原町 OPA 店',day:'Day 1｜必逛',desc:'本次唯一排入正式行程的 3COINS。',map:'3COINS +plus 河原町OPA店'},
{name:'京都高島屋 S.C.／T8',day:'Day 1｜正式行程',desc:'Nintendo KYOTO、角色周邊、百貨與美食集中。',map:'Kyoto Takashimaya S.C.'},
{name:'JR 京都伊勢丹',day:'Day 3｜正式行程',desc:'B1 甜點、熟食與伴手禮。',map:'JR Kyoto Isetan'},
{name:'京都 Porta 地下街',day:'Day 3｜正式行程',desc:'有冷氣、交通方便。',map:'Kyoto Porta'}];
const optionalShopping=[['3COINS 京都 Porta 店','Day 3 已在附近，但不必特地去'],['Loft 京都','喜歡文具再加'],['Hands 京都','河原町周邊補充選項'],['Pokémon Center KYOTO','對角色有興趣再安排'],['Universal CityWalk 商店','離園後還有體力才逛']];
const phrases=[['我要內用','店内で食べます。'],['請給我兒童餐具','子供用の食器をお願いします。'],['不需要袋子','袋はいりません。'],['洗手間在哪裡？','トイレはどこですか？'],['小孩不能吃辣','子供は辛いものが食べられません。'],['請問還要等多久？','あとどれくらい待ちますか？'],['可以刷卡嗎？','クレジットカードは使えますか？']];

function renderOverview(){qs('#overviewCards').innerHTML=days.map(d=>`<button class="overview-card" data-go="itinerary" data-dayjump="${d.day}"><span class="date-pill">${d.date} ${d.day}</span><h3>${d.title}</h3><p>${d.sub}</p></button>`).join('')}

function prepData(){return store.get('prepCustom',defaultPrep.map(([title,items])=>({title,items:items.map(text=>({id:crypto.randomUUID?.()||Math.random().toString(36),text,done:false}))})))}
function savePrep(x){store.set('prepCustom',x)}
function renderPrep(){const groups=prepData();qs('#prepGroups').innerHTML=`<form id="prepAddForm" class="inline-add"><input id="prepNewItem" placeholder="新增準備事項" required><select id="prepNewGroup">${groups.map((g,i)=>`<option value="${i}">${g.title}</option>`).join('')}</select><button class="primary-btn">新增</button></form>`+groups.map((g,gi)=>`<div class="task-group"><h3>${g.title}</h3>${g.items.map((x,i)=>`<div class="check-row editable"><label><input type="checkbox" data-prep-check="${gi}-${i}" ${x.done?'checked':''}><span>${x.text}</span></label><button class="delete-mini" data-prep-del="${gi}-${i}" aria-label="刪除">×</button></div>`).join('')}</div>`).join('');
 qsa('[data-prep-check]').forEach(c=>c.onchange=()=>{const [gi,i]=c.dataset.prepCheck.split('-').map(Number);groups[gi].items[i].done=c.checked;savePrep(groups);updatePrep(groups)});
 qsa('[data-prep-del]').forEach(b=>b.onclick=()=>{const [gi,i]=b.dataset.prepDel.split('-').map(Number);groups[gi].items.splice(i,1);savePrep(groups);renderPrep();toast('已刪除')});
 qs('#prepAddForm').onsubmit=e=>{e.preventDefault();const text=qs('#prepNewItem').value.trim(),gi=+qs('#prepNewGroup').value;if(!text)return;groups[gi].items.push({id:Date.now().toString(),text,done:false});savePrep(groups);renderPrep();toast('已新增準備事項')};updatePrep(groups)}
function updatePrep(groups=prepData()){const all=groups.flatMap(g=>g.items),done=all.filter(x=>x.done).length,p=Math.round(done/all.length*100)||0;qs('#prepPercent').textContent=p+'%';qs('#prepBar').style.width=p+'%';qs('#prepRemain').textContent=p===100?'全部完成，可以安心出發！':`還有 ${all.length-done} 項任務未完成`}

let currentDay=0;
function renderDays(){qs('#dayTabs').innerHTML=days.map((d,i)=>`<button class="day-tab ${i===currentDay?'active':''}" data-day="${i}"><small>${d.date}</small><b>${d.day}</b></button>`).join('');qsa('.day-tab').forEach(b=>b.onclick=()=>{currentDay=+b.dataset.day;renderDays();renderDay()});renderDay()}
function renderDay(){const d=days[currentDay];let mission='';if(d.usj){const saved=store.get('missions',{});const items=[['mario','瑪利歐賽車 17:10'],['dk','咚奇剛礦車 17:40'],['jaws','JAWS（彈性）'],['hp','哈利波特園區'],['night','任天堂世界夜景']];mission=`<div class="mission-card"><div class="mission-head"><div><span class="mini-label">USJ QUEST</span><h3>今日任務</h3></div><b id="missionPct">0%</b></div><div class="progress"><span id="missionBar"></span></div><div class="mission-list">${items.map(([k,n])=>`<label><input type="checkbox" class="mission-check" data-key="${k}" ${saved[k]?'checked':''}>${n}</label>`).join('')}</div></div>`}
 const stay=d.hotel?`<div class="stay-card"><div><small>🏨 今晚住宿</small><h3>${d.hotel.name}</h3></div><a class="map-btn" target="_blank" href="${mapUrl(d.hotel.map)}">回飯店導航</a></div>`:`<div class="stay-card flight"><div><small>✈️ 今日航班</small><h3>${d.flight}</h3></div><a class="map-btn" target="_blank" href="${mapUrl('Kansai International Airport')}">機場導航</a></div>`;
 const reminders=`<div class="reminder-stack">${d.reminders.map(r=>`<article class="reminder-card"><span>${r[0]}</span><div><b>${r[1]}</b><p>${r[2]}</p></div></article>`).join('')}</div>`;
 qs('#dayContent').innerHTML=`<div class="day-header"><span class="kicker">${d.date} · ${d.day}</span><h2>${d.title}</h2><p>${d.sub}</p>${stay}<div class="daily-summary"><div><small>🚆 今日交通</small><b>${d.transport}</b></div><div><small>🎯 今日重點</small><b>${d.focus}</b></div></div><div class="day-metrics">${d.metrics.map(x=>`<div class="metric"><small>TRIP NOTE</small><b>${x}</b></div>`).join('')}</div><div class="comfort">🌿 ${d.mood}</div></div>${reminders}${mission}<div class="timeline">${d.stops.map(s=>`<div class="stop"><time>${s[0]}</time><div class="dot">${s[1]}</div><div class="stop-card">${galleryHtml(s[2])}<h3>${s[2]}</h3><p>${s[3]}</p><a class="map-btn" target="_blank" href="${mapUrl(s[4])}">Google Maps</a></div></div>`).join('')}</div><div class="food-inline"><div class="food-inline-head"><div><span class="kicker">MEAL OPTIONS</span><h3>${d.foodArea}餐廳候選</h3></div><button class="text-btn" data-go="food" data-filter="${d.foodArea}">查看清單 →</button></div></div>`;
 bindGalleries(qs('#dayContent'));
 qsa('[data-go]',qs('#dayContent')).forEach(bindGo);qsa('.mission-check').forEach(c=>c.onchange=()=>{const m=store.get('missions',{});m[c.dataset.key]=c.checked;store.set('missions',m);updateMissions()});updateMissions()}
function bindGalleries(root=document){
 qsa('.place-gallery',root).forEach(g=>{
  const photos=JSON.parse(qs('.gallery-data',g).textContent),main=qs('.gallery-main img',g),counter=qs('.gallery-main span',g),thumbs=qsa('[data-gallery-thumb]',g);
  const select=i=>{main.src=photos[i];main.alt=`${g.dataset.galleryTitle} 實景照片 ${i+1}`;counter.textContent=`${i+1} / ${photos.length}`;thumbs.forEach((b,n)=>b.classList.toggle('active',n===i));qs('.gallery-main',g).dataset.galleryOpen=i};
  thumbs.forEach(b=>b.onclick=()=>select(+b.dataset.galleryThumb));
  qs('.gallery-main',g).onclick=()=>openLightbox(g.dataset.galleryTitle,photos,+qs('.gallery-main',g).dataset.galleryOpen);
 });
}
function openLightbox(title,photos,start=0){
 const modal=qs('#photoModal'),image=qs('#photoModalImage'),count=qs('#photoModalCount'),caption=qs('#photoModalTitle');let index=start;
 const show=()=>{image.src=photos[index];image.alt=`${title} 實景照片 ${index+1}`;count.textContent=`${index+1} / ${photos.length}`;caption.textContent=title};
 modal.classList.add('open');modal.setAttribute('aria-hidden','false');show();
 qs('#photoPrev').onclick=()=>{index=(index-1+photos.length)%photos.length;show()};
 qs('#photoNext').onclick=()=>{index=(index+1)%photos.length;show()};
}
function closeLightbox(){const m=qs('#photoModal');m.classList.remove('open');m.setAttribute('aria-hidden','true')}

function updateMissions(){const all=qsa('.mission-check');if(!all.length)return;const done=all.filter(x=>x.checked).length,p=Math.round(done/all.length*100);qs('#missionPct').textContent=p+'%';qs('#missionBar').style.width=p+'%'}

let foodFilter='全部';
function customRestaurants(){return store.get('customRestaurants',[])}
function renderFood(){const areas=['全部','河原町','宇治奈良','京都車站','USJ','關西機場'];qs('#foodFilters').innerHTML=areas.map(a=>`<button class="filter-chip ${a===foodFilter?'active':''}" data-area="${a}">${a}</button>`).join('');qsa('.filter-chip').forEach(b=>b.onclick=()=>{foodFilter=b.dataset.area;renderFood()});
 const custom=customRestaurants();const list=[...baseRestaurants,...custom.map(x=>({...x,custom:true,photos:x.photos?.length?x.photos:[img.cafe,img.ramen]}))].filter(r=>foodFilter==='全部'||r.area===foodFilter);
 qs('#foodList').innerHTML=`<details class="restaurant-add" ${custom.length===0?'open':''}><summary>＋ 自訂新增餐廳</summary><form id="restaurantForm" class="restaurant-form"><input id="rName" placeholder="餐廳名稱" required><select id="rArea">${areas.slice(1).map(a=>`<option>${a}</option>`).join('')}</select><input id="rType" placeholder="料理分類，例如燒肉"><input id="rMap" placeholder="Google Maps 連結或店名"><input id="rNote" placeholder="備註"><div class="form-row"><input id="rRating" placeholder="評分（選填）"><input id="rReviews" placeholder="評論數（選填）"></div><button class="primary-btn">加入我的餐廳</button></form></details><p class="rating-note">Google 評分與評論數會變動，出發前請點開地圖確認最新資訊。</p>`+list.map((r,i)=>`<article class="restaurant-card ${r.custom?'custom-card':''}"><div class="photo-strip">${r.photos.map(p=>`<img src="${p}" alt="${r.name}" loading="lazy">`).join('')}</div><div class="restaurant-top"><div><span class="badge">${r.custom?'我的新增':'推薦'} · ${r.area} · ${r.type||'未分類'}</span><h3>${r.name}</h3></div>${r.custom?`<button class="delete-mini" data-rdel="${r.id}" aria-label="刪除">×</button>`:''}</div><p>${r.desc||r.note||'自訂餐廳'}</p><div class="rating-line"><b>⭐ ${r.rating||'—'}</b><span>${r.reviews?`Google 評論 ${r.reviews}`:'尚未填寫評論數'}</span></div><div class="restaurant-meta"><span>💴 ${r.budget||'未填'}</span><span>👧 ${r.kid||'未填'}</span></div><a class="map-btn" target="_blank" href="${r.map?.startsWith('http')?r.map:mapUrl(r.map||r.name)}">查看地圖</a></article>`).join('');
 qs('#restaurantForm').onsubmit=e=>{e.preventDefault();const arr=customRestaurants();arr.push({id:Date.now().toString(),name:qs('#rName').value.trim(),area:qs('#rArea').value,type:qs('#rType').value.trim(),map:qs('#rMap').value.trim(),desc:qs('#rNote').value.trim(),rating:qs('#rRating').value.trim(),reviews:qs('#rReviews').value.trim(),budget:'自訂',kid:'自訂',photos:[img.cafe,img.ramen]});store.set('customRestaurants',arr);renderFood();toast('已新增餐廳')};
 qsa('[data-rdel]').forEach(b=>b.onclick=()=>{const arr=customRestaurants().filter(x=>x.id!==b.dataset.rdel);store.set('customRestaurants',arr);renderFood();toast('已刪除餐廳')})}

function renderShopping(){qs('#mainShopping').innerHTML=mainShopping.map(s=>`<article class="shop-card"><div class="shop-top"><div><span class="badge">${s.day}</span><h3>${s.name}</h3></div></div><p>${s.desc}</p><a class="map-btn" target="_blank" href="${mapUrl(s.map)}">導航</a></article>`).join('');qs('#optionalShopping').innerHTML=optionalShopping.map(x=>`<div class="mini-item"><b>${x[0]}</b><small>${x[1]}</small></div>`).join('')}
function renderPhrases(){qs('#phraseList').innerHTML=phrases.map(x=>`<button class="phrase" data-copy="${x[1]}">${x[0]}<small>${x[1]}</small></button>`).join('')}
function renderBudget(){const arr=store.get('budget',[]);qs('#budgetTotal').textContent=arr.reduce((s,x)=>s+x.amount,0).toLocaleString();qs('#budgetList').innerHTML=arr.map((x,i)=>`<div class="budget-row"><div><b>${x.item}</b><small>${x.cat}</small></div><div><b>¥${x.amount.toLocaleString()}</b><button data-del="${i}">刪除</button></div></div>`).join('');qsa('[data-del]').forEach(b=>b.onclick=()=>{arr.splice(+b.dataset.del,1);store.set('budget',arr);renderBudget()})}
function bindGo(el){el.onclick=()=>{const target=el.dataset.go;if(el.dataset.filter)foodFilter=el.dataset.filter;if(el.dataset.dayjump){currentDay=days.findIndex(d=>d.day===el.dataset.dayjump);renderDays()}showView(target)}}
function showView(name){qsa('.view').forEach(v=>v.classList.toggle('active',v.id===`view-${name}`));qsa('.nav-item').forEach(n=>n.classList.toggle('active',n.dataset.go===name||(name==='prepare'&&n.dataset.go==='more')||(['emergency','info','budget','phrases'].includes(name)&&n.dataset.go==='more')));if(name==='food')renderFood();if(name==='budget')renderBudget();window.scrollTo({top:name==='home'?0:430,behavior:'smooth'})}
function initCountdown(){const now=new Date(),trip=new Date('2026-07-25T06:30:00+08:00'),diff=Math.ceil((trip-now)/86400000);qs('#countdown').textContent=diff>0?`${diff} 天`:diff===0?'今天出發':'旅程中／已完成'}

renderOverview();renderPrep();renderDays();renderFood();renderShopping();renderPhrases();renderBudget();initCountdown();
qsa('[data-go]').forEach(bindGo);qsa('[data-copy]').forEach(b=>b.onclick=async()=>{await navigator.clipboard?.writeText(b.dataset.copy);toast('已複製日文')});
qs('#budgetForm').onsubmit=e=>{e.preventDefault();const arr=store.get('budget',[]);arr.push({item:qs('#budgetItem').value.trim(),amount:+qs('#budgetAmount').value,cat:qs('#budgetCategory').value});store.set('budget',arr);e.target.reset();renderBudget();toast('已加入記帳')};
const dark=store.get('dark',false);document.body.classList.toggle('dark',dark);qs('#themeBtn').textContent=dark?'☀':'☾';qs('#themeBtn').onclick=()=>{document.body.classList.toggle('dark');const d=document.body.classList.contains('dark');store.set('dark',d);qs('#themeBtn').textContent=d?'☀':'☾'};
qs('#photoModalClose').onclick=closeLightbox;qs('#photoModal').onclick=e=>{if(e.target.id==='photoModal')closeLightbox()};document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox()});
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'));
