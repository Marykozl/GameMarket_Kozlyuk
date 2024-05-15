//Перевірка підключеного файлу скриптів 
    //console.log('Перевірка підключеного файлу скриптів market.js')
//визначення масиву товарів
    let itemsArray =   [
{
    firstName: "Туш для вій",
    lastName: "Maybelline New York Lash Sensational Sky High",
    photo: "https://u.makeup.com.ua/f/fy/fyu3okmsetsw.jpg",
},
{
    firstName: "Блиск для губ",
    lastName: "Maybelline New York Lifter Gloss",
    photo: "https://mykady.com/cdn/shop/products/q_0f0fa1b1-e63f-4dd3-86c0-93d00fad9be4.jpg?v=1668081431",
},
{
    firstName: "Підводка для очей",
    lastName: "Maybelline New York Hyper Easy",
    photo: "https://www.maybelline.ua/~/media/mny/global/eye-makeup/eyeliner/eyestudio-hyper-easy-liquid-eyeliner-eye-makeup/maybelline-hyper-easy-liquid-liner-black-041554578607-o.jpg?thn=0&w=380&hash=6ACF6BC59C3521CC6841C75B3A21F2653432494C",
},
{
    firstName: "Хайлайтер у формі стіку",
    lastName: "Maybelline Master Strobing",
    photo: "https://cdn.notinoimg.com/detail_zoom/maybelline/3600531342265_01-o/maybelline-master-strobing___170523.jpg",
},
    ]
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
    let itemsDiv = document.getElementById("items");
//Перевірка існування знайденого блоку
    if (itemsDiv) 
{
//виведення елементів масиву
    itemsArray.forEach((item, index) =>
{
    itemsDiv.innerHTML += 
    `<div class = "item">
    <h2>Товар № ${index+1} з ${itemsArray.length}</h2>
    <p>${item.lastName} ${item.firstNameName}</p>
    <p><img src="${item.photo}" alt="${item.lastName} ${item.firstName}" class="user-photo"></p>
    </footer>
    </div>`
    
    //console.log(item)
    //itemsDiv.innerHTML += '<div class = "item"></div>'
})
}
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
     else 
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
