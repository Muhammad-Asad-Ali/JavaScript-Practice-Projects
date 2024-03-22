// let count = 0;
// const value = document.querySelector('#value');
// const btns = document.querySelectorAll('.btn');

// //?variables for blury
// const loadText = document.querySelector('.loading-text')
// const bg = document.querySelector('.bg')
// let load=0;

// btns.forEach(function (btn) {
//     btn.addEventListener('click', function (e) {
//         const style = e.currentTarget.classList;
//         if (style.contains('decrease')) {
//             count--;
//         } else if (style.contains('increase')) {
//             console.log("increase click")
//             count++;
//         } else {
//             count = 0;
//         }
//         value.textContent = count;

//         blurring();
//     })
// })

// //? blury loading
// let int = setInterval(blurring, 30) 
// function blurring() {
//     load++
//     if (load > 99) {
//         clearInterval(int)
//     }
//     loadText.innerHTML = `${load}%`
//     loadText.style.opacity= scale(load,0 ,100,1,0)
//     bg.style.filter=`blur(${scale(load,0,100,30,0)})`
    
// }
// function scale (number, inMin, inMax, outMin, outMax) {
//     return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
// }


let count = 0;
const value = document.getElementById('value'); // Change this to use getElementById
const btns = document.querySelectorAll('.btn');

// Variables for blurring
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
let load = 0;

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const style = e.currentTarget.classList;
        if (style.contains('decrease')) {
            count--;
        } else if (style.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        value.textContent = count;

        // Call blurring function after updating count
        blurring();
    });
});

// Set interval for blurring
let int = setInterval(updateBlurring, 30);

function updateBlurring() {
    load++;
    if (load > 99) {
        clearInterval(int);
    }
    loadText.innerHTML = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)})`;
}

function blurring() {
    // Reset load when blurring function is called
    load = 0;
}

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
