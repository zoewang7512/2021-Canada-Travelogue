import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
//firestore
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  limit,
} from "@firebase/firestore";
import db from "../../firebase";
//components
import {
  AccommodationIcon,
  FoodIcon,
  TransportationIcon,
  EntertainmentIcon,
  TuitionIcon,
  ShoppingIcon,
  InsuranceIcon,
  OtherIcon,
} from "../Icons/CustomIcon";
//mui
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";


const HistoryListItem = ({ amount, title, date, category }) => {
  //icon
const statusIcon = {
  住宿費用: <AccommodationIcon />,
  飲食費用: <FoodIcon />,
  交通費用: <TransportationIcon />,
  教育費用: <TuitionIcon />,
  休閒費用: <EntertainmentIcon />,
  購物費用: <ShoppingIcon />,
  保險費用: <InsuranceIcon />,
  其他: <OtherIcon />,
};

//date format
function DateString(value) {
  return value && new Date(value.seconds * 1000 + value.nanoseconds / 1000000);
}
  return (
    <ListItem
      disableGutters
      secondaryAction={
        <Typography variant="subtitle1" fontWeight={400}>
          {new Intl.NumberFormat().format(amount)}
        </Typography>
      }
    >
      <ListItemAvatar>
        <Avatar>{statusIcon[category]}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={dayjs(DateString(date)).format("YYYY/MM/DD")}
      />
    </ListItem>
  );
};

const RecentTransactions = () => {
  const [queryRecent, setQueryRecent] = useState([
    {
      name: "Loading...",
      id: "initial",
    },
  ]);
  useEffect(() => {
    const collectionRef = collection(db, "Transactions");
    const unsub = onSnapshot(
      query(collectionRef, orderBy("date", "desc"), limit(5)),
      (snapshot) =>
        setQueryRecent(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
    );

    return unsub;
  }, []);
  return (
    <List >
      {queryRecent.map((item) => {
        return (
          <HistoryListItem
            amount={item.amount}
            title={item.description}
            date={item.date}
            category={item.category}
          />
        );
      })}
    </List>
  );
};

const TopExpences = () => {
  const [queryTop, setQueryTop] = useState([
    {
      name: "Loading...",
      id: "initial",
    },
  ]);

  useEffect(() => {
    const collectionRef = collection(db, "Transactions");
    const unsub = onSnapshot(
      query(collectionRef, orderBy("amount", "desc"), limit(5)),
      (snapshot) =>
        setQueryTop(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );

    return unsub;
  }, []);
  return (
    <List >
      {queryTop.map((item) => (
        <HistoryListItem
          key={item.id}
          amount={item.amount}
          title={item.description}
          date={item.date}
          category={item.category}
        />
      ))}
  </List>
      );
};

export { RecentTransactions,TopExpences };
