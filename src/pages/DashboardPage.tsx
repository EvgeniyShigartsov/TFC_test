import { Container } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useLayoutEffect, useRef, useState, type FC } from "react";
import { useStore } from "~/providers/store/useStore";
import { UserList } from "~/components/UserList";
import { useLocation } from "react-router";

export const DashboardPage: FC = observer(() => {
  const store = useStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const [listHeight, setListHeight] = useState<number>(0);

  const scrollToUser = Number(location.state?.userId) || undefined;

  useLayoutEffect(() => {
    const onResize = () => {
      if (containerRef.current) {
        setListHeight(containerRef.current.getBoundingClientRect().height);
      }
    };

    onResize();
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <Container ref={containerRef} sx={{ flex: 1 }}>
      <UserList
        users={store.filteredUsers}
        scrollToUser={scrollToUser}
        listHeight={listHeight}
      />
    </Container>
  );
});
