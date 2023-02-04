import React, {FC, useState} from 'react';
import {FlatList, View} from 'react-native';
import {ListName} from './components/';
import {RouteProp} from '@react-navigation/native';

interface Props {
  route: RouteProp<{params: {data: ItemProps[]}}>;
}

interface ItemProps {
  name: string;
}

export const ListScreen: FC<Props> = ({route}) => {
  const {data} = route.params;
  const [listData, setListData] = useState(data);

  const renderItem = ({item}: {item: ItemProps}) => {
    const onPress = () => {
      console.log('Pressed: ', item.name);
    };

    return <ListName name={item.name} onPress={onPress} />;
  };
  return (
    <View style={{flex: 1}}>
      <FlatList renderItem={renderItem} horizontal data={listData} />
    </View>
  );
};
