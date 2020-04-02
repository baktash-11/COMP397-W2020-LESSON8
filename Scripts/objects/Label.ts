module objects // modul is a container that we can hide our class in. same as package
{

    export class Label extends createjs.Text //its importand to user export when we create our class inside module.
    {                                        // Module make the class visbale withen the project 
        /**
         *this is the constructorr
         * @param {string} lableString
         * @param {string} fontSize
         * @param {string} fontFamily
         * @param {string} fontColor
         * @param {number} x
         * @param {number} y
         * @param {boolean} isCentered
         * @memberof Label
         * have to go and check createjs.com/docs/easel.js 
         */
        constructor(public lableString:string = "Change me", 
                    public fontSize:string ="20px", 
                    public fontFamily:string ="Arial",
                    public fontColor:string="#ff00e1",
                     x:number =0,  y:number=0, 
                    public isCentered:boolean = false)
        {
            super(lableString, fontSize+" "+fontFamily, fontColor);//we must pass these properties to super class 
            if(isCentered)                                          //for making it easy we just add the font family and for size to gatter 
            {
                //getBounds and getMeasured are the methods which get the height and width of an object
                //getting the they width value and devide it in half
                this.regX = this.getBounds().width * .5;
                //getting the they height value and devide it in half
                this.regY = this.getMeasuredHeight() * .5;
            }
            //assigning the value of x and y
            this.x =x;
            this.y =y;

        }

        public setText(newText:string)
        {
            this.text = newText;
            this.regX = this.getBounds().width * .5;
            this.regY = this.getMeasuredHeight() * .5;

        }
    }
}