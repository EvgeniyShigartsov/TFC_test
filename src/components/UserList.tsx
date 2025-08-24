import { Box } from "@mui/material";
import type { FC } from "react";

import { UserCard } from "~/components/UserCard";

type Props = {
  users: User[];
};

export const UserList: FC<Props> = ({ users }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 1,
      }}
    >
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </Box>
  );
};
