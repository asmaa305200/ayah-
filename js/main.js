
    var ayat = [
        'وَإِذَا قِيلَ لَهُمْ أَنفِقُوا۟ مِمَّا رَزَقَكُمُ ٱللَّهُ قَالَ ٱلَّذِينَ كَفَرُوا۟ لِلَّذِينَ ءَامَنُوٓا۟ أَنُطْعِمُ مَن لَّوْ يَشَآءُ ٱللَّهُ أَطْعَمَهُۥٓ إِنْ أَنتُمْ إِلَّا فِى ضَلَٰلٍۢ مُّبِينٍۢ',
        "إِنَّ ٱلْأَبْرَارَ لَفِى نَعِيمٍۢ",
        "يَسْـَٔلُهُۥ مَن فِى ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ ۚ كُلَّ يَوْمٍ هُوَ فِى شَأْنٍۢ",
        "فَسَبِّحْ بِٱسْمِ رَبِّكَ ٱلْعَظِيمِ",
        " شَكٍّ ۗ وَرَبُّكَ عَلَىٰ كُلِّ شَيْءٍ حَفِيظٌ",
        "انْظُرْ كَيْفَ فَضَّلْنَا بَعْضَهُمْ عَلَىٰ بَعْضٍ ۚ وَلَلْآخِرَةُ أَكْبَرُ دَرَجَاتٍ وَأَكْبَرُ تَفْضِيلًا",
        "ٱللَّهُ لَآ إِلَـٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ ۚ لَا تَأْخُذُهُۥ سِنَةٌۭ وَلَا نَوْمٌۭ ۚ لَّهُۥ مَا فِى ٱلسَّمَـٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ مَن ذَا ٱلَّذِى يَشْفَعُ عِندَهُۥٓ إِلَّا بِإِذْنِهِۦ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَىْءٍۢ مِّنْ عِلْمِهِۦٓ إِلَّا بِمَا شَآءَ ۚ وَسِعَ كُرْسِيُّهُ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضَ ۖ وَلَا يَـُٔودُهُۥ حِفْظُهُمَا ۚ وَهُوَ ٱلْعَلِىُّ ٱلْعَظِيمُ",
        "وَإِنَّكَ لَتُلَقَّى الْقُرْآنَ مِنْ لَدُنْ حَكِيمٍ عَلِيمٍ",
        "وَلَا يَأْتُونَكَ بِمَثَلٍ إِلَّا جِئْنَاكَ بِالْحَقِّ وَأَحْسَنَ تَفْسِيرًا",
        ' عَلَىٰ مَا مَلَكَتْ أَيْمَانُهُمْ فَهُمْ فِيهِ سَوَاءٌ ۚ أَفَبِنِعْمَةِ اللَّهِ يَجْحَدُونَ',
    ]
var sora = [
    "يس :47",
    "المطففين : 22",
    "الرحمن :25",
    "الواقعة :96",
    "سَبَإٍ : 21",
    "الإِسۡرَاءِ 21",
    "البقرة : 255",
    "النمل : 6",
    "الفرقان :33",
    "النحل :71",
]
img = ["http://wallpapercave.com/wp/bh2gWWW.jpg",
    "https://i.pinimg.com/originals/48/ed/6d/48ed6d4627f6cc6e5d2f6b02b7105e50.jpg",
    "https://getwallpapers.com/wallpaper/full/8/9/c/398897.jpg",
    "https://tse2.mm.bing.net/th?id=OIP.zwkOMPuiAIDEoWdZWoMjJQHaF1&pid=Api&P=0&h=220",
    "http://britishmuslim-magazine.com/wp-content/uploads/2014/09/Zahir-Mosque-in-Kedah-Malaysia.jpg",
    "http://media.islamicity.org/wp-content/uploads/2019/01/iStock-843015872.jpg",
    "https://tse4.mm.bing.net/th?id=OIP.n6YE03fJTsEH1bTEOiPX8wHaE7&pid=Api&P=0&h=220",
     "https://traveler.marriott.com/wp-content/uploads/2018/09/GI_815359526_CitadelView_Cairo.jpg",
    "https://tse4.mm.bing.net/th?id=OIP.n6YE03fJTsEH1bTEOiPX8wHaE7&pid=Api&P=0&h=220",
     "https://traveler.marriott.com/wp-content/uploads/2018/09/GI_815359526_CitadelView_Cairo.jpg"
]
function randomQoutes(){
    var ranNum = Math.floor(Math.random()* ayat.length)
    var selectedAyah = ayat[ranNum]
    var selectedSora = sora[ranNum];
    document.getElementById("ayat").innerHTML=selectedAyah
    document.getElementById("soor").innerHTML = selectedSora
    document.getElementById("photo").style.backgroundImage= `url(${img [ranNum]})`
}