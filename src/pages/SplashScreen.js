import { Lightning, Router } from '@lightningjs/sdk'
import { CarouselRow } from '../Components/CarouselRow'

export default class SplashScreen extends Lightning.Component {
    static _template() {
        return {

            Background:
            {
                w: 1920,
                h: 10 * CarouselRow.height + (window.innerWidth / 1.777777778),//to fit aspect ratio of 19:9
                rect: true,
                 color: 0xff9755AE,
                rect: true,
                src: 'static/images/background.png'
            },
            Splash:
            {
                w: 1920,
                h:1080,
                x: w=>w/2, y: h=>540,
                rect: true,
                text: {
                    text: "Splash Screen",
                    fontSize: 72,
                    textAlign: 'center',
                    textColor: 0xffffffff,
                    maxLines: 3,
                },
               
            }
            
        }
       
    }
    _init()	
    {        
        Router.resume();
    }
   
   
}