import Lightning from "@lightningjs/sdk/src/Lightning";

export class MovieDescription extends Lightning.Component
{
static _template()
{
    return    {
        BackGround:{},
        Image:{},
        Description:{},
        title:{},
        releaseDate:{},
    }
}
}