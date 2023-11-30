function subscribe() {
    const buttonElement = document.querySelector('.js-subscribe-button')

    if (buttonElement.innerHTML === 'Subscribe') {
        buttonElement.innerHTML = 'Subscribed';
        buttonElement.classList.add('is-subscribed')
    } else {
        buttonElement.innerHTML = 'Subscribe'
        buttonElement.classList.remove('is-subscribed')
    }
}



function calculateTotal() {
    inputElement = document.querySelector('.js-cost-input');
     
        let cost= Number(inputElement.value);
    
        if(cost < 40) {
            cost = cost+10;
        }

        document.querySelector('.js-total-cost')
        .innerHTML = `$${cost}`
}

function handleCostKeydown(event) {
    console.log(event.key);

    if(event.key === 'Enter'){
        calculateTotal();
    }
}

