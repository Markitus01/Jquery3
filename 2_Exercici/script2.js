document.addEventListener("DOMContentLoaded", main)

function main()
{
    // 1
    $("tbody").find("tr").each(function(i)
    {
        if (i >= 5)
        {
            $(this).hide();
        }
    });

    // 2
    let div = document.createElement("div");
    div.className("pagina");
}