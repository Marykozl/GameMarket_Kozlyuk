//Перевірка підключеного файлу скриптів 
    //console.log('Перевірка підключеного файлу скриптів market.js')
//визначення масиву товарів
    let itemsArray =   ['Газонокосарка 43',
                        'Електричний тример 110',
                        'Електрична газонокосарка 32',
                        'Акумуляторний оприскучва 12 N',
                        //'Газонокосарка 430',
                        //'Електричний тример 130',
                        //'Електрична газонокосарка 320',
                        //'Акумуляторний оприскувач 12 E',
                       ]
// Отримання елементу з ідентифікатором items 
    let itemsDiv = document.getElementById("items");
//Перевірка існування знайденого блоку
    if (itemsDiv) 
{
//виведення елементів масиву
    itemsArray.forEach((item, index) =>
{
    itemsDiv.innerHTML += `<div class = "item">
    <h2>Товар №${index+1}</h2>
    <p>${item}</p>
    </div>`
    //console.log(item)
    //itemsDiv.innerHTML += '<div class = "item"></div>'
})
}
    //Вивід знайденого елементу
<<<<<<< HEAD
    //console.log(itemsDiv)
=======
    // console.log(itemsDiv)
>>>>>>> 8d496939e3c820f7ba185857435c7551a1142dd3
    //додавання відформатованого HTML коду в блок
    //itemsDiv.innerHTML+=' <div class="item"></div>'
    //itemsDiv.innerHTML+=' <div class="item"></div>'
    //itemsDiv.innerHTML+=' <div class="item"></div>'
    //itemsDiv.innerHTML+=' <div class="item"></div>'
    //for (let i = 0; i < 100; i++)
<<<<<<< HEAD
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
=======
      //  {
        //itemsDiv.innerHTML += '<div class = "item"></div>'
    //}
    }
     else {
    //Вивід повідомлення про не знайдений блок
    console.log("Блок товарів не знайдено")
}
//визначення масиву товарів
let itemsArray = ['Газонокосарка 43','Електричний тример 110','Електрична газонокосарка 32','Акумуляторний оприскувач 12 N']
//виведення в консоль масиву
console.log(itemsArray)
//
for (let i = 0; i < itemsArray.length; i++)
    {
        console.log(itemsArray[i])
    }
>>>>>>> 8d496939e3c820f7ba185857435c7551a1142dd3
