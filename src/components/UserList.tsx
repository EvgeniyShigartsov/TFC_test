import { Box } from "@mui/material";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useMemo, useRef, type FC } from "react";
import { USER_CARD_LIST_HEIGHT, UserListItem } from "~/components/UserListItem";
import _ from "lodash";

type Props = {
  users: User[];
  listHeight: number;
};

const gap = 8;
const columns = 3;

export const UserList: FC<Props> = ({ users, listHeight }) => {
  const listRef = useRef<HTMLDivElement>(null);

  const userChunks = useMemo(() => _.chunk(users, columns), [users]);

  const virtualizer = useVirtualizer({
    count: userChunks.length,
    getScrollElement: () => listRef.current,
    estimateSize: () => USER_CARD_LIST_HEIGHT + gap,
    overscan: 10,
  });

  const totalHeight = virtualizer.getTotalSize();
  const virtualItems = virtualizer.getVirtualItems();

  return (
    <Box
      ref={listRef}
      sx={{ height: `${listHeight}px`, maxHeight: "100%", overflow: "auto" }}
    >
      <Box
        sx={{ height: `${totalHeight}px`, width: "100%", position: "relative" }}
      >
        {virtualItems.map((virtualItem) => {
          const rowUsers = userChunks[virtualItem.index];

          return (
            <Box
              key={virtualItem.key}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: `${virtualItem.size}px`,
                transform: `translateY(${virtualItem.start}px)`,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {rowUsers.map((user) => (
                <UserListItem key={user.id} user={user} />
              ))}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
