import React from 'react';
import { StyleSheet,View,Text,ScrollView } from 'react-native';
import { Appbar,Card, Button,Title,Paragraph  } from 'react-native-paper';

function Products() {
    return (
         <ScrollView>
               {/* AppBar Starts */}
                <Appbar.Header style = {styles.background} >
                 <Appbar.Content title="Products"  />
                 </Appbar.Header>
              
               {/* AppBar ends */}

                {/* card Starts */}
                <Card style = {styles.card}>
                 <Card.Cover style= {{borderRadius: 5}} source={require('../assets/homeauto.png') }  />
                 <Card.Content>
                 <Title>Home Automation <span>20$</span></Title>
                 
                 </Card.Content>
                 <Card.Actions>
                 <Button mode="contained"  style = {styles.btn}>Add To Cart</Button>  
                 </Card.Actions>
                </Card>
                
                {/* card2 Starts */}
                <Card style = {styles.card}>
                 <Card.Cover style= {{borderRadius: 5}} source={require('../assets/key.png') } />
                 <Card.Content>
                 <Title>Key Finder <span>2$</span></Title>
                 
                 </Card.Content>
                 <Card.Actions>
                 <Button mode="contained"  style = {styles.btn}>Add To Cart</Button>  
                 </Card.Actions>
                </Card>
 
               {/* card3 Starts */}
                <Card style = {styles.card}>
                 <Card.Cover style= {{borderRadius: 5}} source={require('../assets/inverter.png') } />
                 <Card.Content>
                 <Title>Inverters <span>5$</span></Title>
                 
                 </Card.Content>
                 <Card.Actions>
                 <Button mode="contained"  style = {styles.btn}>Add To Cart</Button>  
                 </Card.Actions>
                </Card>

               {/* card4 Starts */}
                <Card style = {styles.card}>
                 <Card.Cover style= {{borderRadius: 5}} source={require('../assets/camera.png') } />
                 <Card.Content>
                 <Title>Survullence camera <span>10$</span></Title>
                 
                 </Card.Content>
                 <Card.Actions>
                 <Button mode="contained"  style = {styles.btn}>Add To Cart</Button>  
                 </Card.Actions>
                </Card>

               {/* card5 Starts */}
                <Card style = {styles.card}>
                 <Card.Cover style= {{borderRadius: 1}} source={require('../assets/bluetooth.png') } />
                 <Card.Content>
                 <Title>Bluetooth Gadgets <span>2$</span></Title>
                 
                 </Card.Content>
                 <Card.Actions>
                 <Button mode="contained"  style = {styles.btn}>Add To Cart</Button>  
                 </Card.Actions>
                </Card>
                
         </ScrollView>
    );
}

const styles = StyleSheet.create({
     background: {
          backgroundColor: '#242945',
         
     },
     card: {
          margin:25
     },
     btn: {
          backgroundColor: '#242945',
      
     }
}

);

export default Products;