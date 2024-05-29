
//визначення масиву товарів
    let itemsArray =   [
        {
            gameTitle: "Дід проти москалів",
            name: "Боровий Артур",
            author_photo:"Боровий.jpg",
            game_photo: "Боровий1.jpg",
            email: "23a_bam@liceum.ztu.edu.ua",
            group: "10-А 1",
            gameGithub: "https://github.com/23a-bam/Phaser2ndGame",
            gameGithubPages: "https://23a-bam.github.io/Phaser2ndGame/",
            docs: "https://drive.google.com/drive/folders/1A12wx0lfNj7Aef9KAw2CFMaDwhWM8V4Q?usp=sharing",
            forms: "https://forms.gle/sS7tuJWJuGDjmHB98",
            gameMarketGithub: "https://github.com/23a-bam/GameMarket_Borovyi",
            gameMarketPages: "https://23a-bam.github.io/GameMarket_Borovyi/",
            marketPages: "https://23a-bam.github.io/GameMarket_Borovyi/market.html",
            final: "https://23a-bam.github.io/GameMarket_Borovyi/market.html"
        },
        {
            gameTitle: "Магазин UkraineRog",
            name: "Геча Кирило",
            author_photo:"Геча.jpg",
            game_photo: "Геча1.jpg",
            email: "23a_gki@liceum.ztu.edu.ua",
            group: "10-А 1",
            gameGithub: "https://github.com/Kyrylooo/GameMarket_Surname",
            gameGithubPages: "https://kyrylooo.github.io/Test1/",
            docs: "-",
            forms: "-",
            gameMarketGithub: "https://github.com/Kyrylooo/Test1",
            gameMarketPages: "https://kyrylooo.github.io/Test1/",
            marketPages: "https://kyrylooo.github.io/Test1/",
            final: "https://kyrylooo.github.io/Test1/"
        },
        {
            gameTitle: "-",
            name: "Громова Марина",
            author_photo:"Громова.jpg",
            game_photo: "Громова1.jpg",
            email: "23a_gmo@liceum.ztu.edu.ua",
            group: "10-А 1",
            gameGithub: "https://github.com/Marina745/Phaser2ndGame",
            gameGithubPages: "https://marina745.github.io/Phaser2ndGame/",
            docs: "https://drive.google.com/drive/folders/1h8T6v1Yt0wkzkiI72lSMMZndaidptT6o",
            forms: "https://forms.gle/4tsVxrHtBpkLLmdc6",
            gameMarketGithub: "https://github.com/Marina745/GameMarket_Hromova/blob/main/market.js",
            gameMarketPages: "https://marina745.github.io/GameMarket_Hromova/market.html",
            marketPages: "-",
            final: "-"
        },
        {
            gameTitle: "-",
            name: "Гуменюк Аріна",
            author_photo:"Гуменюк.jpg",
            game_photo: "Гуменюк1.jpg",
            email: "23a_gayu@liceum.ztu.edu.ua",
            group: "10-А 1",
            gameGithub: "https://github.com/NoraBlank/-Phaser2ndGame?authuser=0",
            gameGithubPages: "https://norablank.github.io/-Phaser2ndGame/?authuser=0",
            docs: "https://docs.google.com/document/d/1ESxlcNrGJPWx--NdlFbMdZJNQ3mHWVKQ-HktIVOJBVY/edit?usp=sharing",
            forms: "https://forms.gle/rNroPXhu2mFSxcHx8",
            gameMarketGithub: "",
            gameMarketPages: "",
            marketPages: "-",
            final:"-"
        },
        {
            gameTitle: "-",
            name: "Демидчук Ілля",
            author_photo:"Демидчук.jpg",
            game_photo: "Демидчук1.jpg",
            email: "23a_dii@liceum.ztu.edu.ua",
            group: "10-А 1",
            gameGithub: "https://github.com/zxcursed2008/Phaser2ndGame",
            gameGithubPages: "https://zxcursed2008.github.io/Phaser2ndGame/",
            docs: "https://drive.google.com/drive/folders/1BfaZ86pNTA3FO_rOn196XXKOLYNQQ81E",
            surveyForm: "https://forms.gle/xs7rgVauTR9ryuNc7",
            gameMarketGithub: "https://github.com/zxcursed2008/GameMarket_Demydchuk/",
            gameMarketPages: "",
            marketPages: "-",
        },
        {
            gameTitle: "Царівна жаба",
            name: "Деркач Єлизавета",
            email: "23a_dyem@liceum.ztu.edu.ua",
            group: "10-А 1",
            gameGithub: "https://github.com/liska228/Phaser2ndGame",
            gameGithubPages: "https://liska228.github.io/Phaser2ndGame/",
            documentationDrive: "https://drive.google.com/drive/folders/1uFrc-z8MnRAFvR7sPNM1NnN800TJOUfr",
            surveyForm: "https://forms.gle/XDzvrjzJhjq758XFA",
            gameMarketGithub: "https://github.com/liska228/GameMarket_Derkach-",
            gameMarketPages: "https://liska228.github.io/GameMarket_Derkach-/market.html",
            marketPages: "-",
        },
        {
            email: "23a_yedv@liceum.ztu.edu.ua",
            group: "10-А 1",
            name: "Євланов Данііл",
            gameTitle: "Пригоди Свинки Шмеппи 2",
            gameGithub: "https://github.com/Scoxxy/Phaser2ndGame",
            gameGithubPages: "https://scoxxy.github.io/Phaser2ndGame/",
            documentationDrive: "https://drive.google.com/drive/folders/1IzTICIYe3e_rj81-ihjd3oDOz6xfSYQR?usp=drive_link",
            surveyForm: "https://forms.gle/vWZ2hn9MopmMy5fc7",
            gameMarketGithub: "https://github.com/Scoxxy/GameMarket_YevlanovDaniil",
            gameMarketPages: "https://scoxxy.github.io/GameMarket_YevlanovDaniil/market.html"
        },
        {
            email: "23a_bks@liceum.ztu.edu.ua",
            group: "10-А 1",
            name: "Катя Булич",
            gameTitle: "Червона відьма",
            gameGithub: "https://github.com/katyablchh/Phaser2ndGame",
            gameGithubPages: "https://katyablchh.github.io/Phaser2ndGame/",
            documentationDrive: "https://drive.google.com/drive/folders/1bNoYv5ChnzJTrIq0fjekfbqMNjz4SZ40?usp=sharing",
            surveyForm: "https://forms.gle/dxTCp9vfCCgZwyy97",
            gameMarketGithub: "https://github.com/katyablchh/GameMarket_Bulych",
            gameMarketPages: ""
        },
        {
            email: "23a_kai@liceum.ztu.edu.ua",
            group: "10-А 1",
            name: "Ковальов Андрій",
            gameTitle: "They alive",
            gameGithub: "https://github.com/Andre00785/Phaser1stGame",
            gameGithubPages: "https://github.com/Andre00785/Phaser1stGame/settings/pages",
            documentationDrive: "https://docs.google.com/document/d/1D1bRBFti1aHsr-ZAqkfDkK9tdEeOpkM26E9qyWCE8O0/edit?usp=sharing",
            surveyForm: "https://forms.gle/i7YyjwzaHp7QvXei8",
            gameMarketGithub: "https://github.com/Andre00785/Game_Market_Kovalev",
            gameMarketPages: "https://andre00785.github.io/Game_Market_Kovalev/market.html"
        },
        {
            email: "23a_kiv@liceum.ztu.edu.ua",
            group: "10-А 1",
            name: "Кайданюк Ілля",
            gameTitle: "Пригоди Свинки Шмеппи 3",
            gameGithub: "https://github.com/Nefenix/Phaser2ndGame",
            gameGithubPages: "https://nefenix.github.io/Phaser2ndGame/",
            documentationDrive: "https://drive.google.com/drive/folders/1xlqWdx6uMj_5XWDlfl4EYZtAD6A8LGMq?usp=drive_link",
            surveyForm: "https://forms.gle/e4camX4k2MZvK9qf7",
            gameMarketGithub: "https://github.com/Nefenix/GameMarket_Kaidaniuk",
            gameMarketPages: "https://nefenix.github.io/GameMarket_Kaidaniuk/market.html"
        },
        {
            email: "23a_kyuk@liceum.ztu.edu.ua",
            group: "10-А 1",
            name: "Кожанов Юрій",
            gameTitle: "Catventure",
            gameGithub: "https://github.com/kyuk278937/Catventure",
            gameGithubPages: "",
            documentationDrive: "https://drive.google.com/drive/folders/1GM-292zUzJSJlIB4-4_CIoOsHalliizh?usp=sharing",
            surveyForm: "https://forms.gle/NN9okEBmpsLw3AmX8",
            gameMarketGithub: "https://github.com/kyuk278937/GameMarket",
            gameMarketPages: "https://kyuk278937.github.io/GameMarket/"
        },
        {
            email: "23a_kmo@liceum.ztu.edu.ua",
            group: "10-А 1",
            name: "Козлюк Марина",
            gameTitle: "Пригоди червоної шапочки",
            gameGithub: "https://github.com/Marykozl/Phaser2ndGame",
            gameGithubPages: "https://marykozl.github.io/Phaser2ndGame/",
            documentationDrive: "https://drive.google.com/drive/folders/1AZzV2iit4QmQfotZM68HmWo4OjG-5ikO",
            surveyForm: "https://forms.gle/PdXpRXZrbn9ujeMH7",
            gameMarketGithub: "https://github.com/Marykozl/GameMarket_Kozlyuk?hl=ru&authuser=0",
            gameMarketPages: "https://marykozl.github.io/GameMarket_Kozlyuk/market.html"
        },
        {
            email: "23a_kia@liceum.ztu.edu.ua",
            group: "10-А 1",
            name: "Кравчук Іван",
            gameTitle: "Пригоди Свиноти",
            gameGithub: "https://github.com/maskenissen1/Phaser2ndGame-1",
            gameGithubPages: "https://maskenissen1.github.io/Phaser2ndGame-1/",
            documentationDrive: "https://drive.google.com/drive/folders/1_qC1jSGlqtfs16m1_nriWvomLg51Ah25",
            surveyForm: "https://forms.gle/S2YEZ1dn7tYTkrbF6",
            gameMarketGithub: "https://github.com/maskenissen1/GameMarket_Kravchuk",
            gameMarketPages: "https://maskenissen1.github.io/GameMarket_Kravchuk/market.html"
        },
        {
            email: "23a_lsa@liceum.ztu.edu.ua",
            group: "10-А 1",
            name: "Лазаренко Софія",
            gameTitle: "Mavka",
            gameGithub: "https://github.com/SofiaLazarenko/Phaser2ndGame?authuser=0",
            gameGithubPages: "https://sofialazarenko.github.io/Phaser2ndGame/?authuser=0",
            documentationDrive: "https://docs.google.com/document/d/1Dqe-8TcUA1YLj7mG-2IMBxHsPmlhkwfkEfrOTAb9Nvs/edit?usp=classroom_web&authuser=0",
            surveyForm: "https://forms.gle/PgJv2LH1ZJjjS29V8",
            gameMarketGithub: "https://github.com/SofiaLazarenko/GameMarket_Lazarenko?authuser=0",
            gameMarketPages: "https://sofialazarenko.github.io/GameMarket_Lazarenko/n/market.html?authuser=0"
        },
    ];
