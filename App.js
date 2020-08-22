import React, { useEffect } from 'react';
import { StyleSheet, Text, Button, SafeAreaView, View } from 'react-native';
import { AdMobBanner, AdMobInterstitial } from 'expo-ads-admob';


export default function App() {

  useEffect(() => {
    async function loadAd() {
      await AdMobInterstitial.setAdUnitID('ca-app-pub-9424273731099957/6923260222');
      interstitalAd();
    }

    loadAd();

  }, []);

  async function interstitalAd() {
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    await AdMobInterstitial.showAdAsync();
  }


  return (
    <SafeAreaView style={styles.container}>

      <Text style={{ fontSize: 30, color: 'white', marginTop: 30 }}>Using Ads</Text>


      
        <Button title="Mostra Anúncio"
          style={styles.button}
          onPress={interstitalAd}
        />

      <AdMobBanner
        bannerSize="smartBannerPortrait"
        adUnitID="ca-app-pub-9424273731099957/9548335826"
        setTestDeviceIDAsync
        servePersonalizedAds
        onDidFailToReceiveAdWithError={(err) => console.log(err)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',

    alignItems: 'center',
    justifyContent: 'space-between',
  },

  button: {
    borderStyle: "solid",
    borderColor: 'white',
    borderWidth: 1,
  }
});
