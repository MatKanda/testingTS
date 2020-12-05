const intro=introJs();
intro.setOptions({
    steps:[
        {
            element: '#introduction',
            intro : 'Vitajte na stránke s brutálnou výpočtovou logikou'
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
            element: '#step-three',
            intro: 'Odošlite na výpočet'
        },
        {
            element: '#table',
            intro: 'Toto je výsledok'
        },
        {
            element: '#exitButton',
            intro: 'Ukončite simuláciu'
        }
    ]
})

document.querySelector('#startTutorial').addEventListener('click',function (){ intro.start();});
