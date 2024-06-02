import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {launchCamera, CameraOptions} from 'react-native-image-picker';

const OpenCamera = () => {
  const [imgUrl, setImgUrl] = useState<string>(
    'https://www.google.com/search?q=imagede+rocher&oq=imagede+rocher&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQABgNGIAEMgkIAhAAGA0YgAQyCQgDEAAYDRiABDIICAQQABgWGB4yCAgFEAAYFhgeMggIBhAAGBYYHjIICAcQABgWGB4yCAgIEAAYFhgeMggICRAAGBYYHtIBCDQxNjRqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#imgrc=yxh3Pe1hef0puM&imgdii=k4iIVcnneHqrQM',
  );

  const openCameraLib = async () => {
    try {
      const options: CameraOptions = {
        mediaType: 'photo',
        quality: 1,
        saveToPhotos: true,
      };
      const result = await launchCamera(options);
      if (!result.didCancel && !result.errorCode && result.assets) {
        setImgUrl(result.assets[0].uri as string);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        // style={styles.img}
        source={{
          uri: imgUrl,
        }}
      />
      <TouchableOpacity style={styles.btnCam} onPress={openCameraLib}>
        <Text style={styles.textBtn}>Cliquez pour lancez</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OpenCamera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  // img: {
  //   width: '100%',
  //   height: 300,
  //   alignSelf: 'center',
  //   borderRadius: 0,
  // },
  btnCam: {
    width: 250,
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  textBtn: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});