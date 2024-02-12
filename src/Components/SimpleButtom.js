import Lightning from "@lightningjs/sdk/src/Lightning";

export class SimpleButton extends Lightning.Component {
    static _template() {
        return {
            rect: true, w: 200, h: 50, color: 0xffffffff, alpha: 0.8,
            Label: {
                x: 0, y: 30, mountY: .5,w:200
            }
        }

    }
    _init() {
        this.patch({
            Label: {
                text:
                {
                    fontSize:24,
                    textAlign: 'center',
                    text: this.label,
                    textColor: 0xff000000
                }
            }
        })
        this.focusAnim=  this.animation({
            duration : .2,
            actions:[
                {p:'scale',v:{0:1,1:1.15}},
            ]
        })
        this.unfocusAnim=  this.animation({
            duration : .2,
            actions:[
                {p:'scale',v:{0:1.15,1:1}},
            ]
        })
    }
    _focus() {
        this.focusAnim.start();
        this.signal('OnFocusGenre', this.gid)
    }
    _unfocus() {
        this.unfocusAnim.start();

    }
    static get width() {
        return 200
    }

    static get height() {
        return 50
    }
    static get margin() {
        return 15;
    }
}