import  propTypes from "prop-types";



// props 꺼내옴
// function Movie(props){
//   return (
// )
// }

// onLoad
// prop의 내용 가져오기
function Movie({name,pic,point}){
  return (
    <div>
      <h3> I Love {name}</h3>
      <h4>{point} / 10.0</h4>
      <img src={pic} alt={name}/>
    </div>
  )
}

// rendering array
// component
// error : act-jsx-dev-runtime.development.js:87 
// Warning: Each child in a list should have a unique "key" prop.
const movieLike = 
[
  {
    id:1,
    name : "Avengers",
    image : "https://images.immediate.co.uk/production/volatile/sites/3/2019/04/Avengers-Endgame-Banner-2-de7cf60.jpg?quality=90&webp=true&crop=93px,0px,1013px,675px&resize=1200,800",
    point : 8.6
  },
  {
    id:2,
    name : "Ironman", 
    image : "https://wallpapers.com/images/featured/iron-man-ouqxo5w2b59h0042.webp",
    point : 9.3
  },
  {
    id:3,
    name : "Spiderman",
    image : "https://static.ffx.io/images/$width_1536%2C$height_864/t_crop_fill/q_62%2Cf_auto/4307ffa72eea0141dab7bc4a5ace3cdfbd45f2b7",
    point : 10.0
  },
  {
    id:4,
    name : "Thor",
    image : "https://ichef.bbci.co.uk/images/ic/640x360/p09t1hg0.jpg",
    point : 6.3
  }
];
 
// jsx : HTMl + JavaScript 조합
// main APP
// add properties 
// 1. map, 람다식 활용 forEach
function App() {
  return (
    <div> 
      {movieLike.map(movie =>
        <Movie 
          key={movie.id} 
          name={movie.name} 
          pic={movie.image} 
          point={movie.point}/>)
      }
    </div>  
  )  
}

// 유효한 상태를 확인시켜줌 
Movie.propTypes = {
 name:  propTypes.string.isRequired,
 pic:  propTypes.string.isRequired,
 point:  propTypes.number.isRequired // => string이 아니다~ 이말이야
}

// 2. function 사용시
// function renderMovie(movie){  
//   return <Movie name={movie.name} pic={movie.image}/>
// }
// {movieLike.map(renderMovie)}

 
  // 각각 들어있는 리스트 
  // <Movie fav="Avengers"/>          
  // <Movie fav="Ironman"/>          
  // <Movie fav="Spiderman"/>          
  // <Movie fav="Thor"/> 


// App으로 추출
export default App;
