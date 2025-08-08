// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate, Link } from 'react-router-dom';
// import { toast } from 'react-hot-toast';

// // API slice-inizi bu yerdə import edin.
// import { useResetPasswordMutation } from '../redux/api/userApi';

// const ResetPassword = () => {
//     // React Router'dan URL-dəki tokeni alırıq.
//     const { token } = useParams();
//     const navigate = useNavigate();

//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');

//     // Sizin API slice-dən gələn hook.
//     const [resetPassword, { isError, error, isLoading }] = useResetPasswordMutation();

//     useEffect(() => {
//         if (isError) {
//             // API-dən gələn xəta mesajını toast olaraq göstəririk.
//             toast.error(error?.data?.message || "Bilinməyən xəta baş verdi.");
//         }
//     }, [isError, error]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Şifrələrin uyğunluğunu API çağırışından əvvəl yoxlayırıq.
//         if (password !== confirmPassword) {
//             toast.error("Şifrələr uyğun gəlmir!");
//             return;
//         }

//         try {
//             // Şifrə sıfırlama API çağırışını edirik.
//             await resetPassword({ token, password, confirmPassword }).unwrap();
            
//             // Uğurlu cavab halında mesaj göstərib giriş səhifəsinə yönləndiririk.
//             toast.success("Şifrəniz uğurla dəyişdirildi!");
//             navigate('/login');
//         } catch (err) {
//             // `isError` artıq yuxarıda `useEffect` tərəfindən idarə olunur.
//             // Bu blok daha çox proqram xətalarını tutmaq üçündür.
//             console.error("Proqram xətası:", err);
//         }
//     };

//     return (
//         <section className="bg-gray-50 dark:bg-gray-900 font-sans min-h-screen flex items-center justify-center">
//             <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl dark:border dark:bg-gray-800 dark:border-gray-700 sm:p-8">
//                 <div className="flex flex-col items-center mb-6">
//                     <img className="w-10 h-10 mr-2 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
//                     <h2 className="mt-4 text-2xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//                         Şifrəni Dəyişdir
//                     </h2>
//                 </div>
                
//                 <form className="mt-4 space-y-6" onSubmit={handleSubmit}>
//                     <div>
//                         <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Yeni Şifrə</label>
//                         <input
//                             type="password"
//                             name="password"
//                             id="password"
//                             placeholder="••••••••"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Şifrəni Təkrarla</label>
//                         <input
//                             type="password"
//                             name="confirm-password"
//                             id="confirm-password"
//                             placeholder="••••••••"
//                             value={confirmPassword}
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
//                             required
//                         />
//                     </div>
//                     <button
//                         type="submit"
//                         disabled={isLoading}
//                         className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
//                     >
//                         {isLoading ? 'Yüklənir...' : 'Şifrəni Sıfırla'}
//                     </button>
//                     <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//                         Şifrənizi xatırladınız? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Daxil ol</Link>
//                     </p>
//                 </form>
//             </div>
//         </section>
//     );
// };

// export default ResetPassword;
