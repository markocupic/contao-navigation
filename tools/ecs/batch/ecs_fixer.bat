:: Run easy-coding-standard (ecs) via this batch file inside your IDE e.g. PhpStorm (Windows only)
:: Install inside PhpStorm the  "Batch Script Support" plugin
cd..
cd..
cd..
cd..
cd..
cd..
php vendor\bin\ecs check vendor/markocupic/contao-navigation/src --fix --config vendor/markocupic/contao-navigation/tools/ecs/config.php
php vendor\bin\ecs check vendor/markocupic/contao-navigation/contao --fix --config vendor/markocupic/contao-navigation/tools/ecs/config.php
php vendor\bin\ecs check vendor/markocupic/contao-navigation/config --fix --config vendor/markocupic/contao-navigation/tools/ecs/config.php
php vendor\bin\ecs check vendor/markocupic/contao-navigation/templates --fix --config vendor/markocupic/contao-navigation/tools/ecs/config.php
php vendor\bin\ecs check vendor/markocupic/contao-navigation/tests --fix --config vendor/markocupic/contao-navigation/tools/ecs/config.php
