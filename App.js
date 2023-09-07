import React, { useState } from "react";
import { View, Button } from "react-native";
import axios from 'axios';

function App() {
  const [responseData, setResponseData] = useState({ headerData: "", bodyData: "" });

  const postData = async () => {
    try {
      const response = await axios.post('https://chimpu.xyz/api/post.php', {
        phonenumber: '9876543210', // phone number
      });
      const { headers, data } = response
      setResponseData({ headerData: headers, bodyData: data });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "antiquewhite" }}>
      {responseData && (<View style={{ alignItems: "center" }} >
        <h1 style={{ marginBottom: "10px" }} >{responseData.bodyData.msg}</h1>
        <h1>Data received in headers</h1>
        <h4 style={{ marginBottom: "10px" }} >{responseData.headerData}</h4>
      </View>)}
      <Button title="Post Data" onPress={postData} />
    </View>
  );
}

export default App;
