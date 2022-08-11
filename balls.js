//Createe an OBJECT <> Component Ball
function randInt(from,to){
    return Math.round(from + Math.random()*(to-from))
}

function newBall(size,color){
    return {

      
        size: size,
        color: color,
        x: randInt(0,innerWidth-100), 
        y: randInt(0,innerHeight-100),
        speedX: randInt(-15,15),
        speedY: randInt(-15,15),
        // methods
        render: function (){
            return `
            <div style="
            width: ${this.size}px;
            height: ${this.size}px;
            border-radius: ${this.size}px;
            background-color: ${this.color};
            position: absolute;
            left: ${this.x}px;
            top: ${this.y}px;
            opacity: 0.05;
            ">
            </div>
        
            `
           },
            renderInside: function ( container ) {
            container.innerHTML += this.render()
           },
           
           move: function() {
            if( this.x + this.size >= innerWidth 
                || this.x <=0
                ){
                this.speedX*= -0.95  //reflect the speed
           
            }
           
            this.x += this.speedX //incremennt x of this object
            if( this.y + this.size >= innerHeight 
                || this.y <=0
                ){
                this.speedY*= -0.3   //reflect the speed
           
            }
           
            this.y += this.speedY //incremennt x of this object
           },
        
           animate: function() {
             //remind JS who is "THIS :D"
             let thisObject = this
        
            setInterval( function(){
                  //JS forgot this
               thisObject.move () 
               thisObject.renderInside( container) 
        
            } ,50)
           }

    }

}

for(let i=0; i<10;i++){
    let ball = newBall( i * 50, "black" )
    ball.animate()
}

// smallBall.animate()
// this function return an HTML BALL
