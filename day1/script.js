const panels=document.querySelectorAll('.panel');

//loop through HOL high order loop
panels.forEach(panel => {
    panel.addEventListener('mouseover',()=>{
        // console.log(123);
        removeActiveclasses()
        panel.classList.add('active')
    })
});

function removeActiveclasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}