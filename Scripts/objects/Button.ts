module objects
{
    export class Button extends GameObject
    {
        //Constructor 
        constructor(imagePath:Object = config.Game.ASSETS.getResult("defaultkButton") , 
                    x:number =0, y:number =0, 
                    isCentered:boolean =false)
        {
            super(imagePath, x , y, isCentered);

            this.on('mouseover', this.MouseOver);
            this.on('mouseout', this.MouseOut);
            this.Start();
        }

        //private methods 
        protected _checkBounds(): void {
            
        }
        //public methods
        MouseOver():void{
            this.alpha=.7;
        }

        MouseOut():void{
            this.alpha=1.0;
        }
        
       
        public Start(): void {
            
        }
        public Update(): void {
            
        }
        public Reset(): void {
           
        }
    }
}