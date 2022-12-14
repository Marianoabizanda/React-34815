import products from "../data/data";

function getItems(idCategory){

    return new Promise((resolve) => {

        if (idCategory === undefined){
        setTimeout(() => {
            resolve(products);
        },2000);
    }
    else{
        setTimeout(() => {
            let itemsRequested = products.filter(
            (item) => item.category === idCategory);
            resolve(itemsRequested);
        },2000);
        
    }
    });
}


export function getSingleItem(idParam) { /*le paso como parametro id que utilizo en la funcion getItemsAsync en itemDetailContainer*/

    return new Promise((resolve, reject) => {
        let itemRequested = products.find((item) => item.id === Number(idParam));

        if (itemRequested === undefined) reject("Item no encontrado");

        setTimeout(() => {
            resolve(itemRequested);
        },1000);
    });
}


 

export default getItems;