import { Lightning, Utils } from '@lightningjs/sdk'
import { Carousel, Grid, List } from '@lightningjs/ui'
import { MoviePoster, LoadMovies } from './Movie'
import { CarouselRow } from './CarouselRow'

export default class App extends Lightning.Component {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

  static _template() {
    return {
    
      Background:
      {
        w: 1920,
        h: 10 * CarouselRow.height + (window.innerWidth / 1.777777778),//to fit aspect ratio of 19:9
        rect: true,
        // color: 0xff9755AE,
        rect:true,
        src: 'static/images/background.png'
      },
      Header:
      {
          x:0,y:20,
          h:200,
          w:window.innerWidth,
          rect:true,
          text: {
            text:"Velope Test\n Hederson carrasquero ",
            fontSize: 32,
            textAlign: 'right',
            textColor: 0xffffffff,
            maxLines:3,
        },
        mountX: 0,
        mountY: 0
      },
      ColumnList:
      {
        y: 200,
        h: CarouselRow.height + 100 + CarouselRow.margin,
        direction: 'column',
        type: List,
        itemType: CarouselRow
      }
    }
  }

  _init() {


    this.index = 1;

  }
  _setup() {
    for (let i = 1; i <= 10; i++) {
      this.tag('ColumnList').add({ page: i })
    }
  }
  _getFocused() {
    // this.patch({ y: 100 - (MoviePoster.height * (this.index - 1) * 2) })
    return this.tag('ColumnList');
  }
  // _handleUp() {
  //   if (this.index <= 1)
  //     this.index = 10;
  //   else
  //     this.index--;
  //   this._getFocused();
  // }
  // _handleDown() {
  //   if (this.index >= 10)
  //     this.index = 1;
  //   else
  //     this.index++;
  //   this._getFocused();
  // }
}


