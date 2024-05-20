//Перевірка підключеного файлу скриптів 
    //console.log('Перевірка підключеного файлу скриптів market.js')
//визначення масиву товарів
    let itemsArray =   [
{
    title:"Мотокоса 43",
    image:"https://v-m.kiev.ua/files/resized/products/8_2.600x800.jpg",
    lapka:6,
    pb: 8,
    prise_normal:5499,
    prise_discoun:4497,
    prise_coupon: 4395,
},
{
    title:"Електричний тример 110",
    image:"https://machtz.com.ua/files/resized/products/dsc_3483.800x850.jpg",
    lapka:6,
    pb: 8,
    prise_normal:4497,
    prise_discoun:3498,
    prise_coupon: 3396,
},
{
    title:"Електрична газонокосарка 32",
    image:"https://machtz.com.ua/files/resized/products/000024307_5be968a4-80ad-4b5b-b7ca-f04e9b0d4452-800x800.800x850.jpg",
    lapka:6,
    pb: 8,
    prise_normal:4497,
    prise_discoun:3297,
    prise_coupon: 3195,
},
{
    title:"Aкумуляторний обприскувач 12 N",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ5VL2RlulArIDQFfxJAJbON_7km1eRt_J-Q&usqp=CAU",
    lapka:6,
    pb: 8,
    prise_normal:2190,
    prise_discoun:1698,
    prise_coupon: 1596,
}
]
//{
    //firstName: "Туш для вій",
    //lastName: "Maybelline New York Lash Sensational Sky High",
    //photo: "https://u.makeup.com.ua/f/fy/fyu3okmsetsw.jpg",
//},
//{
    //firstName: "Блиск для губ",
    //lastName: "Maybelline New York Lifter Gloss",
    //photo: "https://mykady.com/cdn/shop/products/q_0f0fa1b1-e63f-4dd3-86c0-93d00fad9be4.jpg?v=1668081431",
//},
//{
    //firstName: "Підводка для очей",
    //lastName: "Maybelline New York Hyper Easy",
    //photo: "https://www.maybelline.ua/~/media/mny/global/eye-makeup/eyeliner/eyestudio-hyper-easy-liquid-eyeliner-eye-makeup/maybelline-hyper-easy-liquid-liner-black-041554578607-o.jpg?thn=0&w=380&hash=6ACF6BC59C3521CC6841C75B3A21F2653432494C",
//},
//{
    //firstName: "Хайлайтер у формі стіку",
    //lastName: "Maybelline Master Strobing",
    //photo: "https://cdn.notinoimg.com/detail_zoom/maybelline/3600531342265_01-o/maybelline-master-strobing___170523.jpg",
//},
    //]
                        //['Газонокосарка 43',
                        //'Електричний тример 110',
                        //'Електрична газонокосарка 32',
                        //'Акумуляторний оприскувач 12 N',
                        //'Газонокосарка 430',
                        //'Електричний тример 130',
                        //'Електрична газонокосарка 320',
                        //'Акумуляторний оприскувач 12 E',
                       //]
// Отримання елементу з ідентифікатором items 
    let itemsDiv = document.getElementById("item");
//Перевірка існування знайденого блоку

itemsArray.forEach((item, index) => {
    itemsDiv.innerHTML += 
        `
        <div class="item">
                <p>${item.title}</p>
                <div>
                    <img class="item-image" src="${item.image}">
                </div>
                <div class="parts-pay">
                    <div><img src="img/mb.png">4</div>
                    <div><img src="img/pb.png">8</div>
                </div>
                <div class="price">
                    <div>
                        <span>${item.prise_normal}</span><sup>грн</sup>
                        
                        <span>${item.prise_discoun}</span><sup>грн</sup>
                    </div>
                </div>

                <div class="bonus">
                    <div>Ціна за купоном</div>
                    <div >
                        <span class="bonus-div">${item.prise_coupon} </span>
                        <sup>грн</sup>
                    </div>
                    
                    
                </div>


            </div>
        `;
});
//виведення елементів масиву
    //itemsArray.forEach((item, index) =>
//{
    //itemsDiv.innerHTML += 

    //`<div class = "item">
    //<h2>Товар № ${index+1} з ${itemsArray.length}</h2>
    //<p>${item.lastName} ${item.firstNameName}</p>
    //<p><img src="${item.photo}" alt="${item.lastName} ${item.firstName}" class="user-photo"></p>
    //</footer>
    //</div>`
    
    //console.log(item)

    //Вивід знайденого елементу
    //console.log(itemsDiv)
    // console.log(itemsDiv)
    //додавання відформатованого HTML коду в блок
    //itemsDiv.innerHTML+=' <div class="item"></div>'
    //itemsDiv.innerHTML+=' <div class="item"></div>'
    //itemsDiv.innerHTML+=' <div class="item"></div>'
    //itemsDiv.innerHTML+=' <div class="item"></div>'
    //for (let i = 0; i < 100; i++)
        //{
        //itemsDiv.innerHTML += '<div class = "item"></div>'
    //}

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
//сортування масиву
                       //itemsArray = itemsArray.sort()
//виведення в консоль номерів та значень елементів масиву
        //for(let i = 0; i < itemsArray.length; i++)
//{
                //console.log(i + '-й елемент', itemsArray[i])
//}
      //  {
        //itemsDiv.innerHTML += '<div class = "item"></div>'
    //}
