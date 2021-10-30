@echo off

cmd /k docker compose -f ../docker-compose.yml -p adminlte up -d --renew-anon-volumes


exit