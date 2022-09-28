from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import Post, RespondentProfile, HouseholdInfo, MembershipOrganization, OtherPersonalInfo, Suggestions, OtherConcern, PracticesCondition
from .workmodels import WorkRelatedInfo
#from .practicemodel import PracticesConditions
from multiselectfield import MultiSelectField
from django.forms import ModelForm, Textarea

REGION= [
    (" ", " "),
("15","AUTONOMOUS REGION IN MUSLIM MINDANAO (ARMM)"),
    ("14","CORDILLERA ADMINISTRATIVE REGION (CAR)"),
    ("13","NATIONAL CAPITAL REGION (NCR)"),
     ("01","REGION I (ILOCOS REGION)"),
      ("02","REGION II (CAGAYAN VALLEY)"),
       ("03","REGION III (CENTRAL LUZON)"),
        ("04","REGION IV-A (CALABARZON)"),
         ("17","REGION IV-B (MIMAROPA)"),
          ("09","REGION IX (ZAMBOANGA PENINSULA)"),
           ("05", "REGION V (BICOL REGION)"),
            ("06", "REGION VI (WESTERN VISAYAS)"),
             ("07", "REGION VII (CENTRAL VISAYAS)"),
              ("08", "REGION VIII (EASTERN VISAYAS)"),
               ("10", "REGION X (NORTHERN MINDANAO)"),
                ("11", "REGION XI (DAVAO REGION)"),
                 ("12", "REGION XII (SOCCSKSARGEN)"),
                  ("16", "REGION XIII (Caraga)")
]

PROVINCE= [
    ("",""),
    ("1401", "ABRA"),
    ("1602", "AGUSAN DEL NORTE"),
    ("1603", "AGUSAN DEL SUR"),
    ("0604", "AKLAN"),
    ("0505",  "ALBAY"),
    ("0606",  "ANTIQUE"),
    ("1481",  "APAYAO"),
    ("0377",  "AURORA"),
    ("1507",  "BASILAN"),
    ("0308",  "BATAAN"),
    ("0209",  "BATANES"),
    ("0410",  "BATANGAS"),
    ("1411",  "BENGUET"),
    ("0878",  "BILIRAN"),
    ("0712",  "BOHOL"),
    ("1013",  "BUKIDNON"),
    ("0314",  "BULACAN"),
    ("0215",  "CAGAYAN"),
    ("0516",  "CAMARINES NORTE"),
    ("0517",  "CAMARINES SUR"),
    ("1018",  "CAMIGUIN"),
    ("0619",  "CAPIZ"),
    ("0722",  "CEBU"),
    ("0997",  "CITY OF ISABELA"),
    ("1339",  "CITY OF MANILA"),
    ("1182",  "COMPOSTELA VALLEY"),
    ("1247",  "COTABATO (NORTH COTABATO)"),
    ("1298",  "COTABATO CITY"),
    ("1123",  "DAVAO DEL NORTE"),
    ("1124",  "DAVAO DEL SUR"),
    ("1186",  "DAVAO OCCIDENTAL"),
    ("1125",  "DAVAO ORIENTAL"),
    ("1685",  "DINAGAT ISLANDS"),
    ("0826",  "EASTERN SAMAR"),
    ("0679",  "GUIMARAS"),
    ("1427",  "IFUGAO"),("0128",  "ILOCOS NORTE"),
    ("0129",  "ILOCOS SUR"),
    ("0630",  "ILOILO"),
    ("0231",  "ISABELA"),
    ("1432",  "KALINGA"),
    ("0133",  "LA UNION"),
    ("0434",  "LAGUNA"),
    ("1035",  "LANAO DEL NORTE"),
    ("1536",  "LANAO DEL SUR"),
    ("0837",  "LEYTE"),
    ("1538",  "MAGUINDANAO"),
    ("1740",  "MARINDUQUE"),
    ("0541",  "MASBATE"),
    ("1042",  "MISAMIS OCCIDENTAL"),
    ("1043",  "MISAMIS ORIENTAL"),
    ("1444",  "MOUNTAIN PROVINCE"),
    ("1339",  "NCR,  CITY OF MANILA,  FIRST DISTRICT"),
    ("1376",  "NCR,  FOURTH DISTRICT"),
    ("1374",  "NCR,  SECOND DISTRICT"),
    ("1375",  "NCR,  THIRD DISTRICT"),
    ("0645",  "NEGROS OCCIDENTAL"),
    ("0746",  "NEGROS ORIENTAL"),
    ("0848",  "NORTHERN SAMAR"),
    ("0349",  "NUEVA ECIJA"),
    ("0250",  "NUEVA VIZCAYA"),
    ("1751",  "OCCIDENTAL MINDORO"),
    ("1752",  "ORIENTAL MINDORO"),
    ("1753",  "PALAWAN"),
    ("0354",  "PAMPANGA"),
    ("0155",  "PANGASINAN"),
    ("0456",  "QUEZON"),
    ("0257",  "QUIRINO"),
    ("0458",  "RIZAL"),
    ("1759",  "ROMBLON"),
    ("0860",  "SAMAR (WESTERN SAMAR)"),
    ("1280",  "SARANGANI"),
    ("0761",  "SIQUIJOR"),
    ("0562",  "SORSOGON"),
    ("1263",  "SOUTH COTABATO"),
    ("0864",  "SOUTHERN LEYTE"),
    ("1265",  "SULTAN KUDARAT"),
    ("1566",  "SULU"),
    ("1667",  "SURIGAO DEL NORTE"),
    ("1668",  "SURIGAO DEL SUR"),
    ("0369",  "TARLAC"),
    ("1570",  "TAWI-TAWI"),
    ("0371",  "ZAMBALES"),
    ("0972",  "ZAMBOANGA DEL NORTE"),
    ("0973",  "ZAMBOANGA DEL SUR"),
    ("0983",  "ZAMBOANGA SIBUGAY")
]

AGENCY_CHOICES = [
    ("", ""),
    ('CPA', 'Cebu Port Authority'),
    ('MARINA', 'Maritime Industry Authority'),
    ('PCG', 'Philippine Coast Guard'),
    ('PPA', 'Philippine Ports Authority'),
    ('PMMA', 'Philippine Maritime Merchant Academy')
]

AGE_CHOICES = (
    ("", ""),
    ('20-30 years old', '20-30 years old'),
    ('31-40 years old', '31-40 years old'),
    ('41-50 years old', '41-50 years old'),
    ('51-60 years old', '51-60 years old'),
    ('61 years old and above', '61 years old and above')
)

SEX_CHOICES = (
    ("", ""),
    ('Male', 'Male'),
    ('Female', 'Female')
)

CIVIL_STATUS = (
    ("", ""),
    ('Single', 'Single'),
    ('Married', 'Married'),
    ('Widow/er', 'Widow/er'),
    ('Annulled', 'Annulled'),
    ('Legally Separated', 'Legally Separated')
)

HIGHEST_EDUC_ATTAINED = (
    ("", ""),
    ('Doctorate Degree', 'Doctorate Degree'),
    ('Masters Degree', 'Masters Degree'),
    ('College Graduate', 'College Graduate'),
    ('Undergraduate', 'Undergraduate'),
    ('Vocational/Technical', 'Vocational/Technical'),
    ('Secondary', 'Secondary')
)

SALARY_LEVEL = (
    ("", ""),
    ('Executive/Managerial  SG 26-30        CAPT - ADM', 'Executive/Managerial  SG 26-30        CAPT - ADM'),
    ('Supervisory           SG 18-25        LTJG - CDR', 'Supervisory           SG 18-25        LTJG - CDR'),
    ('Technical             SG 10-17        ENS - CCGM', 'Technical             SG 10-17        ENS - CCGM'),
    ('Administrative/Clerical SG 9 and below', 'Administrative/Clerical SG 9 and below'),
)

GROSS_ALLOWANCE = (
    ("", ""),
    ('Above PhP 150,000.00', 'Above PhP 150,000.00'),
    ('PhP 149,100.00 - PhP 100,000.00', 'PhP 149,100.00 - PhP 100,000.00'),
    ('PhP 99,000.00 - PhP 50,000.00', 'PhP 99,000.00 - PhP 50,000.00'),
    ('PhP 49,000.00 - PhP 20,000.00', 'PhP 49,000.00 - PhP 20,000.00'),
    ('Below PhP 20,000.00', 'Below PhP 20,000.00')
)

EMPLOY_STATUS = (
    ("", ""),
    ('Presidential Appointee', 'Presidential Appointee'),
    ('Co-Terminus', 'Co-Terminus'),
    ('Permanent', 'Permanent'),
    ('Temporary', 'Temporary'),
    ('Contractual', 'Contractual'),
    ('Casual', 'Casual'),
    ('Job Order', 'Job Order'),
    ('Technical Assistant/Consultant', 'Technical Assistant/Consultant')
)

REASON_STATUS = (
    ("", ""),
    ('Lack of Vacancy (Permanent)', 'Lack of Vacancy (Permanent)'),
    ('Limited units/credential required for the board exam', 'Limited units/credential required for the board exam'),
    ('No CS eligibility', 'No CS eligibility'),
    ('Others', 'Others'),
)

YES_NO = [
    ("", ""),
    ('YES', 'YES'),
    ('NO', 'NO')
]

