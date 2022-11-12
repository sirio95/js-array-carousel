const items_inizio= [`<div class="item active"><img src="img/01.webp"></div>`, `<div class="item"><img src="img/02.webp"></div>`, `<div class="item"><img src="img/03.webp"></div>`, `<div class="item"><img src="img/04.webp"></div>`, `<div class="item"><img src="img/05.webp"></div>`];
const dots_inizio=[`<span class="dot one active"></span>`, `<span class="dot two"></span>`, `<span class="dot three"></span>`, `<span class="dot four"></span>`, `<span class="dot five"></span>`]

let next_inizio= `<button class="icon next" id="next_button"><i class="fa-solid fa-right-long"></i></button>`;
let prev_inizio= `<button class="icon prev active" id="prev_button"><i class="fa-solid fa-left-long"></i></button>`; 


const container=document.querySelector(".container");



inizio.addEventListener('click',
    function(){
        container.innerHTML= `${items_inizio} ${next_inizio} ${prev_inizio} ${dots_inizio}`;
        inizio.remove();

        const items= document.getElementsByClassName("item");
        const dots= document.getElementsByClassName("dot");
        let active_item= 0;
        let next= document.getElementById("next_button");
        let prev= document.getElementById("prev_button");


        console.log(dots);
        console.log(items);
        console.log(items.lenght);
        console.log(items[1]);
        console.log(next);
        console.log(items[active_item]);


        next.addEventListener("click",    

            function(){
                if (active_item < 4){
                    items[active_item].classList.remove('active');
                    dots[active_item].classList.remove('active');
                    active_item++;
                    items[active_item].classList.add('active');
                    dots[active_item].classList.add('active');
                    prev.classList.remove('active');
                }else if(active_item === 3){
                    next.classList.add('active');
                }

            }
)
    }
)






