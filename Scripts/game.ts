//IIFE - Immediately Invoked Function Expression 
// means self-executing ananymous function 
let Game = (function()
{
    let canvas:HTMLCanvasElement = document.getElementsByTagName('canvas')[0];
    //stage is a logical container that is going to placed inside canvas and it can be erase and redraw 
    let stage:createjs.Stage;

    let currentSceneState:scenes.State;  // Scene state is an enum 
    let currentScene:objects.Scene; // all scens extends from objects.Scene

    //create a variable type of LoadQueue
    let assets:createjs.LoadQueue;
    //creating a array of objects 
    let assetManifest =[
        {id:"button", src:"./Assets/images/button.png"},
        {id:"placeholder", src:"./Assets/images/placeholder.png"},
        {id:"startButton", src:"./Assets/images/startButton.png"},
        {id:"nextButton", src:"./Assets/images/nextButton.png"},
        {id:"backButton", src:"./Assets/images/backButton.png"},
        {id:"defaultkButton", src:"./Assets/images/defaultButton.png"},
        {id:"ocean", src:"./Assets/images/ocean.gif"},
        {id:"plane", src:"./Assets/images/plane.png"},
    ];// to use the assetManifest we have to cal queue.getResult("id")
      //var image = queue.getResult("button")
    function Preload():void
    {
        assets=new createjs.LoadQueue(); 
        //have to install-Plugin to load sound 
        config.Game.ASSETS=assets;// Make a reference to the ASSETS in the global
        assets.installPlugin(createjs.Sound);
        assets.loadManifest(assetManifest);
        assets.on("complete", Start);

    }

    function Start():void
    {
        console.log(`%c Game Started!`, "color: blue; font-size: 30px;")
        stage = new createjs.Stage(canvas);
        //define frame rate by ...
        createjs.Ticker.framerate =config.Game.FPS; //
        createjs.Ticker.on('tick' , Update)
        stage.enableMouseOver(20);// this will create a bound 

        currentSceneState = scenes.State.NO_SCENE;
        config.Game.SCENE = scenes.State.START;
        //Main();
    }
    function Update():void
    {   //if the currentSceneState is not Start , Play or End the Main method will run 
        if(currentSceneState != config.Game.SCENE)
        {
            
            Main();
        }

        currentScene.Update();
        stage.update();
        
        
        
    }
   
    /**
     *this is the main function of the game ( where we create and all our objects at the moment)
     *
     */
    function Main():void
    {
        console.log(`%c Scene Switched!`, "color: green; font-size: 25px;")
        
        //CLEAN UP 
        
        if(currentSceneState != scenes.State.NO_SCENE)//frist current scene has contain any scene
        {                                              //if its not empty than remove all children 
            currentScene.removeAllChildren();
            stage.removeAllChildren();
        }

        //SWITCH TO THE NEW SCENE
        switch(config.Game.SCENE)
        {
            case scenes.State.START:
                currentScene = new scenes.Start;
                console.log(`%c Start Scene!`, "color: green; font-size: 25px;")
                break;
            case scenes.State.PLAY:
                currentScene = new scenes.Play;
                console.log(`%c play Scene!`, "color: purple; font-size: 25px;")
                break;
            case scenes.State.END:
                currentScene = new scenes.End;
                console.log(`%c End Scene!`, "color: red; font-size: 25px;")
                break;
        
        }

        currentSceneState = config.Game.SCENE;
        stage.addChild(currentScene);
    }


    //window.addEventListener('load', Start); //we need preload function 
    window.addEventListener('load', Preload);   //we do not need start here at this point to load
})();