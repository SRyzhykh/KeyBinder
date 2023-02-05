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

const renderItem = ({item}: {item: ListItemProps}) => {
  return <ListItem name={item.name} text={item.text} />;
};

export const ListScreen = ({route}: ScreenProps) => {
  const {lists, data} = route.params;
  const [id, setId] = useState(0);

  const renderListItem = ({item}: {item: ListNameProps}) => {
    const onPress = () => {
      setId(Number(item.id));
      console.log('id: ', id);
    };
    return <ListName id={item.id} name={item.name} onPress={onPress} />;
  };

  console.log('arr:', data[id]);
  return (
    <View style={styles.container}>
      <FlatList style={styles.secondList} renderItem={renderListItem} horizontal data={lists} />
      <FlatList style={styles.mainList} renderItem={renderItem} data={data[id]} />
    </View>
  );
};
