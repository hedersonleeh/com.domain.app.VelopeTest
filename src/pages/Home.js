import { Lightning, Router, Utils } from '@lightningjs/sdk'
import { Carousel, Grid, List } from '@lightningjs/ui'
import { MoviePoster, LoadMovies } from '../Components/MoviePoster'
import { CarouselRow } from '../Components/CarouselRow'
import { GetGenre, NavigationMenu } from '../Components/NavigationMenu'

export default class Home extends Lightning.Component {

  static _template() {
    return {

      Background:
      {
        w: 1920,
        h: 10 * CarouselRow.height + (window.innerWidth / 1.777777778),//to fit aspect ratio of 19:9
        rect: true,
        // color: 0xff9755AE,
        src: 'static/images/background.png'
      },
      Header:
      {
        h: 200,
        w: window.innerWidth,
        x: 0, y: 20,
        rect: true,
        text: {
          text: "Velope Test\n Hederson carrasquero ",
          fontSize: 32,
          textAlign: 'right',
          textColor: 0xffffffff,
          maxLines: 3,
        },
        mountX: 0.2,
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
      ,
      Widgets: {
        type: NavigationMenu, alpha: 0.1
      }

    }
  }

  _init() {

    this.index = 1;
    this._setState('EmptyState')

  }
  _setup() {

    this.genre = -1;
    this.SetUpMovies()
    this._setState('SelectionMovies')

  }
  SetUpMovies() {
    for (let i = 1; i <= 10; i++) {
      this.tag('ColumnList').add({ page: i, genre: this.genre })
    }
  }

  _handleUp() {
    if (this.tag('ColumnList').up() === false) {
      this._setState('SelectionGenre')
    }

  }
  _handleDown() {
    if (this._getState() === 'SelectionGenre') {
      this._setState('SelectionMovies')
    }


  }
  _handleEnter() {
    if (this.focus === 'ColumnList') {
      console.log(this.GetMovieSelected())
      Router.navigate('Home/Description', { info: this.GetMovieSelected() }, true)
    }
    if(this.focus ==='Widgets')
    {
      this._setState('SelectionMovies')
    }
  }
  GetMovieSelected() {
    const column = this.tag(this.focus)
    let rowIndex = this.tag(this.focus).index
    let rows = this.tag(this.focus).items[rowIndex].tag('Row')
    console.log("r: " + column.index + " c: " + rows.index)
    return rows.items[rows.index].info
  }

  _handleLeft() {

  }
  _handleRight() {

  }
  _getFocused() {
    return this.tag(this.focus);
  }

  static _states() {
    return [
      class EmptyState extends this
      {

      },
      class SelectionMovies extends this
      {
        $enter() {
          this.focus = 'ColumnList';
          this.tag('ColumnList').clear();
          this.SetUpMovies()
          console.log('Enter');
        }

      },
      class SelectionGenre extends this
      {
        $enter() {
          this.tag('Widgets').patch({ alpha: 1 });
          this.focus = 'Widgets';

        }
        $exit() {
          this.tag('Widgets').patch({ alpha: 0.1 });

          const genreList = this.tag('Widgets').tag('List');
          const idx = genreList.index;
          const genre = genreList.items[idx].gid;
          console.log(genreList.items[idx].gid)
          console.log('Exit')
          this.genre = genre;
        }
      },
    ]
  }



}


