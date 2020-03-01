void setup(){
     Serial.begin(9600);
}

void loop(){

unsigned int AnalogValue;
AnalogValue = analogRead(A0);
Serial.println(AnalogValue);
  
  if (digitalRead(2) == HIGH) {
    Serial.println("Neprsi");
  }
  else {
    Serial.println("Prsi");
  }

  delay(3000);
}
