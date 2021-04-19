export function animationHide(element: HTMLElement) {
    const start = [40, 40, 40, 0];
    const end = [255, 255, 255, 1];

    console.log("hiding element :" + element.id, "current popupDiv index : " + currentPopupDivsIndex);

    $(element).animate({'aaa': 0}, {
        duration: 1000, step(now) {
            $(this).css('background-color', 'rgba(' +
                parseInt((start[0] + (end[0] - start[0]) * now).toString()) + ',' +
                parseInt((start[1] + (end[1] - start[1]) * now).toString()) + ',' +
                parseInt((start[2] + (end[2] - start[2]) * now).toString()) + ')'
            )
        }
    });
}
