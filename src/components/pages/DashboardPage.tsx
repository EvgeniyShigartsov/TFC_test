import { Container } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useLayoutEffect, useRef, useState, type FC } from "react";
import { useStore } from "~/providers/store/useStore";
import { UserList } from "~/components/UserList";

export const DashboardPage: FC = observer(() => {
  const store = useStore();
  const containerRef = useRef<HTMLDivElement>(null);

  const [listHeight, setListHeight] = useState<number>(0);

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
      <UserList users={store.users} listHeight={listHeight} />
    </Container>
  );
});