(CITY) = [
    ("",""),
("175301", "ABORLAN"),
("175101", "ABRA DE ILOG"),
("030801", "ABUCAY"),
("021501", "ABULUG"),
("083701", "ABUYOG"),
("012801", "ADAMS"),
("045601", "AGDANGAN"),
("025701", "AGLIPAY"),
("015501", "AGNO"),
("041001", "AGONCILLO"),
("013301", "AGOO"),
("015502", "AGUILAR"),
("142708", "AGUINALDO"),
("175302", "AGUTAYA"),
("063001", "AJUY"),
("150708", "AKBAR"),
("150709", "AL-BARKA"),
("045602", "ALABAT"),
("128001", "ALABEL (Capital)"),
("124701", "ALAMADA"),
("043401", "ALAMINOS"),
("083702", "ALANGALANG"),
("083703", "ALBUERA"),
("071201", "ALBURQUERQUE"),
("015504", "ALCALA"),
("021502", "ALCALA"),
("175901", "ALCANTARA"),
("072201", "ALCANTARA"),
("072202", "ALCOY"),
("166701", "ALEGRIA"),
("072203", "ALEGRIA"),
("124717", "ALEOSAN"),
("042101", "ALFONSO"),
("025015", "ALFONSO CASTANEDA"),
("142707", "ALFONSO LISTA (POTIA)"),
("034901", "ALIAGA"),
("071202", "ALICIA"),
("098301", "ALICIA"),
("023101", "ALICIA"),
("012901", "ALILEM"),
("063002", "ALIMODIAN"),
("041002", "ALITAGTAG"),
("021503", "ALLACAPAN"),
("084801", "ALLEN"),
("086001", "ALMAGRO"),
("087801", "ALMERIA"),
("072204", "ALOGUINSAN"),
("104201", "ALORAN"),
("060401", "ALTAVAS"),
("104301", "ALUBIJID"),
("042102", "AMADEO"),
("025001", "AMBAGUIO"),
("074601", "AMLAN (AYUQUITAN)"),
("153801", "AMPATUAN"),
("021504", "AMULUNG"),
("086401", "ANAHAWAN"),
("036901", "ANAO"),
("015505", "ANDA"),
("071203", "ANDA"),
("023102", "ANGADANAN"),
("031401", "ANGAT"),
("035401", "ANGELES CITY"),
("045801", "ANGONO"),
("063003", "ANILAO"),
("060601", "ANINI-Y"),
("071204", "ANTEQUERA"),
("124715", "ANTIPAS"),
("035402", "APALIT"),
("021505", "APARRI"),
("175303", "ARACELI"),
("124718", "ARAKAN"),
("035403", "ARAYAT"),
("072205", "ARGAO"),
("013302", "ARINGAY"),
("025002", "ARITAO"),
("054101", "AROROY"),
("082601", "ARTECHE"),
("015506", "ASINGAN"),
("142711", "ASIPULO"),
("072206", "ASTURIAS"),
("112301", "ASUNCION (SAUG)"),
("045603", "ATIMONAN"),
("141101", "ATOK"),
("023103", "AURORA"),
("097302", "AURORA"),
("074602", "AYUNGON"),
("051701", "BAAO"),
("083705", "BABATNGON"),
("050501", "BACACAY"),
("012802", "BACARRA"),
("071205", "BACLAYON"),
("013303", "BACNOTAN"),
("175201", "BACO"),
("103501", "BACOLOD"),
("064501", "BACOLOD CITY (Capital)"),
("153601", "BACOLOD-KALAWI (BACOLOD GRANDE)"),
("035404", "BACOLOR"),
("074603", "BACONG"),
("042103", "BACOOR CITY"),
("166702", "BACUAG"),
("097226", "BACUNGAN (Leon T. Postigo)"),
("072207", "BADIAN"),
("063004", "BADIANGAN"),
("012803", "BADOC"),
("025003", "BAGABAG"),
("030802", "BAGAC"),
("052001", "BAGAMANOC"),
("112501", "BAGANGA"),
("021506", "BAGGAO"),
("064502", "BAGO CITY"),
("141102", "BAGUIO CITY"),
("013304", "BAGULIN"),
("126501", "BAGUMBAYAN"),
("074604", "BAIS CITY"),
("141103", "BAKUN"),
("175304", "BALABAC"),
("153602", "BALABAGAN"),
("031402", "BALAGTAS (BIGAA)"),
("072208", "BALAMBAN"),
("082602", "BALANGIGA"),
("082603", "BALANGKAYAN"),
("013305", "BALAOAN"),
("063005", "BALASAN"),
("051702", "BALATAN"),
("041003", "BALAYAN"),
("143201", "BALBALAN"),
("054102", "BALENO"),
("037701", "BALER (Capital)"),
("041004", "BALETE"),
("060402", "BALETE"),
("104202", "BALIANGAO"),
("097224", "BALIGUIAN"),
("071206", "BALILIHAN"),
("153603", "BALINDONG (WATU)"),
("104302", "BALINGASAG"),
("104303", "BALINGOAN"),
("031403", "BALIUAG"),
("021507", "BALLESTEROS"),
("103502", "BALOI"),
("054103", "BALUD"),
("015507", "BALUNGAO"),
("036902", "BAMBAN"),
("025004", "BAMBANG"),
("063006", "BANATE"),
("142701", "BANAUE"),
("112502", "BANAYBANAY"),
("012902", "BANAYOYO"),
("060403", "BANGA"),
("126302", "BANGA"),
("013306", "BANGAR"),
("140101", "BANGUED (Capital)"),
("012804", "BANGUI"),
("015508", "BANI"),
("124716", "BANISILAN"),
("012811", "BANNA (ESPIRITU)"),
("112401", "BANSALAN"),
("175202", "BANSUD"),
("012903", "BANTAY"),
("072209", "BANTAYAN"),
("175902", "BANTON"),
("052002", "BARAS"),
("045803", "BARAS"),
("060602", "BARBAZA"),
("056202", "BARCELONA"),
("072210", "BARILI"),
("153818", "BARIRA"),
("144401", "BARLIG"),
("166801", "BAROBO"),
("063007", "BAROTAC NUEVO"),
("063008", "BAROTAC VIEJO"),
("103503", "BAROY"),
("083706", "BARUGO"),
("074605", "BASAY"),
("020901", "BASCO (Capital)"),
("086002", "BASEY"),
("168501", "BASILISA (RIZAL)"),
("015509", "BASISTA"),
("051601", "BASUD"),
("063009", "BATAD"),
("060404", "BATAN"),
("041005", "BATANGAS CITY (Capital)"),
("175305", "BATARAZA"),
("083707", "BATO"),
("052003", "BATO"),
("051703", "BATO"),
("054104", "BATUAN"),
("071207", "BATUAN"),
("041006", "BAUAN"),
("013307", "BAUANG"),
("144402", "BAUKO"),
("101301", "BAUNGON"),
("015510", "BAUTISTA"),
("043402", "BAY"),
("166802", "BAYABAS"),
("015511", "BAYAMBANG"),
("153604", "BAYANG"),
("097303", "BAYOG"),
("025005", "BAYOMBONG (Capital)"),
("060603", "BELISON"),
("023104", "BENITO SOLIVEN"),
("144403", "BESAO"),
("071248", "BIEN UNIDO"),
("071208", "BILAR"),
("087802", "BILIRAN"),
("064503", "BINALBAGAN"),
("015512", "BINALONAN"),
("045804", "BINANGONAN"),
("074607", "BINDOY (PAYABON)"),
("063010", "BINGAWAN"),
("153605", "BINIDAYAN"),
("015513", "BINMALEY"),
("133902", "BINONDO"),
("104304", "BINUANGAN"),
("084802", "BIRI"),
("174001", "BOAC (Capital)"),
("084803", "BOBON"),
("031404", "BOCAUE"),
("141104", "BOKOD"),
("015514", "BOLINAO"),
("140102", "BOLINEY"),
("072212", "BOLJOON"),
("051704", "BOMBON"),
("034902", "BONGABON"),
("175203", "BONGABONG"),
("157002", "BONGAO (Capital)"),
("104203", "BONIFACIO"),
("086402", "BONTOC"),
("144404", "BONTOC (Capital)"),
("072213", "BORBON"),
("112503", "BOSTON"),
("037101", "BOTOLAN"),
("112323", "BRAULIO E. DUJALI"),
("175306", "BROOKE'S POINT"),
("153633", "BUADIPOSO-BUNTONG"),
("153606", "BUBONG"),
("140103", "BUCAY"),
("140104", "BUCLOC"),
("071209", "BUENAVISTA"),
("160201", "BUENAVISTA"),
("045605", "BUENAVISTA"),
("174002", "BUENAVISTA"),
("067901", "BUENAVISTA"),
("015515", "BUGALLON"),
("060604", "BUGASONG"),
("021508", "BUGUEY"),
("141105", "BUGUIAS"),
("051705", "BUHI"),
("051706", "BULA"),
("031405", "BULACAN"),
("175204", "BULALACAO (SAN PEDRO)"),
("056203", "BULAN"),
("153802", "BULDON"),
("153803", "BULUAN"),
("056204", "BULUSAN"),
("153637", "BUMBARAN"),
("160302", "BUNAWAN"),
("083710", "BURAUEN"),
("045606", "BURDEOS"),
("013308", "BURGOS"),
("012904", "BURGOS"),
("015516", "BURGOS"),
("023105", "BURGOS"),
("166704", "BURGOS"),
("012806", "BURGOS"),
("060405", "BURUANGA"),
("031406", "BUSTOS"),
("175307", "BUSUANGA"),
("153607", "BUTIG"),
("160202", "BUTUAN CITY (Capital)"),
("098302", "BUUG"),
("013309", "CABA"),
("023106", "CABAGAN"),
("034903", "CABANATUAN CITY"),
("037102", "CABANGAN"),
("101322", "CABANGLASAN"),
("025702", "CABARROGUIS (Capital)"),
("023107", "CABATUAN"),
("063012", "CABATUAN"),
("034904", "CABIAO"),
("087803", "CABUCGAYAN"),
("012905", "CABUGAO"),
("051707", "CABUSAO"),
("043404", "CABUYAO CITY"),
("064504", "CADIZ CITY"),
("104305", "CAGAYAN DE ORO CITY (Capital)"),
("175308", "CAGAYANCILLO"),
("168502", "CAGDIANAO"),
("166804", "CAGWAIT"),
("087804", "CAIBIRAN"),
("045805", "CAINTA"),
("175903", "CAJIDIOCAN"),
("051708", "CALABANGA"),
("041007", "CALACA"),
("104204", "CALAMBA"),
("148101", "CALANASAN (BAYAG)"),
("153632", "CALANOGAS"),
("071210", "CALAPE"),
("015517", "CALASIAO"),
("041008", "CALATAGAN"),
("175904", "CALATRAVA"),
("064505", "CALATRAVA"),
("045607", "CALAUAG"),
("043406", "CALAUAN"),
("021509", "CALAYAN"),
("086003", "CALBAYOG CITY"),
("086004", "CALBIGA"),
("063013", "CALINOG"),
("175102", "CALINTAAN"),
("137501", "CALOOCAN CITY"),
("083713", "CALUBIAN"),
("031407", "CALUMPIT"),
("060605", "CALUYA"),
("021510", "CAMALANIUGAN"),
("050502", "CAMALIG"),
("051709", "CAMALIGAN"),
("036903", "CAMILING"),
("082605", "CAN-AVID"),
("051710", "CANAMAN"),
("035405", "CANDABA"),
("045608", "CANDELARIA"),
("037103", "CANDELARIA"),
("071211", "CANDIJAY"),
("064506", "CANDONI"),
("074608", "CANLAON CITY"),
("166805", "CANTILAN"),
("012907", "CAOAYAN"),
("051602", "CAPALONGA"),
("036904", "CAPAS"),
("083714", "CAPOOCAN"),
("084804", "CAPUL"),
("112504", "CARAGA"),
("051711", "CARAMOAN"),
("052004", "CARAMORAN"),
("012807", "CARASI"),
("045806", "CARDONA"),
("083715", "CARIGARA"),
("063014", "CARLES"),
("112303", "CARMEN"),
("124702", "CARMEN"),
("166806", "CARMEN"),
("071212", "CARMEN"),
("072215", "CARMEN"),
("160204", "CARMEN"),
("042104", "CARMONA"),
("034905", "CARRANGLAN"),
("166807", "CARRASCAL"),
("056205", "CASIGURAN"),
("037702", "CASIGURAN"),
("056206", "CASTILLA"),
("037104", "CASTILLEJOS"),
("054105", "CATAINGAN"),
("045610", "CATANAUAN"),
("101801", "CATARMAN"),
("084805", "CATARMAN (Capital)"),
("112505", "CATEEL"),
("071213", "CATIGBIAN"),
("072216", "CATMON"),
("084806", "CATUBIG"),
("064507", "CAUAYAN"),
("043407", "CAVINTI"),
("042105", "CAVITE CITY"),
("054106", "CAWAYAN"),
("072217", "CEBU CITY (Capital)"),
("012908", "CERVANTES"),
("015503", "CITY OF ALAMINOS"),
("045802", "CITY OF ANTIPOLO"),
("030803", "CITY OF BALANGA (Capital)"),
("012805", "CITY OF BATAC"),
("074606", "CITY OF BAYAWAN (TULONG)"),
("083708", "CITY OF BAYBAY"),
("160301", "CITY OF BAYUGAN"),
("043403", "CITY OF BIÑAN"),
("166803", "CITY OF BISLIG"),
("072211", "CITY OF BOGO"),
("082604", "CITY OF BORONGAN (Capital)"),
("160203", "CITY OF CABADBARAN"),
("043405", "CITY OF CALAMBA"),
("175205", "CITY OF CALAPAN (Capital)"),
("012906", "CITY OF CANDON"),
("072214", "CITY OF CARCAR"),
("086005", "CITY OF CATBALOGAN (Capital)"),
("023108", "CITY OF CAUAYAN"),
("042106", "CITY OF DASMARIÑAS"),
("112403", "CITY OF DIGOS (Capital)"),
("104307", "CITY OF EL SALVADOR"),
("064509", "CITY OF ESCALANTE"),
("034908", "CITY OF GAPAN"),
("074611", "CITY OF GUIHULNGAN"),
("064510", "CITY OF HIMAMAYLAN"),
("099701", "CITY OF ISABELA"),
("064515", "CITY OF KABANKALAN"),
("124704", "CITY OF KIDAPAWAN (Capital)"),
("126306", "CITY OF KORONADAL (Capital)"),
("150702", "CITY OF LAMITAN"),
("137601", "CITY OF LAS PIÑAS"),
("050508", "CITY OF LIGAO"),
("086407", "CITY OF MAASIN (Capital)"),
("137602", "CITY OF MAKATI"),
("137502", "CITY OF MALABON"),
("101312", "CITY OF MALAYBALAY (Capital)"),
("031410", "CITY OF MALOLOS (Capital)"),
("137401", "CITY OF MANDALUYONG"),
("137402", "CITY OF MARIKINA"),
("054111", "CITY OF MASBATE (Capital)"),
("112509", "CITY OF MATI (Capital)"),
("031412", "CITY OF MEYCAUAYAN"),
("137603", "CITY OF MUNTINLUPA"),
("072234", "CITY OF NAGA"),
("137503", "CITY OF NAVOTAS"),
("112315", "CITY OF PANABO"),
("137604", "CITY OF PARAÑAQUE"),
("137403", "CITY OF PASIG"),
("063035", "CITY OF PASSI"),
("013314", "CITY OF SAN FERNANDO (Capital)"),
("035416", "CITY OF SAN FERNANDO (Capital)"),
("031420", "CITY OF SAN JOSE DEL MONTE"),
("137405", "CITY OF SAN JUAN"),
("043425", "CITY OF SAN PEDRO"),
("043428", "CITY OF SANTA ROSA"),
("023135", "CITY OF SANTIAGO"),
("064527", "CITY OF SIPALAY"),
("056216", "CITY OF SORSOGON (Capital)"),
("050517", "CITY OF TABACO"),
("143213", "CITY OF TABUK (Capital)"),
("126511", "CITY OF TACURONG"),
("112319", "CITY OF TAGUM (Capital)"),
("072250", "CITY OF TALISAY"),
("064528", "CITY OF TALISAY"),
("041031", "CITY OF TANAUAN"),
("166819", "CITY OF TANDAG (Capital)"),
("074621", "CITY OF TANJAY"),
("036916", "CITY OF TARLAC (Capital)"),
("045647", "CITY OF TAYABAS"),
("015546", "CITY OF URDANETA"),
("101321", "CITY OF VALENCIA"),
("137504", "CITY OF VALENZUELA"),
("064531", "CITY OF VICTORIAS"),
("012934", "CITY OF VIGAN (Capital)"),
("104205", "CLARIN"),
("071214", "CLARIN"),
("166706", "CLAVER"),
("104306", "CLAVERIA"),
("054107", "CLAVERIA"),
("021511", "CLAVERIA"),
("126502", "COLUMBIO"),
("118201", "COMPOSTELA"),
("072218", "COMPOSTELA"),
("036905", "CONCEPCION"),
("104206", "CONCEPCION"),
("175905", "CONCEPCION"),
("063015", "CONCEPCION"),
("148102", "CONNER"),
("072219", "CONSOLACION"),
("175906", "CORCUERA"),
("023109", "CORDON"),
("072220", "CORDOVA"),
("071215", "CORELLA"),
("175309", "CORON"),
("166808", "CORTES"),
("071216", "CORTES"),
("129804", "COTABATO CITY"),
("061901", "CUARTERO"),
("041009", "CUENCA"),
("087805", "CULABA"),
("060606", "CULASI"),
("175322", "CULION"),
("012808", "CURRIMAO"),
("034906", "CUYAPO"),
("175310", "CUYO"),
("072221", "DAANBANTAYAN"),
("051603", "DAET (Capital)"),
("083717", "DAGAMI"),
("071217", "DAGOHOY"),
("140105", "DAGUIOMAN"),
("015518", "DAGUPAN CITY"),
("072222", "DALAGUETE"),
("101302", "DAMULOG"),
("071218", "DANAO"),
("072223", "DANAO CITY"),
("101303", "DANGCAGAN"),
("140106", "DANGLAS"),
("061902", "DAO"),
("166707", "DAPA"),
("097201", "DAPITAN CITY"),
("050503", "DARAGA (LOCSIN)"),
("086006", "DARAM"),
("015519", "DASOL"),
("153828", "DATU ABDULLAH SANGKI"),
("153831", "DATU ANGGAL MIDTIMBANG"),
("153830", "DATU BLAH T. SINSUAT"),
("153835", "DATU HOFFER AMPATUAN"),
("153807", "DATU ODIN SINSUAT (DINAIG)"),
("153805", "DATU PAGLAS"),
("153806", "DATU PIANG"),
("153836", "DATU SALIBO"),
("153826", "DATU SAUDI-AMPATUAN"),
("153827", "DATU UNSAY"),
("074609", "DAUIN"),
("071219", "DAUIS"),
("112402", "DAVAO CITY"),
("166708", "DEL CARMEN"),
("051712", "DEL GALLEGO"),
("023118", "DELFIN ALBANO (MAGSAYSAY)"),
("025006", "DIADI"),
("025703", "DIFFUN"),
("037703", "DILASAG"),
("054108", "DIMASALANG"),
("097305", "DIMATALING"),
("071220", "DIMIAO"),
("168503", "DINAGAT"),
("037704", "DINALUNGAN"),
("030804", "DINALUPIHAN"),
("023110", "DINAPIGUE"),
("097306", "DINAS"),
("037705", "DINGALAN"),
("063016", "DINGLE"),
("012809", "DINGRAS"),
("037706", "DIPACULAO"),
("098303", "DIPLAHAN"),
("097202", "DIPOLOG CITY (Capital)"),
("153624", "DITSAAN-RAMAIN"),
("023111", "DIVILACAN"),
("082606", "DOLORES"),
("140107", "DOLORES"),
("045615", "DOLORES"),
("101304", "DON CARLOS"),
("118601", "DON MARCELINO"),
("104217", "DON VICTORIANO CHIONGBIAN  (DON MARIANO MARCOS)"),
("031424", "DOÑA REMEDIOS TRINIDAD"),
("056207", "DONSOL"),
("063017", "DUEÑAS"),
("071221", "DUERO"),
("083718", "DULAG"),
("074610", "DUMAGUETE CITY (Capital)"),
("061903", "DUMALAG"),
("097307", "DUMALINAO"),
("012810", "DUMALNEG"),
("063018", "DUMANGAS"),
("072224", "DUMANJUG"),
("175311", "DUMARAN"),
("061904", "DUMARAO"),
("097308", "DUMINGAG"),
("025007", "DUPAX DEL NORTE"),
("025008", "DUPAX DEL SUR"),
("023112", "ECHAGUE"),
("175312", "EL NIDO (BACUIT)"),
("021512", "ENRILE"),
("064508", "ENRIQUE B. MAGALONA (SARAVIA)"),
("076101", "ENRIQUE VILLANUEVA"),
("133908", "ERMITA"),
("160303", "ESPERANZA"),
("054109", "ESPERANZA"),
("126503", "ESPERANZA"),
("063019", "ESTANCIA"),
("043408", "FAMY"),
("175916", "FERROL"),
("148103", "FLORA"),
("035406", "FLORIDABLANCA"),
("034907", "GABALDON (BITULOK & SABANI)"),
("051713", "GAINZA"),
("012909", "GALIMUYOD"),
("084807", "GAMAY"),
("023113", "GAMU"),
("153609", "GANASSI"),
("086007", "GANDARA"),
("051714", "GARCHITORENA"),
("071222", "GARCIA HERNANDEZ"),
("174003", "GASAN"),
("021513", "GATTARAN"),
("042123", "GEN. MARIANO ALVAREZ"),
("153819", "GEN. S. K. PENDATUN"),
("042107", "GENERAL EMILIO AGUINALDO"),
("045616", "GENERAL LUNA"),
("166710", "GENERAL LUNA"),
("082607", "GENERAL MACARTHUR"),
("034909", "GENERAL MAMERTO NATIVIDAD"),
("045617", "GENERAL NAKAR"),
("126303", "GENERAL SANTOS CITY (DADIANGAS)"),
("034910", "GENERAL TINIO (PAPAYA)"),
("042108", "GENERAL TRIAS"),
("036906", "GERONA"),
("166711", "GIGAQUIT"),
("052005", "GIGMOTO"),
("072225", "GINATILAN"),
("104308", "GINGOOG CITY"),
("082608", "GIPORLOS"),
("104309", "GITAGUM"),
("128002", "GLAN"),
("175206", "GLORIA"),
("051715", "GOA"),
("097225", "GODOD"),
("021514", "GONZAGA"),
("112506", "GOVERNOR GENEROSO"),
("012910", "GREGORIO DEL PILAR (CONCEPCION)"),
("035407", "GUAGUA"),
("056208", "GUBAT"),
("031408", "GUIGUINTO"),
("034911", "GUIMBA"),
("063020", "GUIMBAL"),
("045618", "GUINAYANGAN"),
("071223", "GUINDULMAN"),
("153825", "GUINDULUNGAN"),
("050504", "GUINOBATAN"),
("101802", "GUINSILIBAN"),
("097343", "GUIPOS"),
("082609", "GUIUAN"),
("045619", "GUMACA"),
("097223", "GUTALAC"),
("150710", "HADJI MOHAMMAD AJUL"),
("150712", "HADJI MUHTAMAD"),
("156606", "HADJI PANGLIMA TAHIL (MARUNGGAS)"),
("112404", "HAGONOY"),
("031409", "HAGONOY"),
("060608", "HAMTIC"),
("030805", "HERMOSA"),
("082610", "HERNANI"),
("083719", "HILONGOS"),
("086008", "HINABANGAN"),
("166809", "HINATUAN"),
("083720", "HINDANG"),
("142709", "HINGYON"),
("064511", "HINIGARAN"),
("064512", "HINOBA-AN (ASIA)"),
("086403", "HINUNANGAN"),
("086404", "HINUNDAYAN"),
("142702", "HUNGDUAN"),
("037105", "IBA (Capital)"),
("041010", "IBAAN"),
("060406", "IBAJAY"),
("063021", "IGBARAS"),
("021515", "IGUIG"),
("023114", "ILAGAN CITY (Capital)"),
("103504", "ILIGAN CITY"),
("064513", "ILOG"),
("063022", "ILOILO CITY (Capital)"),
("098304", "IMELDA"),
("101305", "IMPASUG-ONG"),
("042109", "IMUS CITY"),
("071224", "INABANGA"),
("156601", "INDANAN"),
("042110", "INDANG"),
("045620", "INFANTA"),
("015520", "INFANTA"),
("104310", "INITAO"),
("083721", "INOPACAN"),
("133909", "INTRAMUROS"),
("098305", "IPIL (Capital)"),
("051716", "IRIGA CITY"),
("056209", "IROSIN"),
("083722", "ISABEL"),
("064514", "ISABELA"),
("112317", "ISLAND GARDEN CITY OF SAMAL"),
("126504", "ISULAN (Capital)"),
("020902", "ITBAYAT"),
("141106", "ITOGON"),
("020903", "IVANA"),
("061905", "IVISAN"),
("160205", "JABONGA"),
("034912", "JAEN"),
("071225", "JAGNA"),
("045807", "JALA-JALA"),
("061906", "JAMINDAN"),
("063023", "JANIUAY"),
("083723", "JARO"),
("104311", "JASAAN"),
("083724", "JAVIER (BUGHO)"),
("071226", "JETAFE"),
("086009", "JIABONG"),
("074612", "JIMALALUD"),
("104207", "JIMENEZ"),
("082611", "JIPAPAD"),
("156602", "JOLO (Capital)"),
("045621", "JOMALIG"),
("023115", "JONES"),
("067902", "JORDAN (Capital)"),
("118602", "JOSE ABAD SANTOS (TRINIDAD)"),
("097222", "JOSE DALMAN (PONOT)"),
("051605", "JOSE PANGANIBAN"),
("097337", "JOSEFINA"),
("050505", "JOVELLAR"),
("056210", "JUBAN"),
("083725", "JULITA"),
("124703", "KABACAN"),
("098306", "KABASALAN"),
("141107", "KABAYAN"),
("148104", "KABUGAO (Capital)"),
("153814", "KABUNTALAN (TUMBAO)"),
("101306", "KADINGILAN"),
("126505", "KALAMANSIG"),
("097227", "KALAWIT"),
("175321", "KALAYAAN"),
("043409", "KALAYAAN"),
("060407", "KALIBO (Capital)"),
("101307", "KALILANGAN"),
("156603", "KALINGALAN CALUANG"),
("083726", "KANANGA"),
("153610", "KAPAI"),
("112305", "KAPALONG"),
("141108", "KAPANGAN"),
("153639", "KAPATAGAN"),
("103505", "KAPATAGAN"),
("025009", "KASIBU"),
("097203", "KATIPUNAN"),
("103507", "KAUSWAGAN"),
("087806", "KAWAYAN"),
("042111", "KAWIT"),
("025010", "KAYAPA"),
("128003", "KIAMBA"),
("142703", "KIANGAN"),
("101308", "KIBAWE"),
("112406", "KIBLAWAN"),
("141109", "KIBUNGAN"),
("104312", "KINOGUITAN"),
("101309", "KITAOTAO"),
("160206", "KITCHARAO"),
("103508", "KOLAMBUGAN"),
("097311", "KUMALARANG"),
("064516", "LA CARLOTA CITY"),
("064517", "LA CASTELLANA"),
("074613", "LA LIBERTAD"),
("097204", "LA LIBERTAD"),
("036907", "LA PAZ"),
("140108", "LA PAZ"),
("083728", "LA PAZ"),
("160304", "LA PAZ"),
("141110", "LA TRINIDAD (Capital)"),
("118202", "LAAK (SAN VICENTE)"),
("097312", "LABANGAN"),
("097205", "LABASON"),
("051606", "LABO"),
("015521", "LABRADOR"),
("140109", "LACUB"),
("140110", "LAGANGILANG"),
("142704", "LAGAWE (Capital)"),
("140111", "LAGAYAN"),
("104313", "LAGONGLONG"),
("051717", "LAGONOY"),
("104314", "LAGUINDINGAN"),
("126319", "LAKE SEBU"),
("097333", "LAKEWOOD"),
("021516", "LAL-LO"),
("103509", "LALA"),
("126508", "LAMBAYONG (MARIANO MARCOS)"),
("063025", "LAMBUNAO"),
("142705", "LAMUT"),
("140112", "LANGIDEN"),
("157009", "LANGUYAN"),
("101310", "LANTAPAN"),
("150703", "LANTAWAN"),
("166810", "LANUZA"),
("015548", "LAOAC"),
("012812", "LAOAG CITY (Capital)"),
("084808", "LAOANG"),
("084809", "LAPINIG"),
("072226", "LAPU-LAPU CITY (OPON)"),
("097313", "LAPUYAN"),
("076102", "LARENA"),
("084810", "LAS NAVAS"),
("160207", "LAS NIEVES"),
("021517", "LASAM"),
("060609", "LAUA-AN"),
("034913", "LAUR"),
("041011", "LAUREL"),
("084811", "LAVEZARES"),
("082612", "LAWAAN"),
("076103", "LAZI"),
("126506", "LEBAK"),
("063026", "LEGANES"),
("050506", "LEGAZPI CITY (Capital)"),
("063027", "LEMERY"),
("041012", "LEMERY"),
("063028", "LEON"),
("083729", "LEYTE"),
("060408", "LEZO"),
("041013", "LIAN"),
("166811", "LIANGA"),
("060409", "LIBACAO"),
("086405", "LIBAGON"),
("060610", "LIBERTAD"),
("104315", "LIBERTAD"),
("168504", "LIBJO (ALBOR)"),
("051718", "LIBMANAN"),
("050507", "LIBON"),
("101311", "LIBONA"),
("124705", "LIBUNGAN"),
("034914", "LICAB"),
("140113", "LICUAN-BAAY (LICUAN)"),
("012911", "LIDLIDDA"),
("071227", "LILA"),
("043410", "LILIW"),
("072227", "LILOAN"),
("086406", "LILOAN"),
("097206", "LILOY"),
("086419", "LIMASAWA"),
("030806", "LIMAY"),
("103510", "LINAMON"),
("175313", "LINAPACAN"),
("015522", "LINGAYEN (Capital)"),
("166812", "LINGIG"),
("041014", "LIPA CITY"),
("034915", "LLANERA"),
("082613", "LLORENTE"),
("071228", "LOAY"),
("041015", "LOBO"),
("071229", "LOBOC"),
("175907", "LOOC"),
("175103", "LOOC"),
("071230", "LOON"),
("084824", "LOPE DE VEGA"),
("045622", "LOPEZ"),
("104208", "LOPEZ JAENA"),
("168505", "LORETO"),
("160305", "LORETO"),
("043411", "LOS BAÑOS"),
("140114", "LUBA"),
("175104", "LUBANG"),
("035408", "LUBAO"),
("143206", "LUBUAGAN"),
("045623", "LUCBAN"),
("045624", "LUCENA CITY (Capital)"),
("104316", "LUGAIT"),
("156617", "LUGUS"),
("043412", "LUISIANA"),
("153611", "LUMBA-BAYABAO (MAGUING)"),
("153641", "LUMBACA-UNAYAN"),
("043413", "LUMBAN"),
("153612", "LUMBATAN"),
("153636", "LUMBAYANAGUE"),
("023116", "LUNA"),
("148105", "LUNA"),
("013310", "LUNA"),
("034916", "LUPAO"),
("051719", "LUPI"),
("112507", "LUPON"),
("126507", "LUTAYAN"),
("156604", "LUUK"),
("124710", "M'LANG"),
("061907", "MA-AYON"),
("128004", "MAASIM"),
("063029", "MAASIN"),
("035409", "MABALACAT CITY"),
("074614", "MABINAY"),
("015523", "MABINI"),
("071231", "MABINI"),
("041016", "MABINI"),
("118203", "MABINI (DOÑA ALICIA)"),
("043414", "MABITAC"),
("098307", "MABUHAY"),
("035410", "MACABEBE"),
("045625", "MACALELON"),
("083730", "MACARTHUR"),
("118204", "MACO"),
("023117", "MACONACON"),
("086408", "MACROHON"),
("060410", "MADALAG"),
("153613", "MADALUM"),
("153614", "MADAMBA"),
("025704", "MADDELA"),
("166813", "MADRID"),
("072228", "MADRIDEJOS"),
("035411", "MAGALANG"),
("056211", "MAGALLANES"),
("042112", "MAGALLANES"),
("160208", "MAGALLANES"),
("051720", "MAGARAO"),
("043415", "MAGDALENA"),
("175908", "MAGDIWANG"),
("124706", "MAGPET"),
("175314", "MAGSAYSAY"),
("112407", "MAGSAYSAY"),
("175105", "MAGSAYSAY"),
("103511", "MAGSAYSAY"),
("104317", "MAGSAYSAY (LINUGOS)"),
("012912", "MAGSINGAL"),
("153634", "MAGUING"),
("083731", "MAHAPLAG"),
("020904", "MAHATAO"),
("097315", "MAHAYAG"),
("101803", "MAHINOG"),
("103512", "MAIGO"),
("156605", "MAIMBUNG"),
("166714", "MAINIT"),
("128005", "MAITUM"),
("043416", "MAJAYJAY"),
("060411", "MAKATO"),
("124707", "MAKILALA"),
("153615", "MALABANG"),
("072229", "MALABUYOC"),
("112408", "MALALAG"),
("098308", "MALANGAS"),
("128006", "MALAPATAN"),
("015524", "MALASIQUI"),
("133910", "MALATE"),
("060412", "MALAY"),
("140115", "MALIBCONG"),
("050509", "MALILIPOT"),
("166715", "MALIMONO"),
("060413", "MALINAO"),
("050510", "MALINAO"),
("118603", "MALITA"),
("086409", "MALITBOG"),
("101313", "MALITBOG"),
("023119", "MALLIG"),
("128007", "MALUNGON"),
("150704", "MALUSO"),
("041017", "MALVAR"),
("153820", "MAMASAPANO"),
("101804", "MAMBAJAO (Capital)"),
("175106", "MAMBURAO (Capital)"),
("061908", "MAMBUSAO"),
("140116", "MANABO"),
("015525", "MANAOAG"),
("064518", "MANAPLA"),
("112508", "MANAY"),
("054110", "MANDAON"),
("072230", "MANDAUE CITY"),
("015526", "MANGALDAN"),
("015527", "MANGATAREM"),
("153832", "MANGUDADATU"),
("050511", "MANITO"),
("074615", "MANJUYOD"),
("141111", "MANKAYAN"),
("101314", "MANOLO FORTICH"),
("175207", "MANSALAY"),
("104318", "MANTICAO"),
("097207", "MANUKAN"),
("084812", "MAPANAS"),
("015528", "MAPANDAN"),
("157003", "MAPUN (CAGAYAN DE TAWI-TAWI)"),
("086010", "MARABUT"),
("042113", "MARAGONDON"),
("118205", "MARAGUSAN (SAN MARIANO)"),
("101315", "MARAMAG"),
("153616", "MARANTAO"),
("153617", "MARAWI CITY (Capital)"),
("012813", "MARCOS"),
("097317", "MARGOSATUBIG"),
("076104", "MARIA"),
("037707", "MARIA AURORA"),
("071232", "MARIBOJOC"),
("166814", "MARIHATAG"),
("031411", "MARILAO"),
("087807", "MARIPIPI"),
("030807", "MARIVELES"),
("153631", "MAROGONG"),
("035412", "MASANTOL"),
("037106", "MASINLOC"),
("153618", "MASIU"),
("082614", "MASLOG"),
("041018", "MATAASNAKAHOY"),
("083733", "MATAG-OB"),
("124708", "MATALAM"),
("083734", "MATALOM"),
("112410", "MATANAO"),
("153809", "MATANOG"),
("056212", "MATNOG"),
("086011", "MATUGUINAO"),
("103513", "MATUNGAO"),
("045627", "MAUBAN"),
("118206", "MAWAB"),
("036908", "MAYANTOC"),
("082615", "MAYDOLONG"),
("083735", "MAYORGA"),
("142706", "MAYOYAO"),
("072231", "MEDELLIN"),
("104319", "MEDINA"),
("042114", "MENDEZ (MENDEZ-NUÑEZ)"),
("082616", "MERCEDES"),
("051607", "MERCEDES"),
("083736", "MERIDA"),
("035413", "MEXICO"),
("063030", "MIAGAO"),
("097318", "MIDSALIP"),
("124709", "MIDSAYAP"),
("054112", "MILAGROS"),
("051721", "MILAOR"),
("063031", "MINA"),
("051722", "MINALABAC"),
("035414", "MINALIN"),
("072232", "MINGLANILLA"),
("072233", "MOALBOAL"),
("054113", "MOBO"),
("174004", "MOGPOG"),
("064519", "MOISES PADILLA (MAGALLON)"),
("097319", "MOLAVE"),
("036909", "MONCADA"),
("084813", "MONDRAGON"),
("118207", "MONKAYO"),
("054114", "MONREAL"),
("118208", "MONTEVISTA"),
("030808", "MORONG"),
("045809", "MORONG"),
("086012", "MOTIONG"),
("045628", "MULANAY"),
("153619", "MULONDO"),
("103514", "MUNAI"),
("064520", "MURCIA"),
("097208", "MUTIA"),
("104320", "NAAWAN"),
("060414", "NABAS")]


