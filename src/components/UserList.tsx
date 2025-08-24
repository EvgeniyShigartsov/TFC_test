import { Box } from "@mui/material";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef, type FC } from "react";
import { USER_CARD_LIST_HEIGHT, UserCard } from "~/components/UserCard";

type Props = {
  users: User[];
  listHeight: number;
};

const gap = 8;

export const UserList: FC<Props> = ({ users, listHeight }) => {
  const listRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: users.length,
    getScrollElement: () => listRef.current,
    estimateSize: () => USER_CARD_LIST_HEIGHT + gap,
    overscan: 20,
  });

  const totalHeight = virtualizer.getTotalSize();
  const virtualItems = virtualizer.getVirtualItems();

  return (
    <Box ref={listRef} sx={{ height: `${listHeight}px`, overflow: "auto" }}>
      <Box
        sx={{ height: `${totalHeight}px`, width: "100%", position: "relative" }}
      >
        {virtualItems.map((virtualItem) => {
          const user = users[virtualItem.index];

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
              }}
            >
              <UserCard user={user} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
