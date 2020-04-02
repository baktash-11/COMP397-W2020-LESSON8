module objects
{
    export class Plane extends GameObject
    {
        //Private instance memebers
        private _verticalPosition:number;
        //Public properties 
        //Constructor 
        constructor()
        {
            super(config.Game.ASSETS.getResult("plane"), 0 , 0, true);
            this.Start();
        }
        //Privae 
        protected _checkBounds(): void
        {
            //check the left bound 
                if(this.position.x <= this.halfHeight)
                {
                    this.position = new Vector2(this.halfHeight, this.position.y);
                }
                if(this.position.x >= config.Game.SCREEN_WIDTH - this.halfWidth)
                {
                    this.position = new Vector2(config.Game.SCREEN_WIDTH - this.halfWidth);
                }
            //check the right bounds
        }

        private _move():void
        {
            let newPositionX = util.Math.Lerp(this.position.x, this.stage.mouseX, 0.09);
            this.position = new Vector2(newPositionX, this._verticalPosition);
        }
        //Public 
        public Start(): void
        {
            this._verticalPosition = 420; //lock the plane in bottom of the screen
        }
        public Update(): void 
        {
            this._move();
            this._checkBounds();
        }
        public Reset(): void 
        {
           
        }
        
    }
}