const widget = require('./index');

class button extends widget{

    label: any;
   
    constructor(width,height,label) {
        super(width,height);
        this.label = label || 'Default';
        this.$elem = $('<button>').text(label)
    }

    render($where){
        super.render($where)
        this.$elem.on(this.onClick.bind(this))
    }

    onClick(){
        console.log('Button' + this.label + 'Click!')
    }

}

$(function(){
    let $body = $(document.body)
    let btn1 = new button(125, 55,'button1')
    let btn2 = new button(125 ,55,'button2')
    btn1.render($body)
    btn2.render($body)
})

