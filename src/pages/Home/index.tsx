import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUserData } from "../../api";
import { BarChart, Button, Icon, Loader } from "../../components";
import style from "./Home.module.scss";

const Home = () => {
  const [shouldUpdate, setShouldUpdate] = useState(true);

  const { data, isLoading } = useQuery({
    queryKey: ["userData"],
    queryFn: getUserData,
    refetchInterval: shouldUpdate && 5000,
  });

  return (
    <div className={style.container}>
      {isLoading ? <Loader /> : <BarChart data={data} />}
      <Button onClick={() => setShouldUpdate((prev) => !prev)}>
        {shouldUpdate ? <Icon name="pause" /> : <Icon name="play" />}
      </Button>
    </div>
  );
};

export default Home;
