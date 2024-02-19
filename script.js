const allSeat = document.getElementById('busSeat').childNodes;
let availableSeat = 40;
let increase = 0;
let total = 0;
let seatPrice = 550;
for (let seat of allSeat) {
    seat.addEventListener('click', function (event) {

        if (!(increase >= 4) && !seat.classList.contains("clicked")) {
            const remains = document.getElementById('availableSeat');
            seat.classList.add('clicked');
            availableSeat--;
            remains.innerText = availableSeat;
            event.target.style.backgroundColor = 'green';
            event.target.style.color = 'white';

            const increased = document.getElementById('incresed');
            increase++;
            increased.innerText = increase;


            const displaySit = document.getElementById('displaySeat');

            const p = document.createElement('p');
            const p2 = document.createElement('p');
            const p3 = document.createElement('p');
            p.innerText = event.target.innerText;
            p2.innerText = "Economy";
            p3.innerText = "550 Tk";
            const dov = document.createElement('div');
            dov.classList.add('flex');
            dov.classList.add('justify-between')
            dov.appendChild(p)
            dov.appendChild(p2)
            dov.appendChild(p3)
            displaySit.appendChild(dov);

            if (increase === 4) {
                document.getElementById('applyBtn').removeAttribute('disabled');
            } else {
                document.getElementById('applyBtn').setAttribute('disabled', true);
            }
        } else {
            alert("Error! Select another one, or your limit has been crossed.");
        }
        total = increase * seatPrice;
        const totalAmount = document.getElementById('total');
        totalAmount.innerText = total;
        const grandTotal = document.getElementById('grandTo');
        grandTotal.innerText = total;
    })
}







document.getElementById('applyBtn').addEventListener('click', function () {
    const inputValue = document.getElementById('couponField').value;
    const splitInput = inputValue.split(' ');
    const splitConcat = splitInput.join('');
    let discount = 0;



    if (inputValue.toUpperCase() === "NEW15") {
        discount = total * 15 / 100;
        const displayDisc = document.getElementById('displayDiscount');
        const p = document.createElement('p');
        p.innerText = `Your discount is: ${discount}`;
        displayDisc.appendChild(p);
        document.getElementById('couponArea').classList.add('hidden');

        const grandTotalAmount = document.getElementById('grandTo');
        const grandTotal = grandTotalAmount.innerText;
        let grand = parseInt(grandTotal);
        grand = grand - discount;
        grandTotalAmount.innerText = grand;



    } else if (splitConcat.toUpperCase() === "COUPLE20") {

        discount = total * 20 / 100;
        const displayDisc = document.getElementById('displayDiscount');
        const p = document.createElement('p');
        p.innerText = `Your discount is: ${discount}`;
        displayDisc.appendChild(p);
        console.log("20")
        document.getElementById('couponArea').classList.add('hidden');


        const grandTotalAmount = document.getElementById('grandTo');
        const grandTotal = grandTotalAmount.innerText;
        let grand = parseInt(grandTotal);
        grand = grand - discount;
        grandTotalAmount.innerText = grand;
    }
})



const phone = document.getElementById('phoneNumber');

phone.addEventListener('keyup', function (event) {
    const digit = event.target.value;
    const digitOfInput = digit.length;
    if (digitOfInput > 0 && digitOfInput <= 11 && increase > 0) {
        document.getElementById('submitBtn').removeAttribute("disabled", true);
    } else {
        document.getElementById('submitBtn').setAttribute("disabled", true);
    }
})







document.getElementById('submitBtn').addEventListener('click', function () {
    document.getElementById('header').classList.add('hidden');
    document.getElementById('main').classList.add('hidden');
    document.getElementById('footer').classList.add('hidden');
    document.getElementById('modals').classList.remove('hidden');

})

document.getElementById('continue').addEventListener('click', function () {
    document.getElementById('header').classList.remove('hidden');
    document.getElementById('main').classList.remove('hidden');
    document.getElementById('footer').classList.remove('hidden');
    document.getElementById('modals').classList.add('hidden');

    const allSeat = document.getElementById('busSeat').childNodes;
    const common = document.getElementsByClassName('common');
    allSeat.forEach(function (common) {
        common.classList.remove('clicked')
    })


    availableSeat = 40;
    increase = 0;
    total = 0;

})