module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
       /*  private _playLable: objects.Label;
        private _nextButton: objects.Button; */


        private _ocean?:objects.Ocean;
        private _palne?:objects.Plane;
        
        //player: objects.Player;------------------- we do not need the player object any more

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS
        public Start(): void 
        {
            //we do no need lables and buttons in our play scene so we will comment them out

             //instantiate a new Text object
             /* this._playLable = new objects.Label("Play Scene", "80px", "Consolas", "#ffff00", 320, 180, true);
             // buttons
             this._nextButton = new objects.Button(config.Game.ASSETS.getResult("nextButton"), 320, 430, true);
             //this.player = new objects.Player(); ------------------- we do not need the player object any more */

            this._ocean = new objects.Ocean();
            this._palne = new objects.Plane();
            
            this.Main(); 
        }        
        
        public Update(): void 
        {
            //this.player.Update();------------------- we do not need the player object any more
            //managers.Collision.AABBCheck(this.player,this.startButton);------------------- we do not need the player object any more

            this._ocean.Update();
            this._palne.Update();
        }
        
        public Main(): void 
        {
       
            this.addChild(this._ocean);
            this.addChild(this._palne);
            this._palne.position.y=100;
            
           /*  this.addChild(this._playLable);
            this.addChild(this._nextButton); 
            //this.addChild(this.player);   ------------------- we do not need the player object any more

            this._nextButton.on("click", ()=>{
                config.Game.SCENE = scenes.State.END;
            }); */

        

        }

        
    }
}