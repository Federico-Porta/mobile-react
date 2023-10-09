import { Profile, LocationScreen } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const ProfileStack = createNativeStackNavigator()

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="Location" component={LocationScreen} />
    </ProfileStack.Navigator>
  )
}

export default ProfileNavigator
