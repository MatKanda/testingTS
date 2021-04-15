import {currentPopupDivsIndex} from "../init/guideInit";

export function animationHide(element){
    var start = [40,40,40,0], end=[255,255,255,1];
    console.log("hiding element :"+element.id, "current popupDiv index : "+currentPopupDivsIndex);

    //@ts-ignore
    $(element).animate( {'aaa': 0},{
        duration:1000,step: function(now){
            //@ts-ignore
            $(this).css('background-color', 'rgba('+                                //@ts-ignore
                parseInt(start[0] + (end[0]-start[0]) * now) + ',' +            //@ts-ignore
                parseInt(start[1] + (end[1]-start[1]) * now) + ',' +            //@ts-ignore
                parseInt(start[2] + (end[2]-start[2]) * now) + ')'
            )                                                                     //@ts-ignore
        }});
}