let mainContainer = document.querySelector('.mainContainer'),
    mainMenu = document.querySelector('.mainMenu'),
    btn = document.querySelectorAll('input');



const arrayOfKnowledge = [];
let obsidianCapacity = true

btn[0].addEventListener('click', () => {
    mainMenu.classList.remove('displayblock')
    mainMenu.classList.add('displaynone')

    gridGenerator(35)
})
btn[1].addEventListener('click', () => {
    mainMenu.classList.remove('displayblock')
    mainMenu.classList.add('displaynone')
    gridGenerator(500)
})


function gridGenerator(width) {
    mainContainer.innerHTML += `
    <div class="sidebar">
        <div class="allTools">
            <div class="tools"><div class="pickaxe"></div><div class="shovel"></div><div class="axe"></div><div class="sword"></div><div class="bucket"></div><div class="tnt"></div></div>
            <div  class="items"><div class="dirt bank">0</div><div class="tree bank">0</div><div class="leaf bank">0</div><div class="stone bank">0</div><div class="water bank">0</div><div class="lava">0</div><div class="obsidian bank">0</div><div class="eye">0</div><div class="fullEye bank">0</div></div>
        </div>
        <input class="btn" type="button" value="Main Menu">
    </div>
    <div class="gameBoard"></div>`
    mainContainer.style.display = 'flex'
    let gameBoard = document.querySelector('.gameBoard')
    gameBoard.style.gridTemplateColumns = `repeat(${width}, 5vh)`
    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < width; j++) {
            let div = document.createElement('div')
            div.style.gridRowStart = i
            div.style.gridColumnStart = j
            gameBoard.appendChild(div)
            div.addEventListener('click', checkMove)

        }

    }
    let btn3 = document.querySelector('.btn'),
        sideBar = document.querySelector('.sidebar');
    cloudGenerator(width)
    dirtGenerator(width)
    lavaGenerator(width)
    waterGenerator(width)
    portalGenerator(width)
    btn3.addEventListener('click', () => {
        mainContainer.innerHTML = `
        <div class="mainMenu">
            <input type="button" value="Small">
            <input type="button" value="Large">
        </div>`;
        mainContainer = document.querySelector('.mainContainer');
        mainMenu = document.querySelector('.mainMenu');
        btn = document.querySelectorAll('input');
        btn[0].addEventListener('click', () => {
            mainMenu.classList.remove('displayblock')
            mainMenu.classList.add('displaynone')

            gridGenerator(35)

        })
        btn[1].addEventListener('click', () => {
            mainMenu.classList.remove('displayblock')
            mainMenu.classList.add('displaynone')
            gridGenerator(200)
        })





    })


    function cloudGenerator(gridSize) {
        for (let i = 0; i < gridSize / 10; i++) {
            let XA = Math.floor(Math.random() * 6) + 2
            let YA = Math.floor(Math.random() * gridSize)
            let cloud = [{ x: XA, y: YA + 1 }, { x: XA, y: YA + 2 }, { x: XA, y: YA + 3 }, { x: XA, y: YA + 4 }, { x: XA + 1, y: YA + 2 }, { x: XA + 1, y: YA + 3 }, { x: XA + 1, y: YA + 4 }, { x: XA + 1, y: YA + 5 }, ];
            cloud.forEach(element => {
                let cloudElement = document.createElement('div');
                cloudElement.style.gridRowStart = element.x;
                cloudElement.style.gridColumnStart = element.y;
                cloudElement.classList.add('cloud');
                gameBoard.appendChild(cloudElement)
            });
        }

    }

    function portalGenerator(gridSize) {
        let YA = 3
        for (let i = 0; i < gridSize; i++) {
            if (i == 171) {
                let portal = [{ z: false, x: i, y: YA + 6 }, { z: false, x: i, y: YA + 7 }, { z: false, x: i, y: YA + 8 }, { z: true, x: i, y: YA + 10 }, { z: true, x: i, y: YA + 11 }, { z: true, x: i, y: YA + 12 }, { z: true, x: i, y: YA + 13 }, { z: true, x: i, y: YA + 14 }, { z: true, x: i, y: YA + 15 }, { z: true, x: i, y: YA + 16 }, { z: true, x: i, y: YA + 17 }, { z: false, x: i + 1, y: YA + 5 }, { z: false, x: i + 1, y: YA + 9 }, { z: true, x: i + 1, y: YA + 10 }, { z: true, x: i + 1, y: YA + 11 }, { z: true, x: i + 1, y: YA + 12 }, { z: true, x: i + 1, y: YA + 13 }, { z: true, x: i + 1, y: YA + 14 }, { z: true, x: i + 1, y: YA + 15 }, { z: true, x: i + 1, y: YA + 16 }, { z: true, x: i + 1, y: YA + 17 }, { z: false, x: i + 2, y: YA + 5 }, { z: false, x: i + 2, y: YA + 9 }, { z: true, x: i + 2, y: YA + 10 }, { z: true, x: i + 2, y: YA + 11 }, { z: true, x: i + 2, y: YA + 12 }, { z: true, x: i + 2, y: YA + 13 }, { z: true, x: i + 2, y: YA + 14 }, { z: true, x: i + 2, y: YA + 15 }, { z: true, x: i + 2, y: YA + 16 }, { z: true, x: i + 2, y: YA + 17 }, { z: false, x: i + 3, y: YA + 5 }, { z: false, x: i + 3, y: YA + 9 }, { z: true, x: i + 3, y: YA + 10 }, { z: true, x: i + 3, y: YA + 11 }, { z: true, x: i + 3, y: YA + 12 }, { z: true, x: i + 3, y: YA + 13 }, { z: true, x: i + 3, y: YA + 14 }, { z: true, x: i + 3, y: YA + 15 }, { z: true, x: i + 3, y: YA + 16 }, { z: true, x: i + 3, y: YA + 17 }, { z: false, x: i + 4, y: YA + 6 }, { z: false, x: i + 4, y: YA + 7 }, { z: false, x: i + 4, y: YA + 8 }, { z: true, x: i + 4, y: YA + 10 }, { z: true, x: i + 4, y: YA + 11 }, { z: true, x: i + 4, y: YA + 12 }, { z: true, x: i + 4, y: YA + 13 }, { z: true, x: i + 4, y: YA + 14 }, { z: true, x: i + 4, y: YA + 15 }, { z: true, x: i + 4, y: YA + 16 }, { z: true, x: i + 4, y: YA + 17 }]
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

    function lavaGenerator(gridSize) {
        for (let i = 0; i < gridSize; i++) {
            let XA = Math.floor(Math.random() * 2) + 19
            let lava = [{ x: XA, y: i }, { x: XA + 1, y: i }];
            lava.forEach(element => {
                let lavaElement = document.createElement('div');
                lavaElement.style.gridRowStart = element.x;
                lavaElement.style.gridColumnStart = element.y;
                lavaElement.classList.add('lava');
                gameBoard.appendChild(lavaElement)
                lavaElement.addEventListener('click', checkMove)
            });
        }
    }

    function waterGenerator(gridSize) {
        for (let i = 0; i < gridSize / 20; i++) {
            let XA = Math.floor(Math.random() * 2) + 15
            let YA = Math.floor(Math.random() * gridSize)
            let water = [{ x: XA, y: YA + 1 }, { x: XA, y: YA + 2 }, { x: XA, y: YA + 3 }, { x: XA, y: YA + 4 }, { x: XA, y: YA + 5 }, { x: XA + 1, y: YA + 2 }, { x: XA + 1, y: YA + 3 }, { x: XA + 1, y: YA + 4 }, ];
            water.forEach(element => {
                let waterElement = document.createElement('div');
                waterElement.style.gridRowStart = element.x;
                waterElement.style.gridColumnStart = element.y;
                waterElement.classList.add('water');
                gameBoard.appendChild(waterElement)
                waterElement.addEventListener('click', checkMove)
            });
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


    let dirtBank = document.querySelector('.items .dirt'),
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
        toolBank, itemBank;
    pickaxe.addEventListener('click', () => {
        toolBank = 'pickaxe';
        itemBank = '';
    })
    axe.addEventListener('click', () => {
        toolBank = 'axe';
        itemBank = '';
    })
    shovel.addEventListener('click', () => {
        toolBank = 'shovel';
        itemBank = '';
    })
    sword.addEventListener('click', () => {
        toolBank = 'sword';
        itemBank = '';
    })
    bucket.addEventListener('click', () => {
        toolBank = 'bucket';
        itemBank = '';
    })
    dirtBank.addEventListener('click', () => {
        itemBank = 'dirtBank';
        toolBank = ''
    })
    eyeBank.addEventListener('click', () => {
        itemBank = 'eyeBank';
        toolBank = ''
    })
    leafBank.addEventListener('click', () => {
        itemBank = 'leafBank';
        toolBank = ''
    })
    stoneBank.addEventListener('click', () => {
        itemBank = 'stoneBank';
        toolBank = ''
    })
    treeBank.addEventListener('click', () => {
        itemBank = 'treeBank';
        toolBank = ''
    })
    waterBank.addEventListener('click', () => {
        if (obsidianBank.innerHTML == 10) { obsidianCapacity = false }
        if (itemBank == 'lavaBank' && waterBank.innerHTML > 0 && lavaBank.innerHTML > 0 && obsidianCapacity) {
            obsidianBank.innerHTML++;
            lavaBank.innerHTML--;
            waterBank.innerHTML--;
            itemBank = '';
        } else { itemBank = 'waterBank'; }

        toolBank = ''
    })
    lavaBank.addEventListener('click', () => {
        if (obsidianBank.innerHTML == 10) { obsidianCapacity = false }
        if (itemBank == 'waterBank' && waterBank.innerHTML > 0 && lavaBank.innerHTML > 0 && obsidianCapacity) {
            obsidianBank.innerHTML++;
            lavaBank.innerHTML--;
            waterBank.innerHTML--;
            itemBank = '';
        } else { itemBank = 'lavaBank'; }

        toolBank = ''

    })
    obsidianBank.addEventListener('click', () => {
        itemBank = 'obsidianBank';
        toolBank = ''
    })
    fullEyeBank.addEventListener('click', () => {
        itemBank = 'fullEyeBank';
        toolBank = ''
    })




    function checkMove(e) {
        let tempDivClass = e.path[0].classList[0]
        switch (tempDivClass) {
            case undefined:

                switch (itemBank) {
                    case 'dirtBank':
                        if (dirtBank.innerHTML > 0) {
                            dirtBank.innerHTML--;
                            e.path[0].classList.add('dirt')
                        }
                        break;
                    case 'leafBank':
                        if (leafBank.innerHTML > 0) {
                            leafBank.innerHTML--;
                            e.path[0].classList.add('leaf')
                        }
                        break;
                    case 'stoneBank':
                        if (stoneBank.innerHTML > 0) {
                            stoneBank.innerHTML--;
                            e.path[0].classList.add('stone')
                        }
                        break;
                    case 'treeBank':
                        if (treeBank.innerHTML > 0) {
                            treeBank.innerHTML--;
                            e.path[0].classList.add('tree')
                        }
                        break;
                    case 'waterBank':
                        if (waterBank.innerHTML > 0) {
                            waterBank.innerHTML--;
                            e.path[0].classList.add('water')
                        }
                        break;
                    case 'lavaBank':
                        if (lavaBank.innerHTML > 0) {
                            lavaBank.innerHTML--;
                            e.path[0].classList.add('lava')
                        }
                        break;
                    case 'obsidianBank':
                        if (obsidianBank.innerHTML > 0) {
                            obsidianBank.innerHTML--;
                            e.path[0].classList.add('obsidian')
                            checksiblings(e)
                        }
                        break;


                    default:
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

            default:
                break;
        }


    }



    // function checksiblings(e) {
    //     arrayOfKnowledge.push({ x: e.path[0].style.gridRowStart, y: e.path[0].style.gridColumnStart })

    //     let fBX = arrayOfKnowledge[0].x
    //     let fBY = arrayOfKnowledge[0].y
    //     console.log(fBY);
    //     if (arrayOfKnowledge.length > 9) {
    //         if (arrayOfKnowledge.includes({ x: fBX, y: fBY }) && arrayOfKnowledge.includes({ x: fBX, y: fBY + 1 }) || arrayOfKnowledge.includes({ x: fBX, y: fBY }) && arrayOfKnowledge.includes({ x: fBX, y: fBY - 1 })) {}
    //     }
    //     console.log(arrayOfKnowledge);
    // }

}