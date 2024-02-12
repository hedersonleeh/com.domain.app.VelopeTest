const MOVIELIST = "https://api.themoviedb.org/3/discover/movie?";
const GENRE = 'https://api.themoviedb.org/3/genre?';
import { Lightning, Utils } from '@lightningjs/sdk'
import App from '../App';

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWNjYTUyZTAwYzM0YTRhNDYyOTAyMmJlZDBjMjZkNiIsInN1YiI6IjY1Yzc5ZmZhY2U2YzRjMDE0OWI4OTliMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VOae1ORrrAb895Q1r3kMOTb58mVi98QK1oyHKnB-ywc'
    }
  };
  
export class MoviePoster extends Lightning.Component {
    static _template() {
        return {
         
            Background:
            {
                y: h => 0,
                x: w => w / 2,
                w: w => w, h: h => h,
                mountX: .5,
                rect: true,
                shader: {
                    type: Lightning.shaders.RoundedRectangle,
                    radius: 3, blend: 1, fillColor: 0xff6B6B6B
                }

            },
            Image: {
                w: w => w,
                h: h => h - 60,
                x: w => w / 2,
                mountX: .5,

            },
            Focus:
            {
                alpha: 0,
                x: 0, y: 0,
                w: w => w, h: h => h,
                rect:
                    true, shader: {
                        type: Lightning.shaders.RoundedRectangle,
                        radius: 3, stroke: 3, strokeColor: 0xffffffff, blend: 1, fillColor: 0x00ffff21
                    }
            },

            Label:
            {
                y: h => h - 60,
                x: w => w / 2,
                w: w => w - 20, h: h => h,
                text: {
                    fontSize: 16,
                    textAlign: 'left',
                    textColor: 0xffffffff,
                    maxLines:3,
                },
                mountX: .5,
                mountY: 0
            },


        }
    }
    _init() {
        this._focusAnimation = this.animation(
            {
                duration: .31416,
                actions:
                    [
                        { p: 'scale', v: { 0: 1, .75: 1.6, 1: 1.5 } },
                        { t: "Focus", p: 'alpha', v: { 0: 0, 1: 1 } },
                        { t: "Focus", p: 'scale', v: { 0: 1.5, 0.75: 1, 1: 1 } },
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
        if (this._focusAnimation) {
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


export async function LoadMovies(page,genre) {

    let apiKey = "api_key=81cca52e00c34a4a4629022bed0c26d6";
    let includePage = "&page=" + page;
    let includeGenre = "&with_genres=" + genre;
    if(genre <= 0)
        includeGenre ='';
    let url = MOVIELIST.concat(apiKey, includePage,includeGenre);
    let reponse = await fetch(url);
    let json = await reponse.json();
    // console.log(json);

    return json.results;

}
export async function LoadGenre() {

    let apiKey = "api_key=81cca52e00c34a4a4629022bed0c26d6";
    let url = GENRE.concat(apiKey);
    let reponse = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options);
    let json = await reponse.json();
    console.log(json);

    return json;

}