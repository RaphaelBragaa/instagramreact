import React from "react"

export default function Posts({Feeds}){
  const [corBotao, setCorBotao] = React.useState('primary');
  console.log(corBotao)
  function F(){
    if(corBotao === 'primary'){
      setCorBotao('danger')
    }else{
      setCorBotao('primary');
    }
   
       
    console.log(corBotao)
  }
  
  const ComponentsFeeds=Object.keys(Feeds).map((key,index) => {return(
    <div class="post" key={index}>
               <div class="topo">
                 <div class="usuario">
                   <img src={"assets/img/"+Feeds[key].name+".svg"}/>
                   {Feeds[key].name}
                 </div>
                 <div class="acoes">
                   <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>


              <div class="conteudo">
                <img src={"assets/img/"+Feeds[key].img} />
             </div>

             <div class="fundo">
               <div class="acoes">
                  <div>

                    <ion-icon  color={corBotao} onClick={F} name="heart-outline"></ion-icon>
                     <ion-icon name="chatbubble-outline"></ion-icon>
                     <ion-icon name="paper-plane-outline"></ion-icon>
                   </div>
                   <div>
                     <ion-icon name="bookmark-outline"></ion-icon>
                   </div>
                 </div>

                 <div class="curtidas">
                   <img src={"assets/img/"+Feeds[key].screenLike+".svg"} />
                   <div class="texto">
                     Curtido por <strong>{Feeds[key].screenLike}</strong> e <strong>outras {Feeds[key].likes} pessoas</strong>
                   </div>
                 </div>
               </div>
             </div>
   )})
    return(
        <div class="posts">
           {ComponentsFeeds}
          </div>
    )
}