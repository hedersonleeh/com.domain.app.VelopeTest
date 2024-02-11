import { Lightning, Utils } from '@lightningjs/sdk'
import { Carousel, Grid } from '@lightningjs/ui'
import { MoviePoster, LoadMovies } from './Movie'

export default class App extends Lightning.Component {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

  static _template() {
    return {
      Background:
      {
        w: window.innerWidth,
        h: MoviePoster.height * 10 *2 * 1.5,
        rect: true,
        color: 0xff9755AE,
      },
     
      Row1: {  w: window.innerWidth, h: MoviePoster.height, itemType: MoviePoster, type: Carousel, direction: 'row' },
      Row2: {  w: window.innerWidth, h: MoviePoster.height, itemType: MoviePoster, type: Carousel, direction: 'row' },
      Row3: {  w: window.innerWidth, h: MoviePoster.height, itemType: MoviePoster, type: Carousel, direction: 'row' },
      Row4: {  w: window.innerWidth, h: MoviePoster.height, itemType: MoviePoster, type: Carousel, direction: 'row' },
      Row5: {  w: window.innerWidth, h: MoviePoster.height, itemType: MoviePoster, type: Carousel, direction: 'row' },
      Row6: {  w: window.innerWidth, h: MoviePoster.height, itemType: MoviePoster, type: Carousel, direction: 'row' },
      Row7: {  w: window.innerWidth, h: MoviePoster.height, itemType: MoviePoster, type: Carousel, direction: 'row' },
      Row8: {  w: window.innerWidth, h: MoviePoster.height, itemType: MoviePoster, type: Carousel, direction: 'row' },
      Row9: {  w: window.innerWidth, h: MoviePoster.height, itemType: MoviePoster, type: Carousel, direction: 'row' },
      Row10: { w: window.innerWidth, h: MoviePoster.height, itemType: MoviePoster, type: Carousel, direction: 'row' },

    }
  }

  _init() {


    this.index = 1;

  }
  _setup() {
    for (let i = 1; i <= 10; i++) {
      LoadMovies(i).then(moviesList => {
        console.log(moviesList)
        const movies = moviesList.map((movie) => {

          return { info: movie }
        })
        let tagName = 'Row' + i
        this.tag(tagName).patch({
          y: (100+MoviePoster.height * (i - 1) * 2),
          scroll : 0,
          x:100,
        });
        this.tag(tagName).add(movies);
      });
    }
  }
  _getFocused() {
    this.patch({ y:100-(MoviePoster.height * (this.index - 1)*2) })
    return this.tag('Row' + this.index);
  }
  _handleUp() {
    if (this.index <= 1)
      this.index = 10;
    else
      this.index--;
    this._getFocused();
  }
  _handleDown() {
    if (this.index >= 10)
      this.index = 1;
    else
      this.index++;
    this._getFocused();
  }
}


