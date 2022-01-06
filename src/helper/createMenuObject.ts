type menuObject = '' | 'all' |'dog' | 'cat' | 'fish'  

export const createMenuObject = (activeMenu:menuObject) => {
    let menuOpc = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }

    if(activeMenu !== ''){
        menuOpc[activeMenu] = true;
    }

    return menuOpc;
}