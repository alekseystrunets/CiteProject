let headerBtn = document.querySelectorAll('.header-info-cont');
let numberBox = document.querySelector('.number-box');
let accountBox = document.querySelector('.account-box');
let headerArrows = document.querySelectorAll('.header-triangle');

headerBtn.forEach((ele,index) => {
    ele.addEventListener('click',()=>{
        index == 0 ? (

            numberBox.style.height != '110px' ? (
                numberBox.style.height = '110px',
                headerArrows[0].style.transform = 'rotate(0deg)'
            ) : (
                numberBox.style.height = '100%',
                headerArrows[0].style.transform = 'rotate(180deg)'
            )

        ) : (

            accountBox.style.height != '175px' ? (
                accountBox.style.height = '175px',
                headerArrows[1].style.transform = 'rotate(0deg)'
            ) : (
                accountBox.style.height = '100%',
                headerArrows[1].style.transform = 'rotate(180deg)'
            ) 

        )
    })
});

let buyBtn = document.querySelectorAll('.card-button');
let mainCounter = document.querySelector('.buy-counter');

let mainPrices = document.querySelectorAll('.card-price');
let allPrices = document.querySelector('.buy-balance');

let count = 0;
let totalPrice = 0;


buyBtn.forEach((ele,index)=>{
    ele.addEventListener('click',()=>{
        count++;
        let priceString= mainPrices[index].innerHTML;
        totalPrice += Number(priceString.slice(0,3));
        allPrices.innerHTML = totalPrice + ' руб';
        mainCounter.innerHTML = count;
    })
})

