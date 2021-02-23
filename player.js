class Player{
    constructor(){

    }

    getCount(){
        var pcountref = database.ref("playercount");
        pcountref.on("value", function(data){
            pCount= data.val();
        })
    }

    updateCount(count){
        database.ref("/").update({
            playercount: count
        });
    }

    update(nam){
        console.log(nam);
        var playerindex = "player" + pCount;
        database.ref(playerindex).set({
            name: nam
        });
    }

}