const buttons=document.querySelectorAll(".btn"); //For selecting buttons
const boxes=document.querySelectorAll(".box"); //For selecting box
const searchBox=document.querySelector("#search"); //For selecting search box
const result=document.querySelector("#result");

// For search product by textbox

searchBox.addEventListener('keyup',(e)=> //Key up is used for selecting the text one by one entered by user
{
    searchText=e.target.value.toLowerCase().trim();
    let found=false; //this is for if searched is not in the list

    boxes.forEach((box)=>
    {
        const data=box.dataset.item; /*It will select the items name only in the image box*/
        if(data.includes(searchText))
        {
            box.style.display="block";
            found=true;
        }
        else
        {
            box.style.display="none";
        }
    });

    if(!found)
    {
        result.textContent="Your searched product is not in the list!..";
    }
    else
    {
        result.textContent="";
    }

    //this loop is for whiling clicking the button and at the same time if ou search it will automatically go to all products and search otherwise it will search in that selected button..
    buttons.forEach((e)=>
    {
        e.classList.remove('btn-clicked');
    })
    buttons[0].classList.add('btn-clicked');
});


//Buttons search
buttons.forEach((button)=>
{
    button.addEventListener('click',(e)=>
    {
        e.preventDefault(); //it will remove the previous actions
        setActiveBtn(e); //it will call the function and pass the parameters of click event
        
        const btnfilter=e.target.dataset.filter; //This is for selcting the box you clicked


        // this loop is for filtering while selecting theat particular box
        boxes.forEach((box=>
            {

                if(btnfilter=='all') //if the selected is all it will display all the boxes..
                {
                    box.style.display="block";
                }
                else
                {
                    const boxfilter=box.dataset.item; //this is for selecting the boxes name (or) item
                    if(btnfilter==boxfilter) //if the btnfilter is equal to box filter it will display that only
                    {
                        box.style.display="block";
                    }
                    else
                    {
                        box.style.display="none"; // or it will remove that functions.
                    }
                }
            }))
    })
});

//acticate the button
function setActiveBtn(e)
{
    buttons.forEach((button)=>
    {
        button.classList.remove('btn-clicked'); //it will remove the btn-click for all (or) it will remove blue coloured bg
    })
    e.target.classList.add('btn-clicked'); //it will add the btn-click for selected button 
}
