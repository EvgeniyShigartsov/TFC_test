import { Box } from "@mui/material";
import { observer } from "mobx-react-lite";
import type { FC } from "react";
import { useStore } from "~/providers/store/useStore";

export const DashboardPage: FC = observer(() => {
  const store = useStore();

  const users = store.users.slice(0, 100);

  return (
    <Box>
      {users.map((user) => (
        <Box key={user.id}>{user.firstName}</Box>
      ))}
    </Box>
  );
});
