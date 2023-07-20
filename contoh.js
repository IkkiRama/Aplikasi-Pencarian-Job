// function Home({ navigation }) {
//   const onPressHandler = () => {
//     navigation.navigate("About");
//   };

//   return (
//     <View>
//       <Text>This is Home Bitch</Text>
//       <Pressable
//         onPress={() => onPressHandler()}
//         style={({ pressed }) => ({
//           backgroundColor: pressed ? "#fff" : "#0f0",
//         })}
//       >
//         <Text>Go to About</Text>
//       </Pressable>

//       <Pressable
//         onPress={() => navigation.replace("Profile")}
//         style={({ pressed }) => ({
//           backgroundColor: pressed ? "#fff" : "#0f0",
//         })}
//       >
//         <Text>Go to Profile</Text>
//       </Pressable>
//     </View>
//   );
// }

// function About({ navigation }) {
//   const onPressHandler = () => {
//     navigation.goBack();
//     // navigation.replace("About");
//   };
//   return (
//     <View>
//       <Text>This is About Bitch</Text>
//       <Pressable
//         onPress={() => onPressHandler()}
//         style={({ pressed }) => ({
//           backgroundColor: pressed ? "#fff" : "#0f0",
//         })}
//       >
//         <Text>Go to Home</Text>
//       </Pressable>
//     </View>
//   );
// }

// function Profile({ navigation }) {
//   const onPressHandler = () => {
//     navigation.replace("Home");
//   };
//   return (
//     <View>
//       <Text>Profile Babi</Text>
//       <Pressable
//         onPress={() => onPressHandler()}
//         style={({ pressed }) => ({
//           backgroundColor: pressed ? "#fff" : "#0f0",
//         })}
//       >
//         <Text>Go to Home</Text>
//       </Pressable>
//     </View>
//   );
// }
