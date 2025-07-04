import { FaSearch } from "react-icons/fa";
import { usePageTittle } from "../Components/utils/Helper";
import { Link } from "react-router-dom";
import Support from "../Components/Support/Support";
import './CSS/NotFoundPage.css'

const NotFoundPage = () => {
  usePageTittle('404 Not Found');
  return (
    <div className="not-found-page-container">
      <div className="content">
        <h2>Page not fount</h2>
        <p>The page your looking for cannot be found.</p>
        <div className="search-page-input">
          <input type="text"
                placeholder="Search in store.."
          />
          <button>
            <FaSearch/>
          </button>
        </div>
        <Link to='/'><p>Click here to continue shoping</p></Link>
      </div>
      <Support/>
    </div>
  )
}

export default NotFoundPage