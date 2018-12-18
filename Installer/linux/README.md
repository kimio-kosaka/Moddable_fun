## Moddable SDK install shell script for Linux

1. inst_moddable-sdk_lin : Host tool and ESP32 dev.environment installer
2. inst_moddable-esp_lin : ESP8288 dev.environment installer

#### How to use.
1. Prepare the password file "passwd.sudo" in the same directory as "inst_moddable-sdk_lin"
2. Write the password of sudo command to "passwd.sudo"
3. Write the serial-port setting in "inst_moddable-sdk_mac" script.<br />
 cf. SERIAL_DEV=/dev/ttyUSB0
4. Execute "inst_moddable-sdk_lin"<br />
5. After install finished rerun Terminal.

#### Setting file for Moddable-SDK environment
1. The installer "inst_moddable-sdk_lin" create environment setting files ~/.moddable_profile  and modify ~/.profile.
2. These files name can be change by variable MODDABLE_PROFILE and EXECUTE_PROFILE in "inst_moddable-sdk_lin" script. Please see the script.