class RespondentProfileForm(forms.ModelForm):
    agency = forms.ChoiceField(label = "AGENCY NAME",choices=AGENCY_CHOICES)
    name = forms.CharField(label="Name (LN, FN, MI) ", max_length=150, widget=forms.TextInput
                           (attrs={'placeholder':'Dela Cruz, Juana, P'}))
    position = forms.CharField(label="Position:", max_length=150)
    age = forms.ChoiceField(label="Age",choices=AGE_CHOICES)
    sex = forms.ChoiceField(label="Sex", choices=SEX_CHOICES)
    civil_status = forms.ChoiceField(label="Civil Status", choices=CIVIL_STATUS)
    pursuant = forms.CharField(
        label="Pursuant to: (a) Indigenous People's Act (RA 8371); (b) Magna Carta for Disabled Persons (RA 7277); and (c) Solo Parents Welfare Act of 2000 (RA 8972), please answer the following items:",
        max_length=0, required=False)

    indigenous = forms.ChoiceField(label="Are you a member of any indigenous group?", choices=YES_NO)
    indigenous_specify = forms.CharField(label="Please specify:", max_length=250, required=False)
    disability = forms.ChoiceField(label="Are you a Person With Disability?", choices=YES_NO)
    disability_specify = forms.CharField(label="Please specify ID Number:", max_length=250, required=False)
    soloparent = forms.ChoiceField(label="Are you a SOLO Parent?", choices=YES_NO)
    soloparent_specify = forms.CharField(label="Please specify ID Number:", max_length=250, required=False)
    religion = forms.CharField(label="Religion", max_length=30)
    #res_region = forms.CharField(label="8. Region", max_length=150)
    res_region = forms.ChoiceField(label="Region", choices=REGION)
    res_province = forms.ChoiceField(label="Province",choices=PROVINCE)
    res_city = forms.ChoiceField(label="City", choices=CITY)
    highest_educ = forms.ChoiceField(label="Highest Educational Attained", choices=HIGHEST_EDUC_ATTAINED)
    educ_program = forms.CharField(label="Specify program/course/year", max_length=120, required=False)
    salary_grade = forms.ChoiceField(label="Employment Level/Salary Grade", choices=SALARY_LEVEL)
    gross_montly_allow = forms.ChoiceField(label="Gross Monthly Salary(Including Allowance/s)", choices=GROSS_ALLOWANCE)
    employment_status = forms.ChoiceField(label="Employment Status", choices=EMPLOY_STATUS)
    reason_status = forms.ChoiceField(label="Reason for being Temporary/Contractual/JO/Casual", choices=REASON_STATUS, required=False)
    reason_status_others = forms.CharField(label="Others, please cite", max_length=250, required=False)

    class Meta:
        model = RespondentProfile
        fields = '__all__'

