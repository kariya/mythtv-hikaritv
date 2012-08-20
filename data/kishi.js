importPackage(java.util.regex);
var re_kishi = java.util.regex.Pattern.compile("(?:中(?:村(?:勇太郎|真梨花|亮介|太地|桃子|道碩)|川(?:亀三郎|大輔|順節)|田(?:宏樹|章道|功)|(?:島美絵|澤彩)子|(?:尾敏|山典)之|井(?:広恵|捨吉)|倉(?:宏美|彰子)|野(?:寛也|泰宏)|根鳳次郎|原誠|座真)|小(?:林(?:[宏覚]|鉄次郎|光一|千寿|泉美|禮子|裕士)|野(?:田千代太郎|五平|修一|敦生)|(?:川誠|西和)子|(?:松英|県真)樹|菅剣之助|倉久史|山栄美|岸壮二|泉雅信|阪昇)|大(?:野(?:八一雄|源一)|(?:原英|島映)二|(?:崎熊|竹英)雄|平(?:修三|武洋)|庭美[夏樹]|塚亀太郎|沢奈留美|内延介|和久彪|山康晴|村和久|石直嗣|友昇)|高(?:橋(?:杵三郎|道雄|和)|崎(?:一生|泰策)|田(?:丈資|尚平)|野(?:秀行|英樹)|群佐知子|尾紳路|木祥一|柳敏夫|見泰地|部道平|在熙|川格|根台)|本(?:因坊(?:秀[伯元和哉悦策]|[伯察烈策]元|道[悦的知策]|丈[和策]|算[悦砂]|元丈|知伯)|田(?:小百合|幸子|邦久)|間(?:爽悦|博)|多政武)|安(?:井(?:春(?:哲仙角|知)|知(?:得仙知|哲)|仙角(?:仙知)?|算[哲知英])|(?:西勝|永)一|用寺孝功|倍吉輝|恵照剛|達利昌|食総子|祚永)|山(?:本(?:賢太郎|武雄|源吉|真也)|口(?:恵梨子|千嶺|英夫)|田(?:規三生|久美|朱未)|下(?:カズ子|敬吾)|崎隆之|森忠直|部俊郎|城宏)|林(?:(?:因長|朴入|柏栄|玄悦)門入|門(?:利門入|入斎|悦)|有(?:太郎|美)|まゆみ|葉直子|元美|利玄|宣根|書陽|海峰|漢傑|聖賢|至涵)|金(?:(?:子金五|易二)郎|沢(?:孝史|真)|秀[俊壮]|井恒太|高清吉|主鎬|在九|志錫|恵敏|成龍|承俊|明完|榮桓|熙中|起用|寅)|井(?:上(?:(?:春[碩策達]|因[砂達]|幻庵|松本|玄覚|策雲|節山|道節)因碩|孝平|慶太|義雄)|山裕太|澤秋乃|道千尋)|藤(?:沢(?:朋斎|秀行|里菜)|田(?:麻衣子|梧郎|綾)|森(?:奈津子|哲也)|倉勇樹|内金吾|原直哉|川義夫|井猛)|(?:矢(?:代久美|内理絵)|出口万里|巻幡多栄|喜多文|多田佳|宇治正|寺下紀|新海洋|桑原陽|芦田磯|蛸島彰|楠光)子|伊(?:藤(?:[果能]|明日香|友恵|子元|松和|真吾)|奈(?:川愛菓|祐介)|予本桃市|田篤史|達康夫)|佐(?:藤(?:大五郎|和俊|天彦|庄平|康光|慎一|直男|秀司|義則|豊)|々木(?:勇気|慎)|瀬勇次)|村(?:田(?:智[弘穂]|顕弘)|上(?:文祥|真一)|山(?:幸子|聖)|中秀史|島誼紀|川大介)|長(?:谷(?:川(?:清二郎|優貴|知仙|章)|部久雄)|坂猪之助|沢千和子|岡裕也|島梢恵|沼洋)|松(?:本(?:佳介|武久)|浦(?:卓造|隆一)|田(?:茂役|辰雄)|尾(?:香織|歩)|下力)|石(?:井(?:千治|邦生|茜)|田(?:和雄|芳夫|章)|川陽生|榑郁郎|橋幸緒|高澄恵|倉昇)|宮(?:坂(?:寀二|幸雄)|田(?:利男|敦史)|崎志摩子|松関三郎|下秀洋|本直毅|沢吾朗)|加(?:藤(?:[啓朋]子|一二三|充志|博二|正夫|治郎|信)|瀬純一|田克司|納嘉徳)|関(?:根(?:紀代子|金次郎|茂)|山(?:仙太夫|利一)|屋喜代作|源吉|達也|浩)|木(?:村(?:義[徳雄]|一基|嘉孝)|下(?:かおり|浩一|晃)|見金治郎|谷實)|(?:南(?:口繁|芳)|五十嵐豊|櫛田陽|池田修|苑田勇|間宮純|雁金準|浅沼)一|李(?:ミン真|世ドル|テツ|昌鎬|映九|沂修|瑟娥|相勲|聖宰|英信|赫)|田(?:中(?:悠一|魁秀)|尻悠人|岡敬一|村嘉平|淵米蔵|辺一郎|丸昇)|森(?:安(?:多恵子|正幸|秀光)|けい二|内俊之|田道博|下卓|信雄)|陳(?:耀ヨウ|嘉鋭|国興|永安|祖徳|臨新|詩淵|逸達|長清|士)|王(?:[尭檄磊群雷]|イク輝|銘エン|晨星|汝南|祥雲|立誠)|神(?:田(?:真由美|辰之助|鎮雄)|吉宏充|崎健二|谷広志)|野(?:田(?:澤彩乃|敬三)|月浩貴|本虎次|村慶虎|沢竹朝)|北(?:村(?:秀治郎|昌男)|尾まどか|楯修哉|浜健介)|坂(?:口(?:仙徳|允彦)|東香菜子|井秀至|田栄男)|飯(?:塚(?:勘一郎|祐紀)|島栄治|田弘之|野健二)|吉(?:田(?:半十郎|利勝|正和|美香)|原由香里)|橋(?:本(?:宇太郎|三治|崇載|昌二)|爪敏太郎)|青(?:木(?:喜久代|紳一|清)|葉かおり|野照市)|鈴木(?:為次郎|伸二|大介|環那|禎一|輝彦|歩)|(?:アレキサンダー・ディナーシュタイ|元晟ジ)ン|久(?:保(?:松勝喜代|利明)|島国夫|津知子)|(?:日浦市|板谷四|滝誠一|秋山次|糸谷哲)郎|三(?:村(?:智保|芳織)|浦弘行|谷哲也)|上(?:田(?:三三|初美)|村邦夫|野裕和)|平(?:田(?:博則|智也)|藤眞吾|野信助)|瀬(?:戸(?:博晴|大樹)|川晶司|越憲作)|阿(?:部(?:健治郎|光瑠|隆)|久津主税)|周(?:俊勲|可平|奎宏|小松|睿羊|鶴洋)|(?:建部和歌|原田泰|塚田正|工藤紀)夫|劉(?:[星菁]|世振|小光|昌赫|棣懐)|張(?:セン|凱馨|文東|斗軫|秀英|栩)|河(?:野(?:元虎|臨)|口俊彦|燦錫)|白(?:石(?:勇一|裕)|江治彦|洪淅)|堀(?:口(?:一史座|弘治)|本満成)|富(?:士田明彦|岡英作|沢幹雄|紅梅)|斎(?:藤(?:慎太|銀次)郎|田晴子)|増(?:田(?:敏二|裕司)|淵辰子)|朴(?:ジ恩|廷桓|文尭|正祥|永訓)|杉(?:内(?:寿子|雅男)|崎里子)|熊(?:倉紫野|本秀生|谷達人|坂学)|稲(?:葉(?:禄子|陽)|垣兼太郎)|羽(?:根(?:泰正|直樹)|生善治)|趙(?:南哲|善津|惠連|治勲|漢乗)|黄(?:奕中|孟正|永吉|祥任|翊祖)|(?:鶴(?:山淳|田和)|洪性)志|呉(?:圭チョル|淞笙|清源|肇毅)|尹(?:[奇盛]鉉|ジュン相|暎善)|阪(?:口(?:仙得|悟)|田三吉)|土(?:居市太郎|佐浩司|田正光)|武(?:者野勝巳|宮正樹|市三郎)|(?:升田幸|淡路修|賀集正)三|室(?:岡克彦|田伊緒|谷由紀)|島(?:井咲緒里|村俊廣|本亮)|有(?:吉道夫|森浩三|野芳人)|(?:星合八|相原可|睦鎮)碩|(?:香川愛|鹿野圭|過イ)生|崔(?:珪ビョン|哲瀚|明勲)|徐(?:奉洙|星友|能旭|瑩)|楊(?:嘉源|士海|志徳|暉)|福(?:井[正資]明|田正義)|(?:知念かお|竹部さゆ)り|服部(?:因淑|正徹|雄節)|西(?:川慶二|尾明|本馨)|豊(?:島将之|川孝弘|雲)|光(?:原伊太郎|永淳造)|古(?:河彩子|霊益|力)|宋(?:容慧|泰坤|雪林)|岡(?:田結美子|崎史明)|岩(?:佐銈|本薫|根忍)|江(?:[鋳鳴]久|維傑)|渡辺(?:弥生|東一|明)|花(?:田長太郎|村元司)|酒井(?:通温|順吉|猛)|(?:京須行|角田三)男|(?:今村俊|菅井竜)也|(?:四宮米|太田雄)蔵|(?:屋敷伸|荒巻三)之|(?:廣津久|米長邦)雄|(?:津村常|畝美与)吉|(?:甲斐智|篠原正)美|スベトラーナ・シックシナ|フェルナンド・アギラール|下(?:坂美織|平幸男)|丸(?:山忠久|田祐三)|二(?:上達也|見敬三)|内(?:田修平|藤國雄)|奥(?:田あや|貫智策)|姜(?:哲民|東潤|勲)|広瀬(?:平治郎|章人)|桐(?:山清澄|谷広人)|植(?:山悦行|村真理)|横(?:山泰明|田茂昭)|水(?:谷縫治|野弘士)|沼(?:舘沙輝哉|春雄)|清(?:成哲也|水市代)|真(?:田圭一|部一男)|窪(?:内秀知|田義行)|羅(?:建文|洗河|玄)|船(?:戸陽子|江恒平)|菊(?:地常夫|池康郎)|鄭(?:[岩弘]|壽鉉)|(?:剱持松|脇謙)二|依田(?:有司|紀基)|前田(?:祐司|陳爾)|勝(?:又清和|浦修)|千葉(?:幸生|涼子)|東(?:野弘昭|和男)|梶(?:原武雄|一郎)|榊原(?:史子|章二)|片(?:上大輔|岡聡)|谷川(?:治恵|浩司)|黒(?:田俊節|嘉嘉)|(?:ゼイ廼|丁)偉|(?:戴嘉|玉井)伸|(?:浦野真|董)彦|(?:聶衛|銭宇)平|桜井(?:知達|昇)|梁(?:偉棠|宰豪)|汪(?:見虹|雲峰)|泉(?:正樹|秀節)|畠山(?:成幸|鎮)|范(?:廷鈺|西屏)|華(?:以剛|学明)|許(?:壮会|映皓)|邵(?:イ剛|震中)|馬(?:場滋|暁春)|孔(?:祥明|傑)|孫(?:騰宇|喆)|彭(?:景華|筌)|謝(?:依旻|赫)|ハンス・ピーチ|唐[奕莉]|恵下田栄芳|チョ薫鉉|万波奈穂|倉橋正行|半田道玄|及川拓馬|向井千瑛|坪内利幸|巌崎健造|彦坂直人|志田達哉|所司和晴|早水千紗|椎橋金司|永瀬拓矢|深浦康市|渋川春海|溝上知親|澤田真吾|牧野光則|細川千仞|芹澤博文|若松政和|赤星因徹|遠山雄亮|郷田真隆|里見香奈|門倉啓太|一力遼|于梅玲|先崎学|党毅飛|八代弥|夏大銘|孟泰齢|川上猛|庾炅旻|応昌期|戸辺誠|曲励起|曹大元|柁嘉熹|柳時熏|権甲龍|沈果孫|温昭珍|灘蓮照|牛雨田|盧永夏|結城聡|胡耀宇|萩原淳|蕭正浩|蘇耀国|貞升南|車敏洙|達正光|鍾文靖|韓尚勲|顧水如|鯛中新|黎春華|兆乾|兪斌|常昊|時越|檀嘯|葉桂|邱峻)");