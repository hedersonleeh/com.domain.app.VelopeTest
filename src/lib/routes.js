import { LoadMovies } from "../Components/MoviePoster"
import {Home,MovieDescription,SplashScreen} from "../pages"

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
                path:'Home/Description',
                component:MovieDescription
            },
            {
                path: '$',
                component: SplashScreen
            },
            {
                path: '*',
                component: MovieDescription
            },
            {
                path: '!',
                component: MovieDescription
            },
        ],
        beforeEachRoute: async(from ,to)=>{
            return true;
        }
        
}
