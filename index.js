let mainContainer = document.querySelector('.mainContainer'),
    mainMenu = document.querySelector('.mainMenu'),
    btn = document.querySelectorAll('input'),
    gameBoard = document.querySelector('.gameBoard'),
    sideBar = document.querySelector('.sidebar'),
    dirtBank = document.querySelector('.items .dirt'),
    eyeBank = document.querySelector('.items .eye'),
    leafBank = document.querySelector('.items .leaf'),
    stoneBank = document.querySelector('.items .stone'),
    treeBank = document.querySelector('.items .tree'),
    waterBank = document.querySelector('.items .water'),
    lavaBank = document.querySelector('.items .lava'),
    obsidianBank = document.querySelector('.items .obsidian'),
    fullEyeBank = document.querySelector('.items .fullEye'),
    tnt = document.querySelector('.tools .tnt'),
    pickaxe = document.querySelector('.tools .pickaxe'),
    axe = document.querySelector('.tools .axe'),
    shovel = document.querySelector('.tools .shovel'),
    sword = document.querySelector('.tools .sword'),
    bucket = document.querySelector('.tools .bucket'),
    toolBank, itemBank,
    arrayOfKnowledge = [];
btn[0].addEventListener('click', () => {
    gameBoard.classList.remove('displaynone');
    sideBar.classList.remove('displaynone');
    mainMenu.classList.add('displaynone');
    gridGenerator(35);
})
btn[1].addEventListener('click', () => {
    gameBoard.classList.remove('displaynone');
    sideBar.classList.remove('displaynone');
    mainMenu.classList.add('displaynone');
    gridGenerator(300);
})
btn[2].addEventListener('click', () => {
    gameBoard.classList.add('displaynone');
    sideBar.classList.add('displaynone');
    mainMenu.classList.remove('displaynone');
    gameBoard.innerHTML = '';
    lavaBank.innerHTML = 0;
    waterBank.innerHTML = 0;
    obsidianBank.innerHTML = 0;
    toolBank = '';
    itemBank = '';
    arrayOfKnowledge = [];
})

