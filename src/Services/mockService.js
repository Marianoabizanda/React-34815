import products from "../data/data";

function getItems(){

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        },2000);
    });
}


export function getSingleItem(idParam){ /*le paso como parametro id que utilizo en la funcion getItemsAsync en itemDetailContainer*/

    return new Promise((resolve) => {
        let itemRequested = products.find((item) => item.id === Number(idParam));

        setTimeout(() => {
            resolve(itemRequested);
        },2000);
    });
}


 

export default getItems;