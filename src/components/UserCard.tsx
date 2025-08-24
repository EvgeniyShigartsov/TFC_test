import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Avatar,
  Stack,
  Box,
} from "@mui/material";
import type { FC } from "react";
import { generatePath, useNavigate } from "react-router";
import { paths } from "~/router/paths";

type Props = {
  user: User;
};

export const USER_CARD_LIST_HEIGHT = 80;

export const UserCard: FC<Props> = ({ user }) => {
  const { avatarUrl, firstName, email, id } = user;

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(generatePath(paths.USER, { id }));
  };

  return (
    <Card
      sx={{
        width: 300,
        borderRadius: 2,
        boxShadow: 3,
        height: `${USER_CARD_LIST_HEIGHT}px`,
      }}
    >
      <CardActionArea onClick={handleCardClick}>
        <CardContent>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar src={avatarUrl} alt={firstName} />
            <Box>
              <Typography variant="subtitle1" fontWeight={600}>
                {firstName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {email}
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
