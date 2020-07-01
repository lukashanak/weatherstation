import libraries/bme280
 
(chip_id, chip_version) = bme280.readBME280ID()
temperature,pressure,humidity = bme280.readBME280All()

print temperature