function gridGenerator(width) {
    mainContainer.style.display = 'flex'
    gameBoard.style.gridTemplateColumns = `repeat(${width}, 5vh)`
    for (let i = 0; i < 20; i++) {
        for (let j = 1; j < width; j++) {
            let div = document.createElement('div')
            div.style.gridRowStart = i
            div.style.gridColumnStart = j
            gameBoard.appendChild(div)
            div.addEventListener('click', checkMove)
        }
    }
    dirtGenerator(width)
    portalGenerator(width)
    randomGenerator(width, 10, 6, 2, width, 0, 'cloud')
    randomGenerator(width, 1, 2, 19, 0, 0, "lava")
    randomGenerator(width, 15, 2, 15, width, 0, "water")

    function randomGenerator(gridSize, numOfReps, randomNumX, startNumX, randomNumY, startNumY, elementType) {
        let elementArr
        for (let i = 0; i < gridSize / numOfReps; i++) {
            XA = Math.floor(Math.random() * randomNumX) + startNumX,
                YA = Math.floor(Math.random() * randomNumY) + startNumY;
            let water = [{ x: XA, y: YA + 1 }, { x: XA, y: YA + 2 }, { x: XA, y: YA + 3 }, { x: XA, y: YA + 4 }, { x: XA, y: YA + 5 }, { x: XA + 1, y: YA + 2 }, { x: XA + 1, y: YA + 3 }, { x: XA + 1, y: YA + 4 }, ],
                lava = [{ x: XA, y: i }, { x: XA + 1, y: i }],
                cloud = [{ x: XA, y: YA + 1 }, { x: XA, y: YA + 2 }, { x: XA, y: YA + 3 }, { x: XA, y: YA + 4 }, { x: XA + 1, y: YA + 2 }, { x: XA + 1, y: YA + 3 }, { x: XA + 1, y: YA + 4 }, { x: XA + 1, y: YA + 5 }, ];

            switch (elementType) {
                case 'water':
                    elementArr = water
                    break;
                case 'lava':
                    elementArr = lava
                    break;
                case 'cloud':
                    elementArr = cloud
                    break;
            }
            elementArr.forEach(element => {
                let generatedDiv = document.createElement('div');
                generatedDiv.style.gridRowStart = element.x;
                generatedDiv.style.gridColumnStart = element.y;
                generatedDiv.classList.add(elementType);
                gameBoard.appendChild(generatedDiv)
                generatedDiv.addEventListener('click', checkMove)
            });
        }
    }

    function portalGenerator(gridSize) {
        let YA = 3,
            portal = [{ z: false, x: 171, y: YA + 6 }, { z: false, x: 171, y: YA + 7 }, { z: false, x: 171, y: YA + 8 }, { z: true, x: 171, y: YA + 10 }, { z: true, x: 171, y: YA + 11 }, { z: true, x: 171, y: YA + 12 }, { z: true, x: 171, y: YA + 13 }, { z: true, x: 171, y: YA + 14 }, { z: true, x: 171, y: YA + 15 }, { z: true, x: 171, y: YA + 16 }, { z: true, x: 171, y: YA + 17 }, { z: false, x: 171 + 1, y: YA + 5 }, { z: false, x: 171 + 1, y: YA + 9 }, { z: true, x: 171 + 1, y: YA + 10 }, { z: true, x: 171 + 1, y: YA + 11 }, { z: true, x: 171 + 1, y: YA + 12 }, { z: true, x: 171 + 1, y: YA + 13 }, { z: true, x: 171 + 1, y: YA + 14 }, { z: true, x: 171 + 1, y: YA + 15 }, { z: true, x: 171 + 1, y: YA + 16 }, { z: true, x: 171 + 1, y: YA + 17 }, { z: false, x: 171 + 2, y: YA + 5 }, { z: false, x: 171 + 2, y: YA + 9 }, { z: true, x: 171 + 2, y: YA + 10 }, { z: true, x: 171 + 2, y: YA + 11 }, { z: true, x: 171 + 2, y: YA + 12 }, { z: true, x: 171 + 2, y: YA + 13 }, { z: true, x: 171 + 2, y: YA + 14 }, { z: true, x: 171 + 2, y: YA + 15 }, { z: true, x: 171 + 2, y: YA + 16 }, { z: true, x: 171 + 2, y: YA + 17 }, { z: false, x: 171 + 3, y: YA + 5 }, { z: false, x: 171 + 3, y: YA + 9 }, { z: true, x: 171 + 3, y: YA + 10 }, { z: true, x: 171 + 3, y: YA + 11 }, { z: true, x: 171 + 3, y: YA + 12 }, { z: true, x: 171 + 3, y: YA + 13 }, { z: true, x: 171 + 3, y: YA + 14 }, { z: true, x: 171 + 3, y: YA + 15 }, { z: true, x: 171 + 3, y: YA + 16 }, { z: true, x: 171 + 3, y: YA + 17 }, { z: false, x: 171 + 4, y: YA + 6 }, { z: false, x: 171 + 4, y: YA + 7 }, { z: false, x: 171 + 4, y: YA + 8 }, { z: true, x: 171 + 4, y: YA + 10 }, { z: true, x: 171 + 4, y: YA + 11 }, { z: true, x: 171 + 4, y: YA + 12 }, { z: true, x: 171 + 4, y: YA + 13 }, { z: true, x: 171 + 4, y: YA + 14 }, { z: true, x: 171 + 4, y: YA + 15 }, { z: true, x: 171 + 4, y: YA + 16 }, { z: true, x: 171 + 4, y: YA + 17 }]

        for (let i = 0; i < gridSize; i++) {
            if (i == 171) {
                portal.forEach((element, j) => {
                    let portalElement = document.createElement('div');
                    portalElement.style.gridRowStart = element.y;
                    portalElement.style.gridColumnStart = element.x;
                    if (element.z == true) {
                        portalElement.classList.add('dirt');
                    } else if (element.y == 20) {
                        portalElement.classList.add('lava');
                    } else { portalElement.classList.add('portal'); }
                    gameBoard.appendChild(portalElement)
                    portalElement.addEventListener('click', checkMove)
                });
            }
        }
    }

    function dirtGenerator(gridSize) {
        for (let i = 0; i < gridSize; i++) {
            let YA = Math.floor(Math.random() * 3) + 3
            let dirt = [{ x: i, y: YA + 10 }, { x: i, y: YA + 11 }, { x: i, y: YA + 12 }, { x: i, y: YA + 13 }, { x: i, y: YA + 14 }, { x: i, y: YA + 15 }, { x: i, y: YA + 16 }, { x: i, y: YA + 17 }, ];
            if (i % 4 + Math.floor(Math.random() * 5) == 0) {
                let tree = [{ x: i - 1, y: YA + 5 }, { x: i + 1, y: YA + 5 }, { x: i, y: YA + 5 }, { x: i - 1, y: YA + 6 }, { x: i + 1, y: YA + 6 }, { x: i, y: YA + 6 }, { x: i - 1, y: YA + 7 }, { x: i + 1, y: YA + 7 }, { x: i, y: YA + 7 }, { x: i, y: YA + 8 }, { x: i, y: YA + 9 }, { x: i, y: YA + 10 }, { x: i, y: YA + 11 }, { x: i, y: YA + 12 }, { x: i, y: YA + 13 }, { x: i, y: YA + 14 }, { x: i, y: YA + 15 }, { x: i, y: YA + 16 }, { x: i, y: YA + 17 }, ];
                tree.forEach((element, j) => {
                    let treeElement = document.createElement('div');
                    treeElement.style.gridRowStart = element.y;
                    treeElement.style.gridColumnStart = element.x;
                    switch (j) {
                        case 0:
                            treeElement.classList.add('leaf');
                            break;
                        case 1:
                            treeElement.classList.add('leaf');
                            break;
                        case 2:
                            treeElement.classList.add('leaf');
                            break;
                        case 3:
                            treeElement.classList.add('leaf');
                            break;
                        case 4:
                            treeElement.classList.add('leaf');
                            break;
                        case 5:
                            treeElement.classList.add('leaf');
                            break;
                        case 6:
                            treeElement.classList.add('leaf');
                            break;
                        case 7:
                            treeElement.classList.add('leaf');
                            break;
                        case 8:
                            treeElement.classList.add('tree');
                            break;
                        case 9:
                            treeElement.classList.add('tree');
                            break;
                        case 10:
                            treeElement.classList.add('tree');
                            break;
                        case 11:
                            treeElement.classList.add('grass');
                            break;
                        default:
                            treeElement.classList.add('dirt');
                            break;
                    }
                    gameBoard.appendChild(treeElement)
                    treeElement.addEventListener('click', checkMove)
                });
            } else if (i % Math.floor(Math.random() * 10) == 0) {
                let stone = [{ x: i, y: YA + 9 }, { x: i, y: YA + 10 }, { x: i, y: YA + 11 }, { x: i, y: YA + 12 }, { x: i, y: YA + 13 }, { x: i, y: YA + 14 }, { x: i, y: YA + 15 }, { x: i, y: YA + 16 }, { x: i, y: YA + 17 }, ];
                stone.forEach((element, j) => {
                    let stoneElement = document.createElement('div');
                    stoneElement.style.gridRowStart = element.y;
                    stoneElement.style.gridColumnStart = element.x;
                    switch (j) {
                        case 0:
                            stoneElement.classList.add('stone');
                            break;
                        case 1:
                            stoneElement.classList.add('grass');
                            break;
                        default:
                            stoneElement.classList.add('dirt');
                            break;
                    }
                    gameBoard.appendChild(stoneElement)
                    stoneElement.addEventListener('click', checkMove)
                });
            } else {
                dirt.forEach((element, j) => {
                    let dirtElement = document.createElement('div');
                    dirtElement.style.gridRowStart = element.y;
                    dirtElement.style.gridColumnStart = element.x;
                    if (j == 0) {
                        dirtElement.classList.add('grass');
                    } else { dirtElement.classList.add('dirt'); }
                    gameBoard.appendChild(dirtElement)
                    dirtElement.addEventListener('click', checkMove)
                });
            }
        }
    }
    tnt.addEventListener('click', toolBankFiller)
    axe.addEventListener('click', toolBankFiller)
    sword.addEventListener('click', toolBankFiller)
    shovel.addEventListener('click', toolBankFiller)
    bucket.addEventListener('click', toolBankFiller)
    pickaxe.addEventListener('click', toolBankFiller)
    eyeBank.addEventListener('click', itemBankFiller)
    dirtBank.addEventListener('click', itemBankFiller)
    leafBank.addEventListener('click', itemBankFiller)
    treeBank.addEventListener('click', itemBankFiller)
    lavaBank.addEventListener('click', obsidianBanker)
    waterBank.addEventListener('click', obsidianBanker)
    stoneBank.addEventListener('click', itemBankFiller)
    fullEyeBank.addEventListener('click', itemBankFiller)
    obsidianBank.addEventListener('click', toolBankFiller)

    function itemBankFiller(e) {
        itemBank = e.target.className;
        toolBank = ''
    }

    function toolBankFiller(e) {
        toolBank = e.target.className;
        itemBank = ''
    }

    function obsidianBanker(e) {
        let Elem = e.target.className,
            otherElem;
        if (Elem == 'water bank') { otherElem = 'lava bank'; } else { otherElem = 'water bank'; }
        if (itemBank == otherElem && waterBank.innerHTML > 0 && lavaBank.innerHTML > 0) {
            obsidianBank.innerHTML++;
            lavaBank.innerHTML--;
            waterBank.innerHTML--;
            itemBank = '';
        } else { itemBank = Elem; }
        toolBank = ''
    }
}

