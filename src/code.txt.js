const code=`
#define AOUT_PIN A0

#define FULL_WET 270 // from measurement of glass of water
#define FULL_DRY 555 // from air and also bone dry soil
#define MOISTURE_RANGE (FULL_DRY - FULL_WET) // range of moisture reading

#define THRESHOLD  30 // We're putting the threshhold here (percent)


void setup(){
  pinMode(4,OUTPUT);
  Serial.begin(9600);
}
 
void loop(){
  int value = analogRead(AOUT_PIN);
  int calibratedValue = (FULL_DRY - value) * 100 / MOISTURE_RANGE;

  if (calibratedValue < 30) {
  //if (value < THRESHOLD) {
    Serial.print("The soil is DRY, please water it now");
    tone(4, 100, 1000);
  }
  if (calibratedValue > 90 ||calibratedValue == 90) {
  //if (value < THRESHOLD) {
    Serial.print("The soil is WET, please stop watering ");
    tone(4, 100, 1000);
  }
  if (calibratedValue < 90 && calibratedValue > 30 ) {
  //if (value < THRESHOLD) {
    Serial.print("The soil is WET");
    tone(4, 100, 1000);
  }
   

  Serial.print(calibratedValue);
  Serial.println("%)");


  delay(1000);
}
`
export default code;