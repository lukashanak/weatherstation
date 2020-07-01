import serial
import sys
ser = serial.Serial('/dev/ttyACM0', 9600)
while 1: 
    if(ser.in_waiting >0):
        line = int(ser.readline())
        if line < 2:
            print(line)
            #if line == 1:
                #print("Ano")
            #else:
                #print("Ne")
            sys.exit()