YN_CHOICES = [
    ('Yes', 'Yes'),
    ('No', 'No')
]

YNA_CHOICES = [
    ('Yes', 'Yes'),
    ('No', 'No'),
    ('NA', 'Not Applicable')
]

PLACE_WORK_SPOUSE = [
    ('Metro Manila', 'Metro Manila'),
    ('Province', 'Province'),
    ('Abroad', 'Abroad')
]

SOURCE_INCOME_SPOUSE = [
    ('Government Employee', 'Government Employee'),
    ('Private Employee', 'Private Employee'),
    ('Self-Employed', 'Self-Employed')
]

GROSS_SPOUSE = [
    ('More than P300,000.00', 'More than P300,000.00'),
    ('P299,000.00 - 250,000.00', 'P299,000.00 - 250,000.00'),
    ('P249,000.00 – 200, 000.00', 'P249,000.00 – 200, 000.00'),
    ('P199,000.00 – 150,000.00', 'P199,000.00 – 150,000.00'),
    ('P149,000.00 – 100, 000.00', 'P149,000.00 – 100, 000.00'),
    ('P99,000.00 – 50,000.00', 'P99,000.00 – 50,000.00'),
    ('P49,000.00 – 20, 000.00', 'P49,000.00 – 20, 000.00'),
    ('below P20,000.00', 'below P20,000.00')
]

