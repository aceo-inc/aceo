const navbar = props => (
  <nav class="navbar bg-light fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand fs-1">ACEO</a>
      <form class="d-flex justify-content-between" role="search">
        <button type="button" class="btn btn-warning mx-2 fs-8">
          Try ACEO for free
        </button>
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success btn-sm" type="submit">
          Search
        </button>
      </form>
    </div>
  </nav>
);

export default function NavBar() {
  return <div>{navbar()}</div>;
}
