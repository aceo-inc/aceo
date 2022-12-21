const homepage = props => (
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4 text-warning">Fluid jumbotron</h1>
      <p class="lead text-warning">
        This is a modified jumbotron that occupies the entire horizontal space
        of its parent.
      </p>
      <p class="my-4 text-warning">
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <p class="lead">
        <a class="btn btn-warning btn-lg" href="#" role="button">
          Learn more
        </a>
      </p>
    </div>
  </div>
);

export default function Homepage() {
  return (
    <div>
      <h2>{homepage()}</h2>
    </div>
  );
}