NUMBER_CHILDS = [
    ('None', 'None'),
    ('1', '1'),
    ('2', '2'),
    ('3', '3'),
    ('4 or more', '4 or more')
]

AGES_CHILDS_HOUSEHOLD_CHOICES = [
    ('0-3 years old', '0-3 years old'),
    ('4-6 years old', '4-6 years old'),
    ('7-12 years old', '7-12 years old'),
    ('13-18 years old', '13-18 years old'),
    ('19 years old & above', '19 years old & above'),
    ('Not Applicable', 'Not Applicable'),
    ('','')
]

NUMBER_PEOPLE_OWN_FAMILY = [
    ('None', 'None'),
    ('1', '1'),
    ('2', '2'),
    ('3', '3'),
    ('4 or more', '4 or more')
]

NUMBER_OTHER_FAMILY = [
    ('None', 'None'),
    ('1', '1'),
    ('2', '2'),
    ('3', '3'),
    ('4 or more', '4 or more')
]

HOUSEHELP = [
    ('None', 'None'),
    ('1', '1'),
    ('2', '2'),
    ('3', '3'),
    ('4 or more', '4 or more')
]

NUMBER_PEOPLE_HOUSEHOLD = [
    ('None', 'None'),
    ('1', '1'),
    ('2', '2'),
    ('3', '3'),
    ('4 or more', '4 or more')
]

NUMBER_EARNING_CHILDREN = [
    ('0', '0'),
    ('1-2', '1-2'),
    ('3-4', '3-4'),
    ('5 or more', '5 or more')
]

NUMBER_OTHER_EARNING_HOUSEHOLD = [
    ('0', '0'),
    ('1-2', '1-2'),
    ('3-4', '3-4'),
    ('5 or more', '5 or more')
]

class HouseholdInfoForm(forms.ModelForm):
    breadwinner = forms.CharField(label="Are you the breadwinner of the Household?", widget=forms.RadioSelect(choices=YN_CHOICES))
    spouse_employed = forms.CharField(label="Is your spouse employed? (No, if solo parent w/ Child/ren, husband has no work; N/A, if Single never been married.)", widget=forms.RadioSelect(choices=YNA_CHOICES))
    place_work = forms.CharField(label="Place of Work of your Spouse", widget=forms.RadioSelect(choices=PLACE_WORK_SPOUSE))
    place_where = forms.CharField(label="Specify where:", max_length=100, required=False)
    source_income_spouse = forms.CharField(
        label="Source of income of your spouse",
        widget=forms.RadioSelect(choices=SOURCE_INCOME_SPOUSE), required=False)
    gross_mothly_salary_spouse = forms.CharField(
        label="Gross Monthly salary of your spouse (including allowance/s)",
        widget=forms.RadioSelect(choices=GROSS_SPOUSE), required=False)
    number_childs = forms.CharField(label="Number of children", widget=forms.RadioSelect(choices=NUMBER_CHILDS), required=False)
    ages_childs_household = MultiSelectField(
        "Ages of children living in your household",
        MultiSelectField(choices=AGES_CHILDS_HOUSEHOLD_CHOICES), max_length=1000)
    num_people = forms.CharField(label="Number of People living in your household:", max_length=0, required=False)
    number_people_live_household = forms.CharField(label="5.1. Own family including yourself", widget=forms.RadioSelect(choices=NUMBER_PEOPLE_OWN_FAMILY))
    other_family = forms.CharField(label="Other family unit", widget=forms.RadioSelect(choices=NUMBER_OTHER_FAMILY))
    house_help = forms.CharField(label="Househelp", widget=forms.RadioSelect(choices=HOUSEHELP))
    # total_number_in_household = forms.CharField(label="5.4 Total number of persons in your household", widget=forms.RadioSelect(choices=NUMBER_PEOPLE_HOUSEHOLD))
    # number_children_earning = forms.CharField(label="6. Number of earning children in your household", widget=forms.RadioSelect(choices=NUMBER_EARNING_CHILDREN))
    number_children_earning = forms.CharField(label="6. Number of earning children in your household", widget=forms.NumberInput(attrs={'size': 6}))
    # other_earning_household = forms.CharField(label="7. Other earning members within the household", widget=forms.RadioSelect(choices=NUMBER_OTHER_EARNING_HOUSEHOLD))
    other_earning_household = forms.CharField(label="7. Other earning members within the household",
                                             widget=forms.NumberInput(attrs={'size': 6}))

    class Meta:
        model = HouseholdInfo
        fields = '__all__'

