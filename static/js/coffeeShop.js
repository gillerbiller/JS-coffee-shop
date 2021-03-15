"use strict";

const addItemToCart = (itemName) => { 
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `); 
};

const resetCart = () => {
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};

const incrementCartTotal = (price) => {
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html()); //get the contents of any element in this
  //case the html element is cart-total whish is what we set the variable cartTotal
  //to
  total += price;

  cartTotal.html(total.toFixed(2)); //take cartTotal at total and fix it to 2 decimals
};

const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};

const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};


$('#coffee').on('click', (evt) => {
 
  addItemToCart('Coffee');
  incrementCartTotal(1.50);
  
});

$('#late').on('click', (evt) => {

  addItemToCart('Late');
  incrementCartTotal(3.00);

});

$('#place-order').on('click', () => {
  incrementCoffeeSold($('#cart-items').children().length);

  resetCart();

  setProgressAndStatus(0, 'We recieved your order!');

  setTimeout(() => {
    setProgressAndStatus(25, 'Grinding beans...');

    setTimeout(() => {
      setProgressAndStatus(50, 'Brewing coffee...');

      setTimeout(() => {
        setProgressAndStatus(75, 'Pouring coffee...');

        setTimeout(() => {
          setProgressAndStatus(100, 'Your coffee is on its way!');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
});
