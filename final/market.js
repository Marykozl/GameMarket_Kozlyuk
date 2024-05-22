
//визначення масиву товарів
    let itemsArray =   [
        {
            email: "23a_bam@liceum.ztu.edu.ua",
            group: "10-А 1",
            name: "Боровий Артур",
            author_photo:"Боровий.jpg",
            game_photo: "",
            gameTitle: "Дід проти москалів",
            gameGithub: "https://github.com/23a-bam/Phaser2ndGame",
            gameGithubPages: "https://23a-bam.github.io/Phaser2ndGame/",
            documentationDrive: "https://drive.google.com/drive/folders/1A12wx0lfNj7Aef9KAw2CFMaDwhWM8V4Q?usp=sharing",
            surveyForm: "https://forms.gle/sS7tuJWJuGDjmHB98",
            gameMarketGithub: "https://github.com/23a-bam/GameMarket_Borovyi",
            gameMarketPages: "https://23a-bam.github.io/GameMarket_Borovyi/",
            marketPages: "https://23a-bam.github.io/GameMarket_Borovyi/market.html",
            gameMarketFinalPage: "-"
        },
        {
            email: "23a_gki@liceum.ztu.edu.ua",
            group: "10-А 1",
            name: "Геча Кирило",
            gameTitle: "Магазин UkraineRog",
            gameGithub: "https://github.com/Kyrylooo/GameMarket_Surname",
            gameGithubPages: "https://kyrylooo.github.io/Test1/",
            documentationDrive: "-",
            surveyForm: "-",
            gameMarketGithub: "https://github.com/Kyrylooo/Test1",
            gameMarketPages: "https://kyrylooo.github.io/Test1/",
            marketPages: "https://kyrylooo.github.io/Test1/",
            gameMarketFinalPage: "-"
        },
        {
            email: "23a_gmo@liceum.ztu.edu.ua",
            group: "10-А 1",
            name: "Громова Марина",
            gameTitle: "-",
            gameGithub: "https://github.com/Marina745/Phaser2ndGame",
            gameGithubPages: "https://marina745.github.io/Phaser2ndGame/",
            documentationDrive: "https://drive.google.com/drive/folders/1h8T6v1Yt0wkzkiI72lSMMZndaidptT6o",
            surveyForm: "https://forms.gle/4tsVxrHtBpkLLmdc6",
            gameMarketGithub: "https://github.com/Marina745/GameMarket_Hromova/blob/main/market.js",
            gameMarketPages: "https://marina745.github.io/GameMarket_Hromova/market.html",
            marketPages: "-",
            gameMarketFinalPage: "-"
        },
        {
            email: "23a_gayu@liceum.ztu.edu.ua",
            group: "10-А 1",
            name: "Гуменюк Аріна",
            gameTitle: "-",
            gameGithub: "https://github.com/NoraBlank/-Phaser2ndGame?authuser=0",
            gameGithubPages: "https://norablank.github.io/-Phaser2ndGame/?authuser=0",
            documentationDrive: "https://docs.google.com/document/d/1ESxlcNrGJPWx--NdlFbMdZJNQ3mHWVKQ-HktIVOJBVY/edit?usp=sharing",
            surveyForm: "https://forms.gle/rNroPXhu2mFSxcHx8",
            gameMarketGithub: "",
            gameMarketPages: ""
        },
        {
            email: "23a_dii@liceum.ztu.edu.ua",
            group: "10-А 1",
            name: "Демидчук Ілля",
            gameTitle: "-",
            gameGithub: "https://github.com/zxcursed2008/Phaser2ndGame",
            gameGithubPages: "https://zxcursed2008.github.io/Phaser2ndGame/",
            documentationDrive: "https://drive.google.com/drive/folders/1BfaZ86pNTA3FO_rOn196XXKOLYNQQ81E",
            surveyForm: "https://forms.gle/xs7rgVauTR9ryuNc7",
            gameMarketGithub: "https://github.com/zxcursed2008/GameMarket_Demydchuk/",
            gameMarketPages: ""
        },
        {
            email: "23a_dyem@liceum.ztu.edu.ua",
            group: "10-А 1",
            name: "Деркач Єлизавета",
            gameTitle: "Царівна жаба",
            gameGithub: "https://github.com/liska228/Phaser2ndGame",
            gameGithubPages: "https://liska228.github.io/Phaser2ndGame/",
            documentationDrive: "https://drive.google.com/drive/folders/1uFrc-z8MnRAFvR7sPNM1NnN800TJOUfr",
            surveyForm: "https://forms.gle/XDzvrjzJhjq758XFA",
            gameMarketGithub: "https://github.com/liska228/GameMarket_Derkach-",
            gameMarketPages: "https://liska228.github.io/GameMarket_Derkach-/market.html"
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
        }
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
        <div><img src="img/${item.image}" class="item-image"></div>
        <!--Info-->
        <div><a href="${item.email}">Написати</a></div>
        <div>${item.group}</div>
        <!--Game-->
        <div><a href="${item.game_github}">GitHub гри</a></div>
        <div><a href=${item.game_pages}>Гра</a></div>
        <div><a href="${item.docs}">Документація</a></div>
        <div><a href=">${item.forms}">Опитування</a</div>
        <!--Market-->
        <div><a href="${item.gamemarket_github}">GitHub маркету</a></div>
        <div><a href="${item.gamemarket_pages}">Маркет ігор</a></div>
        <div><a href="${item.market_pagesb}">Маркет продуктів</a></div>

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
