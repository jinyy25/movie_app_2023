import propTypes from "prop-types";
import React from "react";
import axios from "axios";
import Movie from "./Movie"; //movie.js 내용 가져옴
import "./App.css";


// #3.3 Fetching Movies from API
// setTimeOut : 시간이 지남에 따라 Set => fetch data
// fetch 
// axios : layer on fetch => npm i axios
// HTTP 요청과 응답을 JSON 형태로 자동 변경
// componentDidMount : component가 mount 된 이후 작업
// async await : component mount 이후 getMovie 호출시 loading 시간을 맞춤 
// (axios로 데이터를 불러오는데 시간이 걸리므로 접근이 끝날때까지 기다림)
// ES6 적용 :  {data:{data:{movies}}}
class App extends React.Component {
  //Object
  state = {
    isLoading: true,
    movies: []
  };

  //3. axios 기다리는 동작
  getMovies = async () => {
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // console.log(movies.data.data.movies);
    // console.log(movies);
    const {
      data: {
        data: {
          movies
        }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    // this.setState({movies:movies}); //state : movies, axios : movies => movies로 단축
    //4.await 동작 이후 상태를 바꿔줌
    this.setState({ movies, isLoading: false });
  }

  //2. mount 이후 동작
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({isLoading:false});
    // },6000);
    this.getMovies();
  }

  //1. starting point
  //section 내부에 movie 객체를 load
  render() {
    const { isLoading, movies } = this.state;
    return (      
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">
              "Loading..."
            </span>
          </div>
          ) : (
            <div className="movies">
              {
                movies.map(movie => (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                  />
                ))
              }
            </div>
            )} 
      </section>
    );    
  }
}




// #3.0 Class Components and State
// component 를 확장시켜 나감
// function -> class -> app
// render Method in React Component
// component를 Class화 시킴 
// state : class component 
// this : class 내부의 properties, Object 의미
// setState : refresh function 필요 => 새로운 상태를 Set (rerender)

// constructor on js 
// 동작의 순서 constructor => this => mounting
// rendering 후에 일어나는 동작들
// mounting : component 상태를 누적시켜 특정위치까지 데이터 전달
// LifeCyle
// componentDidMount,componentDidUpdate,componentWillUnmount : 상태확인
// class App extends React.Component{
//   constructor(props){
//     super(props);  
//   }

//   state = {
//     count :0
//   }

//   add= () =>{    
//     // this.setState({count: this.state.count +1});
//     this.setState(current => ({count: current.count +1}));
//   };

//   minus= () =>{
//     this.setState(current => ({count: current.count -1}));    
//   };

//   componentDidMount(){
//     console.log("Comoponent rendered");
//   }

//   componentDidUpdate(){
//     console.log("I just updated");
//   }

//   componentWillUnmount(){
//     console.log("I'm done");
//   }

//   render(){
//     console.log("I'm rendering");
//     return (
//       <section>
//         <h1>The number is : {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>Minus</button>
//       </section>
//     )
//   }
// }





//#2.0 Reusable Componenets with JSX + Props

//props 꺼내옴
// function Movie(props){
//   return (
//   )
// }

// onLoad
// prop의 내용 가져오기
// function Movie({name,pic,point}){
//   return (
//     <section>
//       <h3> I Love {name}</h3>
//       <h4>{point} / 10.0</h4>
//       <img src={pic} alt={name}/>
//     </section>
//   )
// }

// rendering array
// props component 추가
// key 추가
// error : act-jsx-dev-runtime.development.js:87 
// Warning: Each child in a list should have a unique "key" prop.
// const movieLike = 
// [
//   {
//     id:1,
//     name : "Avengers",
//     image : "https://images.immediate.co.uk/production/volatile/sites/3/2019/04/Avengers-Endgame-Banner-2-de7cf60.jpg?quality=90&webp=true&crop=93px,0px,1013px,675px&resize=1200,800",
//     point : 8.6
//   },
//   {
//     id:2,
//     name : "Ironman", 
//     image : "https://wallpapers.com/images/featured/iron-man-ouqxo5w2b59h0042.webp",
//     point : 9.3
//   },
//   {
//     id:3,
//     name : "Spiderman",
//     image : "https://static.ffx.io/images/$width_1536%2C$height_864/t_crop_fill/q_62%2Cf_auto/4307ffa72eea0141dab7bc4a5ace3cdfbd45f2b7",
//     point : 10.0
//   },
//   {
//     id:4,
//     name : "Thor",
//     image : "https://ichef.bbci.co.uk/images/ic/640x360/p09t1hg0.jpg",
//     point : 6.3
//   }
// ];

// jsx : HTMl + JavaScript 조합
// main APP
// add properties 
// 1. map, 람다식 활용 forEach
// function component
// function App() {
//   return (
//     <section> 
//       {movieLike.map(movie =>
//         <Movie 
//           key={movie.id} 
//           name={movie.name} 
//           pic={movie.image} 
//           point={movie.point}/>)
//       }
//     </section>  
//   )  
// }

// 유효한 상태를 확인시켜줌 
// Movie.propTypes = {
//  name:  propTypes.string.isRequired,
//  pic:  propTypes.string.isRequired,
//  point:  propTypes.number.isRequired // => string이 아니다~ 이말이야
// }

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


//App 내보냄
export default App;
