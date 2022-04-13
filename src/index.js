// function Widget(width,height){
//     this.width = width || 50;
//     this.height = height || 50
//     this.$elem = null
// }

// Widget.prototype.render = function($where){
//     if(this.$elem){
//         this.$elem.css({
//             width:this.width + 'px',
//             height:this.height + 'px'
//         }).appendTo($where)
//     }
// };


// function Button(width,height,label){
//     Widget.call(this,width,height)
//     this.label = label || 'Default';
//     this.$elem = $("<button>").text(this.label)
// }

// Button.prototype = Object.create(Widget.prototype)

// Button.prototype.render = function($where){
//     Widget.prototype.render.call(this,$where)
//     this.$elem.click(this.onClick.bind(this))
// };

// Button.prototype.onClick = function(evt){
//     console.log('Button ' + this.label + ' clicked! ')
// };

// $(document).ready(function(){
//     let $body = $(document.body)
//     let btn1 = new Button(125,30, 'Hello')
//     let btn2 = new Button(150,40, 'world')
//     btn1.render($body)
//     btn2.render($body)
// })



export default class widget{

    constructor(width,height){
        this.width = width
        this.height = height
        this.$elem = null;
    }

    render($where){
        if(this.$elem){
            this.$elem.css({
               width : this.width + 'px',
               height: this.height + 'px'
            }).appendTo($where)
        }
    }

}

export { widget }










