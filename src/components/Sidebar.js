export default function Sidebar({Suggestions, User}){
  console.log(User)
  const ComponentsSuggestions = Suggestions.map((Suggestion) =>{return(
    <div class="sugestao">
               <div class="usuario">
                 <img src={"assets/img/"+Suggestion+".svg"}/>
                 <div class="texto">
                  <div class="nome">{Suggestion}</div>
                  <div class="razao">Segue você</div>
                </div>
              </div>

             <div class="seguir">Seguir</div>
           </div>

   )} )

  
    return(
        <div class="sidebar">
          <div class="usuario">
            <img src={"assets/img/"+User+".svg"} />
            <div class="texto">
              <strong>{User}</strong>
              Catana
            </div>
          </div>

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>
          {ComponentsSuggestions}
          </div>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
    )
}