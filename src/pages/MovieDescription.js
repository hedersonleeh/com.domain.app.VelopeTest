import Lightning from "@lightningjs/sdk/src/Lightning";
const PATH ='https://image.tmdb.org/t/p/original'
export default class MovieDescription extends Lightning.Component {
    static _template() {
        return {
            BackGround:
            {
                w: 1920, h: 1080, color: 0xffffffff, rect: true,
               

            },
            BlackSreen:
            {
                w: 1920, h: 1080, alpha:.5, color: 0xff000000, rect: true,
               

            },
            Image: {
                alpha:1,

                w:500,h:700,
                x:660,y:h=>150,
                mountX:1,
                mountY:0,
                rect:true
            },
            Title:
            {
                alpha:1,
                w:800,
                x: 760, y: 200,
          
                text: {
                    text: "NAME OF MOVIE",
                    fontSize: 56,
                    textAlign: 'left',
                    textColor: 0xffffffff,
                    maxLines: 3,
                },
            },
            ReleaseDate:
            {
                alpha:1,

                x: 760, y: 280,
          
                text: {
                    text: "RELEASED : 99-99-99",
                    fontSize: 32,
                    textAlign: 'center',
                    textColor: 0xffffffff,
                    maxLines: 3,
                },
            },
            Description:
            {
                alpha:1,

                w:700,h:300,
                x: 760, y: 270+72,
                mountX:0,
                text: {
                    text: "Description:\n"+"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet ante dolor, eu fringilla quam eleifend sit amet. Donec non tincidunt eros. Cras non orci gravida, semper quam eu, commodo dui. Quisque porttitor mi ac porttitor ornare. Donec pellentesque libero vel quam pulvinar, a malesuada nulla ornare. Phasellus commodo, est a mattis facilisis, nibh tortor mattis magna, nec maximus odio ante ut enim. Duis tincidunt libero sed quam congue ullamcorper. Vestibulum id purus non ante aliquet ullamcorper sed nec mauris. Fusce eu cursus erat, quis tempus turpis. Proin a nulla leo. Etiam efficitur nec risus quis interdum. Aliquam a turpis pretium tellus convallis mollis. Nulla a libero lectus. Aliquam ut volutpat lectus, id pellentesque justo.",
                    fontSize: 24,
                    textAlign: 'left',
                    textColor: 0xffffffff,
                },
            },
            FavoriteBG:
            {
                rect:true,
                w:200,h:50,
                x: 980, y: 800,
                shader: {
                    type: Lightning.shaders.RoundedRectangle,
                    radius: 3, blend: 1, fillColor: 0xffFDE519
                }
            },
            Favorite:
            {
                alpha:1,

                w:200,h:50,
                x: 980, y: 805,
                mountX:0,                
                text: {
                    text: "Add to Favorites",
                    fontSize: 24,
                    textAlign: 'center',
                    textColor: 0xff000000,
                    
                },
                
            },
            PlayBG:
            {
                rect:true,
                w:200,h:50,
                x: 1250, y: 800,
                shader: {
                    type: Lightning.shaders.RoundedRectangle,
                    radius: 3, blend: 1, fillColor: 0xffFDE519
                }
            },
            Play:
            {
                alpha:1,

                w:200,h:50,
                x: 1250, y: 805,
                mountX:0,                
                text: {
                    text: "Play now",
                    fontSize: 24,
                    textAlign: 'center',
                    textColor: 0xff000000,
                },
                
            },
           
        }
    }
    set params(args){
        this.info = args.info;
        console.log(this.info)
        
        const backgroundPath =PATH.concat(this.info.backdrop_path);
        const posterPath =PATH.concat(this.info.poster_path);
        this.tag('BackGround').patch({src:backgroundPath});
        this.tag('Image').patch({src:posterPath});
        this.tag('Title').patch({text:this.info.title});
        this.tag('ReleaseDate').patch({text:this.info.release_date});
        this.tag('Description').patch({text:this.info.overview});
    }
    _setup() {
      this.OpenAnimation = this.animation({
        duration :1,
        actions:
        [
            {t:'BlackSreen',p:'aplha',v:[{0:0,1:.5}]},
            {t:'Image',p:'aplha',v:[{0:0,1:.5}]},
            {t:'Title',p:'aplha',v:[{0:0,1:.5}]},
            {t:'ReleaseDate',p:'aplha',v:[{0:0,1:.5}]},
            {t:'Description',p:'aplha',v:[{0:0,1:.5}]},
        ]
      })
    }
    _init()
    {
        
    }
    _focus() {
        if (this.OpenAnimation) {
            this.OpenAnimation.start();
        }
    }

    _unfocus() {
        this.OpenAnimation.stop();
    }
}