function checkMove(e) {
    let tempDivClass = e.path[0].classList[0]
    if (toolBank == 'tnt') { TNT(e) }
    switch (tempDivClass) {
        case undefined:
            switch (itemBank) {
                case 'dirt bank':
                    if (dirtBank.innerHTML > 0) {
                        dirtBank.innerHTML--;
                        e.path[0].classList.add('dirt')
                    }
                    break;
                case 'leaf bank':
                    if (leafBank.innerHTML > 0) {
                        leafBank.innerHTML--;
                        e.path[0].classList.add('leaf')
                    }
                    break;
                case 'stone bank':
                    if (stoneBank.innerHTML > 0) {
                        stoneBank.innerHTML--;
                        e.path[0].classList.add('stone')
                    }
                    break;
                case 'tree bank':
                    if (treeBank.innerHTML > 0) {
                        treeBank.innerHTML--;
                        e.path[0].classList.add('tree')
                    }
                    break;
                case 'water bank':
                    if (waterBank.innerHTML > 0) {
                        waterBank.innerHTML--;
                        e.path[0].classList.add('water')
                    }
                    break;
                case 'lava bank':
                    if (lavaBank.innerHTML > 0) {
                        lavaBank.innerHTML--;
                        e.path[0].classList.add('lava')
                    }
                    break;
                case 'obsidian bank':
                    if (obsidianBank.innerHTML > 0) {
                        obsidianBank.innerHTML--;
                        e.path[0].classList.add('obsidian')
                            // checksiblings(e)
                    }
                    break;
            }
            break;
        case 'leaf':
            if (toolBank == 'axe') {
                leafBank.innerHTML++
                    e.path[0].classList.remove('leaf')
            }
            break;
        case 'tree':
            if (toolBank == 'axe') {
                treeBank.innerHTML++
                    e.path[0].classList.remove('tree')
            }
            break;
        case 'stone':
            if (toolBank == 'pickaxe') {
                stoneBank.innerHTML++
                    e.path[0].classList.remove('stone')
            }
            break;
        case 'dirt':
            if (toolBank == 'shovel') {
                dirtBank.innerHTML++
                    e.path[0].classList.remove('dirt')
            }
            break;
        case 'grass':
            if (toolBank == 'shovel') {
                dirtBank.innerHTML++
                    e.path[0].classList.remove('grass')
            }
            break;
        case 'water':
            if (toolBank == 'bucket') {
                waterBank.innerHTML++
                    e.path[0].classList.remove('water')
            }
            break;
        case 'lava':
            if (toolBank == 'bucket') {
                lavaBank.innerHTML++
                    e.path[0].classList.remove('lava')
            }
            break;
        case 'enderMan':
            if (toolBank == 'sword') {
                eyeBank.innerHTML++
                    e.path[0].classList.remove('enderMan')
            }
            break;
    }

    function TNT(e) {
        console.log(e.path[0].style.gridRowStart);
        e.path[0].classList.remove('dirt', 'water', 'tree', 'leaf', 'lava', 'stone', 'grass')
        gameBoard.children[Array.from(gameBoard.children).indexOf(e.path[0]) + 1].classList.remove('dirt', 'water', 'tree', 'leaf', 'lava', 'stone', 'grass')
        gameBoard.children[Array.from(gameBoard.children).indexOf(e.path[0]) - 1].classList.remove('dirt', 'water', 'tree', 'leaf', 'lava', 'stone', 'grass')
    }

    function checksiblings(e) {
        //     arrayOfKnowledge.push({ x: e.path[0].style.gridRowStart, y: e.path[0].style.gridColumnStart })
        //     let fBX = arrayOfKnowledge[0].x
        //     let fBY = arrayOfKnowledge[0].y
        //     console.log(fBY);
        //     if (arrayOfKnowledge.length > 9) {
        //         if (arrayOfKnowledge.includes({ x: fBX, y: fBY }) && arrayOfKnowledge.includes({ x: fBX, y: fBY + 1 }) || arrayOfKnowledge.includes({ x: fBX, y: fBY }) && arrayOfKnowledge.includes({ x: fBX, y: fBY - 1 })) {}
        //     }
        //     console.log(arrayOfKnowledge);
    }

}