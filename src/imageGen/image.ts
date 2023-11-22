import { Color } from "../util"

export class image {
    public size : {
        width: number,
        height: number
    }
    public pixels : Color[]

    constructor(size : {width: number, height: number}, bg : Color) {
        this.size = size
        for (let x = 0; x < size.width; x++) {
            for (let y = 0; y < size.height; y++) {
                this.pixels[x][y] = bg
            }
        }
    }

    drawPixel(x : number, y : number, color : Color) {
        this.pixels[x][y] = color
    }

    
}