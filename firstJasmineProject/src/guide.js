function Guide(){}
Guide.prototype.init=function (){
    //var opened = window.open("http://localhost:63342/bakalarskaPraca/examples/index.html?_ijt=3625rbdoj9fvkf2rs5tal4ra9u");
    //opened.document.write("    " +
    var document=document.write("    " +
        "<h1>Pokus o vlastnú intro library</h1>\n" +
        "    <h2>za využitia custom data attributes</h2>\n" +
        "    <div id=\"leftSide\">\n" +
        "        <button id=\"menu1\" type=\"button\" data-guide=\"true\" data-guide-step=\"1\" data-guide-position=\"R\" data-guide-message=\"Sem pride nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as\">Menu 1</button><br>\n" +
        "        <button id=\"menu2\" type=\"button\">Menu 2</button><br>\n" +
        "        <button id=\"menu3\" type=\"button\" data-guide=\"true\" data-guide-step=\"3\" data-guide-position=\"U\" data-guide-message=\"Sem pridea sas \">Menu 3</button><br>\n" +
        "        <button id=\"menu4\" type=\"button\">Menu 4</button><br>\n" +
        "        <button id=\"menu5\" type=\"button\" data-guide=\"true\" data-guide-step=\"5\" data-guide-position=\"R\" data-guide-message=\"Sem pride nejaky ts a sas a sas asasa as as\">Menu 5</button><br>\n" +
        "        <button id=\"menu6\" type=\"button\">Menu 6</button><br>\n" +
        "        <button id=\"menu7\" type=\"button\">Menu 7</button><br>\n" +
        "        <button id=\"guide\" type=\"button\" data-guide=\"true\" data-guide-step=\"2\" data-guide-position=\"D\" data-guide-message=\"Sem pride nejaky textaaaaaaa aaaa a sas asasa as as\">Guide</button>\n" +
        "    </div>\n" +
        "\n" +
        "    <div id=\"rightSide\">\n" +
        "        <div id=\"searchDiv\" data-guide=\"true\" data-guide-step=\"4\" data-guide-position=\"L\" data-guide-message=\"Sem pride nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as\">\n" +
        "            <input type=\"text\" placeholder=\"Search...\">\n" +
        "        </div>\n" +
        "\n" +
        "        <article class=\"articleText\" >\n" +
        "            <h3 class=\"guide\" data-guide=\"true\" data-guide-step=\"6\" data-guide-position=\"R\" data-guide-message=\"Sem pride nejaky textaaaaaaa aaaaa a a sas a sas asasa as as\">Article title</h3>\n" +
        "            <span class=\"guide\" data-guide=\"true\" data-guide-step=\"8\" data-guide-position=\"L\" data-guide-message=\"Sem pride nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as as as as as as as as assssssss\">\n" +
        "                Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n" +
        "                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\n" +
        "                when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n" +
        "            </span>\n" +
        "        </article>\n" +
        "\n" +
        "        <article>\n" +
        "            <h3 id=\"leleHeader\"> Last one</h3>\n" +
        "            <span id=\"lele\" class=\"guide\" data-guide=\"true\" data-guide-step=\"7\" data-guide-position=\"U\" data-guide-message=\"Sem pride nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as\">\n" +
        "                Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n" +
        "                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\n" +
        "                when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n" +
        "            </span>\n" +
        "        </article>\n" +
        "\n" +
        "    </div>\n" +
        "\n" +
        "    <footer>\n" +
        "        <span>Created by: Matuš Kanda</span>\n" +
        "    </footer>\n" +
        "\n" +
        "<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\n" +
        "<!--<script src=\"../testingTS/dist/customIntro.js\"></script>-->\n" +
        "<script src=\"../testingTS/dist/customIntro.js\"></script>");


    document.getElementsByTagName('head')[0].appendChild(document);
    return document;
}
