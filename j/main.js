 document.addEventListener('DOMContentLoaded', init);

 //initalize the page
 function init () {
    //create shortcut references
    const button = document.querySelector('button');
    button.addEventListener('click', makeBoxes);
 }
 
 function makeBoxes () {
    const container = document.querySelector('.container');

    for (let i=0; i < 100; i++) {
        //make a box and add it to the container
        const newBox = document.createElement('DIV');
            newBox.classList.add('box');

        //make the box clickable
        newBox.addEventListener('click', toggleClass);
            container.append(newBox);
    }  
 }

 
 function toggleClass (e) {
    console.log(e.target)
    e.target.classList.toggle('spin');
 }

 

 //init();
 
 
 
 