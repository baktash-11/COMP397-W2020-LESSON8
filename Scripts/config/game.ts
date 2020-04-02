module config
{   
    export class Game 
    {/**
     *we will store  the current scene in config.Game.SCENE if we want to chage the scene we change change this one 
     *if this is diffrent then our currenScene then we need to change the scene
     * @static
     * @type {objects.Scene}
     * @memberof Game
     */
    public static SCREEN_WIDTH:number = 640;
    public static SCREEN_HEIGHT:number = 480;
    public static SCENE: scenes.State;
    public static ASSETS: createjs.LoadQueue;
    public static FPS: number = 60; // 60 Frames per second
        
            
        
    }

}