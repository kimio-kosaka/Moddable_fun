## Moddable SDK install shell script for Linux

* inst_moddable-sdk_lin : Host tool and ESP32 dev.environment installer
* inst_moddable-esp_lin : ESP8288 dev.environment installer

#### How to use.
1. Prepare the password file "passwd.sudo" in the same directory as "inst_moddable-sdk_lin" file
2. Write the password of sudo command into "passwd.sudo" file
3. Write the serial-port setting into "inst_moddable-sdk_mac" script<br />
 cf. SERIAL_DEV=/dev/ttyUSB0
4. Execute "inst_moddable-sdk_lin"<br />
5. After install finished rerun "Terminal"

#### Setting file for Moddable-SDK environment
1. The installer "inst_moddable-sdk_lin" create environment setting files ~/.moddable_profile  and modify ~/.profile
2. These files name can be change by variable MODDABLE_PROFILE and EXECUTE_PROFILE in "inst_moddable-sdk_lin" script
