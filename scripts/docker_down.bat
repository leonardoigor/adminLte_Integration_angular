@echo off

 
cmd /k docker compose -f ../docker-compose.yml -p adminlte down --volumes --rmi all

exit