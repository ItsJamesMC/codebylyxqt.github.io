const photoDetails = {
    "pic1-December05.png": { message: "Ito ang araw ng unang kita natin, hihi inaya niyo pa ako ni Eloise!", date: "December 5, 2024" },
    "pic2-December06.png": { message: "Pumunta tayo sa library para mag sulat me pero nag laro ako hihi", date: "December 6, 2024" },
    "pic3-December07.png": { message: "Ito ang araw na natulog ka sakin and I feel u that day na comfy ka talaga sakin hihi, I love u so much", date: "December 7, 2024" },
    "pic4-December09.png": { message: "Wala akong pasok nitong araw na to and inaya mo akong mag-SM, pero sa Savano hihi and nag date tayo with kasama si Eloise sa KMart hihi", date: "December 9, 2024" },
    "pic5-December10.png": { message: "Itong picture na to, dala ko yung camera na dapat is mag p-picture ako ng mga naka cosplay pero imbis na gawin ko yon, sumama me sayo and nagpahinga hihi", date: "December 10, 2024" },
    "pic6-December10.png": { message: "", date: "December 10, 2024" },
    "pic7-December10.png": { message: "Katatapos lang natin kumain ng shawarma nito and nag bonding tayo hihi cute natin dyan, 📷:Eloise ", date: "December 10, 2024" },
    "pic8-December10.png": { message: "Nung time na yan is, nag hihintay lang tayo na matapos gawin ang shawarma natin, and while waitng nag picture tayo and with vid sa camera ku wahh ang cute ng mga pics natin dyan legit fr fr!!!", date: "December 10, 2024" },
    "pic9-December11.png": { message: "itong araw is mag p-perform kayo ng mga ka rockies mo ng kanta hehe, and willing me mag cutting(wala naman gagawin ron) mapanood lang kita hihi I love u so muchiee!!!", date: "December 11, 2024" },
    "pic10-December11.png": { message: "At itong araw na rin yon na sinagot mo ako, huhu sayang wala tayong pic huhu(sa SM mo me sinagot hehe may ginawa kaya walang pic)", date: "December 11, 2024" },
    "pic11-December14.png": { message: "", date: "December 14, 2024" },
    "pic12-December14.png": { message: "Katatapos lang ng exam natin, lalabas sana tayo pero aalis kami para mag-SM Fairview kasama ang pamilya, ang cute mo nun, sinabi rin ni mama, kumaway ka nag-bye soferr cutee, huhu. I love you so muchiee!", date: "December 14, 2024" },
    "pic13-December17.png": { message: "after last exam, itong picture na to is nag hihintay tayo ng order mo sa MCDO, tas itong panahon rin na to is dapat mag r-rollers' skate tayo kaso naka palda u kaya nag photobooth na lang tayo hehe, I love u bebi kuu!", date: "December 17, 2024" },
    "pic14-December17.png": { message: "Our First Photobooth", date: "December 17, 2024" },
    "pic15-December17.png": { message: "Mirror shot sana tayo niyan kaso busy u mag myday ng photos natin huhu, pero okiee lang I love u so muchiee(bat mo nilagay ig mo sa likod ng photo grr)", date: "December 17, 2024" },
    "pic16-January04.png": { message: "Itong araw na to is, pupunta tayo kina Eloise kasi birthday ng tatay niyan pero sa pic na yan nasa SM tayo kasi naiihi mee hehehe and sofer dowper cute ng pics natin dyan!!", date: "January 4, 2025" },
    "pic19-January01.png": { message: "bago matapos ang taon na to, may hinahanda ka palang supresa ito ang illegal ang relasyon nating dalawa huhu, sofer thankful me kasi di mo need itago huhu(pero nung tumawag ka talaga, kabado me)", date: "December 31, 2024" },
    "pic18-December06.png": { message: "nasa viewdeck tayo nun, I asked u na puwede ba kita ligawan and hindi ikaw nag dalawang isip na sabihin oo huhu, I love u so muchiee bebi ", date: "December 06, 2024" },
    "pic17-January07.png": { message: "Itong araw na to is, pumunta me sainyo huhu, kabadong-kabado talaga me niyan kasi dapat apat tayo huhu pero okay lang I feel na welcome hehe THANK U PO TITA'T TITO AT KUYA !!", date: "January 7, 2025" }
}


function openLightbox(img) {
    const imageName = img.src.split('/').pop(); 
    const details = photoDetails[imageName];  
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = img.src;
    document.getElementById("lightbox-chat").innerHTML = `<p>${details.message}</p><p><strong>Date:</strong> ${details.date}</p>`; 
}


function closeLightbox() {
    document.getElementById("lightbox").style.display = "none"; 
}

function handleClickMe(img) {
    document.getElementById("clickMeText").style.display = "none";
    

    openLightbox(img);
}