// Отримання елементу з ідентифікатором items 
    let itemsDiv = document.getElementById("item");
//Перевірка існування знайденого блоку

    itemsArray.forEach((item, index) => {
        itemsDiv.innerHTML += 
        `<div class="item">
        <!--Name-->
        <div class="item-title">${item.gameTitle}</div>
        <div class="item-title">${item.name}</div>
        <!--Photo-->
        <div><img src="img/${item.author_photo}" class="item-image"></div>
        <div><img src="img/${item.game_photo}" class="item-image"></div>
        <!--Info-->
        <div><a href="${item.email}">Написати</a></div>
        <div>${item.group}</div>
        <!--Game-->
        <div><a href="${item.gameGithub}">GitHub гри</a></div>
        <div><a href=${item. gameGithubPages}>Гра</a></div>
        <div><a href="${item.docs}">Документація</a></div>
        <div><a href=">${item.forms}">Опитування</a</div>
        <!--Market-->
        <div><a href="${item.gameMarketGithub}">GitHub маркету</a></div>
        <div><a href="${item.gameMarketPages}">Маркет ігор</a></div>
        <div><a href="${item.marketPages}">Маркет продуктів</a></div>
        <div><a href="${item.final}">Фінальна сторінка</a></div>
</div>`
});
{
//Вивід повідомлення про не знайдений блок
    console.log("Блок товарів не знайдено")
}
//виведення в консоль масиву
    console.log(itemsArray)
//виведення в консоль елементів масиву
        for (let i = 0; i < itemsArray.length; i++)
{
        console.log(itemsArray[i])
}
//виведення елементів відсортованого масиву
    itemsArray.sort().forEach((item) =>
{
    console.log(item)
})
