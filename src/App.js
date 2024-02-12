import { Lightning, Router, Utils } from '@lightningjs/sdk'
import { Carousel, Grid, List } from '@lightningjs/ui'
import { MoviePoster, LoadMovies } from './Components/MoviePoster'
import { CarouselRow } from './Components/CarouselRow'
import routes from './lib/routes'

export default class App extends Router.App {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

  static _template() {
    return {
      ...super._template(),
      
    }
  }

  _init() {


    this.index = 1;

  }
  _setup() {

    Router.startRouter(routes,this)

  }
 

}


