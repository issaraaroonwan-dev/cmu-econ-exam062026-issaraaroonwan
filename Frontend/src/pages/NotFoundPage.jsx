import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="not-found">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p className="lead">The page you opened does not exist.</p>
      <Link className="primary-link" to="/users">
        Back to users
      </Link>
    </section>
  )
}

export default NotFoundPage
