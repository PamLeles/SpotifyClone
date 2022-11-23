import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import img from './assets/backgroundImage/img.jpg';

export default function App(){
  return(
    <View>
      <Image
        source={img}
        style={{
          width:'100%',
          height:'100%',         
          resizeMode: "cover",
          backgroundColor: 'transparent',
        
        }}
      />

      <View>

      {/* texto de apresentação*/ }
      <View 
        style={{
          borderWidth:1,
          alignItems:'center'
        }}
      >
      <Text
        style={{
          color:'white'
        }}
      >
        Milhões de músicas á sua escolha.
      </Text>
      <Text
        style={{
          color:'white'
        }}
      >
        Grátis no Spotify.
      </Text>
      </View>

      {/* links para se inscrever */}

      <View
        style={{
          alignItems: 'center',
          justifyContent:'space-around',
          borderWidth:1,
          flex:0.5
        }}
      >

      <TouchableOpacity
        style={{
          backgroundColor:'green',
          width:200,
          height:50,
          borderRadius:25,
          alignItems:'center',
          justifyContent:'center'
        }}
      >
        <Text
          style={{
            color:'white',
            textAlign:'center'
          }}
        > Inscreva-se grátis</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor:'black',
          width:300,
          height:50,
          borderRadius:25,
          alignItems:'center',
          justifyContent:'center',
          borderWidth:1,
          borderColor:'white'
        }}
      >
        <Text
          style={{
            color:'white',
            textAlign:'center'
          }}
        > Continuar com um número de telefone</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor:'black',
          width:300,
          height:50,
          borderRadius:25,
          alignItems:'center',
          justifyContent:'center',
          borderWidth:1,
          borderColor:'white'
        }}
      >
        <Text
          style={{
            color:'white',
            textAlign:'center'
          }}
        > Continuar com o Google </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor:'black',
          width:300,
          height:50,
          borderRadius:25,
          alignItems:'center',
          justifyContent:'center',
          borderWidth:1,
          borderColor:'white'
        }}
      >
        <Text
          style={{
            color:'white',
            textAlign:'center'
          }}
        > Continuar com o Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor:'black',
          width:200,
          height:50,
          borderRadius:25,
          alignItems:'center',
          justifyContent:'center'
        }}
      >
        <Text
          style={{
            color:'white',
            textAlign:'center'
          }}
        > Entrar</Text>
      </TouchableOpacity>
      </View>
      </View>


    </View>
  )
}
