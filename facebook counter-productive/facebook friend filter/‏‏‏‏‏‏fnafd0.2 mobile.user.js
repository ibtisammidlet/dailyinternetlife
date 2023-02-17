// ==UserScript==
// @name         facebook none active friends deleter
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  like the name
// @author       ibtisam midlet
// @match        *://m.facebook.com/*/friends*
// @icon         https://www.google.com/s2/favicons?domain=facebook.com
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @grant        none
// ==/UserScript==

$( ".friendSearch" ).append('<input id="clickMe" type="button" value="start"  />');


document.getElementById("clickMe").onclick = function () {
	
$( ".touchable.right._58x3").each(function () {

var friendid = $(this).parent().html();

//** this script to delete divs that has "Add Friend" but it seems all divs has this even if you still not unfriended them so its not working
    /*
if (friendid.indexOf("Add Friend") > -1) {$(this).parent().parent().parent().parent().remove();}
*/

/** here change ids to be deleted in indexof algorithm*/


if (friendid.indexOf("100007841700581") > -1) {$(this).parent().parent().parent().parent().remove();}

if (friendid.indexOf("100010007880681") > -1) {$(this).parent().parent().parent().parent().remove();}

if (friendid.indexOf("100002232086632") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100002770342845") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100009445194285") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100010905281948") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100006791838332") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100012260730309") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100000766275380") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100049995755258") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100063028212837") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100000189931842") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100008554366125") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100028105523792") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100024562988713") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100026498028005") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100027014663024") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100026418456690") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("559988378") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100070968880004") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100022034114404") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100011665774985") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100017416025616") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100023542043807") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100025114689586") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100027078570300") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100025549601872") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100027281688004") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100027404896360") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100008091908942") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100008244826950") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100008481517266") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100009726824336") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100002256612378") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100008716277067") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100001240179856") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("1179535081") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100011314021810") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100011561172854") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100012907687835") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100065575415647") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100066878478145") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100069675876936") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100049636425774") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("1534083340") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100002993488785") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100009795190048") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100025068873578") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100010134900336") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100025758373344") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100028265926338") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100014592214594") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100024160388066") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100023298014803") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100023015855910") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100015501516440") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100025169019405") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100004773915305") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100010521304287") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("1381781362") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007699123681") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100012844842826") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100020988063132") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100014000791140") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100018957124374") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100026575993811") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100026375435495") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100015165283956") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100016638844317") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100021801487788") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100028367226790") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100015339104526") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100002384922460") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100002995858528") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100000973544829") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100005976047030") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100011543253375") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007438179678") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100012866014606") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100067474276336") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100012169963906") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100006376963291") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100010738778641") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100003032784811") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100003666488274") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100011251188461") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100027797161650") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100018211783897") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100023528649897") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100013462239989") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100027762970931") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100027519106280") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100023711299665") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100021873615638") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100015265419244") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100008651658099") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100002309952612") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100001852249144") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100014430879545") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100026803966915") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100027658804513") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007536000219") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100010933782246") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("1583848504") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100009977282970") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100012293087803") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100004728288963") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100003085238134") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100027222532967") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100022597507790") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100021716882818") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100021691784139") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100027958413396") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100000233128377") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100009030505642") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100010962693939") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100008842757444") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("1144511485") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100005249533026") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100006529328925") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007752159345") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100008432509254") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100008787070624") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100002332371630") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100009099734153") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100009461315486") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100002655254918") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100005592824185") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100006066134715") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100010565011406") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007040358237") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100003736664120") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007785525477") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100001375994443") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100004351245513") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100015082128260") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100011598221468") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100013650581920") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100026453400971") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100022257945789") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100018654161979") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100023593620758") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100015138511733") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100024735158069") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100022768426983") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100024137202906") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100021887707429") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100028293450055") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100022186154815") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100027038370619") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100020245950725") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100028094260399") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100004647193690") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("1008715068") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007795386418") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100005919663538") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100040322951525") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100004324279010") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100026154781242") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100026970097188") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100020198109995") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100023714167880") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100017157976839") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100001965682616") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100012851975586") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100070373585761") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100017795774693") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007291032706") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100012924935323") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100036810933148") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100013675964770") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100005204088041") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100013435276216") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100011143004007") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100012352051130") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100002023819320") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100028454043813") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100026514102850") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100025572362403") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100006555700366") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100012094710230") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100013740664350") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100013674824827") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100012456003379") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100011642296688") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100006024368332") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100012691055511") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100011235665154") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100002114445510") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100011310214481") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100006982087220") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007708470961") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100013097554322") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100009909330762") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100012136208756") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100000643321198") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100065204574988") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100026063555493") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007150627231") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100013945500637") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100024645797179") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100028378716991") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100024336910478") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100024505715377") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100016061498901") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("1171647434") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100010411689741") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100011011960076") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100003803653986") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100004277506502") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100006780463275") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100027770563117") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100023711086531") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100009249763756") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100001369787429") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100024296809239") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100027643293444") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100027453521116") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007162809638") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100038002992076") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100017848926537") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100011639954104") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100001563945043") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100025686188780") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100024619690397") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100028338308699") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100022862414194") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100027512919260") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100001309943710") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100009632780022") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100005215022934") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100003308954158") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100010431694434") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100003297925173") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100004527243485") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007098166714") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100070741137047") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100024392911562") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100047763241568") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100015867874514") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100052460790642") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100018763269371") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100027583154937") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100026600261934") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100027357671625") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100021825729950") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100014365921761") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100027997544252") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100028055598090") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100027909459110") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("625576971") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("617601162") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100070979844840") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100069524707411") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100066893401458") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100061239228580") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100042155240054") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100029625284784") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100028475071923") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100028172687429") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100027660673993") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100026741259359") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100026018838244") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100025671972321") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100025108800932") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100023485308625") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100023050350670") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100022879564894") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100022835902156") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100022835753070") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100022292642269") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100022280539740") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100022263010931") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100021403781135") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100020305364986") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100016429776746") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100016101242451") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100014831135348") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100014167478032") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100013238798329") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100012943598330") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100012639996719") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100012409268607") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100011933565371") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100011217274101") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100010945238546") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100010821576292") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100009581259118") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100009520375678") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100009211237853") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007899825320") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007849158967") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007621456605") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007434782184") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100006039994793") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100005558805749") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100003906139208") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100003196883332") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100002496663833") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100002181335162") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100002011252618") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100071143785946") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100070687850692") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100068075581673") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100067515816327") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100066648840164") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100066355317132") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100050790961599") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100049347963865") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100034525010801") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100028092755592") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100027557977030") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100027326948721") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100025833380548") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100025315459782") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100025287262330") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100024175989606") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100022443851177") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100021904867313") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100021508719504") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100015571514852") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100015533228012") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100015489757492") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100014595362931") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100014194540361") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100013470271833") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100012731654784") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100010797481801") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100010287618442") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100009744210696") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100009558405879") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100008565316095") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100008542723240") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100008205285286") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007817719207") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007689760187") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100006880717113") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100006317343430") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100006305351592") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100005718791174") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100005528163812") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100005482957946") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100003996802682") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100003269784098") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100001883225176") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100002548248210") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100006837030775") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100002249734007") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100003919325515") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100001703101882") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100011669910070") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007681302311") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100006000426060") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100001509796346") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100010552748894") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100012748210402") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100008016645599") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100048075344212") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100062763933557") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100028126784896") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100001638547446") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100015818354604") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100011340890708") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100013943949240") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100017989098965") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100013557011211") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100015231736515") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100019175988501") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100027143324332") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100014879507196") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100013650164897") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100028135834465") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100013849396747") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100013527514780") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100002237684213") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100055509068657") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100070613585452") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100069704175895") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100027908776654") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100044553250596") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100014660918457") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100017214391993") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100008341244487") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100009107400186") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100009133388851") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100002105099199") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100014128057228") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100028091880091") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100023695417988") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100021009367801") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100009590407765") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100004762458736") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100011841162740") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100010362750141") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100006790412104") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100002685591746") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100008749155026") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100002531397212") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100020211035547") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100006120163418") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100013111591225") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("1641214128") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100008308574838") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100005091227831") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100009421970363") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100005354295101") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100012047442387") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100008033402450") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100009050987425") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100001185377144") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100010310712412") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100000209313730") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100010776250212") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100011226213202") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100011709240381") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100000435265712") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100012520777377") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100008000178143") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100002162145270") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100009045615020") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100002671443225") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100002880815086") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100010370025469") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100010434001663") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100003240684574") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100010998460946") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100011428064579") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100011493123815") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100000447174868") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007403891782") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100012218418340") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("584913851") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100012789247509") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("1529312742") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100008035031346") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100017709764393") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100068704997989") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100069819174659") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100044805557123") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100067030676388") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100024347539300") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100010272045344") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007450566644") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100010943621306") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100056210585297") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100015088154207") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100014722840903") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100028076353065") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100013728815721") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100023232918393") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100024793994226") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100024445021962") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100023714051744") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100021015812456") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100014401740147") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100027754027367") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100014327839473") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100024520579956") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100025017433994") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100014402021227") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100011679932100") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007333542187") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100008023831258") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100065031451631") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100048625690857") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007350518438") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100024074731731") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100020882239252") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100013857069503") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100015011711762") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100022427497952") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100028387267919") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100014801381972") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100014637249884") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100004543056324") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100004610914696") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100005370791726") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100009630000691") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100010123570914") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100006937654540") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007714659433") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007840635595") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007937174797") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100013291595834") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100004469594542") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100069497961660") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100068612777429") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100071450142964") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100046369840261") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100044494832483") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100000388498055") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100024583963036") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100014193040356") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100023326357757") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100014759774669") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100025671954217") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100018231064815") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100016916190107") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100013485163836") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("1282541954") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100001446876208") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100011946045041") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100004689218094") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007240930377") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100012658784257") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100057837335738") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100029097278966") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100048526932171") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100017849524288") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100013575126027") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100024038980189") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100009974585296") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100011560022923") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100003539682739") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007787612509") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100001891570689") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007775107458") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100005181331024") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100009566811990") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100001382243185") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100000814631399") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100004814042077") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100008864049105") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100009275169952") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100009339031849") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100009440100237") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100009502852829") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100001420403157") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100010095585556") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100010386463957") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100011019484953") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100006902718731") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100006916175866") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100001896248131") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100003902798826") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100000588199761") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100071495559527") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100016101782073") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100071710170044") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100069732194578") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100071403106736") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100071438596027") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100009568890985") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100071377180248") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100059090598805") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100045000251098") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100044317691243") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100069308710306") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100050894450634") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100046981900246") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100070441338226") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100025862589191") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100044753132693") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100005048779161") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100004450994838") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100022912972582") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100011526483597") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100012240360859") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100003660278917") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100012215502307") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100013817027616") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100025867814353") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100024182322020") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100022011302445") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100018163302994") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100027960801299") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100019972368880") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100028321410200") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100025967466720") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100022365764651") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100026935338494") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100021697307666") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100016605840292") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100020970951671") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100027978189344") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100023881300609") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100022942967163") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100028052554508") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100024572861059") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100015774607213") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100025201714087") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100025549116495") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100025542018694") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100014251025767") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100023196618146") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100022540998637") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100018792275674") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100023285620102") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100028400104418") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100006033249690") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100056138032843") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100027586983096") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100006924846155") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100015659744093") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100022184297012") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100014257744996") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100027098560275") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100053997427038") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100009487615361") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100005409796701") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100008785772351") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100005586031862") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100006167531678") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100003489537322") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100008473504950") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("1123051691") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100008683713531") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100008779991914") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100004749437459") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100008972448485") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100004942906207") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100005733855662") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100010291442887") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100011983214598") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100067952406742") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100056065149218") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100059679084771") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100057154156243") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100039244906691") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100028053766763") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100065403653960") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100010435592582") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100068010199050") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("1096951355") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100025423522126") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100023384769432") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100028105493869") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100027347708487") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100015931265163") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100028288690787") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100002945360558") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100068390948457") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100059019286910") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100017814420457") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100012263834867") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100008345940780") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100010389313841") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100008637496337") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100003339721752") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100009938652308") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100006310690221") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100010978000796") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100006900703572") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007956480493") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100008837682192") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100002766722344") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100008111313266") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100011234043736") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007297548316") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100003626064736") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007611795666") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100060678240041") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100071475005357") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100071105048418") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100067577993078") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100071671983969") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100069019553813") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100067759459786") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100024583711159") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100067608996236") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100069447060530") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100053822593096") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100009086960756") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100025566007070") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100027676962335") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100010629096014") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100026317861839") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100024161752922") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100028135961034") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100027685481337") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100023772697676") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100028233820649") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100023829690510") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100014758248889") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100025126123591") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100013512371332") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100020429175149") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100025803427087") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100023103888824") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100016976645229") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100025040763701") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100018926115730") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100015260468264") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100028225811024") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100027060182478") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100015499777585") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100028160961684") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100027154911893") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100028189651628") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100014770276811") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100022887691044") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100010719210271") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100003093392429") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007697506190") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100002416740043") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100001459647833") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100011597344022") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100008085810820") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100002422133946") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100009399474322") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100011320832228") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007289320731") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100011919692161") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007968375213") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100013328113795") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100012297408408") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100070309493023") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100065414778745") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100016533523427") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100013880179557") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007942830975") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100011278398144") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100002116401797") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100007571357726") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100014027850660") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100014180651377") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100020921374077") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100024531511585") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100018629144438") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100019172683614") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100015367446629") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100027008881041") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100025671307093") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100028320490865") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100013821790949") > -1) {$(this).parent().parent().parent().parent().remove();}


if (friendid.indexOf("100019009959293") > -1) {$(this).parent().parent().parent().parent().remove();}


})

/* this part does not work its to make script automaticlly click friends and unfriend in random timer, it did not work even if script only triger friend button (chacked by css) */
/*
var clickHand = function() {
  $("._2pit button span :contains('Friends'):first-child").trigger('click');
  console.log("friends clicked")
  setTimeout(clickHand, (Math.random() * 1000) + 3000);
  $("._2pit div a span :contains('Unfriend'):first-child").trigger('click');
  console.log("Unfriend clicked")
  setTimeout(clickHand, (Math.random() * 4000) + 12000);
}

clickHand();
*/

//* numbering
var newId=0;
$("._55wo._55x2 div[data-sigil='undoable-action']").each(function () {
var        text = '<div id="nmbered">'+ ++newId +'</div>';
if ($(this).children('#nmbered').length) {}else{$(this).append(text);}
})
};

