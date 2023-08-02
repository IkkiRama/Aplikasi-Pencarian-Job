import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  View,
} from "react-native";
import { Text, SafeAreaView } from "react-native";
import axios from "axios";

import { ScreenHeaderBtn, NearbyJobCard } from "../components";
import { COLORS, icons, SIZES, SAFEAREAVIEW } from "../constants";
import styles from "../styles/search";
import { OnPressHandler, SearchTerm } from "./home";

const JobSearch = ({ navigation }) => {
  const [searchResult, setSearchResult] = useState();
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [page, setPage] = useState(1);

  const handleSearch = async () => {
    setSearchLoader(true);
    setSearchResult([]);
    console.log(SearchTerm);

    try {
      const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/search`,
        headers: {
          "X-RapidAPI-Key":
            "KJwZZIJSFimshuivMSVGaiYzkRomp15f2vkjsnK4bKzuUzVLzA",
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
        params: {
          query: SearchTerm,
          page: page.toString(),
        },
      };

      const response = await axios.request(options);
      setSearchResult(response.data.data);
    } catch (error) {
      setSearchError(error);
      console.log(error);
    } finally {
      setSearchLoader(false);
    }
  };

  const handlePagination = (direction) => {
    if (direction === "left" && page > 1) {
      setPage(page - 1);
      handleSearch();
    } else if (direction === "right") {
      setPage(page + 1);
      handleSearch();
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  //   const onPressHandler = (JOB) => {
  //     JobId = JOB.job_id;
  //     navigation.navigate("DetailJob");
  //   };

  return (
    <SafeAreaView style={SAFEAREAVIEW.style}>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <View style={{ flex: 1, padding: SIZES.medium }}>
        <FlatList
          data={searchResult}
          renderItem={({ item }) => (
            <NearbyJobCard
              onPressHandler={OnPressHandler}
              job={item}
              // handleNavigate={() => navigation.navigate("DetailJob")}
            />
          )}
          keyExtractor={(item) => item.job_id}
          contentContainerStyle={{
            padding: SIZES.medium,
            rowGap: SIZES.medium,
          }}
          ListHeaderComponent={() => (
            <>
              <View style={styles.container}>
                <Text style={styles.searchTitle}>
                  {SearchTerm.toUpperCase()}
                </Text>
                <Text style={styles.noOfSearchedJobs}>Job Opportunities</Text>
              </View>
              <View style={styles.loaderContainer}>
                {searchLoader ? (
                  <ActivityIndicator size="large" color={COLORS.primary} />
                ) : (
                  searchError && <Text>Oops something went wrong</Text>
                )}
              </View>
            </>
          )}
          ListFooterComponent={() => (
            <View style={styles.footerContainer}>
              <TouchableOpacity
                style={styles.paginationButton}
                onPress={() => handlePagination("left")}
              >
                <Image
                  source={icons.chevronLeft}
                  style={styles.paginationImage}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <View style={styles.paginationTextBox}>
                <Text style={styles.paginationText}>{page}</Text>
              </View>
              <TouchableOpacity
                style={styles.paginationButton}
                onPress={() => handlePagination("right")}
              >
                <Image
                  source={icons.chevronRight}
                  style={styles.paginationImage}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default JobSearch;
