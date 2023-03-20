const listWork = [
    {
        title:'сайт про котиков',
        description:'сайт про котиков, на котором можно узнать об услугах сервиса, заказать котового доктора и котовый массаж',
        urlImg:'./img/workImg.png',

    },
    {
        title:"Калькулятор",
        description:"Красивый браузерный калькулятор, ползволяющий выполнять простыве арифметичесские операции",
        urlImg:'./img/human.png',
    },
    {
        title:'You-tube',
        description:'Простой сайт, на котором можно смотреть видео, вести трнасляции и общшаться',
        urlImg:'./img/workImg.png',
    }
]

const buttons = document.getElementsByClassName('arr')

const titleLabel = document.getElementsByClassName('work_title')[0]
const descrLabel = document.getElementsByClassName('work_descr')[0]
const imgLabel = document.getElementsByClassName('work_img')[0]


const backButton = buttons[0]
const nextBitton = buttons[1]
let index = 0

titleLabel.innerHTML = listWork[index].title
descrLabel.innerHTML = listWork[index].description
imgLabel.src = listWork[index].urlImg

console.log(imgLabel.src)


/* перерисовываем элемент в зависимости от индекса */
function updateWork(){
    titleLabel.innerHTML = listWork[index].title
    descrLabel.innerHTML = listWork[index].description
    imgLabel.src = listWork[index].urlImg
}

/* меняем номер элемента котороый показываем */
function nextWork(){
    if(index<listWork.length-1){
        index+=1
    }
    else{
        index=0
    }
    updateWork()
}


/* меняем номер элемента котороый показываем */
function backWork(){
    if(index>0){
        index-=1
    }
    else{
        index=listWork.length-1
    }
    updateWork()
}

nextBitton.addEventListener('click',()=>nextWork())
backButton.addEventListener('click',()=>backWork())

