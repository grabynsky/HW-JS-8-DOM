function line() {


    document.body.appendChild(
        document.createElement('hr')
    );
}

// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

function createBlock(name, arrClasses, isClone = false) {
    let nameBlock = document.createElement(name);

    nameBlock.innerText = 'okten';

    for (const elClass of arrClasses) {
        nameBlock.classList.add(elClass);
    }

    isClone && document.body.appendChild(nameBlock.cloneNode(true));

    document.body.appendChild(nameBlock);
}

createBlock('div', ['wrap', 'collapse', 'alpha', 'beta'], true);

line();

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

function liElement(arr) {
    const ul = document.createElement('ul');
    for (const item of arr) {
        const li = document.createElement('li');
        li.style.marginBottom = '5px';
        li.innerText = `${item}`;
        ul.appendChild(li);
    }

    document.body.appendChild(ul);
}

liElement(['Main', 'Products', 'About us', 'Contacts']);

line();

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

function infoСoursesAndDuration(arr) {
    for (const el of arr) {
        const div = document.createElement('div');
        div.style.marginBottom = '10px'
        div.innerHTML = `${el.title} <b>duration</b> ${el.monthDuration}`;
        document.body.appendChild(div);
    }
}

infoСoursesAndDuration(coursesAndDurationArray);

line();
//
// =========================
//
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

function coursesAndDurationInfo(arr) {
    for (const el of arr) {
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        const p = document.createElement('p');

        div.className = 'item';
        h1.className = 'heading';
        p.className = 'description';

        h1.textContent = el.title;
        p.textContent = `Duration : ${el.monthDuration}`;

        div.append(h1, p);

        document.body.appendChild(div);
    }
}

coursesAndDurationInfo(coursesAndDurationArray);

line();

// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

function infoSimpson(arr) {
    for (const element of arr) {
        const div = document.createElement('div');

        div.innerHTML = `
            <h3>Name: <em>${element.name}</em></h3>
            <h3>Surname: <em>${element.surname}</em></h3>
            <p>Age: <em>${element.age}</em></p>
            <p>Info: <em>${element.info}</em></p>
            <p>Photo: <img src=${element.photo} alt=${element.name} style="width: 100px; height: auto"></p>
            <p style="width: 400px; border-bottom: 1px coral solid"></p>
        `;

        div.className = 'member';

        document.body.appendChild(div);
    }

}

infoSimpson(simpsons);
line();

// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

function infoCourses(arr) {


    const container = document.createElement('div');
    container.style.cssText = `
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;

    `;

    for (const item of arr) {
        const fullStack = document.createElement('div');
        const mouthAndHourToGether = document.createElement('div');
        const mouthDuration = document.createElement('div');
        const hourDuration = document.createElement('div');
        const modulesDiv = document.createElement('div');
        const ul = document.createElement('ul');

        fullStack.innerHTML = `<h2>${item.title}</h2>`;
        fullStack.style.borderBottom = '1px black solid';
        container.appendChild(fullStack);

        mouthDuration.innerText = `monthDuration: ${item.monthDuration}`;
        hourDuration.innerText = `hourDuration: ${item.hourDuration}`;
        mouthAndHourToGether.append(mouthDuration, hourDuration);

        mouthDuration.style.marginRight = '30px';

        mouthAndHourToGether.style.cssText = `
            display: flex;
            font-size: 18px;
            padding: 10px;        
        `;

        container.appendChild(mouthAndHourToGether);

        if (item.modules) {
            for (const liElement of item.modules) {

                const li = document.createElement('li');
                li.innerText = `${liElement}`;

                li.style.cssText = `
                    font-size: 18px;
                    margin-bottom: 5px;                    
                `;

                ul.appendChild(li);
                modulesDiv.appendChild(ul);
            }
            container.appendChild(modulesDiv);
        }

        document.body.appendChild(container);
    }
}

infoCourses(coursesArray);


// =========================================================
// Script for video
// =========================================================

const info = [];

const metas = document.getElementsByClassName('item-grid-card__meta');

for (let index = 0; index < metas.length; index++) {
    const title = metas[index].getElementsByClassName('item-grid-card__title')[0];
    const author = metas[index].getElementsByClassName('item-grid-music-preview__author')[0];
    const audio = document.getElementsByTagName('audio');

    const infoObject = {
        title: title.innerText,
        author: author.innerText,
        audio: audio[index].currentSrc,
    }
    info.push(infoObject);
}

console.log(info)
