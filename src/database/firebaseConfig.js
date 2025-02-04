
// // *************user profile ******************/

// import { onValue, ref, set } from "firebase/database";
// import { db } from "./firevaseauth";

// export const createUserProfile = async (data) => {
//     const { id, name, role,} = data;

//         await set(ref(db, "userProfile/" + id), {
//             name,
//             role,
            
//         });
        
    
// };
// export const getProfile = async (id) => {
//     return new Promise((resolve, reject) => {
//         try {
//             onValue(ref(db, "userProfile/" + id), (snapshot) => {
//                 resolve(snapshot.val());
//             })
//         } catch (error) {
//             reject(error);
//         }
//     })
// }