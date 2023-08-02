import { useCallback, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { COLORS, icons, SIZES, SAFEAREAVIEW } from "../constants";
import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../components";
import { JobId } from "./home";
import useFetch from "../hook/useFetch";

const tabs = ["About", "Qualifications", "Responsibilites"];

export default function DetailJob({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const onRefresh = () => {};
  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id: JobId,
    extended_publisher_details: "false",
  });

  const displayTabContent = () => {
    switch (activeTab) {
      case "Qualifications":
        return (
          <Specifics
            title="Qualifications"
            points={data[0].job_highlights?.Qualifications ?? ["N/A"]}
          />
        );
      case "About":
        return (
          <JobAbout
            info={data[0]?.job_description ?? ["Job has no description"]}
          />
        );
      case "Responsibilites":
        return (
          <Specifics
            title="Responsibilites"
            points={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
          />
        );
    }
  };
  return (
    <SafeAreaView style={SAFEAREAVIEW.style}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : data.length === 0 ? (
          <Text>No Data</Text>
        ) : (
          <View style={{ flex: 1, padding: SIZES.medium }}>
            <Company
              companyLogo={data[0].employer_logo}
              jobTitle={data[0].job_title}
              companyName={data[0].employer_name}
              Location={data[0].job_country}
            />
            <JobTabs
              activeTab={activeTab}
              tabs={tabs}
              setActiveTab={setActiveTab}
            />

            {displayTabContent()}
          </View>
        )}
      </ScrollView>

      <JobFooter
        url={
          data[0]?.job_apply_link ?? "https://careers.google.com/jobs/results"
        }
        navigation={navigation}
      />
    </SafeAreaView>
  );
}
