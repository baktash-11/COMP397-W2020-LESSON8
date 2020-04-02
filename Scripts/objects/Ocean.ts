module objects
{
    export class Ocean extends GameObject
    {
        //private instace memeber
        private _verticalSpeed?:number;

        //public properties 

        //Constructor 
        constructor(){
            super(config.Game.ASSETS.getResult("ocean"));

            this.Start();

        }

        //private methods
        protected _checkBounds():void
        {
            if(this.y >= 0)
            {
                this.Reset();
            }
        }
        private _move() 
        {
            this.position = Vector2.add(this.position, this.velocity);
        }
        //public methods
      
        public Start(): void {
            this._verticalSpeed = 5; //5 px per frame 
            this.velocity = new Vector2(0, this._verticalSpeed); // set the velocity to _verticalSpeed 

            this.Reset();
        }

        public Update(): void {
            this._move();
            this._checkBounds();
        }

        public Reset(): void {
            this.position = new Vector2(0, -960);//we would 
        }

    }
}