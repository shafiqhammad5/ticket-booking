// ticketHandleChange function
function ticketHandleChange(quality, isIncrease) {

  let newTicketCount = getTicketCount(quality);

  if(isIncrease == true ) {
    newTicketCount++;
  } 
  if(isIncrease == false && newTicketCount > 0) {
    newTicketCount--;
  }
  document.getElementById(quality + '-ticket').value = newTicketCount;

  calculateTicketPrice();
}


// calculateTicketPrice function
function calculateTicketPrice() {

  let firstClassTicketCount = getTicketCount('firstClass'); // getting firstClassTicketCount
  let economyTicketCount = getTicketCount('economy'); // getting economyTicketCount

  let totalPrice = (firstClassTicketCount * 150) + (economyTicketCount * 100); // total price
  let vat = Math.round(totalPrice / (100 / 10)); // vat
  let grandTotal = totalPrice + vat; // grand total
  document.getElementById('subtotal').innerText = totalPrice;
  document.getElementById('vat').innerText = vat;
  document.getElementById('grand-total').innerText = grandTotal;
}


// getTicketCount function
function getTicketCount(quality) {
  const ticketInput = document.getElementById(quality + '-ticket');
  const ticketCount = parseInt(ticketInput.value);
  return ticketCount;
}


// book btn alert
let bookBtn = document.getElementById('book-btn');

bookBtn.addEventListener('click', () => {

  let firstClassTicketCount = getTicketCount('firstClass'); // getting firstClassTicketCount
  let economyTicketCount = getTicketCount('economy'); // getting economyTicketCount

  let totalPrice = (firstClassTicketCount * 150) + (economyTicketCount * 100); // total price
  let vat = Math.round(totalPrice / (100 / 10)); // vat
  let grandTotal = totalPrice + vat; // grand total

  alert(
    `
    Flying From : ${document.getElementById('flying-from').value}
    Flying To : ${document.getElementById('flying-to').value}
    Departure : ${document.getElementById('departure').value}
    Return : ${document.getElementById('return').value}
    First Class Ticket: ${firstClassTicketCount} * 150 = ${firstClassTicketCount * 150}
    Economy Ticket: ${economyTicketCount} * 100 = ${economyTicketCount * 100}
    Total Price : ${totalPrice}
    Vat : ${vat}
    GrandTotal : ${grandTotal}

    Thank You!
    `
    );
})

