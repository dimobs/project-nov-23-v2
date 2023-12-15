
import {  useParams } from 'react-router-dom';
import './NotFound.css';
// import {notFoundScript} from './script.js'

export default function NotFound () {
  const {id} = useParams();

  // useEffect(() => {
  //   fetch
  // },[])

    // useEffect(() => {
    //   notFoundScript(); // Call the function from the imported module
    // }, []);

    return (
      <>
      <div className="container">
          <article>
        <h2 className="">This app has not path: <span>/{id}</span></h2>
          </article>
        <h1 className="first-four">4</h1>
        <div className="cog-wheel1">
          <div className="cog1">
            <div className="eye circle__left" />
            <div className="top" />
            <div className="down" />
            <div className="left-top" />
            <div className="left-down" />
            <div className="right-top" />
            <div className="right-down" />
            <div className="left" />
            <div className="right" />
          </div>
        </div>
        <div className="cog-wheel2">
          <div className="cog2">
            <div className="eye circle__right" />
            <div className="top" />
            <div className="down" />
            <div className="left-top" />
            <div className="left-down" />
            <div className="right-top" />
            <div className="right-down" />
            <div className="left" />
            <div className="right" />
          </div>
        </div>
        <h1 className="second-four">4</h1>
        <p className="wrong-para">Uh Oh! Page not found!</p>
      </div>
      </>
    )
}