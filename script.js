console.log("Connected");



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
            alert("You can't Buy More Than 4 Tickets");
        }
        total = increase * seatPrice;
        const totalAmount = document.getElementById('total');
        totalAmount.innerText = total;
        const grandTotal = document.getElementById('grandTo');
        grandTotal.innerText = total;
    })
}