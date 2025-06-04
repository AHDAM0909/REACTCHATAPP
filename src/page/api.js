// import axios from 'axios'

// const API_URL = 'http://192.168.43.26:4000/api';

// export async function signupUtils(email,password){
//     try {
//         const response = await axios.post(`${API_URL}/auth/signup`,{
//             "username" : email,
//             'password' : password
//         })
//        // message : error.message, success  
//        console.log(response)
//        return {
//             success : response.data.success,
//             message : response.data.message
//        }
//     } catch (error) {
//         console.log(error)
//         return {
//             message : error.message,
//             success : false
//         }
//     }
// }

// export async function loginUtils(email,password) {
//     try {
//       const response = await axios.post('http://localhost:4000/api/auth/login', {
//         username : email,
//         password : password,
//       });
//       const { token } = response.data;
//       localStorage.setItem('token', token);
//       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//       return { success: true };
//     } catch (error) {
//       return { 
//         success: false, 
//         error: error.response?.data?.message || 'Login failed' 
//       };
//     }
//   };