MEMBERSHIP_POSITION = [
    ('Officer', 'Officer'),
    ('Member', 'Member')
]

class MembershipOrganizationForm(forms.ModelForm):
    office = forms.CharField(label="1. Office (union, etc.)", widget=forms.RadioSelect(choices=YN_CHOICES))
    office_position = forms.CharField(label="1.1. If yes, identify position", widget=forms.RadioSelect(choices=MEMBERSHIP_POSITION))
    community = forms.CharField(label="2. Community", widget=forms.RadioSelect(choices=YN_CHOICES))
    community_position = forms.CharField(label="2.1. If yes, identify position", widget=forms.RadioSelect(choices=MEMBERSHIP_POSITION))
    religious = forms.CharField(label="3. Religious", widget=forms.RadioSelect(choices=YN_CHOICES))
    religious_position = forms.CharField(label="3.1 If yes, identify position", widget=forms.RadioSelect(choices=MEMBERSHIP_POSITION))
    other_membership = forms.CharField(label="4. Other membership organizations", widget=forms.Textarea, max_length=100)

    class Meta:
        model = MembershipOrganization
        fields = '__all__'

class OtherPersonalInfoForm(forms.ModelForm):
    skills = forms.CharField(label="1. Skills", widget=forms.Textarea, max_length=250)
    Hobbies = forms.CharField(label="2. Hobbies", widget=forms.Textarea, max_length=250)
    Allergies = forms.CharField(label="2. Allergies", widget=forms.Textarea, max_length=250)

    class Meta:
        model = OtherPersonalInfo
        fields = '__all__'

class SuggestionsForm(forms.ModelForm):
    suggestion = forms.CharField(label="1. Kindly give your suggestions not covered in the survey indicators but will contribute in improving of this survey", widget=forms.Textarea, max_length=250)

    class Meta:
        model = Suggestions
        fields = '__all__'

class OtherConcernForm(forms.ModelForm):
    concern = forms.CharField(label="2. Kindly give your other concerns relative to your organization", widget=forms.Textarea, max_length=250)

    class Meta:
        model = OtherConcern
        fields = '__all__'

class BulletinForm(forms.ModelForm):
    class Meta:
        model = Post
        #fields = '__all__'
        fields = ('Btitle', 'content' , 'pdf')


#######
YOUR_PLACE_WORK = [
    ('Metro Manila', 'Metro Manila'),
    ('Province', 'Province'),
]

YN_CHOICES = [
    ('Yes', 'Yes'),
    ('No', 'No')
]

MODE_TRANSPORT = [
    ('Public Utility Jeep (PUJ)', 'Public Utility Jeep (PUJ)'),
    ('Public Utility Bus (PUB)', 'Public Utility Bus (PUB)'),
    ('Utility Vehicle Express (UV Express)', 'Utility Vehicle Express (UV Express)'),
    ('Government Vehicle (Shuttle Service)', 'Government Vehicle (Shuttle Service)'),
    ('Government Vehicle (Issued Service)', 'Government Vehicle (Issued Service)'),
    ('Motorcycle taxi', 'Motorcycle taxi'),
    ('Taxi', 'Taxi'),
    ('Tricycle/e-trike', 'Tricycle/e-trike'),
    ('GRAB', 'GRAB'),
    ('Metro train', 'Metro train'),
    ('Private Vehicle (Own car)', 'Private Vehicle (Own car)'),
    ('Bicycle/e-bike/Scooter', 'Bicycle/e-bike/Scooter'),
    ('Own Motorcycle', 'Own Motorcycle'),
    ('Carpool', 'Carpool'),
    ('Not Applicable', 'Not Applicable'),
]

TRAVEL_TIME = (
    ('30 minutes to 1 hour', '30 minutes to 1 hour'),
    ('1 hour to 2 hours', '1 hour to 2 hours'),
    ('2 hours to 3 hours', '2 hours to 3 hours'),
    ('4 hours or more', '4 hours or more')
)

AMOUNT_TRANSPORT_FARE = (
    ('0 to 25 Pesos', '0 to 25 Pesos'),
    ('26 to 50 pesos', '26 to 50 pesos'),
    ('51 to 75 pesos', '51 to 75 pesos'),
    ('76 to 100 pesos', '76 to 100 pesos'),
    ('101 to 125 pesos', '101 to 125 pesos'),
    ('126 to 150 pesos', '126 to 150 pesos'),
    ('151 to 175 pesos', '151 to 175 pesos'),
    ('176 pesos or more', '176 pesos or more')
)

YEARS_SERVICE = (
    ('0-5 years', '0-5 years'),
    ('6-10 years', '6-10 years'),
    ('11-15 years', '11-15 years'),
    ('16-20 years', '16-20 years'),
    ('21-30 years', '21-30 years'),
    ('31 years and above', '31 years and above')
)

NUMBER_XPROMOTED = [
    ('0', '0'),
    ('1', '1'),
    ('2', '2'),
    ('3', '3'),
    ('4 or more', '4 or more')
]

YES_ATTENDANCE_TRAINING = (
    ('1-5 times', '1-5 times'),
    ('6-10 times', '6-10 times'),
    ('11-15 times', '11-15 times'),
    ('16-20 times', '16-20 times'),
    ('21 times and above', '21 times and above')
)

NO_ATTENDANCE_TRAINING = (
    ('Not interested', 'Not interested'),
    ('No budget', 'No budget'),
    ('Health Reason', 'Health Reason'),
    ('Management Decision', 'Management Decision'),
    ('Favoritism', 'Favoritism'),
    ('Personal reason', 'Personal reason'),
    ('No opportunity', 'No opportunity'),
    ('Others', 'Others'),
    ('','')
)

LEVEL_SATISFACTION = [
    ('1', '1'),
    ('2', '2'),
    ('3', '3'),
    ('4', '4'),
    ('5', '5')
]

GAD_TRAINING = [
    ('Gender Sensitivity Training', 'Gender Sensitivity Training'),
    ('Gender Mainstreaming Seminar', 'Gender Mainstreaming Seminar'),
    ('GAD Planning and Budgeting', 'GAD Planning and Budgeting'),
    ('Laws on Women (VAWC etc.)', 'Laws on Women (VAWC, etc.)'),
    ('Gender Audit', 'Gender Audit'),
    ('Gender Analysis Training', 'Gender Analysis Training'),
    ('None', 'None'),
    ('Others', 'Others, please specify')
]

REASON_NOT_AVAIL_CODI = [
    ('Not familiar with CODI', 'Not familiar with CODI'),
    ('No functional CODI', 'No functional CODI'),
    ('No CODI', 'No CODI'),
    ('Others', 'Others, please identify')
]

WHOM_SEEK_HELP = [
    ('Immediate family', 'Immediate family'),
    ('Friends/ co-workers', 'Friends/ co-workers'),
    ('Women’s Desk (Municipal Level)', 'Women’s Desk (Municipal Level)'),
    ('Barangay', 'Barangay'),
    ('Courts', 'Courts'),
    ('Others', 'Others, please identify')
]

class WorkRelatedInfoForm(forms.ModelForm):
    place_ofwork = forms.CharField(label="1. Your place of Work:", max_length=1, required=False)
    place_work_region = forms.CharField(label="Region:", max_length=30)
    place_work_city = forms.CharField(label="City/Municipality:", max_length=30)
    mode_transport = MultiSelectField("1.1. Mode of transportation, going to work and vice versa", MultiSelectField(choices=MODE_TRANSPORT), max_length=500)
    travel_time_form_home = forms.CharField(label="1.2. Travel time from home to work including traffic (not including fieldwork)", widget=forms.RadioSelect(choices=TRAVEL_TIME))
    travel_time_from_work = forms.CharField(label="1.3. Travel time from work to home including traffic (not including fieldwork)", widget=forms.RadioSelect(choices=TRAVEL_TIME))
    amount_transport_fare = forms.CharField(label="1.3. Amount spent for transportation fare (per day) going to work and vice versa:", widget=forms.RadioSelect(choices=AMOUNT_TRANSPORT_FARE))
    years_service = forms.CharField(label="2. Years of service in your agency:", widget=forms.RadioSelect(choices=YEARS_SERVICE))
    number_x_promoted = forms.CharField(label="3. Number of times you have been promoted:", widget=forms.RadioSelect(choices=NUMBER_XPROMOTED))
    attendance_inter_training = forms.CharField(label="4. Attendance to any INTERNATIONAL trainings/seminars/workshops related to your work:", widget=forms.RadioSelect(choices=YN_CHOICES))
    yes_inter_training = forms.CharField(widget=forms.RadioSelect(choices=YES_ATTENDANCE_TRAINING), required=False)
    #no_inter_training = MultiSelectField("If no, why?", MultiSelectField(choices=NO_ATTENDANCE_TRAINING))
    # NO INTER TRAINING
    no_inter_training = MultiSelectField(MultiSelectField(choices=NO_ATTENDANCE_TRAINING), max_length=500)
    #no_inter_training = forms.MultipleChoiceField(label=False, widget=forms.CheckboxSelectMultiple,choices=NO_ATTENDANCE_TRAINING)
    no_inter_training_reason = forms.CharField(label="Reason, why?", max_length=1000, required=False)

    attendance_local_training = forms.CharField(label="5. Attendance to any LOCAL trainings/seminars/workshops related to your work in the past 5 year:", widget=forms.RadioSelect(choices=YN_CHOICES))
    yes_local_training = forms.CharField(widget=forms.RadioSelect(choices=YES_ATTENDANCE_TRAINING), required=False)
    #NO LOCAL TRAINING
    no_local_training = MultiSelectField(MultiSelectField(choices=NO_ATTENDANCE_TRAINING), max_length=500)
    no_local_training_reason = forms.CharField(label="Reason, why?", max_length=1000, required=False)

    attendance_inter_confer = forms.CharField(label="6. Attendance to any INTERNATIONAL conferences/meetings:", widget=forms.RadioSelect(choices=YN_CHOICES))
    yes_inter_confer = forms.CharField(widget=forms.RadioSelect(choices=YES_ATTENDANCE_TRAINING), required=False, label=False)
    #NO INTER CONFER
    no_inter_confer = MultiSelectField(MultiSelectField(choices=NO_ATTENDANCE_TRAINING), max_length=500)
    no_inter_confer_reason = forms.CharField(label="Reason, why?", max_length=1000, required=False)

    attendance_local_confer = forms.CharField(label="7. Attendance to any LOCAL conferences/meetings in the past 3 years:", widget=forms.RadioSelect(choices=YN_CHOICES))
    yes_local_confer = forms.CharField(widget=forms.RadioSelect(choices=YES_ATTENDANCE_TRAINING), required=False)
    #NO LOCAL CONFER
    no_local_confer = MultiSelectField(MultiSelectField(choices=NO_ATTENDANCE_TRAINING), max_length=500)
    no_local_confer_reason = forms.CharField(label="Reason, why?", max_length=1000, required=False)

    rate_technical = forms.CharField(label="8. Rate your level of satisfaction with the Head of your Agency from 1 to 5, with 5 being the highest: In terms of Technical Expertise", widget=forms.RadioSelect(choices=LEVEL_SATISFACTION))
    rate_technical_reason = forms.CharField(label="Kindly state your reason:", max_length=1000, required=False)
    rate_people = forms.CharField(label="9. Rate your level of satisfaction with the Head of your Agency from 1 to 5, with 5 being the highest: In terms of People Relations/Management", widget=forms.RadioSelect(choices=LEVEL_SATISFACTION))
    rate_people_reason = forms.CharField(label="Kindly state your reason:", max_length=1000, required=False)
    rate_tranparency = forms.CharField(label="10. Rate your level of satisfaction with the Head of your Agency from 1 to 5, with 5 being the highest: In terms of Transparency/Accountability/Integrity", widget=forms.RadioSelect(choices=LEVEL_SATISFACTION))
    rate_tranparency_reason = forms.CharField(label="Kindly state your reason:", max_length=1000, required=False)
    rate_gad = forms.CharField(label="11. Rate your level of satisfaction with the Head of your Agency from 1 to 5, with 5 being the highest: In terms of Gender and Development", widget=forms.RadioSelect(choices=LEVEL_SATISFACTION))
    rate_gad_reason = forms.CharField(label="Kindly state your reason:", max_length=1000, required=False)
    gad_training = MultiSelectField("12. GAD - Related Training attended:", MultiSelectField(choices=GAD_TRAINING))
    gad_other_training = forms.CharField(label="Others, please specify", max_length=1000, required=False)
    rate_gender_awareness = forms.CharField(label="13. Rate your level of gender awareness/sensitivity from 1 to 5, with 5 being the highest:", widget=forms.RadioSelect(choices=LEVEL_SATISFACTION))
    experience_sexual_harass = forms.CharField(label="14 Have you personally experienced sexual harassment?", widget=forms.RadioSelect(choices=YN_CHOICES))
    yes_seek_assistance_codi = forms.CharField(label="Did you ever seek assistance of the Committee on Decorum and Investigation (CODI)?", widget=forms.RadioSelect(choices=YN_CHOICES), required=False)
    yes_satisfied = forms.CharField(label="If yes, are you satisfied with the way they handled the case?", widget=forms.RadioSelect(choices=YN_CHOICES), required=False)
    satisfied_reason = forms.CharField(label="Cite your reason:", max_length=1000, required=False)
    reason_noavail_codi = forms.CharField(label="Reason for not availing CODI:", widget=forms.RadioSelect(choices=REASON_NOT_AVAIL_CODI), required=False)
    other_noavail_reason = forms.CharField(label="Please identify:", max_length=1000, required=False)
    experience_domestic_violence = forms.CharField(label="15. Have you personally experienced domestic violence?", widget=forms.RadioSelect(choices=YN_CHOICES))
    yes_seek_help = forms.CharField(label="If yes, did you ever seek help?", widget=forms.RadioSelect(choices=YN_CHOICES), required=False)
    domestic_seek_nohelp = forms.CharField(label="Please identify", max_length=1000, required=False)
    yes_towhom = forms.CharField(label="If yes, with whom?", widget=forms.RadioSelect(choices=WHOM_SEEK_HELP), required=False)
    reason_noseek_help = forms.CharField(label="If no, reason for not seeking help:", max_length=1000, required=False)
    iswork_affected = forms.CharField(label="16. Is your work performance affected by these domestic violence and sexual harassment?", widget=forms.RadioSelect(choices=YN_CHOICES))
    yes_reason = forms.CharField(label="If YES, kindly state your reason?", max_length=1000, required=False)

    class Meta:
        model = WorkRelatedInfo
        fields = '__all__'


