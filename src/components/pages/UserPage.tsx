import { Container } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useMemo, type FC } from "react";
import { useParams, Navigate } from "react-router";
import { useStore } from "~/providers/store/useStore";
import { paths } from "~/router/paths";

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

  return <Container>{user.firstName}</Container>;
});
