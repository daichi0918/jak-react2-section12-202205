import { Wrap, WrapItem } from "@chakra-ui/react";
import { memo, VFC } from "react";

import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <UserCard
          imageUrl="https://static.amanaimages.com/imgroom/rf_preview640/10131/10131006889.jpg"
          userName="出雲"
          fullName="Daichi Kayasuga"
        />
      </WrapItem>
    </Wrap>
  );
});
