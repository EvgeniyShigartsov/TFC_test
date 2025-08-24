import { Container } from "@mui/material";
import { observer } from "mobx-react-lite";
import type { FC } from "react";
import { useStore } from "~/providers/store/useStore";
import { UserList } from "~/components/UserList";

export const DashboardPage: FC = observer(() => {
  const store = useStore();

  const users = store.users.slice(0, 100);

  return (
    <Container>
      <UserList users={users} />
    </Container>
  );
});
