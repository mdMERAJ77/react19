import './MovieLinks.css'
import { Link } from 'react-router-dom'

function MovieLinks() {
  return (
    <div className='movieslinks'>
        <Link to="https://moviesdrive.pics/" target="_blank">Link 1: <strong>Click here</strong></Link>
        <Link to="https://prmovies.sale/" target="_blank">Link 2: <strong>Click here</strong></Link>
    </div>
  )
}

export default MovieLinks