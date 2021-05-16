export function createProgressBar(){
    const progress = document.createElement("progress") as HTMLProgressElement;
    progress.style.marginLeft = "5px";
    progress.value = idCounter - 2;
    progress.max = elements.length;
    return progress;
}