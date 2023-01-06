import React from "react";
import { View, SafeAreaView, Text, Button } from 'react-native';
import {legacy_createStore as createStore} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';


const initialState = {
  counter: 0,
};

function  reducers(state, action) {
  switch (action.type) {
    case 'UPDATE_COUNTER': 
      return {... state, counter: state.counter + 1};
    case 'DELETE_COUNTER':
      return {... state, counter: state.counter - 1};

    default:
      return state;
  }
};


export default () => {
  return(
    <Provider store={createStore(reducers, initialState)}>
      <SafeAreaView style={{flex:1}}>
        <First />
        <Second />
      </SafeAreaView>
    </Provider>
  );
};

const First = () => {

  const counter = useSelector(selector => selector.counter);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch({type: 'UPDATE_COUNTER'})
  };
  const handleUpdate2 = () => {
    dispatch({type: 'DELETE_COUNTER'})
  };
  return(
    <View style={{flex: 1, backgroundColor: '#eceff1'}}>
      <Text style={{fontSize:30}}>First: {counter}</Text>
      <Button title="Update" onPress={handleUpdate}/>
      <Button title="Delete" onPress={handleUpdate2}/>
    </View>
  );
};

const Second = () => {

  const counter = useSelector(selector => selector.counter);

  return(
    <View style={{flex: 1,}}>
      <Text style={{fontSize:30}}>Second: {counter}</Text>
    </View>
  );
};