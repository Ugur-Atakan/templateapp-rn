// import messaging from '@react-native-firebase/messaging';
// import notifee, {AndroidImportance} from '@notifee/react-native';

// export const notifeeBackgroundHandler = () => {
//   return notifee.onBackgroundEvent(message => {
//     console.log('meesage background', message);
//   });
// };

// export const displayNotification = async ({title, message}) => {
//   await notifee.createChannel({
//     id: 'default',
//     name: 'Default Channel',
//     importance: AndroidImportance.HIGH,
//     sound: 'default',
//   });

//   await notifee.displayNotification({
//     title: title,
//     body: message,
//     android: {
//       channelId: 'default',
//       pressAction: {
//         id: 'default',
//       },
//     },
//     ios: {
//       sound: 'default',
//     },
//   });
// };

// export const NotifeeRequestPermission = () => {
//   try {
//     return notifee.requestPermission();
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const requestFirebasePermission = async () => {
//   const authStatus = await messaging().requestPermission();
//   const enabled =
//     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//   if (enabled) {
//     console.log('Firebase Authorization status:', authStatus);
//   }
// };

// export const getFcmId = async () => {
//   try {
//     await messaging().registerDeviceForRemoteMessages();
//     const token = await messaging().getToken();
//     return token;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const cancelAllNotifications = async () => {
//   await notifee.cancelAllNotifications();
// };

// export const onTokenRefreshListener = () => {
//   messaging().onTokenRefresh(token => {
//     console.log('A new FCM token refreshed with token:', token);
//   });
// };
