import Storys from "./Storys"
import Posts from "./Posts"
import Sidebar from "./Sidebar"




export default function Body(){
    const Users = ["9gag","meowed","barked","nathanwpylestrangeplanet","wawawicomics","respondeai","filomoderna","memeriagourmet"]
    const Suggestions = ["bad.vibes.memes","chibirdart","razoesparaacreditar","adorable_animals","smallcutecats"]
    const User = "catanacomics"
    const Feeds = [{name:"meowed",img:"gato-telefone.svg",likes:101.523,screenLike:"respondeai"},{name:"barked",img:"dog.svg",likes:99.159,screenLike:"adorable_animals"}]



    return(
<div className="corpo">
    <div className="esquerda">
        <Storys  Users={Users} />
        <Posts Feeds={Feeds}/>
    </div>
    <Sidebar Suggestions={Suggestions} User={User}/>
</div>
    )
}