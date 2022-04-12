// import placeMarks from './placeMarks.json';

ymaps.ready(init);

async function init(){
    const placeMarks = {
        "placeMarks": [
            {
                "x": "55.741814",
                "y": "38.003794",
                "address": "Пункт выдачи OZON МО г. Балашиха, Железнодорожный мкр., просп. Героев, д. 3 <br><strong>Адрес:</strong> Россия, 143980, обл. Московская, г. Балашиха, промышленная зона Железнодорожный, просп. Героев, д. 3<br>",
                "howToGet": "<br><strong>Как добраться:</strong>Остановкая Проспект Героев<br><br>Пройдите вперёд по проспекту Героев. Пункт выдачи расположен в жилом доме, отдельный вход с лицевой стороны здания, справа от ремонта телефонов.<br><br>Добро пожаловать!",
                "workTime": "<br><br><strong>Часы работы:</strong> 9:00 — 21:00"
            },
            {
                "x": "55.790524",
                "y": "37.932315",
                "address": "Пункт выдачи OZON МО, г. Балашиха, ул. Евстафьева, д. 1/9 <br><strong>Адрес:</strong> Россия, 143900, обл. Московская, г. Балашиха, ул. Евстафьева, д. 1/9<br>",
                "howToGet": "<br><strong>Как добраться:</strong>Остановкая Проспект Героев<br><br>Пройдите вперёд по проспекту Героев. Пункт выдачи расположен в жилом доме, отдельный вход с лицевой стороны здания, справа от ремонта телефонов.<br><br>Добро пожаловать!",
                "workTime": "<br><br><strong>Часы работы:</strong> 9:00 — 21:00"
            },
            {
                "x": "55.808108",
                "y": "37.943167",
                "address": "Пункт выдачи OZON МО г. Балашиха, ул. Зеленая, д. 32 корп. 2 <br><strong>Адрес:</strong> Россия, 143902, обл. Московская, г. Балашиха, ул. Зеленая, д. 32 корп. 2<br>",
                "howToGet": "<br><strong>Как добраться:</strong>Остановкая Проспект Героев<br><br>Пройдите вперёд по проспекту Героев. Пункт выдачи расположен в жилом доме, отдельный вход с лицевой стороны здания, справа от ремонта телефонов.<br><br>Добро пожаловать!",
                "workTime": "<br><br><strong>Часы работы:</strong> 9:00 — 21:00"
            },
            {
                "x": "55.749668",
                "y": "37.880348",
                "address": "Пункт выдачи OZON МО г. Реутов, ул. имени академика В.Н.Челомея, д. 11 <br><strong>Адрес:</strong> Россия, 143962, обл. Московская, г. Реутов, ул. имени академика В.Н.Челомея, д. 11<br>",
                "howToGet": "<br><strong>Как добраться:</strong>Остановкая Проспект Героев<br><br>Пройдите вперёд по проспекту Героев. Пункт выдачи расположен в жилом доме, отдельный вход с лицевой стороны здания, справа от ремонта телефонов.<br><br>Добро пожаловать!",
                "workTime": "<br><br><strong>Часы работы:</strong> 9:00 — 21:00"
            },
            {
                "x": "55.700689",
                "y": "37.922389",
                "address": "Пункт выдачи OZON г. Москва, Защитников просп. д. 10 <br><strong>Адрес:</strong> Россия, 111674, г. Москва, просп. проспект Защитников Москвы, д. 10<br>",
                "howToGet": "<br><strong>Как добраться:</strong>Остановкая Проспект Героев<br><br>Пройдите вперёд по проспекту Героев. Пункт выдачи расположен в жилом доме, отдельный вход с лицевой стороны здания, справа от ремонта телефонов.<br><br>Добро пожаловать!",
                "workTime": "<br><br><strong>Часы работы:</strong> 9:00 — 21:00"
            }
        ]
    };

    const myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 9
    });
    const mapMarks = placeMarks.placeMarks.map((mark) => {
        return new ymaps.Placemark([mark.x, mark.y], {
            balloonContent: mark.address + mark.howToGet + mark.workTime,
        }, {
            iconLayout: 'default#image',
            iconImageHref: './logo.svg',
            iconImageSize: [24, 24],
            iconImageOffset: [-12, -12],
            // hideIconOnBalloonOpen: false,
        });
    });

    mapMarks.forEach((mark) => myMap.geoObjects.add(mark));
}
