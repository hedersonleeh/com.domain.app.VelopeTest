const PATH = "https://api.themoviedb.org/3/discover/movie?";
import { Lightning, Utils } from '@lightningjs/sdk'

export class MoviePoster extends Lightning.Component {
    static _template() {
        return {
            Image: {
                w: w => w,
                h: h => h,
                shader: { type: Lightning.shaders.RoundedRectangle, radius: 4 }

            },
            Focus:
            {
                alpha: 0,
                x:0, y: 0,
                w: w => w , h: h => h ,
                rect:
                    true, shader: {
                        type: Lightning.shaders.RoundedRectangle,
                        radius: 3, stroke: 10, strokeColor: 0xffffffff, blend: 1, fillColor: 0x00ffff21
                    }
            },

            Label:
            {
                y: h => h,
                x: w => w / 2,
                w: w => w, h: h => h,
                text: {
                    fontSize: 16,
                    textAlign: 'left',
                    textColor: 0xff000000,
                },
                mountX: .5,
                mountY: 0
            }

        }
    }
    _init()
    {
        this._focusAnimation = this.animation(
            {
                duration:.31416,
                actions:
                [
                {p:'scale',v:{0:1,.75:1.6,1:1.5}},
                {t:"Focus",p:'alpha',v:{0:0,1:1}},
                {t:"Focus",p:'scale',v:{0:1.5,0.75:1,1:1}}

                ]                
            })
    }
    _firstActive() {

        this.patch({
            Image: { src: "https://image.tmdb.org/t/p/w500" + this.info.poster_path },
            Label:
            {
                text: this.info.title + "\n" +
                    "Release Date: " + this.info.release_date
            }
        })
    }
    _focus() {
        if(this._focusAnimation) {
            this._focusAnimation.start();
        }
    }

    _unfocus() {
        this._focusAnimation.stop();
    }
    static get width() {
        return 200
    }

    static get height() {
        return 300
    }
    static get margin() {
        return 50;
    }
}


export async function LoadMovies(page) {

    let apiKey = "api_key=81cca52e00c34a4a4629022bed0c26d6";
    let includePage = "&page=" + page;
    let url = PATH.concat(apiKey, includePage);
    let reponse = await fetch(url);
    let json = await reponse.json();
    console.log(json);

    return json.results;

}
