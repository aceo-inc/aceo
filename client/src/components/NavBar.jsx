import { FiSearch } from "react-icons/fi";
import { RxDropdownMenu } from "react-icons/rx";

const navbar = props => (
  <nav class="navbar h-auto bg-light">
    <div class="container-fluid">
      <a class="navbar-brand fs-1 mw-30">ACEO</a>
      <form class="d-flex align-items-center" role="search">
        {/* Try ACEO for free button */}
        <button
          type="button"
          class="btn btn-warning mx-2 fs-6 h-50 btn-sm w-100 p-2"
        >
          Try ACEO for free
        </button>

        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />

        <button class="btn btn-outline-warning" type="submit">
          <FiSearch />
        </button>
        <button
          type="button"
          class="btn btn-primary mx-2 fs-6 h-50 fa-3x btn-sm w-25 p-2"
        >
          <RxDropdownMenu class="fa-3x" />
        </button>
      </form>
    </div>
  </nav>
);

export default function NavBar() {
  return <div>{navbar()}</div>;
}
