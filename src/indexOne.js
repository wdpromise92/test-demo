
import widget from './index.js';


class Button extends widget{
    constructor(width,height,label){
        super(width,height)
        this.label = label || 'Default';
        this.$elem = $('<button>').text(this.label)
    }

    render($where){
        
        var test = 1
        super.render($where)
        this.$elem.on(this.onClick.bind(this))
    }

    onClick(event){
        console.log('Button ' + this.label + ' clicked!')
    }
}

$(function(){
    let $body = $(document.body)
    let btn1 = new Button(125,30, 'Hello')
    let btn2 = new Button(150,40, 'world')
    btn1.render($body)
    btn2.render($body)
})



