// import React from 'react'

//сменить
// const API_KEY = '6aa48d2116fe16ab1bb7c6e0fedf6500';

// class Wather extends React.Component {

//     gettingWather = async (event) => {
//         event.preventDefault();
//         const api_url = await 
//         fetch(`api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${API_KEY}`);
//         const data = await api_url.json();
//         console.log(data);
//     }

//     render() {
//         return (
//             <div>Информация о погоде
//                 <Wather watherMethod={this.gettingWather} />
//             </div>
//         );
//     }
// }

// import axios from "axios"
// import {localhost} from "../config/config";
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.post['x-access-token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk2ODc4OTl9.M5q83O_nP6B8SbfNKOs3CaQTu4JaQcbr_MgDLSgqnTU'

// class API {
//     static async getProject() {
//         let response = await fetch(`${localhost}/projects/`, {
//             method: 'GET',
//             headers: {
//                 'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk2ODc4OTl9.M5q83O_nP6B8SbfNKOs3CaQTu4JaQcbr_MgDLSgqnTU'
//             }
//         });
//         const formatedResponce = await response.json();
//         return formatedResponce;
//     }
//     static postProject(body:any) {
//         return  axios.post(`${localhost}/projects/`, body)
//             .then(response => {
//                 console.log(response)
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//     }
// }

//export default Wather