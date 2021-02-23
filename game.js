class Game{
    constructor(){
    
    }

    getState(){
        var gamestateref= database.ref("gstate");
        gamestateref.on("value",function(data){
            gState= data.val();
        });
    }

    update(state){
        database.ref("/").update({
            gstate: state
        });
    }

    start(){
        if (gState===0) {
            player= new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
}