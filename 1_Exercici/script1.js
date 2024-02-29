document.addEventListener("DOMContentLoaded", main);

function main()
{
    $("table").css(
    {
        margin: "0 auto",
        "border-collapse": "collapse",
    });

    $("td").css(
    {
        border: "1px solid chocolate",
        padding: "0.3rem",
    });

    $("tbody").find("td").each(function()
    {
        $(this).addClass("celes");
        
        let txt = $(this).text();

        if (teNum(txt))
        {
            $(this).css("text-align", "right");
        }
    });

    $("table").find("tr").each(function(i)
    {
        if (i == 0)
        {
            $(this).addClass("hover");
        }
        else if ((i)%2 == 0)
        {
            $(this).addClass("parell");
        }
        else
        {
            $(this).addClass("imparell");
        }
    });

    $(".hover").click(function()
    {
        // Ordenar
    })
}

function teNum(txt)
{
    return /\d/.test(txt);
}