#!make
include .env
export $(shell sed 's/=.*//' .env)

RED=\033[0;31m        	#  ${RED}
GREEN=\033[0;32m      	#  ${GREEN}
BOLD=\033[1;m			#  ${BOLD}
WARNING=\033[37;1;41m	#  ${WARNING}
END_COLOR=\033[0m		#  ${END_COLOR}

deploy: install-api-modules build up schema-migrate
clone-dependencies: clone-api

install-api-modules:
	@echo "\n${BOLD} Installing npm modules ... ${END_COLOR}"
	@docker run -v `pwd`/api:/var/www/api/ -w /var/www/api/ node:14.15-stretch npm i

rebuild:
	@echo "\n${BOLD} Rebuilding containers... ${END_COLOR}"
	@docker-compose build --no-cache

build:
	@echo "\n${BOLD} Building containers... ${END_COLOR}"
ifeq (${ENVIRONMENT}, production)
	docker-compose build
else
	docker-compose -f docker-compose-dev.yml build
endif

up:
	@echo "\n${BOLD} Spinning up containers for ${ENVIRONMENT} environment... ${END_COLOR}"
ifeq (${ENVIRONMENT}, production)
	docker-compose -p ${COMPOSE_PROJECT_NAME} up -d
else
	docker-compose -p ${COMPOSE_PROJECT_NAME} -f ./docker-compose-dev.yml up -d
	@$(MAKE) --no-print-directory status
endif

down:
	@echo "\n${BOLD} Halting containers... ${END_COLOR}"
ifeq (${ENVIRONMENT}, production)
	docker-compose down
else
	docker-compose -f ./docker-compose-dev.yml down
endif
	@$(MAKE) --no-print-directory status

restart:
	@echo "\n${BOLD} Restarting containers... ${END_COLOR}"
	@docker-compose stop
	@$(MAKE) up
	@$(MAKE) --no-print-directory status

status:
	@echo "\n${BOLD} Containers statuses ${END_COLOR}"
ifeq (${ENVIRONMENT}, production)
	docker-compose ps
else
	docker-compose -f ./docker-compose-dev.yml ps
endif

clone-api:
	@echo "\n${BOLD}Cloning api repository (${API_BRANCH_NAME} branch) ${END_COLOR}"
	@bash -c "set -evx; if [ -d ./api ]; then cd ./api && git pull origin ${API_BRANCH_NAME}; else git clone -b ${API_BRANCH_NAME} ${API_GIT_URL} ./api; fi"

nginx-reload:
	@docker-compose exec -u root nginx bash -c "service nginx reload"

schema-migrate:
	@docker-compose exec api bash -c "npm run typeorm migration:run"

generate-ssl:
	@echo "Generating SSL certificate"
	@bash ./sh-generate-ssl.sh

nginx-config:
	@bash ./sh-config-nginx.sh

console-api:
	@docker-compose exec api bash

console-nginx:
	@docker-compose exec nginx bash

console-db:
	@docker-compose exec db bash

logs-api:
	@docker-compose logs --tail=100 -f api

logs-nginx:
	@docker-compose logs --tail=100 -f nginx

logs-db:
	@docker-compose logs --tail=100 -f db