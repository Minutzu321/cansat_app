
## Setup

Asigurati-va ca aveti yarn instalat

Dupa ce e instalat, rulati comanda de mai jos in folderul cu proiectul:

```bash
yarn dev
```

Raspberry pi zero-ul va trebui sa faca requesturi la http://ADRESA_DEVICE:3000/register/NUME_SENZOR/VALOARE_SENZOR

Va trebui sa puneti ip-ul local al serverului in codul de mai jos pe raspberry:
(pe hotspot se poate vedea foarte usor ip-ul device-urilor conectate)

```
#include <WiFi.h>
#include <HTTPClient.h>

const char* ssid = "NUME_RETEA_WIFI";
const char* password = "PAROLA_RETEA_WIFI";


String serverName = "http://ADRESA_DEVICE_MAI_SUS:3000/register/NUME_SENZOR/VALOARE_SENZOR";

unsigned long lastTime = 0;
unsigned long timerDelay = 1000;

void setup() {
  Serial.begin(115200); 

  WiFi.begin(ssid, password);
  Serial.println("Connecting");
  while(WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected to WiFi network with IP Address: ");
  Serial.println(WiFi.localIP());
 
  Serial.println("Timer set to 1 second (timerDelay variable), it will take 5 seconds before publishing the first reading.");
}

void loop() {
  //Send an HTTP POST request every 10 minutes
  if ((millis() - lastTime) > timerDelay) {
    //Check WiFi connection status
    if(WiFi.status()== WL_CONNECTED){
      HTTPClient http;

      String serverPath = serverName;
      
      // Your Domain name with URL path or IP address with path
      http.begin(serverPath.c_str());
      
      // Send HTTP GET request
      int httpResponseCode = http.GET();
      
      if (httpResponseCode>0) {
        Serial.print("HTTP Response code: ");
        Serial.println(httpResponseCode);
        String payload = http.getString();
        Serial.println(payload);
      }
      else {
        Serial.print("Error code: ");
        Serial.println(httpResponseCode);
      }
      // Free resources
      http.end();
    }
    else {
      Serial.println("WiFi Disconnected");
    }
    lastTime = millis();
  }
}
```

