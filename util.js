function gen_game() { 
//console.log(Total_guesses)
    // all about input configuration
 let red_in = Math.floor(Math.random() *256)
 let green_in = Math.floor(Math.random() *256)
 let blue_in = Math.floor(Math.random() *256)
 //console.log(red_in,green_in,blue_in)


// let input_r = document.getElementById('input_Red') 
 input_r.style.backgroundColor = 'rgb(' + red_in + ',' + 0 + ',' + 0 + ')';
 input_r.innerText = `R(${red_in})`
 
 //let input_g = document.getElementById('input_Green') 
 input_g.style.backgroundColor = 'rgb(' + 0 + ',' + green_in + ',' + 0 + ')';
 input_g.innerText = `G(${green_in})`

 //let input_b = document.getElementById('input_Blue') 
 input_b.style.backgroundColor = 'rgb(' +0 + ',' + 0 + ',' + blue_in + ')';
 input_b.innerText = `B(${blue_in})`

 // all about output boxes
  //console.log(Total_guesses)
 //let outputs = document.getElementsByClassName('out')
 //console.log(outputs)

for (let i=0; i<no_of_outputs;i++)
 {
     let red_out = Math.floor(Math.random() *256)
     let green_out = Math.floor(Math.random() *256)
     let blue_out = Math.floor(Math.random() *256)
     outputs[i].style.backgroundColor = 'rgb(' + red_out + ',' + green_out + ',' + blue_out + ')';
 }
// select random output box and replace it with correct answer
correct_ans = Math.floor(Math.random() *no_of_outputs)
outputs[correct_ans].style.backgroundColor = 'rgb(' + red_in + ',' + green_in + ',' + blue_in + ')';
console.log(correct_ans)

}