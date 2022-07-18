export default function Storys({Users}){

  const ComponentsUsers = Users.map((User) => {return(
    <div class="story">
      <div class="imagem">
        <img src={"assets/img/"+User+".svg"} />
      </div>
      <div class="usuario">
        {User}
      </div>
    </div>
  
  )} )
    
  
 
    
    
    return(

        <div class="stories">
            {ComponentsUsers}
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
          </div>
    )
}