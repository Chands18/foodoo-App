import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Gap} from '../../atoms';

const SearchBar = ({
  onPressDelete,
  onPressSearch,
  placeholder,
  value,
  onChangeText,
  type,
}) => {
  const [onFocus, setOnFocus] = useState(false);
  const handleOnBlur = () => {
    setOnFocus(false);
  };

  const navigation = useNavigation();

  if (type === 'clickOnly') {
    return (
      <>
        <Gap height={13} />
        <TouchableOpacity onPress={() => navigation.navigate('SearchPage')}>
          <View style={styles.btnSearch}>
            <Text>Search Here</Text>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={onFocus ? onPressDelete : onPressSearch}>
              <Icon
                name={onFocus ? navigation.navigate('SearchPage') : 'search'}
                size={30}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </>
    );
  } else {
    return (
      <View style={styles.search}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={onFocus ? onPressDelete : onPressSearch}>
          <Icon
            name={onFocus ? navigation.navigate('SearchPage') : 'search'}
            size={30}
          />
        </TouchableOpacity>
        <TextInput
          value={value}
          placeholder={placeholder}
          style={styles.text}
          onBlur={handleOnBlur}
          onChangeText={onChangeText}
        />
      </View>
    );
  }
};

export default SearchBar;

const styles = StyleSheet.create({
  search: {
    borderWidth: 0.8,
    borderColor: 'grey',
    borderRadius: 15,
    height: 40,
    paddingHorizontal: 10,
    marginHorizontal: 13,
    backgroundColor: 'white',
    flexDirection: 'row-reverse',
  },
  text: {
    flex: 1,
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSearch: {
    flexDirection: 'row',
    borderWidth: 0.8,
    borderColor: 'grey',
    borderRadius: 15,
    height: 40,
    paddingHorizontal: 10,
    marginHorizontal: 13,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
