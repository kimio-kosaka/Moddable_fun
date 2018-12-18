## Moddable SDK install shell script for macOS

1. inst_moddable-sdk_mac : Host tool and ESP32 dev.environment installer
2. inst_moddable-esp_mac : ESP8288 dev.environment installer

#### How to use.
1. Prepare the password file "passwd.sudo" in the same directory as "inst_moddable-sdk_mac"
2. Write the password of sudo command to "passwd.sudo"
3. Write the serial-port setting in "inst_moddable-sdk_mac" script.<br />
 cf. SERIAL_DEV=/dev/cu.SLAB_USBtoUART
4. Execute "inst_moddable-sdk_mac"<br />
5. After install finished rerun Terminal.

#### Setting file for Moddable-SDK environment
1. The installer "inst_moddable-sdk_mac" create environment setting files ~/.moddable_profile  and modify ~/.profile.
2. These files name can be change by variable MODDABLE_PROFILE and EXECUTE_PROFILE in "inst_moddable-sdk_mac" script. Please see the script.
