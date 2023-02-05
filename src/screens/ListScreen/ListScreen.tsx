import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {ListName} from './components/';
import {ScreenProps} from '../../navigation/MainNavigator/MainStackNavigator';
import {styles} from './ListScreen.styles';
import {ListItem} from './components/';

type ListItemProps = {
  name: string;
  text: string;
};

type ListNameProps = {
  name: string;
  id: string;
};

export const ListScreen = ({route}: ScreenProps) => {
  const {lists, data, ip} = route.params;
  const [id, setId] = useState(0);

  const renderListNameItem = ({item}: {item: ListNameProps}) => {
    const onPress = () => {
      setId(Number(item.id));
      console.log('id: ', id);
    };
    return <ListName id={item.id} name={item.name} onPress={onPress} />;
  };

  const renderListItem = ({item}: {item: ListItemProps}) => {
    return <ListItem ip={ip} name={item.name} text={item.text} />;
  };

  console.log('arr:', data[id]);
  return (
    <View style={styles.container}>
      <FlatList style={styles.secondList} renderItem={renderListNameItem} horizontal data={lists} />
      <FlatList style={styles.mainList} renderItem={renderListItem} data={data[id]} />
    </View>
  );
};