#####practices

    YN_CHOICES = [
        ('Yes', 'Yes'),
        ('No', 'No')
    ]

    YNA_CHOICES = [
        ('Yes', 'Yes'),
        ('No', 'No'),
        ('N/A', 'N/A')
    ]

LEAVE_PRIVILEDGES = [
        ('Vacation Leave /Rest & Recreation Break', 'Vacation Leave /Rest & Recreation Break'),
        ('Maternity Leave (Expanded)', 'Maternity Leave (Expanded)'),
        ('Gynecological Leave', 'Gynecological Leave'),
        ('Sick Leave', 'Sick Leave'),
        ('Paternity Leave', 'Paternity Leave'),
        ('Study Leave/Academic/Scholarship Leave', 'Study Leave/Academic/Scholarship Leave'),
        ('Christmas/New Year’s Break', 'Christmas/New Year’s Break'),
        ('Forced Leave/Mandatory Leave', 'Forced Leave/Mandatory Leave'),
        ('Special Privilege Leave', 'Special Privilege Leave'),
        ('Solo Parent Leave', 'Solo Parent Leave'),
        ('Battered Women’s Leave (VAWC Leave)', 'Battered Women’s Leave (VAWC Leave)'),
        ('Rehabilitation Leave', 'Rehabilitation Leave'),
        ('Adoption Leave', 'Adoption Leave'),
        ('Calamity Leave/Emergency Leave', 'Calamity Leave/Emergency Leave'),
        ('Family/Home Visit Leave', 'Family/Home Visit Leave'),
        ('NONE', 'None'),
        ('Others', 'Others')
    ]

ABSENCES_MONTH = [
        ('0', '0'),
        ('1-2 days', '1-2 days'),
        ('3-4 days', '3-4 days'),
        ('5-6 days', '5-6 days'),
        ('7-8 days', '7-8 days'),
        ('9-10 days', '9-10 days'),
        ('11 days or more', '11 days or more')
    ]

HEALTH_REASON = [
        ('Schedule for dialysis', 'Schedule for dialysis'),
        ('Medical check-up', 'Medical check-up'),
        ('Others', 'Others'),
        ('','')
    ]

FAMILY_REASON = [
        ('Attendance to a family member for health reasons', 'Attendance to a family member for health reasons'),
        ('Attendance to children’s needs/activities', 'Attendance to children’s needs/activities'),
        ('Leisure', 'Leisure'),
        ('Others', 'Others'),
        ('', '')
    ]

OFFICE_REASON = [
        ('Co-worker', 'Co-worker'),
        ('Supervisor', 'Supervisor'),
        ('Others', 'Others'),
        ('', '')
    ]

FACILITY_REASON = [
        ('I don’t need the facility', 'I don’t need the facility'),
        ('No time to use', 'No time to use'),
        ('Facility is sub-standard', 'Facility is sub-standard'),
        ('Others', 'Others')
    ]

AVAILED_LOANS = [
        ('GSIS', 'GSIS'),
        ('SSS', 'SSS'),
        ('PAG-IBIG', 'PAG-IBIG'),
        ('PCG/SLAI', 'PCG/SLI'),
        ('AFPMBAI', 'AFBMBAI'),
        ('PNCGPPAI', 'PNCGPPAI'),
        ('Cooperative', 'Cooperative'),
        ('Loan Shark or 5/6', 'Loan Shark or 5/6'),
        ('None', 'None'),
        ('Others', 'Others')
    ]

REASON_AVAILED_LOANS = [
        ('Housing', 'Housing'),
        ('Education (Personal)', 'Education (Personal)'),
        ('Education (Family members)', 'Education (Family members)'),
        ('Health/Hospitalization', 'Health/Hospitalization'),
        ('Payment for existing loan/s', 'Payment for existing loan/s'),
        ('Business', 'Business'),
        ('Leisure', 'Leisure'),
        ('Others', 'Others'),
        ('','')
    ]

FINANCIAL_ASSISTANCE = [
        ('Company/Organization', 'Company/Organization'),
        ('Employee Union', 'Employee Union'),
        ('Employee Association', 'Employee Association'),
        ('Others', 'Others')
    ]

CAUSES_STRESS = [
        ('Family', 'Family'),
        ('financial', 'Financial'),
        ('Supervisor/Manager', 'Supervisor/Manager'),
        ('Workload', 'Workload'),
        ('Work-home distance', 'Work-home distance'),
        ('Co-worker', 'Co-worker'),
        ('Access to Internet', 'Access to Internet'),
        ('Relationship with family members', 'Relationship with family members'),
        ('Delayed compensation', 'Delayed compensation'),
        ('Health of family members (to include members with special needs)',
         'Health of family members (to include members with special needs)'),
        ('Others', 'Others')
    ]

MANAGE_STRESS = [
        ('Sleeping', 'Sleeping'),
        ('Food', 'Food'),
        ('Alcohol', 'Alcohol'),
        ('Socialization', 'Socialization'),
        ('Recreation with family', 'Recreation with family'),
        ('Online recreation/social media', 'Online recreation/social media'),
        ('Movies', 'Movies'),
        ('Online (i.e. Blogging, vlogging)', 'Online (i.e. Blogging, vlogging)'),
        ('Health and wellness (salon, yoga, gym etc.)', 'Health and wellness (salon, yoga, gym etc.)'),
        ('Hobbies (i.e. shopping, cooking, travel, sports, gardening)',
         'Hobbies (i.e. shopping, cooking, travel, sports, gardening)'),
        ('Health of family members (to include members with special needs)',
         'Health of family members (to include members with special needs)'),
        ('Others', 'Others')
    ]

SICK_LIFESTYLE = [
        ('Cardiovascular diseases', 'Cardiovascular diseases'),
        ('Stroke', 'Stroke'),
        ('Cancer', 'Cancer'),
        ('Chronic Obstructive Pulmonary Disease', 'Chronic Obstructive Pulmonary Disease'),
        ('Musculoskeletal', 'Musculoskeletal'),
        ('Diabetes', 'Diabetes'),
        ('None', 'None'),
        ('Others', 'Others')
    ]

SICK_GENETIC = [
        ('Asthma', 'Asthma'),
        ('Cancer', 'Cancer'),
        ('Allergies', 'Allergies'),
        ('None', 'None'),
        ('Others', 'Others')
    ]

SICK_WORKRELATED = [
        ('Asthma', 'Asthma'),
        ('Vision', 'Vision'),
        ('Psoriasis', 'Psoriasis'),
        ('Hypertension', 'Hypertension'),
        ('Urinary Tract Infection (UTI)', 'Urinary Tract Infection (UTI)'),
        ('Polycystic Ovary Syndrome (PCOS)', 'Polycystic Ovary Syndrome (PCOS)'),
        ('None', 'None'),
        ('Others', 'Others')
    ]

