const intro=introJs();
intro.addHints();
intro.setOptions({

    hints: [
        {
            element: '#startGuide',
            hint: 'First hint'
        }
    ],
    steps:[
        {
            element: '#introduction',
            intro : 'Vitajte na stránke s brutálnou výpočtovou logikou'
        },
        {
            element: '#leftSide',
            intro: 'Tu sa nachádza menu'
        },
        {
            element: '#rightSide',
            intro: 'Tu sa deje mágia'
        },
        {
            element: '#step-one',
            intro: 'Zadajte hodnotu x'
        },
        {
            element: '#step-two',
            intro: 'Zadajte hodnotu y'
        },
        {
            element: '#compute',
            intro: 'Odošlite na výpočet'
        },
        {
            element: '#result',
            intro: 'Tu sa nám zobrazí výpočet'
        },
        {
            element: '#nextPage',
            intro: 'Dalej sa pozrieme na vedľajšiu stránku'
        },
        {
            element: '#nothing',
            intro: 'Tu sme nič nenašli'
        },
        {
            element: '#goBack',
            intro: 'Tak poďme naspäť'
        },
        {
            element: '#end',
            intro: 'Tu sme skončili'
        }
    ]
})

document.querySelector('#startGuide').addEventListener('click',function (){ intro.start();});
function nextPage(){
    intro.start();
    window.onload= intro.goToStep(8).start();
}

function end(){
    intro.start();
    window.onload= intro.goToStep(10).start();
}

