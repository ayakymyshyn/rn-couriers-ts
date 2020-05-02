import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Picker,
} from 'react-native';
// libs
// styles and components
import {OrderRedirectLink} from '../components/OrderRedirectLink';
import {CustomDropdown} from '../components/CustomDropdown';
import {TextRow, TextRowHighlighted} from '../components/TextRow';
import {Wrapper, OrderDetailsText} from '../styles/OrderDetailsStyles';
// assets
import backArrowImg from '../assets/images/arrow-back.png';
import arrow from '../assets/images/arrow.png';

export const OrderDetails = ({navigation, route}) => {
  let data = [
    {
      value: 'Активен',
    },
    {
      value: 'Завершен',
    },
  ];

  const {
    number,
    deliveryInfo,
    deliveryAddress,
    productsCost,
    change,
    totalCost,
    notes,
    paymentMethod,
    products,
  } = route.params;

  const [selectedValue, setSelectedValue] = React.useState('Активен');
  return (
    <SafeAreaView>
      <ScrollView>
        <Wrapper>
          <OrderRedirectLink
            redirectTo="Home"
            leftImgSource={backArrowImg}
            leftImgStyles={styles.arrow}
            text={`Заказ №${number}`}
            navigation={navigation}>
            <Text style={styles.link}>Заказ №{number}</Text>
          </OrderRedirectLink>
          <Picker
            mode="dropdown"
            selectedValue={selectedValue}
            style={{height: 50, width: 150}}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="Активен" value="active" />
            <Picker.Item label="Завершен" value="done" />
          </Picker>
          <View style={{marginTop: 10, marginBottom: 30}}>
            <OrderDetailsText marginBottom={10}>
              Адресс доставки:{' '}
            </OrderDetailsText>
            <OrderDetailsText>{deliveryAddress}</OrderDetailsText>
          </View>
          <TextRow
            leftSideHeading="Номер телефона:"
            leftSideData="+380 123 456 789"
            rightSideHeading="Имя:"
            rightSideData="Пётр"
            width="75%"
            bottomSpacing={20}
          />
          <TextRowHighlighted
            width="80%"
            leftSideHeading="Сумма заказа:"
            leftSideData={productsCost}
            additionalLeftText="+доставка 40 грн"
            rightSideHeading="Сдача с:"
            rightSideData={change}
            bottomSpacing={20}
          />
          <TextRowHighlighted
            leftSideHeading="Итого:"
            leftSideData={totalCost}
            rightSideHeading="Способ оплаты"
            rightSideData={paymentMethod}
            bottomSpacing={20}
            width="92%"
          />
          <OrderRedirectLink
            redirectTo="ProductsList"
            rightImgSource={arrow}
            rightImgStyles={styles.image}
            text="Список товаров"
            data={products}
            navigation={navigation}
            containerStyle={{...styles.highlighted, width: '65%'}}>
            <Text style={styles.productsLink}>Список товаров</Text>
          </OrderRedirectLink>
          <OrderDetailsText marginBottom={10}>
            Время доставки:{' '}
            <OrderDetailsText
              style={{fontSize: 24, color: '#000'}}
              marginBottom={10}>
              {"19:40"}
            </OrderDetailsText>
          </OrderDetailsText>
          <OrderDetailsText>Сообщение клиента: </OrderDetailsText>
          <View
            style={{
              ...styles.highlighted,
              paddingBottom: 100,
              marginRight: 20,
            }}>
            <OrderDetailsText>{notes}</OrderDetailsText>
          </View>
        </Wrapper>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  link: {
    fontSize: 27,
    color: '#000',
    fontFamily: 'Roboto-Medium',
  },
  arrow: {
    marginRight: 20,
    height: 25,
    width: 25,
  },
  highlighted: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    width: 15,
    height: 15,
    marginLeft: 55,
  },
  picker: {
    borderRadius: 15,
    backgroundColor: '#fff',
    width: '65%',
    marginLeft: 18,
    marginTop: 27,
  },
  productsLink: {
    fontFamily: 'Roboto-Medium',
  },
});
