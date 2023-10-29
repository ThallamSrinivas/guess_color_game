// add player name
const add_button = document.getElementById('player-button')
const player_name = document.getElementById('player-id')
const player = document.getElementById('player')
add_button.addEventListener('click',function(){
    if(player_name.value.trim()){
        player.innerText+= player_name.value
        player_name.value=""
        //console.log(player_name.value)
    }
    gen_game();    
})

const no_of_outputs = 6;
let Total_guesses=0 
let correct_guesses=0
let incorrect_guesses=0

let input_r = document.getElementById('input_Red')
let input_g = document.getElementById('input_Green') 
let input_b = document.getElementById('input_Blue') 

let outputs = document.getElementsByClassName('out')

const tg_node = document.getElementById('TG')
const cg_node = document.getElementById('CG')
const wg_node = document.getElementById('WG')
let correct_ans=0
 
// add events on ouput boxes 
for (let i=0; i<no_of_outputs;i++)
{
   outputs[i].addEventListener('click', function(event){
    console.log(correct_ans)
       if(event.target===outputs[correct_ans]){
           correct_guesses=correct_guesses+1
           cg_node.innerText= `right guesses: ${correct_guesses}`
           gen_game();
       }
       else{
           
           incorrect_guesses=incorrect_guesses+1
           wg_node.innerText= `wrong guesses: ${incorrect_guesses}`
           gen_game();
       }
       Total_guesses+=1
       tg_node.innerText= `no.of guesses: ${Total_guesses}`
       //console.log(Total_guesses)
       
      
   })
}