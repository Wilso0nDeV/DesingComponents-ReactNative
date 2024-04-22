import {View, Text, SafeAreaView} from 'react-native';
import {BoxObjectModelScreen, DimensionsScreen, FlexBoxScreen, PositionAbsoluteScreen, PositionRelativeScreen,FlexDirectionScreen, HomeWorkScreem} from './src/presentation';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
     {/* <BoxObjectModelScreen /> */}
     {/* <DimensionsScreen /> */}
     {/* <PositionRelativeScreen /> */}
     {/* <PositionAbsoluteScreen /> */}
     {/* {<FlexBoxScreen />} */}
     {/* <FlexDirectionScreen /> */}
     <HomeWorkScreem />
    </SafeAreaView>
  );
};
