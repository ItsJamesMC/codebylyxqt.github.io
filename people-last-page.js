
function openModal(imageElement) {
    var modal = document.getElementById('imageModal');
    var modalImage = document.getElementById('modalImage');
    var closeModal = document.getElementById('closeModal');

    modalImage.src = imageElement.src;


    modal.style.display = "flex";


    closeModal.onclick = function() {
        modal.style.display = "none";
    }


    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}

function changeContent(message) {
    const content = document.getElementById('contentText');
    let newMessage = '';

    switch (message) {
        case 'message1':
            newMessage = 'wahh di talaga me makapaniwala niyan, isang taong tulad mo na sobrang ganda mag papansin sa isang katulad ko?, YUNG KAGIGISING MO LANG TAS AYAN AGAD ANG BUMUNGAD SAYO WAHH LIKE GUSTO KO TALAGA MAG ASSUME NIYAN KASI IKAW NA YAN E';
            break;
        case 'message2':
            newMessage = 'NAG MD KA PA NIYAN, WITH HASHTAG (PERO DI KO NA SCREENSHOT HUHU SAYANG PA SEND PO KUNG PEDE HEHE)';
            break;
        case 'message3':
            newMessage = 'SUPER HAPPY KO TALAGA NIYAN NA HINDI MAKAPANIWALA WAHH, PARANG DATI LANG KASI INIISTALK KITA, TAS NGAYON NAG PAPAPANSIN KA SAKIN HUHU NAKAKAHIYA SA PART NA YAN ANG BABAE GUMALAW HINDI AKO (SORRY, SI WHIN KASI E MAY TRAUMA KA RAW HUHU) PERO SINABI KO RIN YAN DATI, IF MAGIGING TAYO HINDING HINDI MO MARARAMDAMAN ANG NARAMDAMAN MO SA PAST MO';
            break;
        case 'message4':
            newMessage = 'di ko alam i mmd ku wahh kaya old video na lang tas with cute caption kasi cute me hehehehe';
            break;
        case 'message5':
            newMessage = 'dayumm em I cooked??! I love u bebi kuu';
            break;
    }

    content.innerHTML = newMessage;
}


