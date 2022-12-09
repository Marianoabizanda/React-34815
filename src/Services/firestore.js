// import { async } from "@firebase/util";
// import { async } from "@firebase/util";
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getFirestore, 
         collection, 
         doc, 
         getDocs, 
         getDoc,
         query,
         where,
         addDoc,
         orderBy,
        /* limit */
} from "firebase/firestore";
/*import products from "../data/data";*/

const firebaseConfig = {
  apiKey: "AIzaSyBcocVGUvV6MZ-S2NejYK5oQzG4TzVF_Jo",
  authDomain: "react34815-c5d2f.firebaseapp.com",
  projectId: "react34815-c5d2f",
  storageBucket: "react34815-c5d2f.appspot.com",
  messagingSenderId: "246784911680",
  appId: "1:246784911680:web:11f6c62050938b8286b2a5",
  // measurementId: "G-FE0FCY83G4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);// se conecta a firebase (servicio general).

// 0. Inicializamos Firestore
const DB = getFirestore(app);


//------------------------------------------------------------------------------------------------


//1. TRAER TODOS LOS DOCUMENTOS
/*export default async function getItems(){
  //1.A Referenciamos nuestra coleccion
  const colectionProductsRef = collection(DB, "products")

  //1.B Solicitamos todos los documentos de la coleccion
  const documentSnapshot = await getDocs(colectionProductsRef);

  const documentsData = documentSnapshot.docs.map( (doc) => {
    // saco todos los doc.data y le agrego los doc.id

    //opcion1  
    // let docDataWithId =  doc.data();
    // docDataWithId.id = doc.id;
    // return docDataWithId;     

    return {
    // opcion2
      ...doc.data(),
      id: doc.id
    }
  });
  
  return documentsData;
  
}*/





export async function getItemsOrdered(){

  const colectionProductsRef = collection(DB, "products");
  const q = query(colectionProductsRef, orderBy("index")/*, limit(10)*/);


  const documentSnapshot = await getDocs(q);

  const documentsData = documentSnapshot.docs.map( (doc) => {
    // saco todos los doc.data y le agrego los doc.id

    //opcion1  
    // let docDataWithId =  doc.data();
    // docDataWithId.id = doc.id;
    // return docDataWithId;     

    return {
    // opcion2
      ...doc.data(),
      id: doc.id
    }
  });
  
  return documentsData;

}




//-----------------------------------------------------------------------------------------------

//2. TRAER UN DOCUMENTO POR ID 
export async function getSingleItem(idParams){


  const docRef = doc(DB, "products", idParams);

  const docSnapshot = await getDoc(docRef);

  return {
    //spread operator
    ...docSnapshot.data(),
    id: docSnapshot.id
  }

}

//-----------------------------------------------------------------------------------------------

//3. TRAER TODOS LOS DOCUMENTOS SEGUN CATEGORIA.
 
export async function getItemsByCategory(categoryParams){
  const collectionRef = collection(DB, "products")

  const queryCat = query(collectionRef, where("category", "==",categoryParams))

  const documentSnapshot = await getDocs(queryCat);

  const documentsData = documentSnapshot.docs.map( doc => {
    // saco todos los doc.data y le agrego los doc.id

    //opcion1  
    // let docDataWithId =  doc.data();
    // docDataWithId.id = doc.id;
    // return docDataWithId;     

    return {
    // opcion2
      ...doc.data(),
      id: doc.id
    }
  });
  // resolve
  return documentsData;

}

//4. Enviar la orden a firebase
export async function createOrder(order){
  const collectionRef = collection(DB, "orders")
  const docOrder = await addDoc(collectionRef, order)
  return(docOrder.id);
}

//   async function exportArrayToFirestore(){
//   const products = [
//     {
//       id: 1,
//       title: "Alamos-Cabernet",
//       price: 230,
//       discount: "20%",
//       stock: 300,
//       category: "vino",
//       imgurl: "/images/images_vinos/AnyConv.com__0018-ALAMOS-CABERNET-300x300(1).webp"
//     },{
//       id: 2,
//       title: "Alamos-Chardonnay",
//       price: 250,
//       discount: "25%",
//       stock: 220 , 
//       category: "vino",
//       imgurl: "/images/images_vinos/AnyConv.com__0019-ALAMOS-CHARDONNAY-300x300.webp"
//     },{
//       id: 3,
//       title: "Alamos- Malbec",
//       price: 240,
//       stock: 370,
//       category: "vino",
//       imgurl: "/images/images_vinos/AnyConv.com__0020-ALAMOS-MALBEC-300x300.webp"
//     },{
//       id: 4,
//       title: "Aime Red Blend",
//       price: 270,
//       stock: 0,
//       category: "vino",
//       imgurl: "/images/images_vinos/AnyConv.com__Aime-Red-Blend-300x300.webp"
//     },{
//       id: 5,
//       title: "Alambrado- Cabernet",
//       price: 300,
//       stock: 400,
//       category: "vino",
//       imgurl: "/images/images_vinos/AnyConv.com__Alambrado-Cabernet-Sauvignon-300x300.webp"
//     },{
//       id: 6,
//       title: "Cafayate",
//       price: 200,
//       stock: 305,
//       category: "vino",
//       imgurl: "/images/images_vinos/AnyConv.com__Cafayate 3016-300x300.webp"
//     },{
//       id: 7,
//       title: "Angelica Zapata",
//       price: 450,
//       stock: 220,
//       category: "vino",
//       imgurl: "/images/images_vinos/ANGELICA-ZAPATA-CABERNET-FRANC-300x300.webp"
//     },{
//       id: 8,
//       title: "Amalaya Rose",
//       price: 370,
//       stock: 400,
//       category: "vino",
//       imgurl: "/images/images_vinos/Amalaya-300x300.webp"
//     },{
//       id: 9,
//       title: "Doña Paula Malbec",
//       price: 500,
//       stock: 305,
//       category: "vino",
//       imgurl: "/images/images_vinos/Diseno-sin-titulo-48-300x300.webp"
//     },{
//       id: 10,
//       title: "Brahma lata",
//       price: 180,
//       stock: 350,
//       category: "cerveza",
//       imgurl: "/images/images_cervezas/BRAHMA-LATA-300x300.webp"
//     },{
//       id: 11,
//       title: "Quilmes lata",
//       price: 200,
//       stock: 500,
//       category: "cerveza",
//       imgurl: "/images/images_cervezas/QUILMES-LATA-473-300x300.webp"
//     },{
//       id: 12,
//       title: "Andes rubia Lata",
//       price: 200,
//       stock: 340,
//       category: "cerveza",
//       imgurl: "/images/images_cervezas/andes-rubia-300x300_1.webp"
//     },{
//       id: 13,
//       title: "Stella rubia Lata",
//       price: 250,
//       stock: 400,
//       category: "cerveza",
//       imgurl: "/images/images_cervezas/AnyConv.com__Stella-Lata-300x300.webp"
//     },{
//       id: 14,
//       title: "Stella noir Lata",
//       price: 240,
//       stock: 380,
//       category: "cerveza",
//       imgurl: "/images/images_cervezas/AnyConv.com__project_20200925_1319378-011-1e181d976f40159ac316010508482964-1024-1024-300x300.webp"
//     },{
//       id: 15,
//       title: "Corona 710",
//       price: 260,
//       stock: 450,
//       category: "cerveza",
//       imgurl: "/images/images_cervezas/CERVEZA-CORONA-710-300x300.webp"
//     },{
//       id: 16,
//       title: "100 Pipers",
//       price: 2200,
//       stock: 300,
//       category: "whisky",
//       imgurl: "/images/images_whiskys/AnyConv.com__100-PIPERS-300x300.webp"
//     },{
//       id: 17,
//       title: "Benchmark",
//       price: 2800,
//       stock: 410,
//       category: "whisky",
//       imgurl: "/images/images_whiskys/AnyConv.com__Benchmark-300x300.webp"
//     },{
//       id: 18,
//       title: "Jack Daniels 710",
//       price: 3500,
//       stock: 450,
//       category: "whisky",
//       imgurl: "/images/images_whiskys/AnyConv.com__JACK-DANIELS-1-300x300.webp"
//     }
//     ]

//   const collectionRef = collection(DB, "products");

// // for...of
//   for( let item of products) {
//     item.index = item.id;
//     delete item.id;
//     let docOrder = await addDoc(collectionRef, item);
//     console.log("Documento creado, id:", docOrder.id);
//   } 
// }