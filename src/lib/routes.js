import { LoadMovies } from "../Components/MoviePoster"
import {Home,SplashScreen} from "../pages"

export default {
    root: 'Home',
    boot:()=>
    {
     return new Promise((resolve,reject) =>
        {
           setTimeout(() => {
            console.log("Time Out")
            reject()
           }, 2000);
        })
    },
    routes:
        [
            {
                path:'Home',
                component:Home,
                before() {
                    console.log('before home!')
                    return Promise.resolve()
                }
            },
            {
                path: '$',
                component: SplashScreen
            },
        ],
        beforeEachRoute: async(from ,to)=>{
            return true;
        }
        
}
