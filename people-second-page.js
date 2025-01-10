
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
            newMessage = 'kaya mata sa mata kasi sa dulo ng picture, ang ganda ng mata mo. Kaya nga, mata sa mata, kasi parang nakatingin ako diretso sa mata mo nung time na yun';
            break;
        case 'message2':
            newMessage = 'ito is, sinabi ni Whin "yung naka red ba" at sinabi ko na "hindi ko sinabi yan pero oo" wahh lt talaga hihi';
            break;
        case 'message3':
            newMessage = 'Dito na wahh, dito ko na nalaman ang maganda mong pangalan(kahit na papangitan ka pero soferr dowperr pretty talaga ng namee muu)';
            break;
        case 'message4':
            newMessage = 'Nung nabasa ko yang sinabi ni Whin huhu, sofer dowper nalungcute me niyan huhu kasi BAKIT IKAW LOLOKOHIN E ANG GANDA GANDA MO NASAYO NA NGA ANG LAHAT IHH, nung nabasa ko rin yan parang gusto ko manapak hehe suwii po';
            break;
        case 'message5':
            newMessage = 'hehehe buti na lang at sinabi ni Whin ang IG acc mu basta istalk ko lang sha at hanapin si Luna hehe, nag follow naman me agad niyan !!!';
            break;
        case 'message6':
            newMessage = 'hindi rin tumagal ang araw na yan hehe, at naging mutuals naman tayo and soferr dowperr natutuwa me if nag r-react ikaw sa mga MD ko pero sabi ni Whin nag r-react ka raw sa lahat huhu pero owkiee lang hehe';
            break;
    }

    content.innerHTML = newMessage;
}
