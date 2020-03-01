void setup(){
     Serial.begin(9600);
}

void loop(){

int AnalogValue;
AnalogValue = analogRead(A0);

  if (digitalRead(2) == HIGH) {
    Serial.println(false);
    Serial.println(AnalogValue);
    for(int i=0; i < 2; i++){
      
    }
  }
  else {
    Serial.println(true);
    Serial.println(AnalogValue);
  }
  delay(3000);
}
