//declaring all the variables
const sizePicker = document.getElementById('sizePicker');
const myrow = document.getElementById('inputHeight');
const mycolumn = document.getElementById('inputWidth');
const color = document.getElementById('colorPicker');
const table = document.getElementById('pixelCanvas');

//enabling submit functionality
sizePicker.addEventListener('submit',function(e){
    e.preventDefault();
    var row =  myrow.value;
    var column = mycolumn.value;
    table.innerHTML= '';
    makeGrid(row,column);
});

//making the grid as per user input
function makeGrid(row, column){
    for (var r=0; r<row; r++){
        let mytable = table.insertRow();
        for (var c=0; c<column; c++){
        let cell = mytable.insertCell();

        //add the color changing functionality to the cells
        cell.addEventListener('click',function(event){
        let chosenColor = color.value;
        event.target.style.backgroundColor = chosenColor;
    })
        };
    };
};

