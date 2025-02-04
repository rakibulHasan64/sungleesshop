
// // import { createUserWithEmailAndPassword } from "firebase/auth";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "./firevaseauth";


// const registerss = async (data) => {
//    const { name, email, password, role } = data;
//    try {
//       const responsive = await createUserWithEmailAndPassword(auth, email, password);

//       const user = responsive.user;

//       return {
//          id: user.uid,
//          name,
//          role,
//       };

//    } catch (error) {
//       return {
//          error: true,
//          code: error.code,
//          message: error.message,
//       }
//    }
// };


// const logineUser = async ({email,password}) => {
//    try {
//       const respons = await signInWithEmailAndPassword(auth, email, password);

//       const user = respons.user;
//       return {
//          id: user.uid,
//          email: user.email,
//       }

//    } catch (error) {
//       return {
//          error: true,
//          code: error.code,
//          message: error.message,
//       }
//    }
// }


// export { registerss,logineUser };


 