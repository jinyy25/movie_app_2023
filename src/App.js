

// function Movie(props){
//   console.log(props.fav);
//   return (
//     <h3> I Love {props.fav}</h3>
// )
// }

// onLoad
// prop의 내용 가져오기
function Movie({name,pic}){
  return (
    <div>
      <h3> I Love {name}</h3>
      <img src={pic}/>
    </div>
  )
}

// rendering array
const movieLike = 
[
  {
    name : "Avengers",
    image : "https://images.immediate.co.uk/production/volatile/sites/3/2019/04/Avengers-Endgame-Banner-2-de7cf60.jpg?quality=90&webp=true&crop=93px,0px,1013px,675px&resize=1200,800"
  },
  {
    name : "Ironman", 
    image : "https://wallpapers.com/images/featured/iron-man-ouqxo5w2b59h0042.webp"
  },
  {
    name : "Spiderman",
    image : "https://static.ffx.io/images/$width_1536%2C$height_864/t_crop_fill/q_62%2Cf_auto/4307ffa72eea0141dab7bc4a5ace3cdfbd45f2b7"
  },
  {
    name : "Thor",
    image : "https://ichef.bbci.co.uk/images/ic/640x360/p09t1hg0.jpg"
  }
];
 
// jsx : HTMl + JavaScript 조합
// main APP
// add properties 
// map, 람다식 활용 forEach
function App() {
  return (
    <div> 
        {movieLike.map(movie => 
          <Movie name ={movie.name} pic = {movie.image}
        />)}            
    </div>
  ) 
}
/* <Movie fav="Avengers"/>          
<Movie fav="Ironman"/>          
<Movie fav="Spiderman"/>          
<Movie fav="Thor"/>           */

export default App;
