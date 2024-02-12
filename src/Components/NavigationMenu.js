import { Colors } from "@lightningjs/sdk";
import Lightning from "@lightningjs/sdk/src/Lightning";
import { List } from "@lightningjs/ui";
import { SimpleButton } from "./SimpleButtom";
import { LoadGenre, LoadMovies } from "./MoviePoster";

export class NavigationMenu extends Lightning.Component {
    static _template() {
        return {
            Body:
            {
                x: 20, y: 20,
                w: window.innerWidth, h: 100,
                rect: true,
                // shader: {
                //     type: Lightning.shaders.RoundedRectangle,
                //     radius: 3, blend: 1, fillColor: 0xff6B6B6B
                // }
                color: 0xff6B6B6B,
                List: {
                    x:10,
                    rect: true,
                    y: 30, type: List, direction: 'row',
                  
                },

            },

        }
    }
    _setup() {
        LoadGenre().then((genreList) => {
            let items = [];
            for (let idx = 0; idx < 4; idx++) {
                const element = genreList.genres[idx];
                items.push({ gid: element.id, label: element.name, type: SimpleButton });
            }
            this.tag('Body').tag('List').add({ gid: -1, label: 'All', type: SimpleButton });
            this.tag('Body').tag('List').add(items);
        })
    }
    _enable()
    {
      
    }
   
    _getFocused() {
        return this.tag('Body').tag('List')
    }
   

}


