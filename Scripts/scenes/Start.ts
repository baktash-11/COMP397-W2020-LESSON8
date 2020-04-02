module scenes
{
    export class Start extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _welcomeLabel: objects.Label;
        private _startButton: objects.Button;
        private _ocean: objects.Ocean;
            
        
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
             //instantiate a new Text object
            this._welcomeLabel = new objects.Label("The Game", "80px", "Consolas", "#ffff00", 320, 180, true);
            // buttons
            this._startButton = new objects.Button(config.Game.ASSETS.getResult("startButton"), 320, 430, true);
            //this.player = new objects.Player(); ------------------- we do not need the player object any more

            this._ocean = new objects.Ocean();
            this.Main();
        }        
        
        public Update(): void 
        {
            //this.player.Update();------------------- we do not need the player object any more
            //managers.Collision.AABBCheck(this.player,this.startButton);------------------- we do not need the player object any more
            this._ocean.Update();
            

        }
        
        public Main(): void 
        {
            this.addChild(this._ocean);
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            //this.addChild(this.player);   ------------------- we do not need the player object any more

            this._startButton.on("click", ()=>{
                config.Game.SCENE = scenes.State.PLAY;
            });

            

        }

        
    }
}