/* Controller Function*/
function main()
{
    //Get fizz and buzz values
    fizz = parseInt(document.getElementById("fizzInput").value);
    buzz = parseInt(document.getElementById("buzzInput").value);

    //create list
    let list = createList(fizz, buzz);

    //display list
    displayList(list);
}
function createList(fizz, buzz)
{
    let arrLen = 100;
    const arr = [];
    for(let i= 1; i<arrLen + 1; i++)
    {
        if(i % fizz == 0 && i % buzz != 0)
        {
            arr[i] ="Fizz";
        }
        else if(i % buzz == 0 && i % fizz != 0)
        {
            arr[i] = "Buzz";
        }
        else if (i % fizz == 0 && i % buzz == 0)
        {
            arr[i] = "FizzBuzz";
        }
        else
        {
            arr[i] = i;
        }
    }

    return arr;
}

function displayList(list)
{
    let tableRows = "";
    for(let i = 1; i < list.length; i++)
    {
        tableRows += `<tr><td>${list[i]}</td></tr>`;
    }
    document.getElementById("results").innerHTML = tableRows;  
}