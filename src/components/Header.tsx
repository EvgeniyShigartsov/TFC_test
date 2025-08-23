import { Link, generatePath } from "react-router";
import { paths } from "~/router/paths";

export const Header = () => {
  return (
    <header>
      <h1>Cool header</h1>
      <nav>
        <Link to={paths.DASHBOARD}>Dashboard</Link>
        <Link
          to={generatePath(paths.USER, {
            id: Math.floor(Math.random() * 100 + 1),
          })}
        >
          Go to random user
        </Link>
      </nav>
    </header>
  );
};
