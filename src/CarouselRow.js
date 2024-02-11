import Lightning from "@lightningjs/sdk/src/Lightning";
import { LoadMovies, MoviePoster } from "./Movie";
import { Carousel } from "@lightningjs/ui";

MoviePoster

export class CarouselRow extends Lightning.Component {
    static _template() {
        return {
            Row: {
                type: Carousel,
                itemType: MoviePoster,
                w: window.innerWidth,
                h: MoviePoster.height,
                scroll: 0.1,
                direction: 'row'
            },
        }
    }

    _init() {
        LoadMovies(this.page).then(moviesList => {
            console.log(moviesList)
            const movies = moviesList.map((movie) => {

                return { info: movie }
            })
         
            this.tag('Row').add(movies);
        })
    }
    _getFocused() {
        return this.tag('Row');
    }
    static get width() {
        return 1720
    }

    static get height() {
        return MoviePoster.height
    }
    static get margin() {
        return 50;
    }

}