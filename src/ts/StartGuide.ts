import {PopupDivs} from './PopupDiv';

class StartGuide extends PopupDivs {
    constructor(messages) {
        super(messages);
    }
}

document.getElementById("guide").addEventListener("click",function (){
    var messages=[
        "Prvy element textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as",
        "Druhy element nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as",
        "Treti element nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as",
        "Stvrty element nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as",
        "Piaty element nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as",
        "Siesty element nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as",
        "Siedmy element nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as",
        "Osmy element nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as"
    ];
    new StartGuide(messages);
});