import React, { useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./nearbyjobs.style";
import { COLORS } from "../../../constants";
import NearbyJobCard from "./../../common/cards/nearby/NearbyJobCard";
import useFetch from "../../../hook/useFetch";

const Nearbyjobs = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);
  const { data, isLoading, error, refetch } = useFetch("search", {
    query: "Python developer in Texas, USA",
    // page: 1,
    num_pages: 1,
  });

  // console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearbyjobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard job={job} key={`nearby-job-${job?.job_id}`} />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
