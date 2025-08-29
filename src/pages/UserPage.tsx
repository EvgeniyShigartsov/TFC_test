import { type FC, useMemo } from "react";
import { observer } from "mobx-react-lite";
import { useParams, Navigate } from "react-router";
import { useStore } from "~/providers/store/useStore";
import { paths } from "~/router/paths";
import { Container } from "@mui/material";
import { UserCard } from "~/components/UserCard";

export const UserPage: FC = observer(() => {
  const params = useParams();
  const store = useStore();

  const userId = Number(params.id);

  const user = useMemo(
    () => store.users.find((user) => user.id === userId),
    [store.users, userId]
  );

  if (!user) {
    return <Navigate to={paths.DASHBOARD} replace />;
  }

  return (
    <Container>
      <UserCard user={user} />
    </Container>
  );
});
