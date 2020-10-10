#!/bin/bash

export PGPASSWORD='node_password'

echo "Configuring dragonstackdb2"

dropdb -U node_user2 dragonstackdb2
createdb -U node_user2 dragonstackdb2

psql -U node_user2 dragonstackdb2 <./bin/sql/account.sql
psql -U node_user2 dragonstackdb2 <./bin/sql/generation.sql
psql -U node_user2 dragonstackdb2 <./bin/sql/dragon.sql
psql -U node_user2 dragonstackdb2 <./bin/sql/trait.sql
psql -U node_user2 dragonstackdb2 <./bin/sql/dragonTrait.sql
psql -U node_user2 dragonstackdb2 <./bin/sql/accountDragon.sql

node ./bin/insertTraits.js


echo "dragonstackdb2 configured"

