import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
       
     <Movielist/>
    </div>
  );
}


function Movielist(){
    const [name,setname]=useState("Ratatouile");
    const[poster,setposter]=useState("https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg");
    const[rating,setrating]=useState("9.5");
    const[summary,setsummary]=useState("A rat who can cook makes an unusual alliance with a young kitchen worker at a famous Paris restaurant.");
    const[Movielist,setMovielist]=useState([
        {
        name:"Wakanda Forever",
        poster:"https://terrigen-cdn-dev.marvel.com/content/prod/1x_masonry/shuri_v2_lg.jpg",
        rating:7.4,
        summary:"The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa."

    },
    {
        name:"Disenchanted",
        poster:"https://pbs.twimg.com/media/FcP9xAmaIAM-M7z?format=jpg&name=medium",
        rating:9.8,
        summary:"Fifteen years after her happily ever after, Giselle questions her happiness, inadvertently turning the lives of those in the real world and Andalasia upside down in the process."
    },
    {
        name:"Enchanted",
        poster:"https://lumiere-a.akamaihd.net/v1/images/p_enchanted_19751_8adb9bba.jpeg",
        rating:7.1,
        summary:"A young maiden in a land called Andalasia, who is prepared to be wed, is sent away to New York City by an evil Queen, where she falls in love with a lawyer."

    },
    {
        name:"Strange world",
        poster:"https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_strangeworld_poster_870_v1_a0051503.jpeg",
        rating:8.8,
        summary:"The legendary Clades are a family of explorers whose differences threaten to topple their latest and most crucial mission."
    },
    {
        name:"Enchanto",
        poster:"https://lumiere-a.akamaihd.net/v1/images/p_encanto_homeent_22359_4892ae1c.jpeg",
        rating:7.2,
        summary:"A Colombian teenage girl has to face the frustration of being the only member of her family without magical powers."
    },
    {
        name:"Pinocchio",
        poster:"https://lumiere-a.akamaihd.net/v1/images/p_pinocchio_19879_d6304938.jpeg",
        rating:5.1,
        summary:"A puppet is brought to life by a fairy, who assigns him to lead a virtuous life in order to become a real boy."
    },  
{name:"Thor:Love and Thunder",
poster:"https://m.media-amazon.com/images/I/91n6C5xJssL._SY679_.jpg",
rating:8.6,
summary:"Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct."
},
{
    name:"Hocu pocus 2",
    poster:"https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_hocuspocus2_v4_369_ea57c649.jpeg",
    rating:6.0,
    summary:"Two young women accidentally bring back the Sanderson Sisters to modern day Salem and must figure out how to stop the child-hungry witches from wreaking havoc on the world"
},
{
    name:"LightYear",
    poster:"https://lumiere-a.akamaihd.net/v1/images/p_disney_lightyear_519_c4636841.jpeg",
    rating:9.0,
    summary:"While spending years attempting to return home, marooned Space Ranger Buzz Lightyear encounters an army of ruthless robots commanded by Zurg who are attempting to steal his fuel source."
}
]);

console.log(Movielist)
const btn={
    color:"blue",
    padding:"10px",
  
}
    return(
        <div>
        <div className='movie-form'>
            <input onChange={(event)=> setname(event.target.value)}
            placeholder="Movie-name"/>
            <input onChange={(event) => setposter(event.target.value)}
            placeholder="Movie poster url"/>
            <input onChange={(event) => setrating(event.target.value)}
            placeholder="Movie rating" />
            <input onChange={(event)=>setsummary(event.target.value)}
            placeholder="Movie summary"/>
            <button style={btn} onClick={()=>{ setMovielist([...Movielist,{ name,poster,rating,summary}])}}>Add Movie</button>
</div>
        <div className='movie-list'>
            {Movielist.map((mv)=>(
               <Movie movie={mv}/>
            ))}
        </div>
        </div>
       
    )
}
//Object Destructuring
function Movie({ movie }){
    const styles={
        color:movie.rating >= 8.5 ? "green" :"red",
};
const [show,setShow]=useState(true);
     return(
        <div className="movie-container">
            <img src={movie.poster} alt='' className='movie-poster'/>
            <div className='movie-specs'>
            <h2 className='movie-name'>{movie.name}</h2><span> <button onClick={()=> setShow (!show)}>^</button></span>
            <p style={styles} className='movie-rating'>⭐{movie.rating}</p>
            </div>
           
          {show?  <p className='movie-summary'>{movie.summary}</p> : null}
            <Counter/>
         
        </div>
    )
    }
    function Counter() {
       
        const [like, setLike] = useState(0);
        const [dislike, setDislike] = useState(0);
        return (
          <div>
            <button onClick={() => { setLike(like + 1) }}> 👍 {like} </button>
            <button onClick={() => { setDislike(dislike + 1) }}> 👎 {dislike} </button>
          </div>
        )
      }
export default App;