class PracticesForm(forms.ModelForm):
    priviledges_pay = MultiSelectField("1.	Are you aware of the following Leave privileges with pay?", MultiSelectField(choices=LEAVE_PRIVILEDGES))
    others_privpay = forms.CharField(label="Please specify:", required=False, max_length=100)
    availed_leaved = MultiSelectField("1.1.	Have you ever availed the following leaves with pay?", MultiSelectField(choices=LEAVE_PRIVILEDGES))
    others_availeaved = forms.CharField(label="Please specify:", required=False, max_length=100)
    number_absences_mo = forms.CharField(label="2.	Usual number of ABSENCES incurred in a month:", required=False, widget=forms.RadioSelect(choices=ABSENCES_MONTH))
    reason_absent_health = MultiSelectField("2.1.	Usual reason of ABSENCES: HEALTH", MultiSelectField(choices=HEALTH_REASON), null=True, blank=True)
    other_reason_absent_health = forms.CharField(label="Others", max_length=300, required=False)
    reason_absent_family = MultiSelectField("2.2.	Usual reason of ABSENCES: FAMILY (Immediate)", MultiSelectField(choices=FAMILY_REASON), null=True, blank=True)
    other_reason_absent_family = forms.CharField(label="Others", max_length=300, required=False)
    reason_absent_office = MultiSelectField("2.3.	Usual reason of ABSENCES: Inter-personal office relations", MultiSelectField(choices=OFFICE_REASON), null=True, blank=True)
    other_reason_absent_office = forms.CharField(label="Others", max_length=300, required=False)
    number_tardines_mo = forms.CharField(label="2.2. Usual number of TARDINESS incurred in a month", widget=forms.RadioSelect(choices=ABSENCES_MONTH))
    reason_tardines_health = MultiSelectField("2.1.	Usual reason of TARDINESS: HEALTH", MultiSelectField(choices=HEALTH_REASON), null=True, blank=True)
    other_reason_tardines_health = forms.CharField(label="Others", max_length=300, required=False)
    reason_tardines_family = MultiSelectField("2.2.	Usual reason of TARDINESS: FAMILY (Immediate)", MultiSelectField(choices=FAMILY_REASON), null=True, blank=True)
    other_reason_tardines_family = forms.CharField(label="Others", max_length=300, required=False)
    reason_tardines_office = MultiSelectField("2.3.	Usual reason of TARDINESS: Inter-personal office relations", MultiSelectField(choices=OFFICE_REASON), null=True, blank=True)
    other_reason_tardines_office = forms.CharField(label="Others", max_length=300, required=False)
    number_undertime_mo = forms.CharField(label="2.3. Usual number of UNDERTIME incurred in a month", widget=forms.RadioSelect(choices=ABSENCES_MONTH))
    reason_undertime_health = MultiSelectField("2.1. Usual reason of UNDERTIME: HEALTH", MultiSelectField(choices=HEALTH_REASON), null=True, blank=True)
    other_reason_undertime_health = forms.CharField(label="Others", max_length=300, required=False)
    reason_undertime_family = MultiSelectField("2.2. Usual reason of UNDERTIME: FAMILY (Immediate)", MultiSelectField(choices=FAMILY_REASON), null=True, blank=True)
    other_reason_undertime_family = forms.CharField(label="Others", max_length=300, required=False)
    reason_undertime_office = MultiSelectField("2.3. Usual reason of TARDINESS: Inter-personal office relations", MultiSelectField(choices=OFFICE_REASON), null=True, blank=True)
    other_reason_undertime_office = forms.CharField(label="Others)", max_length=300, required=False)
    facility_nursing = forms.CharField(label="5. Does your organization provide Nursing Room/Lactation Station facilities?", widget=forms.RadioSelect(choices=YN_CHOICES),required=False)
    facility_nursing_utilized = forms.CharField(label="5.1. Have you ever utilized the facility?", widget=forms.RadioSelect(choices=YNA_CHOICES), required=False)
    facility_nursing_utilized_satisfied = forms.CharField(label="5.2. If YES, are you satisfied?", widget=forms.RadioSelect(choices=YN_CHOICES), required=False)
    facility_nursing_utilized_satisfied_yes_reason = forms.CharField(label="5.2.1. Yes, Kindly state your reasons", max_length=300, required=False)
    facility_nursing_utilized_satisfied_no_reason = forms.CharField(label="5.2.2. No, Kindly state your reasons", max_length=300, required=False)
    facility_nursing_utilized_no_reason = MultiSelectField("5.3.Reason of not utilizing the facility:", MultiSelectField(choices=FACILITY_REASON), null=True, blank=True)
    facility_nursing_others = forms.CharField(label="Please specify:", max_length=1000, required=False)
    facility_daycare = forms.CharField(label="6. Does your organization provide Day Care/Kiddie Room/Child Minding facilities?", widget=forms.RadioSelect(choices=YN_CHOICES))
    facility_daycare_utilized = forms.CharField(label="6.1. Have you ever utilized the facility?", widget=forms.RadioSelect(choices=YNA_CHOICES))
    facility_daycare_utilized_satisfied = forms.CharField(label="6.2. If YES, are you satisfied?", widget=forms.RadioSelect(choices=YN_CHOICES))
    facility_daycare_utilized_satisfied_yes_reason = forms.CharField(label="6.2.1. Yes, Kindly state your reasons", max_length=300)
    facility_daycare_utilized_satisfied_no_reason = forms.CharField(label="6.2.2. No, Kindly state your reasons", max_length=300)
    facility_daycare_utilized_no_reason = MultiSelectField("6.3. Reason of not utilizing the facility:",MultiSelectField(choices=FACILITY_REASON))
    facility_daycare_others = forms.CharField(label="Please specify:", max_length=1000)
    facility_prayer = forms.CharField(label="7.	Does your organization provide Prayer/Worship/Chapel facilities?", widget=forms.RadioSelect(choices=YN_CHOICES))
    facility_prayer_utilized = forms.CharField(label="7.1. Have you ever utilized the facility?", widget=forms.RadioSelect(choices=YNA_CHOICES))
    facility_prayer_utilized_satisfied = forms.CharField(label="7.2. If YES, are you satisfied?", widget=forms.RadioSelect(choices=YN_CHOICES))
    facility_prayer_utilized_satisfied_yes_reason = forms.CharField(label="7.2.1. Yes, Kindly state your reasons", max_length=300)
    facility_prayer_utilized_satisfied_no_reason = forms.CharField(label="7.2.2. No, Kindly state your reasons", max_length=300)
    facility_prayer_utilized_no_reason = MultiSelectField("7.3. Reason of not utilizing the facility:", MultiSelectField(choices=FACILITY_REASON))
    facility_prayer_others = forms.CharField(label="Please specify:", max_length=1000)
    facility_medical = forms.CharField(label="8. Does your organization provide Medical or Dental Clinic?", widget=forms.RadioSelect(choices=YN_CHOICES))
    facility_medical_utilized = forms.CharField(label="8.1. Have you ever utilized the facility?", widget=forms.RadioSelect(choices=YN_CHOICES))
    facility_medical_utilized_satisfied = forms.CharField(label="8.2. If YES, are you satisfied?", widget=forms.RadioSelect(choices=YN_CHOICES))
    facility_medical_utilized_satisfied_yes_reason = forms.CharField(label="8.2.1. Yes, Kindly state your reasons", max_length=300)
    facility_medical_utilized_satisfied_no_reason = forms.CharField(label="8.2.2. No, Kindly state your reasons", max_length=300)
    facility_medical_utilized_no_reason = MultiSelectField("8.3. Reason of not utilizing the facility:", MultiSelectField(choices=FACILITY_REASON))
    facility_medical_others = forms.CharField(label="Please specify:", max_length=1000)
    facility_recreation = forms.CharField(label="9.	Does your organization provide Recreation facilities (i.e. gym, wellness center, etc.)?", widget=forms.RadioSelect(choices=YN_CHOICES))
    facility_recreation_utilized = forms.CharField(label="9.1. Have you ever utilized the facility?", widget=forms.RadioSelect(choices=YN_CHOICES))
    facility_recreation_utilized_satisfied = forms.CharField(label="9.2. If YES, are you satisfied?", widget=forms.RadioSelect(choices=YN_CHOICES))
    facility_recreation_utilized_satisfied_yes_reason = forms.CharField(label="9.2.1. Yes, Kindly state your reasons", max_length=300)
    facility_recreation_utilized_satisfied_no_reason = forms.CharField(label="9.2.2. No, Kindly state your reasons", max_length=300)
    facility_recreation_utilized_no_reason = MultiSelectField("9.3. Reason of not utilizing the facility:",MultiSelectField(choices=FACILITY_REASON), null=True, blank=True)
    facility_recreation_others = forms.CharField(label="Please specify:", max_length=1000)
    other_facility = forms.CharField(label="10.	Other available facility for employee:", max_length=1000, required=False)
    loans_availed = MultiSelectField("11.	Have you availed loans from any of the following?", MultiSelectField(choices=AVAILED_LOANS), null=True, blank=True)
    other_loans_availed = forms.CharField(label="Others", max_length=500)
    reason_loans_availed = MultiSelectField("11.1.	Reasons for availing", MultiSelectField(choices=REASON_AVAILED_LOANS), null=True, blank=True)
    other_loans_availed_reason = forms.CharField(label="Others", max_length=500)
    financial_assitance = forms.CharField(label="12.	Is there a financial assistance available in your organization?", widget=forms.RadioSelect(choices=YN_CHOICES))
    yes_identified_financial_assitance = MultiSelectField("12.1. If yes, identify", MultiSelectField(choices=FINANCIAL_ASSISTANCE))
    other_financial_assist = forms.CharField(label="Please specify:", max_length=1000)
    been_benificiary_financial_assist = forms.CharField(label="12.1.	Have you ever been a beneficiary of this financial assistance?", widget=forms.RadioSelect(choices=YN_CHOICES))
    experience_negative_stress = forms.CharField(label="13.	Have you ever experienced negative stress?", widget=forms.RadioSelect(choices=YN_CHOICES))
    causes_negative_stress = MultiSelectField("13.1. If Yes, what are the causes?", MultiSelectField(choices=CAUSES_STRESS), null=True, blank=True)
    other_causes_stress = forms.CharField(label="13.1.1. Others", max_length=300)
    how_manage_stress = MultiSelectField("13.2.	How do you manage stress?", MultiSelectField(choices=MANAGE_STRESS), null=True, blank=True)
    other_how_manage_stress = forms.CharField(label="13.1.2. Others", max_length=300)
    sickness_lifestyle = MultiSelectField("14. Current Sickness: 1. Lifestyle", MultiSelectField(choices=SICK_LIFESTYLE), null=True, blank=True)
    other_sick_lifestyle = forms.CharField(label="14.1.1. Others", max_length=300)
    sickness_genetic = MultiSelectField("14. Current Sickness: 2. Genetic/Congenital", MultiSelectField(choices=SICK_GENETIC), null=True, blank=True)
    other_sick_genetic = forms.CharField(label="14.2.1. Others", max_length=300)
    sickness_workrelated = MultiSelectField("14. Current Sickness: 3. Work-related", MultiSelectField(choices=SICK_WORKRELATED), null=True, blank=True)
    other_sick_workrelated = forms.CharField(label="14.3.1. Others", max_length=300)
    mental_health = forms.CharField(label="15. Mental Health", widget=forms.RadioSelect(choices=YN_CHOICES))
    seek_professional = forms.CharField(label="15.1. If yes, did you ever seek professional help?", widget=forms.RadioSelect(choices=YN_CHOICES))
    no_seek_professional = forms.CharField(label="15.1.1. Kindly state your reasons", max_length=500)
    yes_seek_professional = forms.CharField(label="15.2.	If yes, did you have or are you taking medication/attending counselling?", widget=forms.RadioSelect(choices=YN_CHOICES))
    no_seek_professional_nomedication = forms.CharField(label="Kindly state your reason:", max_length=500)

    class Meta:
        model = PracticesCondition
        fields = '__all__'