        const verses = {
//1-10
            "あきのたのかりほのいほのとまをあらみ": "わがころもではつゆにぬれつつ",
            "はるすぎてなつきにけらししろたへの": "ころもほすてふあまのかぐやま",
            "あしびきのやまどりのをのしだりをの": "ながながしよをひとりかもねむ",
            "たごのうらにうちいでてみればしろたへの": "ふじのたかねにゆきはふりつつ",
            "おくやまにもみぢふみわけなくしかの": "こゑきくときぞあきはかなしき",
            "かささぎのわたせるはしにおくしもの ": "しろきをみればよぞふけにける",
            "あまのはらふりさけみればかすがなる ": "みかさのやまにいでしつきかも",
            "わがいほはみやこのたつみしかぞすむ": "よをうぢやまとひとはいふなり",
            "はなのいろはうつりにけりないたづらに": "わがみよにふるながめせしまに",
            "これやこのゆくもかへるもわかれては": "しるもしらぬもあふさかのせき",
//11-20
            "わたのはらやそしまかけてこぎいでぬと": "ひとにはつげよあまのつりぶね",
            "あまつかぜくものかよひぢふきとぢよ": "をとめのすがたしばしとどめむ",
            "つくばねのみねよりおつるみなのがは": "こひぞつもりてふちとなりぬる",
            "みちのくのしのぶもぢずりたれゆゑに": "みだれそめにしわれならなくに",
            "きみがためはるののにいでてわかなつむ": "わがころもでにゆきはふりつつ",
            "たちわかれいなばのやまのみねにおふる": "まつとしきかばいまかへりこむ",
            "ちはやぶるかみよもきかずたつたがは": "からくれなゐにみづくくるとは",
            "すみのえのきしによるなみよるさへや": "ゆめのかよひぢひとめよくらむ",
            "なにはがたみじかきあしのふしのまも": "あはでこのよをすぐしてよとや",
            "わびぬればいまはたおなじなにはなる": "みをつくしてもあはむとぞおもふ",
//21-30
            "いまこむといひしばかりにながつきの": "ありあけのつきをまちいでつるかな",
            "ふくからにあきのくさきのしをるれば": "むべやまかぜをあらしといふらむ",
            "つきみればちぢにものこそかなしけれ": "わがみひとつのあきにはあらねど",
            "このたびはぬさもとりあへずたむけやま": "もみぢのにしきかみのまにまに",
            "なにしおはばあふさかやまのさねかづら": "ひとにしられでくるよしもがな",
            "をぐらやまみねのもみぢはこころあらば": "いまひとたびのみゆきまたなむ",
            "みかのはらわきてながるるいづみがは": "いつうみきとてかこひしかるらむ",
            "やまざとはふゆぞさびしさまさりける": "ひとめもくさもかれぬとおもへば",
            "こころあてにをらやをらむはつしもの": "おきまどはせるしらぎくのはな",
            "ありあけのつれなくみえしわかれより": "あかつきばかりうきものはなし",
//31-40
            "あさのらけありあけのつきとみるまでに": "よしののさとにふれるしらゆき",
            "やまがはにかぜのかけたるしがらみは": "ながれもあへぬもみぢなりけり",
            "ひさかたのひかりのどけきはるのひに": "しづこころなくはなのちるらむ",
            "たれをかもしるひとにせむたかさごの": "まつもむかしのともならなくに",
            "ひとはいさこころもしらずふるさとは": "はなぞむかしのかににほひける",
            "なつのよは まだよひながらあけぬるを": "くものいづこにつきやどるらむ",
            "しらつゆにかぜのふきしくあきののは": "つらぬきとめぬたまぞちりける",
            "わすらるるみをばおもはずちかひてし": "ひとのいのちのをしくもあるかな",
            "あさぢふのをののしのはらしのぶれど": "あまりてなどかひとのこひしき",
            "しのぶれどいろにいでにけりわがこひは": "ものやおもふとひとのとふまで",
//41-50
            "こひすてふわがなはまだき たちにけり": "ひとしれずこそおもひそめしか",
            "ちぎりきなかたみにそでを しぼりつつ": "すゑのまつやまなみこさじとは",
            "あひみてののちのこころに くらぶれば": "むかしはものをおもはざりけり",
            "あふことのたえてしなくは なかなかに": "ひとをもみをもうらみざらま",
            "あはれともいふべきひとはおもほえで": "みのいたづらになりぬべきかな",
            "ゆらのとをわたるふなびと かぢをたえ": "ゆくへもしらぬこひのみちかな",
            "やへむぐらしげれるやどの さびしきに": "ひとこそみえねあきはきにけり",
            "かぜをいたみいはうつなみの おのれのみ": "くだけてものをおもふころかな",
            "みかきもりゑじのたくひの よるはもえ": "ひるはきえつつものをこそおもへ",
            "きみがためをしからざりし いのちさへ": "ながくもがなとおもひけるかな",
//51-60
            "かくとだにえやはいぶきのさしもぐさ": "さしもしらじなもゆるおもひを",
            "あけぬればくるるものとはしりながら": "なほうらめしきあさぼらけかな",
            "なげきつつひとりぬるよのあくるまは": "いかにひさしきものとかはしる",
            "わすれじのゆくすゑまではかたければ": "けふをかぎりのいのちともがな",
            "たきのおとはたえてひさしくなりぬれど": "なこそながれてなほきこえけれ",
            "あらざらむこのよのほかのおもひでに": "いまひとたびのあふこともがな",
            "めぐりあひてみしやそれともわかぬまに": "くもがくれにしよはのつきかな",
            "ありまやまゐなのささはらかぜふけば": "いでそよひとをわすれやはする",
            "やすらはでねなましものをさよふけて": "かたぶくまでのつきをみしかな",
            "おほえやまいくののみちのとほければ": "まだふみもみずあまのはしだて",
//61-70
            "いにしへのならのみやこのやへざくら": "けふここのへににほひぬるかな",
            "よをこめてとりのそらねははかるとも": "よにあふさかのせきはゆるさじ",
            "いまはただおもひたえなむとばかりを": "ひとづてならでいふよしもがな",
            "あさぼらけうぢのかはぎりたえだえに": "あらはれわたるせぜのあじろぎ",
            "うらみわびほさぬそでだにあるものを": "こひにくちなむなこそをしけれ",
            "もろともにあはれとおもへやまざくら": "はなよりほかにしるひともなし",
            "はるのよのゆめばかりなるたまくらに": "かひなくたたむなこそをしけれ",
            "こころにもあらでうきよにながらへば": "こひしかるべきよはのつきかな",
            "あらしふくみむろのやまのもみぢばは": "たつたのかはのにしきなりけり",
            "さびしさにやどをたちいでてながむれば": "いづこもおなじあきのゆふぐれ",
//71-80
            "ゆふさればかどたのいなばおとづれて": "あしのまろやにあきかぜぞふく",
            "おとにきくたかしのはまのあだなみは": "かけじやそでのぬれもこそすれ",
            "たかさごのをのへのさくらさきにけり": "とやまのかすみたたずもあらなむ",
            "うかりけるひとをはつせのやまおろしよ": "はげしかれとはいのらぬものを",
            "ちぎりおきしさせもがつゆをいのちにて": "あはれことしのあきもいぬめり",
            "わたのはらこぎいでてみればひさかたの": "くもゐにまがふおきつしらなみ",
            "せをはやみいはにせかるるたきがはの": "われてもすゑにあはむとぞおもふ",
            "あはぢしまかよふちどりのなくこゑに": "いくよねざめぬすまのせきもり",
            "あきかぜにたなびくくものたえまより": "もれいづるつきのかげのさやけさ",
            "ながからむこころもしらずくろかみの": "みだれてけさはものをこそおもへ",
//81-90
            "ほととぎすなきつるかたをながむれば": "ただありあけのつきぞのこれる",
            "おもひわびさてもいのちはあるものを": "うきにたへぬはなみだなりけり",
            "よのなかよみちこそなけれおもひいる": "やまのおくにもしかぞなくなる",
            "ながらへばまたこのごろやしのばれむ": "うしとみしよぞいまはこひしき",
            "よもすがらものおもふころはあけやらで": "ねやのひまさへつれなかりけり",
            "なげけとてつきやはものをおもはする": "かこちがほなるわがなみだかな",
            "むらさめのつゆもまだひぬまきのはに": "きりたちのぼるあきのゆふぐれ",
            "なにはえのあしのかりねのひとよゆゑ": "みをつくしてやこひわたるべき",
            "たまのをよたえなばたえねながらへば": "しのぶることのよわりもぞする",
            "みせばやなをじまのあまのそでだにも": "ぬれにぞぬれしいろはかはらず",
//91-100
            "きりぎりすなくしもよのさむしろに": "ころもかたしきひとりかもねむ",
            "わがそではしほひにみえぬおきいしの": "ひとこそしらねかわくまもなし",
            "よのなかはつねにもがもななぎさこぐ": "あものをぶねのつなでかなしも",
            "みよしののやまあきかぜさよふけて": "ふるさとさむくころもうつなり",
            "おほけなくうきよのたみにおほふかな": "わがたつそまにすみぞめのそで",
            "はなさそふあらしのにはのゆきならで": "ふりゆくものはわがみなりけり",
            "こぬひとをまつほのうらのゆふなぎに": "やくやもしほのみもこがれつつ",
            "かぜそよぐならのがはのゆふぐれは": "みそぎぞなつのしるしなりける",
            "ゆともをしひともうらめしあぢきなく": "よをおもふゆゑにものおもふみは",
            "ももしきやふるきのきばのしのぶにも": "なほあまりあるむかしなりけり"
        };

function searchVerse() {

    // 入力された上の句と結果を出すところを読み込む
    const input = document.getElementById("upper_verse").value;
    const resultArea = document.getElementById("result");

    let resultText = "";
    // 結果を格納する変数

    // 入力が一致する上の句を探す
    for (let upper in verses) {
        if (upper.startsWith(input)) {
            resultText += "<strong>上の句:</strong> " + upper + "<br><strong>下の句:</strong> " + verses[upper] + "<br><br>";
        }
    }

    if (resultText) {
        resultArea.innerHTML = resultText;
    } else {
        resultArea.innerHTML = "<p>該当する下の句が見つかりませんでした。</p>";
    }
}