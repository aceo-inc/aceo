const footer = props => (
  <div class="card">
    <div class="card-body">This is some text within the footer body.</div>
  </div>
);

export default function Footer() {
  return <div>{footer()}</div>;
}
