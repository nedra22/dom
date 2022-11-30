var quant = document.querySelectorAll('.Quant')
var prices = document.querySelectorAll('.price')
//like icons
var likes = document.querySelectorAll('.fa')
console.log(likes)
for (let i = 0; i < likes.length; i++) {
    likes[i].addEventListener("click", function(){
        if ( likes[i].style.color === "black" ) {
            likes[i].style.color = "red"
        } else{
            likes[i].style.color = "black"
        }
    })
}

// +
var plusBtns = document.querySelectorAll('.plus-btn')
console.log(plusBtns)
// console.log(quant)
for (let i = 0; i < plusBtns.length; i++) {
    plusBtns[i].addEventListener('click', function(){
        // quant[i].value++
        plusBtns[i].previousElementSibling.value++ 
        totalPrice()  
    })
}

//-

var minusBtns = document.querySelectorAll('.minus-btn')
console.log(minusBtns)
for (let i = 0; i < minusBtns.length; i++) {
    minusBtns[i].addEventListener('click', function(){
        if ( minusBtns[i].nextElementSibling.value > 1 ) {
        
            minusBtns[i].nextElementSibling.value--
            totalPrice()
        }
    })
}

//delete

var deleteBtns = document.querySelectorAll('.delete')
console.log(deleteBtns)
for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener('click', function(){
        deleteBtns[i].parentNode.remove()
        totalPrice();
    })
}


function totalPrice() {
    var sum = 0;
    var quant = document.querySelectorAll('.Quant')
    var prices = document.querySelectorAll('.price')
    for (let i = 0; i < prices.length; i++) {
        sum += prices[i].innerHTML * quant[i].value
    }
    document.getElementById('finalPrice').value = sum 
} 