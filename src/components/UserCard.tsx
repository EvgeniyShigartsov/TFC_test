import type { FC } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
  Box,
  Stack,
} from "@mui/material";
import { UserField } from "~/components/UserField";

type Props = {
  user: User;
};

export const UserCard: FC<Props> = ({ user }) => {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: 4 }}>
      <CardContent>
        <Box display="flex" gap={2}>
          <Box minWidth={220}>
            <CardMedia
              component="img"
              width={180}
              height={180}
              image={user.avatarUrl}
              alt={`${user.firstName} ${user.lastName}`}
            />
            <Typography variant="h5" my={1}>
              {user.firstName} {user.lastName}
            </Typography>

            <Stack direction="row" alignItems="center" spacing={1}>
              <UserField highlighted label="Age" value={user.age} />
              <UserField highlighted label="Gender" value={user.gender} />
            </Stack>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box>
            <Stack spacing={1}>
              <UserField label="Email" value={user.email} />
              <UserField label="Country" value={user.country} />
              <UserField label="State" value={user.state} />
              <UserField label="City" value={user.city} />
              <UserField label="Post code" value={user.postCode} />
              <UserField
                label="Street"
                value={`${user.street} ${user.streetNumber}`}
              />
            </Stack>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
