const navbar = props => (
  <nav class="navbar bg-light">
    <form class="container-fluid">
      <h2 class="justify-content-start">ACEO</h2>
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            Active
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Link
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Link
          </a>
        </li>
      </ul>
      <button class="btn btn-warning btn-lg justify-content-end" type="button">
        Try ACEO for free
      </button>
    </form>
  </nav>
);

export default function NavBar() {
  return <div>{navbar()}</div>;
}
