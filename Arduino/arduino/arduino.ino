
//////////////////////////////// ULTRASON //////////////////////////////////////
/* Constantes pour les broches */
const byte TRIGGER_PIN = 9; // Broche TRIGGER
const byte ECHO_PIN = 8;    // Broche ECHO

/* Constantes pour le timeout */
const unsigned long MEASURE_TIMEOUT = 25000UL; // 25ms = ~8m à 340m/s

/* Vitesse du son dans l'air en mm/us */
const float SOUND_SPEED = 340.0 / 1000;
 String obstacle = " ";

///////////////////////////////// Vibration /////////////////////////////////////
const byte vibration_PIN = 4; // Broche TRIGGER

String StatusAlert; // valeur reçu du moniteur 

void setup() {
  ///////////////////////////////// ULTRASON ///////////////////////////////////////

 /* Initialise les broches */
  pinMode(TRIGGER_PIN, OUTPUT);
  digitalWrite(TRIGGER_PIN, LOW); // La broche TRIGGER doit être à LOW au repos
  pinMode(ECHO_PIN, INPUT);
;

///////////////////////////////// Vibration /////////////////////////////////////
 pinMode(vibration_PIN, OUTPUT);

}

void loop() {
   // Init RS232
  Serial.begin(9600);
  /////////////////////////////// Alert /////////////////////////////////

 
   
   if (Serial.available() > 0) { // if there is data comming
      StatusAlert = Serial.readStringUntil('\n'); // read string until newline character

if(StatusAlert == '1'){
  digitalWrite(vibration_PIN, HIGH);
        delay(1000);
        digitalWrite(vibration_PIN, LOW);
 }
 }
   //////////////////////////////// ULTRASON ///////////////////////////////////////
  
 /* 1. Lance une mesure de distance en envoyant une impulsion HIGH de 10µs sur la broche TRIGGER */
  digitalWrite(TRIGGER_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIGGER_PIN, LOW);
  
  /* 2. Mesure le temps entre l'envoi de l'impulsion ultrasonique et son écho (si il existe) */
  long measure = pulseIn(ECHO_PIN, HIGH, MEASURE_TIMEOUT);
   
  /* 3. Calcul la distance à partir du temps mesuré */
  float distance_mm = measure / 2.0 * SOUND_SPEED;
Serial.print(distance_mm);
   if(distance_mm < 400){
  /* Affiche les résultats en mm, cm et m */
        obstacle = "obstacle";
        Serial.print(obstacle);
        Serial.println("/");
        digitalWrite(vibration_PIN, HIGH); 
        delay(500);
        digitalWrite(vibration_PIN, LOW);
        delay(1000);
        obstacle = " ";
        
   }else if(distance_mm > 400){
      /* Affiche les résultats en mm, cm et m */
        obstacle = "nonObstacle";
        Serial.print(obstacle);
        Serial.println("/");
       digitalWrite(vibration_PIN, LOW);
        obstacle = " ";
         
   }
   

}
